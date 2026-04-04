import previewImg from "../img/preview.png";
import previewImg2 from "../img/preview2.png";
import previewImg3 from "../img/preview3.png";

export const PORTFOLIO_DATA = {
  name: "Bhavya Sharma",
  role: "Full Stack Engineer & UI Architect",
  description: "Crafting digital experiences where performance meets aesthetics. Specializing in building scalable web applications with a focus on user-centric design.",
  email: "hello@alexrivers.dev",
  socials: [
    { name: "GitHub", url: "https://github.com/the-og-dev", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ],
  skills: [
    { name: "TypeScript", level: "Advanced", category: "Frontend" },
    { name: "React / Next.js", level: "Advanced", category: "Frontend" },
    { name: "Tailwind CSS", level: "Advanced", category: "Frontend" },
    { name: "Node.js", level: "Advanced", category: "Backend" },
    { name: "PostgreSQL", level: "Advanced", category: "Backend" },
    { name: "AWS / GCP", level: "Intermediate", category: "DevOps" },
    { name: "Framer Motion", level: "Expert", category: "Animation" },
    { name: "Docker", level: "Intermediate", category: "DevOps" },
  ],
  projects: [
    {
      title: "Hospital Website",
      description: "A highly interative hospital dashboard developed for making the online presence of the hospital and making services easy to patients.",
      tech: ["Packs.json", "TypeScript", "Vite", "Tailwind"],
      link: "https://mssh.pages.dev/",
      image: `${previewImg}?auto=format&fit=crop&q=80&w=800`,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Enterpise Dashboard",
      description: "An eniterpise dashboard hosting the products online and allowing consumers to order them live.",
      tech: ["React", "Spreadsheet API", "Node.js", "Dist"],
      link: "https://www.stsenterprise.co.in/",
      image: `${previewImg2}?auto=format&fit=crop&q=80&w=800`,
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Video Downloader",
      description: "---UNDER CONSTRUCTION---",
      tech: ["TypeScript", "React", "Backend", "Framer Motion"],
      link: "#",
      image: `${previewImg3}?auto=format&fit=crop&q=80&w=800`,
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "Zenith E-commerce",
      description: "High-performance headless commerce store with sub-second page loads and 99 Lighthouse score.",
      tech: ["Next.js", "Shopify Storefront API", "Tailwind"],
      link: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=800",
      color: "from-orange-500 to-yellow-400"
    }
  ]
};
