// Single source of truth for everything the site says.
// Edit copy, links and projects here; the components only render it.
// House style: plain, conversational English and no em dashes.

export const profile = {
  name: "Amin Shabaninejad",
  firstName: "Amin",
  lastName: "Shabaninejad",
  initials: "AS",
  role: "Android Team Lead",
  headline: "Android Team Lead & Senior Android Engineer",
  email: "amin.shabani98@gmail.com",
  github: "https://github.com/aminshabani94",
  linkedin: "https://linkedin.com/in/amin-shabani-nejad",
  cv: "/Amin_Shabaninejad_CV.pdf",
  // 4:5 photo in public/assets. Set to null to show the monogram instead.
  portrait: "/assets/portrait-close.jpg" as string | null,
  lede:
    "8+ years building Android apps used by 15M+ people. I lead a nine-person Android team at Sepino, a neobank with 7M+ users, where we ship banking features in Kotlin and Compose Multiplatform for Android, iOS and web. I still write a lot of the code.",
  focus: ["Kotlin", "Jetpack Compose", "KMP / CMP", "NFC · HCE payments", "MVI · Clean Architecture"],
};

export const stats = [
  { value: "8", suffix: "+", label: "Years building Android" },
  { value: "15M", suffix: "+", label: "People reached" },
  { value: "9", suffix: "", label: "Engineers led" },
  { value: "7M", suffix: "+", label: "Users on current product" },
];

export type Shot = { src: string; alt: string; w: number; h: number };

export type CaseStudy = {
  id: string;
  tag: string;
  period: string;
  title: string;
  role: string;
  summary: string;
  highlights: string[];
  metrics: { value: string; suffix?: string; label: string }[];
  stack: string[];
  link?: { label: string; href: string };
  // Visual: a fanned stack of real screenshots, a single composed image,
  // or a drawn diagram for work that has no public screens.
  visual:
    | { kind: "stack"; tint: string; shots: Shot[] }
    | { kind: "image"; tint: string; shot: Shot }
    | { kind: "modules"; tint: string }
    | { kind: "nfc"; tint: string };
};

