/**
 * CBM Site Framework: one config file per client.
 * To launch a new site: duplicate this repo, edit this file, swap /public/images.
 * Colors and fonts here drive the whole theme (see app/layout.tsx).
 */

export const site = {
  name: "Check It Church Ministries International",
  shortName: "Check It",
  slogan: "Until all see His Kingdom.",
  tagline: "Word. Worship. Miracles.",
  description:
    "Check It Church Ministries International: proclaiming the Kingdom of God through the Word, worship and miracles. Sundays at 10 AM, in person and online.",
  url: "https://checkitcm.org",

  theme: {
    ink: "#111111", // headings + body text
    primary: "#2B3990", // single accent: logo blue
    secondary: "#2B3990", // same blue (one-accent system)
    bg: "#FAFAFC",
  },

  contact: {
    phone: "(855) 812-4325",
    phoneHref: "tel:+18558124325",
    whatsapp: "[WhatsApp number]",
    address: "[Street address, City, State]",
    timezone: "Central",
  },

  links: {
    youtube: "https://www.youtube.com/@check-itchurch",
    kidsChannel: "https://www.youtube.com/@check-itchurch", // TODO: swap for Check It Kids channel link from Juna
    instagram: "https://www.instagram.com/checkitchurchministries/",
    tiktok: "https://www.tiktok.com/@checkitchurchministries",
    facebook: "#",
    give: "https://checkitcm.org/donate/",
    shop: "https://checkitcmshop.org/",
    appStore: "#",
    googlePlay: "#",
  },

  nav: [
    { label: "New Here", href: "/new-here" },
    { label: "About", href: "/about" },
    { label: "Watch", href: "/watch" },
    { label: "Give", href: "/give" },
  ],

  services: [
    { day: "Sunday", time: "10 AM", name: "Super Sunday Service", where: "In person + live", featured: true },
    { day: "Tuesday", time: "6 PM", name: "Healing & Deliverance", where: "Live online" },
    { day: "Wednesday", time: "6 PM", name: "Bible Study", where: "Live online" },
    { day: "Friday", time: "6 PM", name: "Friday Night Prayer", where: "Live online" },
  ],

  pastors: [
    {
      name: "Pastor Isaac Samuel II",
      title: "Senior Pastor",
      image: "/images/pastor_gold.jpg",
      pos: "50% 15%",
      bio: "Pastor, teacher, healing minister and author. He has given his life to spreading the power of God's Word, worship and miracles, guiding thousands toward victorious, purposeful lives.",
    },
    {
      name: "Minister Juna Samuel",
      title: "First Lady",
      image: "/images/juna.jpg",
      pos: "50% 18%",
      bio: "[2 to 3 sentences on Minister Juna's heart for the ministry, in her words.]",
    },
  ],

  series: [
    { name: "Times of Refreshing", image: "/images/arms.jpg", pos: "50% 25%" },
    { name: "The Blood Makes You Untouchable", image: "/images/preach.jpg", pos: "45% 30%" },
    { name: "Enjoying the Blessings of the Covenant", image: "/images/joy.jpg", pos: "50% 25%" },
    { name: "God Forgives & Forgets Our Sins", image: "/images/worship.jpg", pos: "50% 40%" },
  ],

  membershipSteps: [
    { title: "Start online", text: "Fill out a short form. It takes about a minute." },
    { title: "Meet the team", text: "Someone from Check It reaches out personally to get to know you." },
    { title: "Membership class", text: "[Confirm: when it meets, how long, what it covers]" },
    { title: "Get planted", text: "Join a serve team, a prayer group and the life of the church." },
  ],

  giveWays: [
    { name: "Online", detail: "Card or bank, one-time or recurring.", href: "https://checkitcm.org/donate/" },
    { name: "Zelle", detail: "[Zelle email or phone]" },
    { name: "Cash App", detail: "[$Cashtag]" },
    { name: "PayPal", detail: "[PayPal link]" },
    { name: "By phone", detail: "(855) 812-4325", href: "tel:+18558124325" },
    { name: "Bank transfer", detail: "St. Lucia and Jamaica. Details on request." },
  ],
} as const;

export type Site = typeof site;
