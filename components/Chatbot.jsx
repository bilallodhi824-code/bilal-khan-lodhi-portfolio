"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, liveProjects } from "@/lib/portfolio";
import { Bot, X, Send, Sparkles } from "./Icons";

const jt = liveProjects;

function Ta(e) {
  if (!e) return "Project not found in archive.";
  const n = e.apkUrl ? `\n- 📥 **Android APK:** [Download ${e.downloadFileName || "APK"}](${e.apkUrl})` : "";
  const r = e.liveUrl ? `\n- 🌐 **Live Demo:** [${e.liveUrl}](${e.liveUrl})` : "";
  const i = e.githubUrl ? `\n- 💻 **GitHub:** [Repository Link](${e.githubUrl})` : "";
  return `🚀 **${e.title}** (${e.badge || e.category}):\n${e.description}\n\n- **Tech Stack:** ${e.tags.join(", ")}${r}${n}${i}`;
}

function In(heading, list) {
  if (!list.length) return "No matching projects found.";
  const r = list.slice(0, 4).map(i => `- **[${i.title}](${i.liveUrl})** — ${i.tags.slice(0, 3).join(", ")} (${i.badge || i.category})`).join("\n");
  return `${heading}:\n\n${r}\n\n*Aap kisi bhi project ka naam likh kar uski mukammal details pooch sakte hain!*`;
}

const V = profile;

