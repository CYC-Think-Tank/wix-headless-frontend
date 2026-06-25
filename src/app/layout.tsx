import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RegistrationProvider } from "@/components/RegistrationContext";
import { wixClient } from "@/lib/wixClient";

export const revalidate = 60;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thecyc.org"),
  title: "Canadian Youth Champions | CYC",
  description: "Empowering youth through community service, innovation, and leadership.",
  icons: {
    icon: "/logo copy.png",
  },
  openGraph: {
    title: "Canadian Youth Champions | CYC",
    description: "Empowering youth through community service, innovation, and leadership.",
    url: "https://www.thecyc.org",
    siteName: "Canadian Youth Champions",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/logo.png",
        width: 430,
        height: 240,
        alt: "Canadian Youth Champions (CYC) logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Canadian Youth Champions | CYC",
    description: "Empowering youth through community service, innovation, and leadership.",
    images: ["/logo.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let registrationOpen = true;
  let registrationClosedDate = null;

  try {
    const { items } = await wixClient.items.query("SiteSettings").find();
    if (items && items.length > 0) {
      const settings = items[0];
      registrationOpen = settings.registrationOpen !== false;
      registrationClosedDate = settings.registrationClosedDate || null;
    }
  } catch (error) {
    console.error("Failed to fetch SiteSettings from Wix:", error);
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RegistrationProvider settings={{ registrationOpen, registrationClosedDate }}>
          {children}
        </RegistrationProvider>
      </body>
    </html>
  );
}