export const cases: CaseStudy[] = [
  {
    id: "sepino",
    tag: "FinTech · Neobank",
    period: "Jul 2025 – Present",
    title: "Sepino: one of the country's largest neobanks",
    role: "Android Team Lead",
    summary:
      "Banking for 7M+ people. I set technical direction for the Android team, own final code review and merge approval, and build core banking features myself in Kotlin and Compose Multiplatform for Android, iOS and web.",
    highlights: [
      "Digital cheques, cards, accounts, currency purchase and offline-tolerant payment flows",
      "Reusable platform modules: document upload for camera and file input, and a single SMS Retriever module",
      "GitLab CI with tests, lint and quality gates, versioned signed and unsigned APKs, and QA distribution",
    ],
    metrics: [
      { value: "7M", suffix: "+", label: "users" },
      { value: "3", label: "platforms: Android, iOS, web" },
      { value: "9", label: "Android engineers led" },
    ],
    stack: ["Kotlin", "Compose Multiplatform", "MVI", "Coroutines", "Flow", "GitLab CI"],
    link: { label: "Café Bazaar", href: "https://cafebazaar.ir/app/app.sepino?l=en" },
    visual: {
      kind: "image",
      tint: "#1b3a8a",
      shot: {
        src: "/shots/sepino.png",
        alt: "Sepino app: money transfer, banking services and online identity verification on three phones",
        w: 600,
        h: 400,
      },
    },
  },
  {
    id: "kahroba",
    tag: "FinTech · NFC payments",
    period: "2025 – Present",
    title: "Kahroba: NFC tap-to-pay inside Sepino",
    role: "Android lead for the feature",
    summary:
      "Contactless card payments from the phone. I lead the Android side of Kahroba, which turns the device into a payment card at any NFC terminal using Host Card Emulation.",
    highlights: [
      "Host Card Emulation service that answers the terminal's payment requests",
      "Card tokenization, so the phone pays with a token instead of the real card number",
      "Limited-use key replenishment, so the phone always has fresh keys for the next payments",
    ],
    metrics: [
      { value: "NFC", label: "tap-to-pay at POS" },
      { value: "HCE", label: "host card emulation" },
      { value: "LUK", label: "limited-use key refresh" },
    ],
    stack: ["Kotlin", "NFC", "HCE", "Tokenization", "Android Security"],
    visual: { kind: "nfc", tint: "#0f4c5c" },
  },
  {
    id: "sepino-platform",
    tag: "Multiplatform · Architecture",
    period: "2025 – Present",
    title: "Sepino's 70+ module KMP codebase and Desktop Web",
    role: "Android Team Lead · architecture",
    summary:
      "A large multiplatform codebase stays healthy only if every module follows the same rules. I work across 70+ modules, and I designed and built the first Desktop Web foundation in Compose Multiplatform.",
    highlights: [
      "Gradle convention plugins so every module is configured the same way",
      "Rolled out Detekt rules across all feature modules to keep the code consistent",
      "Desktop Web foundation that separates shared logic from desktop UI, structured for the team to extend",
    ],
    metrics: [
      { value: "70", suffix: "+", label: "Gradle modules" },
      { value: "100", suffix: "%", label: "feature modules on Detekt" },
      { value: "CMP", label: "desktop web foundation" },
    ],
    stack: ["Kotlin Multiplatform", "Compose Multiplatform", "Gradle", "Detekt", "Koin"],
    visual: { kind: "modules", tint: "#2b2741" },
  },
  {
    id: "stopandshop",
    tag: "Retail · Payments",
    period: "May 2022 – Jun 2025",
    title: "Stop & Shop: secure checkout and A/B experiments",
    role: "Senior Android Developer · Borvista (contract)",
    summary:
      "Android work for one of the largest US grocery chains. I strengthened payment and checkout flows that handle millions of transactions a day, and owned A/B experiments from flag to analytics.",
    highlights: [
      "Passed formal penetration testing and enforced OWASP MASVS and PCI-DSS",
      "Control and test flows behind Firebase Remote Config flags, with analytics to guide rollout decisions",
      "Led Jetpack Compose adoption across the codebase, with 20% fewer UI bugs",
    ],
    metrics: [
      { value: "−20", suffix: "%", label: "UI bugs after Compose" },
      { value: "80", suffix: "%", label: "domain test coverage" },
      { value: "−15", suffix: "%", label: "deployment time" },
    ],
    stack: ["Kotlin", "Compose", "Hilt", "Apollo GraphQL", "Remote Config", "GitHub Actions"],
    link: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.stopandshop.mobile.droid&hl=en",
    },
    visual: {
      kind: "stack",
      tint: "#7a1f3d",
      shots: [
        { src: "/shots/stopandshop_1.jpg", alt: "Stop & Shop: product wellness attributes", w: 288, h: 512 },
        { src: "/shots/stopandshop_2.jpg", alt: "Stop & Shop: Boost membership and saved payment method", w: 288, h: 512 },
      ],
    },
  },
  {
    id: "hannaford",
    tag: "Retail · Payment SDK",
    period: "May 2022 – Jun 2025",
    title: "Hannaford: payment SDK for a new app launch",
    role: "Senior Android Developer · Borvista (contract)",
    summary:
      "I played a key role in building the payment SDK for the Hannaford app launch, and mentored the four-person Android team along the way.",
    highlights: [
      "MVVM with Kotlin, Hilt, Coroutines and Flow, Compose and Apollo GraphQL",
      "TDD with JUnit and 80% coverage in the domain layer, with 30% fewer bugs overall",
      "Pull-request review time cut from two days to eight hours",
    ],
    metrics: [
      { value: "100K", suffix: "+", label: "users in 6 months" },
      { value: "−30", suffix: "%", label: "bugs with TDD" },
      { value: "95", suffix: "%+", label: "sprint delivery" },
    ],
    stack: ["Kotlin", "Compose", "Hilt", "Flow", "GraphQL", "JUnit"],
    visual: {
      kind: "stack",
      tint: "#1f4d36",
      shots: [
        { src: "/shots/hannaford_1.jpg", alt: "Hannaford: weekly flyer and coupons", w: 288, h: 512 },
        { src: "/shots/hannaford_2.jpg", alt: "Hannaford: coupon details and qualifying products", w: 383, h: 512 },
      ],
    },
  },
  {
    id: "braingomo",
    tag: "Health · Wearables",
    period: "Sep 2021 – Apr 2022",
    title: "BrainGoMo: connected health with BLE wearables",
    role: "Senior Android Developer",
    summary:
      "A German health-tech startup. I rebuilt the core app in Jetpack Compose and built an SDK on top of the Corsano SDK for wearable BLE tracking, used across the company's apps.",
    highlights: [
      "Corsano-based SDK with 35% better data accuracy and 20% fewer sync failures",
      "Real-time WebSocket tracker so doctors and clinics could follow activity live",
      "Dynamic feature modules, plus Google Pay, Stripe and PayPal checkout with 20% fewer drop-offs",
    ],
    metrics: [
      { value: "2.9s", label: "cold start, down from 4.8s" },
      { value: "+40", suffix: "%", label: "rendering speed" },
      { value: "+25", suffix: "%", label: "battery efficiency" },
    ],
    stack: ["Kotlin", "Compose", "BLE", "WebSocket", "WorkManager"],
    link: { label: "Project page", href: "https://virgobit.com/BrainGoMoSol.html" },
    visual: {
      kind: "image",
      tint: "#3b2a7a",
      shot: {
        src: "/shots/braingomo.png",
        alt: "BrainGoMo: headset, the training app and the Fish n' Coins training game",
        w: 692,
        h: 653,
      },
    },
  },
  {
    id: "paziresh24",
    tag: "Health · Consumer",
    period: "Nov 2018 – Aug 2021",
    title: "Paziresh24: the country's leading doctor booking app",
    role: "Android Developer",
    summary:
      "I built core parts of the Android app for a doctor and clinic booking platform with 500K monthly active users: booking, online consultation, real-time chat, nearby-clinic discovery and reminders.",
    highlights: [
      "End-to-end booking and consultation modules, with 40% more daily bookings",
      "WebSocket chat that cut doctor response time by 35%",
      "Google Maps and Geofencing discovery, driving 60K+ location-based appointments a month",
    ],
    metrics: [
      { value: "2M", suffix: "+", label: "installs · 4.7★" },
      { value: "500K", label: "monthly active users" },
      { value: "99.3", suffix: "%", label: "crash-free sessions" },
    ],
    stack: ["Kotlin", "WebSocket", "Google Maps", "Geofencing", "Crashlytics"],
    link: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.paziresh24.paziresh24",
    },
    visual: {
      kind: "stack",
      tint: "#4b3a9a",
      shots: [
        { src: "/shots/paziresh24_1.jpg", alt: "Paziresh24: doctor and clinic search", w: 750, h: 1024 },
        { src: "/shots/paziresh24_2.jpg", alt: "Paziresh24: free medical Q&A", w: 750, h: 1024 },
        { src: "/shots/paziresh24_3.jpg", alt: "Paziresh24: nearby doctors on the map", w: 750, h: 1024 },
      ],
    },
  },
];

