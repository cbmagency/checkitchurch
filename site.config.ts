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
    primary: "#8E1B30", // one accent: cherry red
    secondary: "#8E1B30", // same cherry (one-accent system)
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
    streams: "https://www.youtube.com/@check-itchurch/streams",
    kidsChannel: "https://www.youtube.com/@checkitkids-b1o",
    instagram: "https://www.instagram.com/checkitchurchministries/",
    tiktok: "https://www.tiktok.com/@checkitchurchministries",
    facebook: "https://www.facebook.com/CheckItChurchMinistriesInternational/",
    give: "/give#ways",
    shop: "https://checkitcmshop.org/",
    appStore: "#",
    googlePlay: "#",
  },

  nav: [
    { label: "New Here", href: "/new-here" },
    { label: "About", href: "/about" },
    { label: "Watch", href: "https://www.youtube.com/@check-itchurch" },
    { label: "Give", href: "/give" },
    { label: "Shop", href: "https://checkitcmshop.org/" },
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
      image: "/images/isaac_portrait.jpg",
      pos: "50% 30%",
      aboutImage: "/images/isaac_portrait.jpg",
      aboutPos: "50% 30%",
      bio: "Pastor, teacher, healing minister and author. He has given his life to spreading the power of God's Word, worship and miracles, guiding thousands toward victorious, purposeful lives.",
    },
    {
      name: "First Lady Juna Samuel",
      title: "",
      image: "/images/juna_portrait.jpg",
      pos: "50% 40%",
      aboutImage: "/images/juna_portrait.jpg",
      aboutPos: "50% 40%",
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
    // Live services from youtube.com/@check-itchurch/streams (newest first). First one = "Latest message".
    { id: "RdfX0AowD8Y", title: "Festival of Praise 2026", tag: "Live service" },
    { id: "jnwyKsEnKjE", title: "Midweek Bible Study", tag: "Bible study" },
    { id: "HtKFo_ajyBo", title: "Prophetic Healing & Deliverance Service", tag: "Healing & deliverance" },
    { id: "iW7ZD2qqOVM", title: "3 Important Things You Must Never Miss in Life", tag: "Live service" },
    { id: "5IN76yc18jo", title: "Friday Night Prayer", tag: "Prayer" },
    { id: "B5nvtR1e_zw", title: "Don't Be a Talebearer", tag: "Live service" },
    { id: "UDWyqvsc1s4", title: "The Help You're Missing", tag: "Times of Refreshing" },
    { id: "VmSBcXVMRz8", title: "Evaluate Your Friendships", tag: "Live service" },
  ],

  // Statement of faith (About page). Section stays hidden until this has entries.
  // Drafts awaiting the church's wording:
  //   The Bible: God's Word is true, alive and the foundation for everything we do.
  //   Jesus: Salvation is found in Jesus Christ alone, through His blood and His finished work.
  //   The Holy Spirit: The Spirit empowers believers today, with gifts, healing and miracles.
  //   The Church: We're called to be a family that worships, grows and serves together.
  beliefs: [] as { q: string; a: string }[],

  // Ways to give (Give page). Items with a [placeholder] detail stay hidden.
  // copy: a value visitors can tap to copy (account numbers, cashtags).
  giveWays: [
    { name: "Cash App", detail: "Check It Church Ministries Intl Inc", copy: "$CheckItCm", href: "https://cash.app/$CheckItCm", cta: "Open Cash App" },
    { name: "PayPal", detail: "Give securely with PayPal.", href: "https://www.paypal.com/paypalme/Igbeibi", cta: "Open PayPal" },
    { name: "Zelle", detail: "[Zelle email or phone]" },
    { name: "By phone", detail: "Call and we'll walk you through it.", copy: "(855) 812-4325", href: "tel:+18558124325", cta: "Call now" },
    { name: "Bank transfer · St. Lucia", detail: "Bank of St Lucia", lines: [["Account name", "Leah Popo"], ["Account number", "321115108"]] },
    { name: "Bank transfer · Jamaica", detail: "JN Bank, 2 Market St, Montego Bay. Tithe and offering.", lines: [["Account name", "Natasha Powell"], ["Account number", "10710757"]] },
  ] as { name: string; detail: string; copy?: string; href?: string; cta?: string; lines?: [string, string][] }[],
} as const;

export type Site = typeof site;
