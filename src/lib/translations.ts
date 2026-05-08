export const translations = {
  // Navbar
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    about: { en: "About", ar: "عني" },
    skills: { en: "Skills", ar: "المهارات" },
    experience: { en: "Experience", ar: "الخبرة" },
    certificates: { en: "Certificates", ar: "الشهادات" },
    projects: { en: "Projects", ar: "المشاريع" },
    contact: { en: "Contact", ar: "التواصل" },
  },

  // Hero
  hero: {
    greeting: { en: "HELLO, WORLD", ar: "مرحباً بالعالم" },
    nameFirst: { en: "Omar", ar: "عمر" },
    nameLast: { en: "Al-Jazaa", ar: "الجزاع" },
    bio: {
      en: "I'm a 2nd-year IT student with a deep passion for cybersecurity and back-end development. I break things to understand how they work — ethically. Currently sharpening my skills through TryHackMe, Python tooling, and real-world projects.",
      ar: "أنا طالب تكنولوجيا معلومات في السنة الثانية، أملك شغفاً عميقاً بالأمن السيبراني وتطوير الواجهات الخلفية. أحاول كسر الأشياء لفهم كيفية عملها — بشكل أخلاقي. أطور مهاراتي حالياً عبر TryHackMe، وأدوات Python، والمشاريع الواقعية.",
    },
    viewWork: { en: "View My Work", ar: "شاهد أعمالي" },
    contactMe: { en: "Contact Me", ar: "تواصل معي" },
    downloadCV: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
    scroll: { en: "SCROLL", ar: "تمرير" },
  },

  // About
  about: {
    title: { en: "About Me", ar: "نبذة عني" },
    p1: {
      en: "I'm Omar Al-Jazaa, a Computer Science student from Syria specializing in Information Technology and cybersecurity. My journey started with back-end development, and it quickly evolved into a fascination with how systems can be attacked — and defended.",
      ar: "أنا عمر الجزاع، طالب علوم حاسوب من سوريا متخصص في تكنولوجيا المعلومات والأمن السيبراني. بدأت رحلتي مع تطوير الواجهات الخلفية، ثم سرعان ما تطورت إلى اهتمام بكيفية مهاجمة الأنظمة — والدفاع عنها.",
    },
    p2: {
      en: "I spend my time building Python security tools, practicing on TryHackMe, and learning everything from Linux internals to web application vulnerabilities. I believe that the best defenders think like attackers.",
      ar: "أقضي وقتي في بناء أدوات أمان Python، والتدرب على TryHackMe، وتعلم كل شيء من أساسيات Linux إلى ثغرات تطبيقات الويب. أؤمن بأن أفضل المدافعين يفكرون مثل المهاجمين.",
    },
    stats: {
      years: { en: "Years Learning", ar: "سنوات تعلم" },
      projects: { en: "Projects Built", ar: "مشروع مبني" },
      certs: { en: "Certs \u0026 Courses", ar: "شهادة ودورة" },
    },
    code: {
      name: { en: '"Omar Al-Jazaa"', ar: '"عمر الجزاع"' },
      role: { en: '["Security Enthusiast", "Back-End Dev"]', ar: '["متحمس أمن", "مطور باك-إند"]' },
      location: { en: '"Syria', ar: '"سوريا' },
      skills: { en: '["Python", "Linux", "Burp Suite", "Docker"]', ar: '["Python", "Linux", "Burp Suite", "Docker"]' },
      learning: { en: '["OWASP Top 10", "Networking", "Pentesting"]', ar: '["OWASP Top 10", "شبكات", "اختبار اختراق"]' },
      passion: { en: '"Breaking things ethically 🔒"', ar: '"كسر الأشياء بأخلاقيات 🔒"' },
      goal: { en: '"Land a role in Cybersecurity"', ar: '"الحصول على وظيفة في الأمن السيبراني"' },
      filename: { en: "omar.js", ar: "omar.js" },
    },
  },

  // Skills
  skills: {
    title: { en: "Skills", ar: "المهارات" },
    items: {
      webAppSecurity: {
        title: { en: "Web App Security", ar: "أمان تطبيقات الويب" },
        desc: { en: "OWASP Top 10, XSS, SQLi, IDOR, auth flaws", ar: "OWASP Top 10، XSS، SQLi، IDOR، عيوب المصادقة" },
      },
      linuxCli: {
        title: { en: "Linux \u0026 CLI", ar: "Linux و CLI" },
        desc: { en: "Daily driver for pentesting and automation", ar: "الأداة اليومية لاختبار الاختراق والأتمتة" },
      },
      pythonDev: {
        title: { en: "Python Development", ar: "تطوير Python" },
        desc: { en: "Security tooling, automation, back-end scripts", ar: "أدوات الأمان، الأتمتة، سكربتات الباك-إند" },
      },
      networking: {
        title: { en: "Networking", ar: "الشبكات" },
        desc: { en: "TCP/IP, DNS, HTTP/HTTPS, packet analysis", ar: "TCP/IP، DNS، HTTP/HTTPS، تحليل الحزم" },
      },
      dockerLabs: {
        title: { en: "Docker \u0026 Labs", ar: "Docker ومعامل الاختبار" },
        desc: { en: "Isolated environments for security testing", ar: "بيئات معزولة لاختبار الأمان" },
      },
      osintRecon: {
        title: { en: "OSINT \u0026 Recon", ar: "الاستخبارات المفتوحة والاستطلاع" },
        desc: { en: "Passive reconnaissance and information gathering", ar: "الاستطلاع السلبي وجمع المعلومات" },
      },
    },
    toolsLabel: { en: "TOOLS \u0026 TECHNOLOGIES", ar: "الأدوات والتقنيات" },
    collapseTools: { en: "Collapse tools", ar: "طي الأدوات" },
    expandTools: { en: "Expand tools", ar: "توسيع الأدوات" },
  },

  // Experience
  experience: {
    title: { en: "Experience", ar: "الخبرة" },
    entries: [
      {
        date: { en: "2024 – Present", ar: "2024 – حتى الآن" },
        title: { en: "Self-Taught Security Learner", ar: "متعلم أمن ذاتي" },
        highlight: { en: "TryHackMe \u0026 Online Platforms", ar: "TryHackMe والمنصات الإلكترونية" },
        summary: {
          en: "Dedicated to building a strong foundation in offensive security through hands-on practice, real-world labs, and structured learning paths.",
          ar: "مكرس لبناء أساس قوي في الأمن الهجومي من خلال الممارسة العملية، والمعامل الواقعية، ومسارات التعلم المنظمة.",
        },
        bullets: [
          { en: "Completed multiple TryHackMe learning paths (Pre-Security, SOC Level 1, Jr Pentester)", ar: "أنهيت مسارات تعلم متعددة على TryHackMe (Pre-Security، SOC Level 1، Jr Pentester)" },
          { en: "Practicing web app vulnerabilities: XSS, SQLi, IDOR, broken authentication", ar: "أتدرب على ثغرات تطبيقات الويب: XSS، SQLi، IDOR، مصادقة معطلة" },
          { en: "Studying networking fundamentals: TCP/IP, DNS, HTTP, packet analysis", ar: "أدرس أساسيات الشبكات: TCP/IP، DNS، HTTP، تحليل الحزم" },
          { en: "Documenting findings and writeups on GitHub", ar: "أوثق النتائج والتقارير على GitHub" },
        ],
        tags: ["TryHackMe", "OWASP", "Networking", "Linux", "Burp Suite"],
      },
      {
        date: { en: "2023 – Present", ar: "2023 – حتى الآن" },
        title: { en: "Back-End Developer (Self-Taught)", ar: "مطور باك-إند (ذاتي التعلم)" },
        highlight: { en: "Python \u0026 API Development", ar: "Python وتطوير واجهات البرمجة" },
        summary: {
          en: "Building practical applications with Python while applying security best practices in every project from day one.",
          ar: "أبني تطبيقات عملية باستخدام Python مع تطبيق أفضل ممارسات الأمان في كل مشروع من اليوم الأول.",
        },
        bullets: [
          { en: "Built CLI security tools including a password strength analyzer", ar: "بنيت أدوات أمان CLI بما في ذلك محلل قوة كلمات المرور" },
          { en: "Developed Python automation scripts for file and system management", ar: "طورت سكربتات أتمتة Python لإدارة الملفات والأنظمة" },
          { en: "Studying REST API design and secure coding practices", ar: "أدرس تصميم REST API وممارسات البرمجة الآمنة" },
          { en: "Using Docker for isolated development and testing environments", ar: "أستخدم Docker لبيئات التطوير والاختبار المعزولة" },
        ],
        tags: ["Python", "Docker", "REST API", "Git", "Linux"],
      },
      {
        date: { en: "2023 – Present", ar: "2023 – حتى الآن" },
        title: { en: "IT / Cybersecurity Student", ar: "طالب تكنولوجيا معلومات / أمن سيبراني" },
        highlight: { en: "University — Syria", ar: "جامعة — سوريا" },
        summary: {
          en: "Currently in my 2nd year studying Information Technology with a focus on cybersecurity as my primary career direction.",
          ar: "أنا حالياً في سنتي الثانية أدرس تكنولوجيا المعلومات مع التركيز على الأمن السيبراني كاتجاه مهني رئيسي.",
        },
        bullets: [
          { en: "Core coursework: Networking, Operating Systems, Programming fundamentals", ar: "المواد الأساسية: الشبكات، أنظمة التشغيل، أساسيات البرمجة" },
          { en: "Applying academic knowledge through personal projects and labs", ar: "أطبق المعرفة الأكاديمية من خلال المشاريع الشخصية والمعامل" },
          { en: "Preparing application for international IT/Cybersecurity scholarship", ar: "أحضر طلباً للحصول على منحة دولية في تكنولوجيا المعلومات/الأمن السيبراني" },
        ],
        tags: ["Networking", "OS", "Algorithms", "Cybersecurity"],
      },
    ],
  },

  // Certificates
  certificates: {
    title: { en: "Certificates", ar: "الشهادات" },
    groups: {
      tryhackme: { en: "🏆 TryHackMe", ar: "🏆 TryHackMe" },
      cisco: { en: "🌐 Cisco", ar: "🌐 Cisco" },
      google: { en: "📘 Google / Coursera", ar: "📘 Google / Coursera" },
    },
    comingSoon: { en: "Certificate Name (Coming Soon)", ar: "اسم الشهادة (قريباً)" },
    ciscoCert: { en: "Cisco Certificate (Coming Soon)", ar: "شهادة Cisco (قريباً)" },
    googleCert: { en: "Google/Coursera Certificate (Coming Soon)", ar: "شهادة Google/Coursera (قريباً)" },
  },

  // Education
  education: {
    title: { en: "Education \u0026 Languages", ar: "التعليم واللغات" },
    degree: {
      en: "Bachelor's in Information Technology / Cybersecurity",
      ar: "بكالوريوس تكنولوجيا المعلومات / الأمن السيبراني",
    },
    university: { en: "University — Syria", ar: "جامعة — سوريا" },
    yearRange: { en: "2023 – Present (2nd Year)", ar: "2023 – حتى الآن (السنة الثانية)" },
    languagesTitle: { en: "Languages", ar: "اللغات" },
    languages: {
      arabic: { en: "Arabic", ar: "العربية" },
      arabicLevel: { en: "Native (اللغة الأم)", ar: "اللغة الأم" },
      english: { en: "English", ar: "الإنجليزية" },
      englishLevel: { en: "Very Good (B2+)", ar: "جيد جداً (B2+)" },
    },
  },

  // Tools
  tools: {
    title: { en: "Tools", ar: "الأدوات" },
    columns: {
      offensive: { en: "Offensive / Security", ar: "الهجوم / الأمان" },
      dev: { en: "Development \u0026 Productivity", ar: "التطوير والإنتاجية" },
    },
  },

  // Projects
  projects: {
    title: { en: "Projects", ar: "المشاريع" },
    viewGithub: { en: "View on GitHub →", ar: "عرض على GitHub →" },
    items: {
      passwordAnalyzer: {
        title: { en: "password-analyzer", ar: "password-analyzer" },
        desc: {
          en: "A Python CLI tool that analyzes password strength, detects common patterns, and gives actionable improvement suggestions. Built to understand how attackers evaluate credentials.",
          ar: "أداة Python CLI تحلل قوة كلمات المرور، تكتشف الأنماط الشائعة، وتقدم اقتراحات تحسين قابلة للتنفيذ. بنيت لفهم كيف يقيم المهاجمون بيانات الاعتماد.",
        },
      },
      handPython: {
        title: { en: "hand_python", ar: "hand_python" },
        desc: {
          en: "A growing collection of Python automation scripts covering file management, system utilities, and security helpers. Each script is documented and built for real-world use.",
          ar: "مجموعة متنامية من سكربتات أتمتة Python تشمل إدارة الملفات، أدوات النظام، ومساعدات الأمان. كل سكربت موثق ومبني للاستخدام الواقعي.",
        },
      },
      linuxScripts: {
        title: { en: "Linux Scripts / Automation", ar: "سكربتات Linux / الأتمتة" },
        desc: {
          en: "A set of Bash and Python scripts for Linux system administration, network scanning utilities, and task automation. Built for real sysadmin and pentesting workflows.",
          ar: "مجموعة من سكربتات Bash وPython لإدارة أنظمة Linux، أدوات فحص الشبكة، وأتمتة المهام. مبنية لسير عمل مسؤولي الأنظمة واختبارات الاختراق الواقعية.",
        },
      },
      backendApi: {
        title: { en: "Web App — Backend API", ar: "تطبيق ويب — Backend API" },
        desc: {
          en: "RESTful API projects built with Python, focused on clean architecture, proper routing, and security-conscious design practices from the ground up.",
          ar: "مشاريع RESTful API مبنية بـ Python، تركز على بنية نظيفة، توجيه صحيح، وممارسات تصميم واعية بالأمان من الأساس.",
        },
      },
      portfolio: {
        title: { en: "Portfolio Website", ar: "موقع المحفظة الشخصية" },
        desc: {
          en: "This very site — a dark hacker-aesthetic personal portfolio. Features typing animations, glassmorphism cards, and full mobile responsiveness.",
          ar: "هذا الموقع نفسه — محفظة شخصية ذات تصميم هاكر داكن. يتميز بحركات كتابة، بطاقات زجاجية، واستجابة كاملة للجوال.",
        },
      },
    },
  },

  // Contact
  contact: {
    title: { en: "Contact", ar: "التواصل" },
    labels: {
      email: { en: "Email", ar: "البريد الإلكتروني" },
      linkedin: { en: "LinkedIn", ar: "LinkedIn" },
      github: { en: "GitHub", ar: "GitHub" },
      twitter: { en: "X (Twitter)", ar: "X (تويتر)" },
    },
    tryhackmeTitle: { en: "Find me on TryHackMe", ar: "جدني على TryHackMe" },
    tryhackmeAlt: { en: "AlJazaa.CyberMan TryHackMe profile", ar: "ملف AlJazaa.CyberMan على TryHackMe" },
  },

  // Footer
  footer: {
    tagline: { en: "Breaking systems to build a safer world.", ar: "نكسر الأنظمة لنبني عالماً أكثر أماناً." },
    copyright: { en: "© 2025 Omar Al-Jazaa — Built with ☕ \u0026 curiosity", ar: "© 2025 عمر الجزاع — مبني بال☕ والفضول" },
  },

  // Typing effect roles
  roles: {
    securityEnthusiast: { en: "Security Enthusiast", ar: "متحمس أمن" },
    backendDev: { en: "Back-End Developer", ar: "مطور باك-إند" },
    ctfPlayer: { en: "CTF Player", ar: "لاعب CTF" },
    pythonDev: { en: "Python Developer", ar: "مطور Python" },
    linuxLover: { en: "Linux Lover", ar: "محب Linux" },
  },

  // Language toggle
  langToggle: {
    en: { en: "EN", ar: "EN" },
    ar: { en: "AR", ar: "ع" },
    ariaEn: { en: "Switch to English", ar: "التبديل إلى الإنجليزية" },
    ariaAr: { en: "Switch to Arabic", ar: "التبديل إلى العربية" },
  },
} as const;

export type Translations = typeof translations;