export const experience = [
  {
    period: "Jul 2025 – Present",
    title: "Android Team Lead",
    company: "Sepino",
    body: "Leading a nine-person Android team on a 7M+ user neobank while staying hands-on. Core banking features in Kotlin and Compose Multiplatform for Android, iOS and web, Kahroba NFC tap-to-pay, a 70+ module codebase with convention plugins and Detekt, GitLab CI, sprint planning, final reviews and merge approvals, hiring and onboarding.",
  },
  {
    period: "May 2022 – Jun 2025",
    title: "Senior Android Developer",
    company: "Borvista",
    body: "Fintech and retail apps for Stop & Shop, Food Lion and Hannaford. Compose adoption, A/B experiments, a payment SDK, PCI-DSS and MASVS security, CI/CD with GitHub Actions, and mentoring across US, EU and ME time zones.",
  },
  {
    period: "Sep 2021 – Apr 2022",
    title: "Senior Android Developer",
    company: "BrainGoMo",
    body: "Connected-health app: Compose rebuild, a Corsano-based BLE wearables SDK, real-time WebSocket monitoring, dynamic feature modules, payments and battery optimization.",
  },
  {
    period: "Nov 2018 – Aug 2021",
    title: "Android Developer",
    company: "Paziresh24",
    body: "Booking, consultation, real-time chat, location discovery, encrypted media sharing and notifications for a platform with 2M+ installs.",
  },
];