function fj(e) {
  const t = e.trim();
  const n = t.toLowerCase();
  const r = /[\u0600-\u06FF]/.test(t);
  const i = /\b(kya|hai|hain|kaise|kese|batao|bata|karo|bhai|bro|mujhe|apka|uska|bilal|konsa|konse|kitne|kitna|naam|karta|kaam|chahiye|in|bare|kahan|kaha|shukriya|acha|theek|bolo|rabta|paisa|pese|paise|fees|rate)\b/i.test(n);

  // Greetings
  if (/^(hi|hello|hey|salam|assalam|aoa|hola|namaste|sup|yo|kese ho|kaise ho)\b/i.test(n)) {
    return r
      ? `وعلیکم السلام! میں محمد بلال خان لودھی کا **BK AI Assistant** ہوں۔ 
میں آپ کو بلال خان کے تمام **20 لائیو پراجیکٹس**، تصدیق شدہ میٹا سرٹیفیکیشنز (Meta Certified Front-End)، ٹیکنالوجیز (Next.js 15, React 19, Flutter, .NET)، اور ہائرنگ کے بارے میں مکمل معلومات دے سکتا ہوں۔ آپ کیا جاننا چاہتے ہیں؟`
      : i
      ? `Walaikum Assalam! Main Muhammad Bilal Khan Lodhi ka official **BK AI Assistant** hoon 🤖.
Main Bilal ke **20+ live systems**, Meta Front-End Certification, Next.js 15 App Router architecture, aur freelance / senior role availability ke bare me sab janta hoon.

Aap mujh se projects, Meta certificate, tech stack, CV, ya rabta (contact) ke bare me kuch bhi pooch sakte hain!`
      : `Hello! I am Bilal's official **BK AI Assistant** 🤖.
I have complete intelligence on Muhammad Bilal Khan Lodhi's **20+ live systems**, Meta Certified Front-End engineering credentials, Next.js 15 App Router architecture, and enterprise availability.

How can I assist you with Bilal's work or hiring today?`;
  }

  // Meta Certifications & Credentials
  if (/meta|certificate|coursera|certified|credential|degree|gdcmc|sanad/i.test(n)) {
    return r
      ? `📜 **محمد بلال خان لودھی کے تصدیق شدہ اسناد:**

1. **Meta Certified Front-End Developer** (Credential ID: \`META-FED-8240-2026\`)
   - میٹا پلیٹ فارمز اور کورسیرا کی باقاعدہ تصدیق شدہ اسناد (React 19, JavaScript algorithms, UI/UX Systems)۔
   - *حفاظتی اصولوں کے پیش نظر پرسنل کریڈینشلز کی خام PDF فائل پبلک ڈاؤن لوڈ کے لیے نہیں رکھی گئی؛ تصدیق میٹا کریڈینشل ID کے ذریعے کی جا سکتی ہے۔*

2. **Applied AI Prompt Engineering** (Credential ID: \`AHCA-VECTONIX-2026-BK\`)
   - تصدیق شدہ اسناد برائے پرامپٹ انجینئرنگ اور AI سسٹم ڈیزائن (الرد اکیڈمی و ویکٹونکس)۔

3. **Govt. Degree Science & Commerce College Malir Cantt (GDCMC 1979)**`
      : i
      ? `📜 **Bilal Ke Verified Credentials (Know-how):**

1. **Meta Certified Front-End Developer** (\`META-FED-8240-2026\`)
   - Meta & Coursera ka official verified professional certificate (React 19, Front-End Architecture, JavaScript Performance).
   - *Privacy aur security compliance ki wajah se direct PDF download ke bajaye unka credential officially ID ke zariye verify kiya jata hai.*

2. **Applied AI Prompt Engineering** (\`AHCA-VECTONIX-2026-BK\`)
   - Al-Hakim Computer Academy & Vectonix verified training.

3. **GDCMC Institutional Record** (Govt. Degree College Malir Cantt)`
      : `📜 **Bilal's Verified Professional Credentials:**

1. **Meta Certified Front-End Developer** (Credential ID: \`META-FED-8240-2026\`)
   - Authorized by Meta Platforms & Coursera covering React 19, JavaScript algorithms, state architecture, and core web vitals.
   - *For personal security and privacy of credentials, raw PDF downloads are restricted. Verification is provided through official Meta credential records.*

2. **Applied AI Prompt Engineering** (Credential ID: \`AHCA-VECTONIX-2026-BK\`)
   - Awarded by Al-Hakim Computer Academy & Vectonix in advanced AI workflows.

3. **Govt. Degree College Malir Cantt (GDCMC 1979)** institutional engineering foundation.`;
  }

  // Contest-Azm Award / Gold Medal
  if (/contest-azm|azm|winner|award|gold medal|competition|inam|medal|trophy|first place|1st place/i.test(n)) {
    return r
      ? `🏆 **کونٹیسٹ عزم میں پہلی پوزیشن اور گولڈ میڈل!**

محمد بلال خان لودھی کے پراجیکٹ پورٹ فولیو میں شامل **Green Life** ایپ نے نیشنل سافٹ ویئر انوویشن ڈیفنس میں **1st Place Gold Medal** جیتا:
- **پراجیکٹ:** **[Green Life](https://green-life-eco-portal.vercel.app/)** (کلائمیٹ سسٹین ایبلٹی موبائل ایپ)
- **ٹیکنالوجی:** Flutter, Dart, Firebase, Android Native Engine
- **لائیو ڈیمو:** [green-life-eco-portal.vercel.app](https://green-life-eco-portal.vercel.app/)
- **اینڈرائیڈ APK:** آپ براہ راست [GreenLife.apk](/GreenLife.apk) ڈاؤن لوڈ کر کے ٹیسٹ کر سکتے ہیں!`
      : i
      ? `🏆 **1st Place Gold Winner — Contest-Azm!**

Portfolio me featured **Green Life** project ne National Software Innovation Defense competition me **1st Place Gold Medal** jeeta:
- **Project:** **[Green Life](https://green-life-eco-portal.vercel.app/)** (Eco-Sustainability Mobile App)
- **Tech Stack:** Flutter, Dart, Android APK, Firebase, Real-Time Eco Algorithms
- **Live Demo:** [green-life-eco-portal.vercel.app](https://green-life-eco-portal.vercel.app/)
- **Android APK:** Aap direct [Download GreenLife.apk](/GreenLife.apk) se install karke chala sakte hain!`
      : `🏆 **1st Place Gold Winner — Contest-Azm!**

Featured in Bilal's portfolio, **Green Life** secured the **1st Place Gold Medal** at the National Software Innovation Defense competition:
- **Project:** **[Green Life](https://green-life-eco-portal.vercel.app/)** — an eco-sustainability mobile ecosystem.
- **Technologies:** Flutter, Dart, Firebase, Android Native Engine, Offline Caching.
- **Live Portal:** [green-life-eco-portal.vercel.app](https://green-life-eco-portal.vercel.app/)
- **Direct APK:** Verified Android package available at [Download GreenLife.apk](/GreenLife.apk)!`;
  }

  // Who is Bilal / Bio
  if (/who is|about bilal|background|bio|kon hai|kaun hai|koun hai|bare me batao|philosophy|lodhi|intro/i.test(n)) {
    return r
      ? `👨‍💻 **محمد بلال خان لودھی کے بارے میں:**

بلال خان ایک **Senior Full-Stack & Next.js Architect** اور انجینئر ہیں:
- **تجربہ و پراجیکٹس:** 6+ سال کا تجربہ، 20+ لائیو ویب اور موبائل سسٹمز کامیابی سے ڈیپلائے کیے۔
- **اہم سنگ میل:** Meta Certified Front-End Developer (Coursera/Meta)۔
- **ماہرانہ مہارتیں:** Next.js 15, React 19, TypeScript, Tailwind CSS, Flutter, ASP.NET Core (.NET 8), PHP Laravel, Node.js, PostgreSQL, MySQL۔
- **حالت:** نئے پراجیکٹس، سینئر رولز، اور فری لانس کام کے لیے دستیاب ہیں (Open to Work & Freelance)۔`
      : i
      ? `👨‍💻 **Muhammad Bilal Khan Lodhi ke Bare Me:**

Bilal ek **Senior Full-Stack & Next.js Architect** hain:
- **Track Record:** 6+ years experience, 20+ production-grade web systems aur mobile applications live deploy kiye hain.
- **Key Credential:** Meta Certified Front-End Developer (\`META-FED-8240-2026\`).
- **Core Stacks:** Next.js 15, React 19, TypeScript, Flutter, Dart, Node.js, PostgreSQL, Prisma ORM, C# ASP.NET Core, PHP Laravel.
- **Philosophy:** Clean architecture, 100/100 Core Web Vitals, sub-18ms edge latency, aur seamless user experience.
- **Availability:** **Open for Senior Roles & Freelance Projects** worldwide!`
      : `👨‍💻 **About Muhammad Bilal Khan Lodhi:**

Bilal is a **Senior Full-Stack & Next.js Architect** based in Karachi, Pakistan:
- **Engineering Track Record:** 6+ years shipping high-performance production platforms, 20+ live deployed systems, and verified 100/100 Core Web Vitals.
- **Industry Credential:** Meta Certified Front-End Developer authorized by Meta Platforms & Coursera.
- **Specializations:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, Flutter, Node.js, PostgreSQL (Prisma), and Docker.
- **Current Status:** **Available for Senior Engineering Roles & High-Impact Freelance** worldwide!`;
  }

  // Resume / CV
  if (/cv|resume|bio data|biodata|document|pdf|download cv/i.test(n)) {
    return i
      ? `📄 **Bilal Ka Verified Profile & Accreditation:**

Bilal Khan Lodhi ka verified professional track record aur complete profile is website par darj hai:
- **Title:** Senior Full-Stack & Next.js Architect
- **Meta Credential ID:** \`META-FED-8240-2026\`
- **Live Systems:** 20+ verified production applications (is portfolio me sab live tested hain)
- **Direct Contact:** Formal credentials confirmation ke liye unke direct WhatsApp ([${profile.whatsappDisplay}](${profile.whatsappLink})) ya email ([${profile.email}](mailto:${profile.email})) par reach out karein.

*Note: Security compliance aur privacy ke tehat credentials live portfolio aur verified credential records ke zariye confirm kiye jaate hain.*`
      : `📄 **Official Credentials & Profile:**

Muhammad Bilal Khan Lodhi's engineering track record and verified credentials:
- **Role:** Senior Full-Stack & Next.js Architect
- **Meta Platforms Certification ID:** \`META-FED-8240-2026\`
- **Production Systems:** 20+ live full-stack deployments with verified 100/100 Core Web Vitals.
- **Verification Inquiries:** Reach out directly via WhatsApp ([${profile.whatsappDisplay}](${profile.whatsappLink})) or email ([${profile.email}](mailto:${profile.email})) for official credentials confirmation.

*Note: To protect private credentials from unauthorized replication, direct PDF downloads are restricted; verified accreditation is provided via official records.*`;
  }

  // Mobile Apps & APKs
  if (/mobile|apk|android|flutter|dart|app download|ios|kinetix|green life/i.test(n)) {
    return n.includes("kinetix")
      ? `💪 **Kinetix Fitness Tracker (Flutter Mobile App):**
Personalized workout routines, daily calorie tracking, hydration logs, and milestones.
- **Tech Stack:** Flutter, Dart, Android APK, SQLite, Firebase
- **Live Demo Web:** [kinetix-app-seven.vercel.app](https://kinetix-app-seven.vercel.app)
- **Direct APK:** [Download kinetix_fitness_app.apk](/kinetix_fitness_app.apk)
- **GitHub:** [github.com/bilallodhi824-code](https://github.com/bilallodhi824-code)`
      : i
      ? `📱 **Flutter Mobile Apps & Direct APKs:**

1. **[Green Life](https://green-life-eco-portal.vercel.app/)** *(Contest-Azm 1st Place Gold Winner)*
   - Eco-sustainability mobile ecosystem with offline caching & climate impact metrics.
   - 📥 **APK:** [Download GreenLife.apk](/GreenLife.apk)
   - 🌐 **Live Web:** [green-life-eco-portal.vercel.app](https://green-life-eco-portal.vercel.app/)

2. **[Kinetix Fitness Tracker](https://kinetix-app-seven.vercel.app)**
   - High-performance fitness companion with SQLite offline-first sync & workout logs.
   - 📥 **APK:** [Download kinetix_fitness_app.apk](/kinetix_fitness_app.apk)
   - 🌐 **Live Web:** [kinetix-app-seven.vercel.app](https://kinetix-app-seven.vercel.app)`
      : `📱 **Flutter Mobile Applications & Android APKs:**

1. **[Green Life](https://green-life-eco-portal.vercel.app/)** *(Contest-Azm 1st Place Gold Winner)*
   - Eco-sustainability cross-platform app featuring climate impact algorithms and offline caching.
   - 📥 **APK:** [Download GreenLife.apk](/GreenLife.apk)
   - 🌐 **Live:** [green-life-eco-portal.vercel.app](https://green-life-eco-portal.vercel.app/)

2. **[Kinetix Fitness Tracker](https://kinetix-app-seven.vercel.app)**
   - Offline-first workout companion with daily calorie tracking and hydration logging.
   - 📥 **APK:** [Download kinetix_fitness_app.apk](/kinetix_fitness_app.apk)
   - 🌐 **Live:** [kinetix-app-seven.vercel.app](https://kinetix-app-seven.vercel.app)`;
  }

  // Services
  if (/service|services|kya kar sakte ho|kya bana sakte|offer|kya kaam|can you build|capabilities/i.test(n)) {
    return i
      ? `🛠️ **Bilal Ki Core Engineering Services:**

1. 🌐 **Next.js 15 & React 19 Architecture:** High-concurrency SaaS dashboards, e-commerce engines, and edge-rendered portals with 100/100 Core Web Vitals.
2. 📱 **Cross-Platform Mobile Apps:** Flutter & Dart se high-performance Android & iOS apps, offline-first SQLite sync aur release-ready APKs.
3. ⚙️ **Enterprise Backend & REST / WebSockets:** Node.js (Express), C# ASP.NET Core (.NET 8), PHP Laravel se secure high-throughput APIs.
4. 🗄️ **Database & Cloud DevOps:** PostgreSQL (Prisma ORM), MySQL, MongoDB, Redis, Docker, aur Vercel Edge continuous deployment.`
      : `🛠️ **Engineering Services Offered:**

1. 🌐 **Next.js 15 & React 19 Architecture:** High-concurrency SaaS dashboards, client portals, and edge-rendered web applications with verified 100/100 Core Web Vitals.
2. 📱 **Cross-Platform Mobile Apps:** Native-feel Flutter & Dart apps with offline SQLite sync, biometric authentication, and production APKs.
3. ⚙️ **Enterprise Backend & APIs:** Robust microservices in Node.js, C# ASP.NET Core (.NET 8), PHP (Laravel), and real-time WebSockets.
4. 🗄️ **Databases & Cloud DevOps:** Relational schema modeling (PostgreSQL, Prisma ORM, MSSQL, MySQL), Docker containers, and Vercel Edge releases.`;
  }

  // Skills / Stack
  if (/skill|skills|tech|stack|language|framework|c#|\.net|node|react|angular|laravel|php|python|database|sql|next/i.test(n)) {
    return i
      ? `⚡ **Bilal Ke Core Technical Stacks:**

- **Frontend:** Next.js 15 (App Router, Server Actions), React 19, TypeScript, Tailwind CSS, Zustand, Framer Motion.
- **Mobile:** Flutter & Dart, Android APK packaging, offline SQLite sync.
- **Backend & Systems:** Node.js, Express, C# (.NET 8 / ASP.NET Core), PHP (Laravel), Python, WebSockets.
- **Databases:** PostgreSQL, Prisma ORM, Microsoft SQL Server (SSMS), MySQL, SQLite, MongoDB, Firebase.
- **DevOps & Cloud:** Git, GitHub, Vercel Edge, Docker, Linux, Postman.
- **Specialty:** 100/100 Core Web Vitals, zero layout shift (0 CLS), sub-18ms edge latency.`
      : `⚡ **Core Technical Stacks & Skills:**

- **Frontend Engineering:** Next.js 15, React 19, TypeScript, Tailwind CSS, Zustand, Framer Motion.
- **Mobile Development:** Flutter & Dart, native Android engine, offline caching.
- **Backend Systems:** Node.js / Express, C# (.NET Core / ASP.NET 8), PHP / Laravel, RESTful & WebSocket streaming.
- **Databases & Storage:** PostgreSQL (Prisma ORM), MySQL, Microsoft SQL Server, SQLite, MongoDB, Firebase.
- **DevOps & Tooling:** Docker, Vercel Edge, Git, Linux, Postman, CI/CD.
- **Performance:** 100/100 Core Web Vitals and zero cumulative layout shift.`;
  }

  // Contact / Hire
  if (/contact|hire|rabta|email|phone|whatsapp|call|freelance|reach|talk|start project|budget|rate|paisa|cost|fees/i.test(n)) {
    return r
      ? `📬 **بلال خان سے براہ راست رابطہ کریں:**

محمد بلال خان لودھی سینئر انجینئرنگ رولز، کسٹم سافٹ ویئر، اور کنسلٹنگ کے لیے دستیاب ہیں:
- 📱 **واٹس ایپ:** [${profile.whatsappDisplay}](${profile.whatsappLink})
- ✉️ **ای میل:** [${profile.email}](mailto:${profile.email})
- 💼 **لنکڈ ان:** [LinkedIn Profile](${profile.linkedin})
- 💻 **گٹ ہب:** [GitHub Profile](${profile.github})
- 📜 **تصدیق شدہ سند:** Meta Certified (\`META-FED-8240-2026\`)

آپ واٹس ایپ پر ایک کلک سے ڈائریکٹ میسج بھیج سکتے ہیں!`
      : i
      ? `📬 **Bilal Se Direct Rabta Karein:**

Aap senior engineering roles, freelance projects, Next.js architecture ya technical consultation ke liye direct contact kar sakte hain:
- 📱 **WhatsApp:** [${profile.whatsappDisplay}](${profile.whatsappLink})
- ✉️ **Email:** [${profile.email}](mailto:${profile.email})
- 💼 **LinkedIn:** [Bilal on LinkedIn](${profile.linkedin})
- 💻 **GitHub:** [bilallodhi824-code](${profile.github})
- 📜 **Credential:** Meta Certified (\`META-FED-8240-2026\`)

*Aap isi waqt upar diye gaye WhatsApp link par click karke direct chat shuru kar sakte hain!*`
      : `📬 **Connect Directly with Bilal:**

Muhammad Bilal Khan Lodhi is available for senior full-stack roles, Next.js architecture consulting, and high-impact enterprise projects:
- 📱 **Direct WhatsApp:** [${profile.whatsappDisplay}](${profile.whatsappLink})
- ✉️ **Direct Email:** [${profile.email}](mailto:${profile.email})
- 💼 **LinkedIn:** [Bilal on LinkedIn](${profile.linkedin})
- 💻 **GitHub:** [bilallodhi824-code](${profile.github})
- 📜 **Credential:** Meta Certified (\`META-FED-8240-2026\`)

*Click the WhatsApp link above to initiate an instant conversation!*`;
  }

  // Specific project lookup
  for (const s of jt) {
    const o = s.title.toLowerCase();
    const hasWord = o.split(/\s+/).filter(d => d.length > 3).some(d => n.includes(d));
    if (n.includes(o) || (hasWord && (n.includes("project") || n.includes("app") || n.includes("portal") || n.includes("batao") || n.includes("link") || n.includes("what is")))) {
      return Ta(s);
    }
  }

  // Category search
  if (/e-commerce|ecommerce|shop|store|cart/i.test(n)) {
    const s = jt.filter(o => o.category.toLowerCase().includes("commerce") || o.category.toLowerCase().includes("retail") || o.title.toLowerCase().includes("scooply") || o.title.toLowerCase().includes("beshopable") || o.title.toLowerCase().includes("luxe"));
    return In("🛒 E-Commerce & Retail Systems", s);
  }
  if (/real estate|property|houses|estate/i.test(n)) {
    const s = jt.filter(o => o.title.toLowerCase().includes("estates") || o.title.toLowerCase().includes("apexluxe"));
    return In("🏢 Real Estate Platforms", s);
  }
  if (/ai |artificial intelligence|studio|prompt/i.test(n)) {
    const s = jt.filter(o => o.filterGroup === "ai");
    return In("🤖 AI & Studio Systems", s);
  }

  // Fallback
  return i
    ? `Main samajh gaya! Main Muhammad Bilal Khan Lodhi ke bare me in topics par mukammal maloomat de sakta hoon:

- 📜 *"Bilal ki Meta Certification ke bare me batao"*
- 🚀 *"Top live projects list dikhao"*
- 📱 *"Flutter mobile apps aur APK files"*
- ⚡ *"Next.js 15 aur tech stack kya hai?"*
- 📬 *"Bilal se WhatsApp par kaise rabta karein?"*`
    : `I'm happy to help! Here are popular inquiries about Muhammad Bilal Khan Lodhi:

- 📜 *"Tell me about his Meta Certified Front-End credential"*
- 🚀 *"Show his top live production deployments"*
- 📱 *"Show his Flutter mobile apps with APK download links"*
- ⚡ *"What are his strongest Next.js & backend stacks?"*
- 💼 *"How can I hire Bilal or connect on WhatsApp?"*`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      sender: "ai",
      text: `Hello! I am Bilal's **BK AI Assistant** 🤖.

I can answer anything about Muhammad Bilal Khan Lodhi's **20+ live systems**, Meta Front-End Certification, Next.js 15 App Router architecture, and enterprise availability.

*Aap mujh se English, Roman Urdu, ya Urdu me Bilal ke projects, Meta certificate, APKs, ya contact ke bare me pooch sakte hain!*

**Suggested Quick Questions:**
- 📜 *"Tell me about Meta Certification"*
- 📱 *"Show Flutter mobile apps & APKs"*
- 🚀 *"List top live projects"*
- 📬 *"How to contact Bilal on WhatsApp?"*`,
      time: "Just now",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botReplyText = fj(query);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: botReplyText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 400);
  };

  const suggestions = [
    "📜 Meta Certification",
    "📱 Flutter Apps & APKs",
    "⚡ Next.js 15 & Stacks",
    "🚀 Top Live Deployments",
    "📜 Verified Credentials",
    "📬 Contact & WhatsApp",
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
        <motion.button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-burgundy via-burgundy-vibrant to-royal text-white shadow-[0_8px_32px_rgba(155,27,48,0.55)] focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 focus:ring-offset-ink transition-transform"
          aria-label={open ? "Close BK AI Assistant" : "Open BK AI Assistant"}
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-royal-light opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-[#0C0D12] bg-royal" />
          </span>

          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="relative"
              >
                <Bot size={26} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 flex h-[580px] w-[calc(100vw-2rem)] max-w-[420px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#0C0D12]/98 shadow-[0_16px_48px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="relative grid h-10 w-10 place-items-center rounded-2xl border border-burgundy/40 bg-burgundy/15 text-burgundy-light shadow-[0_0_16px_rgba(155,27,48,0.3)]">
                  <Bot size={20} />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0C0D12] bg-royal" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white">BK AI Assistant</h3>
                    <span className="rounded-full bg-royal/20 px-2 py-0.5 text-[10px] font-sans font-bold text-royal-light">
                      v2.5
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Muhammad Bilal Khan Lodhi</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full text-zinc-400 hover:bg-white/10 hover:text-white transition"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto border-b border-white/5 bg-black/40 px-3 py-2 scrollbar-none">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(s)}
                  className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-zinc-300 hover:border-burgundy hover:bg-burgundy/15 hover:text-burgundy-light transition"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-xs sm:text-[13px] leading-relaxed ${
                      m.sender === "user"
                        ? "bg-gradient-to-r from-burgundy to-burgundy-vibrant text-white font-semibold rounded-br-none shadow-[0_4px_16px_rgba(155,27,48,0.4)]"
                        : "border border-white/10 bg-white/[0.05] text-zinc-200 rounded-bl-none prose prose-invert prose-xs"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{m.text}</div>
                  </div>
                  <span className="mt-1 px-1 text-[10px] text-zinc-500 font-sans">{m.time}</span>
                </div>
              ))}

              {typing && (
                <div className="flex items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-zinc-400 w-fit">
                  <Sparkles size={14} className="text-burgundy-light animate-spin" />
                  <span className="text-xs">BK AI is formulating response...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="border-t border-white/10 bg-black/50 p-3 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Bilal, Next.js architecture, Meta certificate..."
                className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-burgundy focus:outline-none focus:ring-1 focus:ring-burgundy"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-r from-burgundy to-royal text-white transition hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
