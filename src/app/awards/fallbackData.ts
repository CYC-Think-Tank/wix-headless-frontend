import { Trophy, Globe, Heart, Users, Shield, Star } from "lucide-react";

export const fallbackAwardsData: Record<string, any[]> = {
  "2025": [
  {
    id: "canadian",
    title: "Canadian Champions Award",
    icon: Globe,
    color: "text-red-600",
    bgColor: "bg-red-50",
    border: "border-red-100",
    desc: "In its 5th year, Canadian Youth Champions (CYC) started the first Canadian Champions Award. This award is for great Canadians who help our communities in important ways. CYC is a group for all Canadians, but it was started by Chinese Canadian leaders. These leaders came together to help and guide young people in Canada. Today, this award honors these great people. Their hard work and leadership help and inspire young people across the country. Also, this award honors a very important helper of CYC, the late Honourable John McCallum (1950–2025) whose legacy continues to guide and inspire us.",
    presenters: [
      {
        name: "Minister Tim Hodgson",
        title: "Minister of Energy and Natural Resources of Canada",
        image: "/timhodgson2.jpg",
        desc: "The Honourable Tim Hodgson is the Minister of Energy and Natural Resources and MP for Markham-Thornhill. He is the former Chair of Hydro One and former CEO of Goldman Sachs Canada, bringing decades of leadership across the public and private sectors."
      },
      {
        name: "Mayor Frank Scarpitti",
        title: "Mayor of Markham, Ontario",
        image: "/frankscarpitti.jpeg",
        desc: "His Worship Frank Scarpitti has served as the Mayor of Markham since 2006, making him the city's longest-serving mayor. He is deeply committed to charitable work, having co-chaired the Markham Stouffville Hospital campaign which raised over $50 million."
      }
    ],
    winners: [
      {
        name: "Tim Kwan",
        title: "Chairman of Mon Sheong Foundation",
        image: "/timkwan.jpg",
        desc: "Mr. Tim Kwan, Chairman of the Mon Sheong Foundation, is a successful STEM entrepreneur and mentor to CYC since its inception. Recipient of the Senate of Canada Sesquicentennial Medal, he receives the Lifelong Contribution Award for his outstanding dedication to both business and community."
      },
      {
        name: "Master Shan 單柏欽",
        title: "Renowned Artist",
        image: "/mastershan.jpg",
        desc: "Master Shan Bai Qin is a highly respected Lingnan School artist in Toronto, known for his excellence in freehand and meticulous brushwork. With works exhibited worldwide, his art beautifully reflects cultural heritage and the harmony of Eastern and Western traditions."
      },
      {
        name: "Tony Chang",
        title: "Global Executive & Community Leader",
        image: "/tonychang.jpg",
        desc: "Tony Chang is a global executive and CPA with extensive leadership experience across North America and Asia, holding senior roles at Tim Hortons and Shoppers Drug Mart. Passionate about healthcare, he has chaired the Yee Hong Board since 2021."
      },
      {
        name: "Stephen Siu",
        title: "President of the Yee Hong Community Wellness Foundation",
        image: "/stephensiu.png",
        desc: "Stephen Siu is President of the Yee Hong Community Wellness Foundation, leading major fundraising efforts to enhance seniors' lives in the GTA. With a strong background in public relations, he is dedicated to promoting quality care and cultural engagement."
      },
      {
        name: "Alan Lam",
        title: "Chairman of Greenvilla Homes",
        image: "/alanlamreplace.jpg",
        desc: "Alan Lam is an engineer and Chairman of Greenvilla Homes, specializing in GTA land development. A dedicated community leader, he has served on the Board of the Chinese Cultural Centre of Greater Toronto since 2000 and is a two-time June Callwood Volunteerism Award recipient."
      },
      {
        name: "Henry Lee",
        title: "Honorary Consul of Malaysia in Toronto",
        image: "/henrylee1.jpg",
        desc: "Henry Leong Bee Lee has served as Honorary Consul of Malaysia in Toronto since 2019. With an extensive background in banking and public service, he actively promotes cultural diplomacy, hospital philanthropy, and international cooperation."
      },
      {
        name: "Stephen Chan",
        title: "Founder of Dapasoft Inc.",
        image: "/stephenchanhd.png",
        desc: "Stephen Chan is the founder and former CEO of Dapasoft Inc., a Toronto healthcare IT firm acquired by Calian Group in 2021. An active angel investor, he also serves as a board member of the Ma'mo'weh Wii'soo'ka'tiwin Foundation, supporting innovation and entrepreneurship."
      },
      {
        name: "Jeffrey Mah",
        title: "Director of the Mon Sheong Foundation",
        image: "/jeffreymah.jpg",
        desc: "Jeffrey Mah is a successful IT entrepreneur and Director of the Mon Sheong Foundation. As a dedicated mentor and judge for CYC since its inception, he has empowered countless young people to reach their full potential."
      },
      {
        name: "Frank Chau",
        title: "President of the Yee Hong Community Wellness Foundation",
        image: "/frankchau.jpg",
        desc: "Frank Chau is a Special Advisor to the Mon Sheong Foundation who led the development of Mississauga Chinatown and helped expand BMO into Asia. His visionary leadership has left a lasting impact on business and the Chinese Canadian community."
      }
    ]
  },
  {
    id: "asian",
    title: "Asian Champions Award",
    icon: Shield,
    color: "text-cyc-teal",
    bgColor: "bg-cyc-teal/10",
    border: "border-cyc-teal/20",
    desc: "The Asian Champions Award is designed to honor outstanding individuals of Asian heritage who have demonstrated exceptional leadership, professional excellence, and a steadfast commitment to community service. This award recognizes role models within the Asian Canadian community who break barriers, foster cultural understanding, and pave the way for future generations. By celebrating their accomplishments in fields such as business, arts, public service, and philanthropy, CYC aims to inspire young people to embrace their heritage while making meaningful contributions to the broader Canadian society.",
    presenters: [
      {
        name: "Honourable Dr. Vivienne Poy",
        title: "Businesswoman, author and philanthropist",
        image: "/Vivienne_Poy.jpg",
        desc: "Vivienne Poy made history in 1998 as the first Canadian Senator of Asian ancestry and successfully championed the designation of May as \"Asian Heritage Month\". An entrepreneur, author, and former chancellor of the University of Toronto, she has been a lifelong advocate for cultural understanding and education."
      },
      {
        name: "Harjit Sajjan",
        title: "Minister of Emergency Preparedness of Canada",
        image: "/harjitsajjan.png",
        desc: "Harjit Sajjan is the Minister of Emergency Preparedness for Canada, leading national crisis response efforts. With a strong background in military service and public policy, he is a dedicated advocate for the safety and security of all Canadians."
      }
    ]
  },
  {
    id: "women",
    title: "Women Champions Award",
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    border: "border-pink-100",
    desc: "This award honors great women who help Canadian society even when they face many hard problems. It recognizes women who work for equal rights, start charity groups, and make important positive changes in our communities. Through this award, CYC thanks these leaders for their service and makes sure people across the country know about their success. These incredible women serve as strong leaders and guides, helping young women grow and making the community a better place for future female leaders.",
    presenters: [
      { name: "Vivienne Poy", title: "Former Canadian Senator" },
      { name: "Doris Chan", title: "First Vice-Chair of Mon Sheong Foundation" },
      { name: "Rosa Chan", title: "Founder of RC Communications" },
      { name: "Piera Ip", title: "Founder of Progenics" },
      { name: "Adda Li", title: "Chain Restaurateur" },
      { name: "Yuen May", title: "Cantonese period music opera lyricist" },
      { name: "Nancy M Siew", title: "Citizenship Judge" },
      { name: "Emily Wong", title: "VP of Chinese Cultural Centre of Greater Toronto" }
    ]
  },
  {
    id: "diversity",
    title: "Diversity and Inclusion Champions Award",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    border: "border-purple-100",
    desc: "The Diversity and Inclusion Champions Award recognizes individuals, organizations, and community advocates who have made outstanding contributions toward fostering a truly inclusive and equitable society. As a multicultural organization, CYC values the unique backgrounds of all Canadians. This award honors those who actively work to eliminate discrimination, champion equal access, promote inclusive practices, and bring diverse communities together through shared understanding and mutual respect.",
    presenters: [
      { name: "Helena Jaczek", title: "House of Commons of Canada" },
      { name: "Michael Parsa", title: "Provincial Parliament of Ontario" },
      { name: "Aldrin Fernando", title: "School Principal" }
    ]
  },
  {
    id: "black",
    title: "Black Champions Award",
    icon: Trophy,
    color: "text-cyc-yellow",
    bgColor: "bg-cyc-yellow/10",
    border: "border-cyc-yellow/20",
    desc: "The Black Champions Award is dedicated to honoring Black Canadians who have exhibited exemplary leadership, driven social change, and achieved excellence across various industries. This award seeks to amplify the voices and accomplishments of Black leaders who serve as vital role models for youth. By celebrating their success and dedication to social justice, entrepreneurship, and community development, CYC emphasizes the critical importance of uplifting Black excellence and nurturing the next generation of changemakers.",
    presenters: []
  }],
  "2024": [
    {
      id: "asian-2024",
      title: "Asian Champions Award",
      icon: Shield,
      color: "text-cyc-teal",
      bgColor: "bg-cyc-teal/10",
      border: "border-cyc-teal/20",
      desc: "The Asian Champions Award is designed to honor outstanding individuals of Asian heritage who have demonstrated exceptional leadership, professional excellence, and a steadfast commitment to community service.",
      presenters: [],
      winners: [
        {
          name: "Li Zhiping (李治平)",
          title: "Founder of the Toronto Chinese Artist Center",
          image: "/lizhiping.jpg",
          desc: "Li ZiPing is a lifelong musician and highly respected arts advocate. As the founder of the Toronto Chinese Artist Center—the largest professional organization for Chinese artists in North America—he has made a profound and lasting impact on the artistic community."
        },
        {
          name: "Winnie Chan",
          title: "Vice President of Sales Management at Tridel",
          image: "/winniechan.jpg",
          desc: "Winnie Chan is the Vice President at Tridel, overseeing a massive portfolio of sustainable land development projects. She is a recognized industry expert who actively champions diversity, equity, and inclusion within the construction sector."
        },
        {
          name: "Rebecca Pang",
          title: "Vice President of RBC",
          image: "/rebeccapang.jpeg",
          desc: "Rebecca Pang is the Vice President of RBC, bringing global expertise from her previous leadership roles at McKinsey & Company, T-Mobile, and China Netcom. She is a dynamic leader who also serves on multiple strategic boards."
        },
        {
          name: "Justin Poy",
          title: "Founder of the Justin Poy Agency and Philanthropist",
          image: "/justinpoy.jpg",
          desc: "Justin Poy is an award-winning advertising entrepreneur and dedicated philanthropist. Incorporating lessons from his own life challenges, he has successfully raised millions of dollars to support hospitals, universities, and charitable organizations across Canada."
        },
        {
          name: "Honourable Mary Ng",
          title: "Minister of Export Promotion, International Trade and Economic Development",
          image: "/mary ng.jpeg",
          desc: "Hon. Mary Ng is a top-performing public sector leader serving as Canada's Minister of Export Promotion, International Trade, and Economic Development. She represents Markham-Thornhill as a Member of Parliament and previously served in the Prime Minister's Office."
        }
      ]
    }
  ],
  "2023": [
    {
      id: "diversity-2023",
      title: "Diversity & Inclusion Champions Award",
      icon: Users,
      color: "text-cyc-yellow",
      bgColor: "bg-cyc-yellow/10",
      border: "border-cyc-yellow/20",
      desc: "The Diversity and Inclusion Champions Award recognizes leaders who have made profound contributions to fostering inclusive environments.",
      presenters: [],
      winners: [
        {
          name: "Minister Michael Parsa",
          title: "Minister of Children, Community, and Social Services",
          image: "/michaelparsa.jpg",
          desc: "Minister Michael Parsa actively supports initiatives for at-risk youth and personal mentorship to build inclusive, empowered communities."
        },
        {
          name: "Aldrin Fernando",
          title: "Principal of Bayview Secondary School",
          image: "/aldrinfernando.png",
          desc: "Aldrin Fernando served as the principal of Bayview Secondary School, fostering a diverse community of linguistic and cultural backgrounds. He is deeply committed to connecting with students and staff to promote inclusive learning."
        }
      ]
    },
    {
      id: "black-2023",
      title: "Black Champions Award",
      icon: Star,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      border: "border-purple-200",
      desc: "The Black Champions Award is presented to extraordinary leaders within the Black community who inspire others through their dedication, resilience, and impactful service.",
      presenters: [],
      winners: [
        {
          name: "Hon. Dr. Jean Augustine",
          title: "First African-Canadian woman elected to Canada's House of Commons",
          image: "/jeanaugstine.png",
          desc: "Hon. Dr. Jean Augustine was the first African-Canadian woman elected to Canada's House of Commons. Her historic achievements include passing the motion to designate February as Black History Month in Canada."
        },
        {
          name: "MPP David Smith",
          title: "MPP for Scarborough Centre",
          image: "/davidsmith.jpg",
          desc: "David Smith is the MPP for Scarborough Centre. With over a decade of experience as a school board trustee, he has been a dedicated advocate for improving the quality of education for students and residents."
        },
        {
          name: "Sandy Hudson",
          title: "Co-founder of Black Lives Matter Canada",
          image: "/sandyhudson.jpg",
          desc: "Sandy Hudson is a prominent activist, author, and co-founder of the Black Lives Matter movement in Canada. She helped found the Black Legal Action Centre and is recognized as one of Canada's most influential voices for justice."
        },
        {
          name: "Greg Fergus",
          title: "Speaker of the House of Commons of Canada",
          image: "/gregfergus.jpg",
          desc: "Greg Fergus is the Speaker of the House of Commons of Canada. With a strong background in public service, he ensures the effective functioning of the House, upholding the principles of parliamentary democracy and fairness."
        }
      ]
    }
  ]
};
