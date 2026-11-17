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
    "Check It Church Ministries International: proclaiming the Kingdom of God through the Word, worship and miracles. Live online every Sunday at 10 AM on YouTube and Facebook.",
  url: "https://checkitcm.org",

  theme: {
    ink: "#141414", // headings + body text
    primary: "#C21F3A", // one accent: logo red, leaning pink
    secondary: "#C21F3A", // same red (one-accent system)
    bg: "#F3F2EE", // paper
  },

  contact: {
    phone: "(855) 812-4325",
    email: "info@checkitcm.org",
    phoneHref: "tel:+18558124325",
    whatsapp: "[WhatsApp number]",
    timezone: "Central",
  },

  links: {
    youtube: "https://www.youtube.com/@check-itchurch",
    kidsChannel: "https://www.youtube.com/@checkitkids-b1o",
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
    { day: "Sunday", time: "10 AM", name: "Super Sunday Service", where: "Live on YouTube + Facebook", featured: true },
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
      aboutImage: "/images/pastor_gold.jpg",
      aboutPos: "50% 15%",
      bio: "Pastor, teacher, healing minister and author. He has given his life to spreading the power of God's Word, worship and miracles, guiding thousands toward victorious, purposeful lives.",
    },
    {
      name: "First Lady Juna Samuel",
      title: "",
      image: "/images/juna.jpg",
      pos: "50% 18%",
      aboutImage: "/images/juna_white.jpg",
      aboutPos: "50% 20%",
      bio: "Juna Samuel is the wife of Pastor Isaac Samuel and a devoted woman of God who serves faithfully alongside her husband at Check It Church. With a heart for service, she is committed to supporting the vision of the church, strengthening its mission, and serving wherever she is needed.",
    },
  ],

  membershipSteps: [
    { title: "Register", text: "Fill out the membership form. Accurate, up-to-date details only." },
    { title: "Stay active", text: "Join our services regularly on Facebook or YouTube." },
    { title: "Stay connected", text: "Need to update your details? Email info@checkitcm.org." },
  ],

  // Form delivery via Web3Forms (free, 250/mo): every submission is emailed to the inbox
  // the key was created with. Get a key at web3forms.com using info@checkitcm.org.
  // Left empty, forms fall back to opening a pre-filled email to contact.email.
  forms: {
    web3formsKey: "",
  },

  // Featured shop products (photos in /public/images, link to the product page).
  shopProducts: [
    { name: "Who But God?", price: "$45", image: "/images/shop_whobutgod.jpg", href: "https://checkitcmshop.org/products/who-but-god-2" },
    { name: "Child of God", price: "$45", image: "/images/shop_childofgod.jpg", href: "https://checkitcmshop.org/products/child-of-god-2" },
  ],

  // Recent sermons row. id = the YouTube video id (the part after watch?v=).
  sermons: [
    { id: "csoG4316mRo", title: "Prayer for Financial Breakthrough", tag: "Prayer" },
    { id: "hquM-zhR2i8", title: "My Spiritual Channels Are Open", tag: "Prayer" },
    { id: "iFTKhgMRRvI", title: "I'm Making Progress", tag: "Worship" },
    { id: "Ts7VgX_jVOA", title: "It's Turning Around for My Good", tag: "Worship" },
    { id: "eLY7rKpS_Zc", title: "I've Got Joy", tag: "Worship" },
    { id: "uxJs6putyUQ", title: "Delayed But Not Denied", tag: "Testimony" },
    { id: "PKV1xlCfn_U", title: "Your Son Won't Survive", tag: "Testimony" },
    { id: "uSRknUHtExw", title: "Then Something Impossible Happened", tag: "Testimony" },
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
