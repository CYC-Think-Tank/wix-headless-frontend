import { wixClient } from "@/lib/wixClient";
import AwardsClient from "./AwardsClient";
import { fallbackAwardsData } from "./fallbackData";

export const revalidate = 60; // Revalidate every 60 seconds

// Helper to parse proprietary Wix image URIs into standard URLs
function parseWixImage(wixImageStr: string) {
  if (!wixImageStr || typeof wixImageStr !== "string") return wixImageStr;
  if (!wixImageStr.startsWith("wix:image://v1/")) return wixImageStr;
  
  const parts = wixImageStr.split('/');
  if (parts.length >= 4) {
    const uri = parts[3];
    return `https://static.wixstatic.com/media/${uri}`;
  }
  return wixImageStr;
}

export default async function AwardsPage() {
  let structuredData: Record<string, any[]> = {};
  
  // Safely clone the fallback data so we don't mutate it across requests
  for (const year in fallbackAwardsData) {
    structuredData[year] = [...fallbackAwardsData[year]];
  }
  
  try {
    // 1. Fetch Categories
    const categoriesRes = await wixClient.items.query("AwardCategories").find();
    
    if (categoriesRes && categoriesRes.items && categoriesRes.items.length > 0) {
      // 2. Fetch People
      let peopleRes: any = { items: [] };
      try {
        peopleRes = await wixClient.items.query("AwardPeople").find();
      } catch (e) {
        console.warn("Could not fetch AwardPeople, maybe collection doesn't exist yet.");
      }

      const categories = categoriesRes.items;
      const people = peopleRes.items || [];

      // 3. Group and structure
      categories.forEach(cat => {
        const year = cat.year || "Unknown Year";
        if (!structuredData[year]) {
          structuredData[year] = [];
        }

        const presenters = people
          .filter((p: any) => p.category === cat.title && p.year === year && p.role === "Presenter")
          .map((p: any) => ({ ...p, image: parseWixImage(p.image) }));
          
        const winners = people
          .filter((p: any) => p.category === cat.title && p.year === year && p.role === "Winner")
          .map((p: any) => ({ ...p, image: parseWixImage(p.image) }));

        structuredData[year].push({
          id: cat._id,
          title: cat.title,
          desc: cat.description,
          iconName: cat.iconName || "Trophy",
          theme: cat.theme || "teal",
          presenters: presenters.length > 0 ? presenters : undefined,
          winners: winners.length > 0 ? winners : undefined
        });
      });
    }
  } catch (error) {
    console.error("Failed to fetch Awards data from Wix.", error);
  }

  return <AwardsClient initialData={structuredData} />;
}