export const education = [
  {
    kind: "degree",
    period: "2013 – 2018",
    title: "B.Sc. Computer Engineering",
    org: "Yazd University",
  },
  {
    kind: "award",
    period: "2017",
    title: "4th of 100 teams",
    org: "Sharif University · National Mobile Programming Marathon (MPM4)",
    body: "Built ChoobKhat, a blockchain-based debt and credit tracking concept, during the competition.",
  },
  {
    kind: "cert",
    period: "2025",
    title: "Compose Multiplatform",
    org: "Udemy",
    href: "https://www.udemy.com/certificate/UC-f6a9a3f6-98c1-4de1-a798-4592ce89c516/",
  },
  {
    kind: "cert",
    period: "2022",
    title: "Product Management",
    org: "Bozhan Product School",
    href: "https://drive.google.com/file/d/1tPqmqofKF5LnxVe_D0Ui-qWCMlF2OvbP/view?usp=drive_link",
  },
] as const;

export const skills = [
  { group: "Android engineering", items: "Kotlin, Java, Android SDK, Jetpack Compose, Coroutines, Flow, KMP, CMP" },
  { group: "Architecture", items: "Clean Architecture, modular architecture, MVI, MVVM, MVP, SOLID, shared and platform-specific design" },
  { group: "Payments & devices", items: "NFC, Host Card Emulation, card tokenization, BLE wearables" },
  { group: "Networking & data", items: "GraphQL / Apollo, Retrofit, REST, WebSocket, Socket.IO, WebRTC, Room, Realm, SQLite" },
  { group: "Security", items: "OAuth 2.0, Android security, OWASP MASVS, PCI-DSS, penetration testing" },
  { group: "Testing & quality", items: "TDD, JUnit, MockK, Mockito, Espresso, Robolectric, screenshot tests, Detekt, quality gates" },
  { group: "Build & CI/CD", items: "Gradle convention plugins, GitLab CI, GitHub Actions, Azure DevOps, APK signing and distribution" },
  { group: "Dependency injection", items: "Koin, Hilt, Dagger 2" },
  { group: "Platforms & tools", items: "Firebase, Crashlytics, Remote Config, Amplitude, Google Maps, OpenStreetMap, Jira, Confluence" },
  { group: "AI-assisted engineering", items: "Codex, Claude Code, Cursor, GitHub Copilot, always with careful human review" },
  { group: "Leadership", items: "Technical direction, sprint planning, estimation, capacity planning, code review and merge approval, hiring, onboarding, mentoring" },
];

export const repos = [
  {
    name: "TandemCommunity",
    href: "https://github.com/aminshabani94/TandemCommunity",
    meta: "Kotlin · Compose · Ktor · Koin",
    body: "Paginated community feed with likes saved offline, retry states and a release APK.",
  },
  {
    name: "CleanModular_MVVM_Hilt",
    href: "https://github.com/aminshabani94/CleanModular_MVVM_Hilt",
    meta: "Kotlin · Hilt · multi-module",
    body: "Reference setup for a modular Clean Architecture app with MVVM and Hilt.",
  },
  {
    name: "PopularMovies",
    href: "https://github.com/aminshabani94/PopularMovies",
    meta: "Kotlin · Compose · MVVM",
    body: "Movie browser split into ui, domain and data layers, with all UI in Jetpack Compose.",
  },
];

export const about = {
  heading: "I care about apps that keep working when millions of people rely on them.",
  paragraphs: [
    "I've spent more than eight years on Android products where reliability matters: banking, contactless payments, grocery checkout, healthcare booking and live health monitoring. Today I lead Android at Sepino, a neobank with over seven million users.",
    "I like practical architecture: clear ownership, predictable state, real tests, and abstractions that make the next feature easier, not slower. Lately that means a lot of Kotlin Multiplatform. Keeping 70+ modules consistent across Android, iOS and web teaches you a lot about where shared code helps and where it gets in the way.",
    "Leading hasn't replaced coding for me. I still build features, review the hard PRs and chase the odd bugs. I use AI tools every day, mostly Codex and Claude Code, and I review everything they produce before it ships.",
  ],
};
