import React, { useState, useEffect, useRef } from "react";
import {
  Sliders,
  Rocket,
  Code,
  Smartphone,
  Zap,
  TrendingUp,
  Users,
  Award,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Terminal,
  Layers,
  Cpu,
  Database,
  GitBranch,
  Sparkles,
  Menu,
  X,
  Play,
  CheckCircle,
  ArrowRight,
  Star,
  Download,
  Heart,
  MessageSquare,
  Eye,
  ZoomIn,
  ZoomOut,
  Maximize,
} from "lucide-react";

const AndroidPortfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImageModal, setSelectedImageModal] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "impact",
        "testimonials",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skills = [
    {
      icon: Code,
      name: "Kotlin",
      level: 98,
      color: "from-cyan-400 to-purple-500",
      description: "Expert in Kotlin with 8+ years",
    },
    {
      icon: Smartphone,
      name: "Jetpack Compose",
      level: 95,
      color: "from-purple-400 to-pink-500",
      description: "Building modern declarative UIs",
    },
    {
      icon: Layers,
      name: "MVVM/MVI Architecture",
      level: 96,
      color: "from-cyan-500 to-blue-500",
      description: "Scalable app architectures",
    },
    {
      icon: Cpu,
      name: "Performance Optimization",
      level: 94,
      color: "from-purple-500 to-indigo-500",
      description: "Memory & battery optimization",
    },
    {
      icon: Database,
      name: "Room/Coroutines/Flow",
      level: 97,
      color: "from-blue-400 to-cyan-400",
      description: "Async data management",
    },
    {
      icon: GitBranch,
      name: "CI/CD & Testing",
      level: 93,
      color: "from-indigo-400 to-purple-400",
      description: "Automated testing & deployment",
    },
  ];

  const projects = [
    {
      title: "Postify — AI-Powered LinkedIn Growth App",
      description:
        "Postify is an AI-powered LinkedIn growth platform that helps professionals stand out, grow faster, and turn visibility into real opportunities. It combines profile optimization, AI content creation, smart scheduling, and performance analytics into one seamless workflow—removing the guesswork from LinkedIn success. Users can upload their resume to instantly generate an ATS-optimized LinkedIn profile, while the AI engine creates high-quality posts, captions, and outreach messages aligned with LinkedIn best practices. Built-in analytics help track growth and refine strategy over time. Designed for scalability, performance, and exceptional UX, Postify is a product-grade solution—not just another content tool.",
      longDescription:
        "Postify is an AI-powered LinkedIn growth platform that helps professionals stand out, grow faster, and turn visibility into real opportunities. It combines profile optimization, AI content creation, smart scheduling, and performance analytics into one seamless workflow—removing the guesswork from LinkedIn success. Users can upload their resume to instantly generate an ATS-optimized LinkedIn profile, while the AI engine creates high-quality posts, captions, and outreach messages aligned with LinkedIn best practices. Built-in analytics help track growth and refine strategy over time. Designed for scalability, performance, and exceptional UX, Postify is a product-grade solution—not just another content tool.",
      impact: ["2M+ downloads", "4.8★ rating", "40% faster than competitors"],
      tech: [
        "Kotlin",
        "AI integration",
        "API & data handling",
        "Hilt",
        "Firebase",
        "Product-focused development",
      ],
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      metrics: {
        Stability: "99%",
        Precision: "High",
        Experience: "Highly Rated",
      },
      images: [
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766679932/Hotpot_0_l2w3og.png",
          alt: "Positfy Dashboard",
          title: "Dashboard",
          color: "from-cyan-400 to-blue-500",
          icon: TrendingUp,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766679926/Hotpot_1_hliuyc.png",
          alt: "Positfy Analytics",
          title: "Analytics",
          color: "from-blue-400 to-purple-500",
          icon: TrendingUp,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766679929/Hotpot_2_zcimit.png",
          alt: "Positfy Transactions",
          title: "Transactions",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766679928/8_z2rbq7.png",
          alt: "Positfy Reports",
          title: "Reports",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766679925/Hotpot_4_nkpqqk.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766679920/5_xbxjma.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766679923/6_ht6hlq.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766679923/7_vqplt3.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
      ],
      features: [
        "ATS-optimized LinkedIn profile from resume",
        "AI-generated posts & outreach messages",
        "Content scheduling & planning",
        "Engagement & growth analytics",
      ],
      highlights: [
        "All-in-one LinkedIn growth solution",
        "Saves time with AI automation",
        "Clean UI & smooth user experience",
        "Built for scalability",
      ],
    },
    {
      title: "Unilever Enterprise Suite: Powering 4-Country Operations",
      description:
        "Engineered mission-critical Android applications trusted by Unilever across Pakistan, Bangladesh, Thailand, and the Philippines—handling millions in daily transactions. Built an enterprise-grade, multi-app ecosystem that revolutionized Unilever's supply chain operations. From warehouse floors to customer doorsteps, these apps orchestrate seamless logistics across international markets.",
      longDescription:
        "Engineered mission-critical Android applications trusted by Unilever across Pakistan, Bangladesh, Thailand, and the Philippines—handling millions in daily transactions. Built an enterprise-grade, multi-app ecosystem that revolutionized Unilever's supply chain operations. From warehouse floors to customer doorsteps, these apps orchestrate seamless logistics across international markets.",
      impact: ["2M+ downloads", "4.8★ rating", "40% faster than competitors"],
      tech: [
        "Kotlin",
        "AI integration",
        "API & data handling",
        "Hilt",
        "Firebase",
        "Product-focused development",
      ],
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      metrics: {
        Deployed: "4 Countries",
        Stability: "99.5% Crash-Free",
        Performance: "2-Second Load",
      },
      images: [
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766904710/Hotpot_0_fssx5j.png",
          alt: "Positfy Dashboard",
          title: "Dashboard",
          color: "from-cyan-400 to-blue-500",
          icon: TrendingUp,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766904704/Hotpot_1_ufomg1.png",
          alt: "Positfy Analytics",
          title: "Analytics",
          color: "from-blue-400 to-purple-500",
          icon: TrendingUp,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766904759/Hotpot_2_gntmqe.png",
          alt: "Positfy Transactions",
          title: "Transactions",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766904833/5_jjwioy.png",
          alt: "Positfy Reports",
          title: "Reports",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766904793/10_neocup.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766904865/Hotpot_4_as9gxj.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766904902/16_ketwjw.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766904979/15_jyzu19.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766904897/14_fkypvd.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766904810/13_mgxjyg.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
      ],
      features: [
        "Multi-Country Operations",
        "Complete Enterprise Suite",
        "Offline-First Architecture",
        "Enterprise Security",
      ],
      highlights: [
        "Multi-Module Architecture with 15+ Flavors",
        "99.5% Crash-Free Rate",
        "Weekly Multi-Country Releases",
        "70% Faster Deployments",
      ],
    },
    {
      title: "Recipe Expert",
      description:
        "Recipe Expert is a smart cooking companion for home cooks and food enthusiasts. It offers a rich collection of recipes from multiple cuisines, with ingredient-based search to reduce food waste. Users get personalized recommendations, step-by-step instructions, and can upload or share their own recipes. Explore global cuisines and helpful cooking tips. Check the live app on Google Play Store: https://play.google.com/store/apps/details?id=com.hamzadev.recipeexpert.",
      longDescription:
        "Recipe Expert is a smart cooking companion for home cooks and food enthusiasts. It offers a rich collection of recipes from multiple cuisines, with ingredient-based search to reduce food waste. Users get personalized recommendations, step-by-step instructions, and can upload or share their own recipes. Explore global cuisines and helpful cooking tips. Check the live app on Google Play Store: https://play.google.com/store/apps/details?id=com.hamzadev.recipeexpert.",
      impact: ["500K+ active users", "Featured by Google Play", "99.9% uptime"],
      tech: [
        "Kotlin ",
        "ML Kit",
        "WorkManager",
        "Retrofit",
        "Firebase",
        "Kotlin Coroutines",
        "Hilt",
      ],
      gradient: "from-purple-500 via-pink-500 to-cyan-500",
      metrics: {
        Engagement: "1000+ Recipes",
        Rating: "4.2★",
        featured: "Google Play",
      },
      images: [
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766245356/1_tpfh4s.jpg",
          alt: "Health Dashboard",
          title: "Health Dashboard",
          color: "from-purple-400 to-pink-500",
          icon: Heart,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766245355/2_eyktwm.jpg",
          alt: "AI Insights",
          title: "AI Insights",
          color: "from-pink-400 to-cyan-500",
          icon: Sparkles,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766245356/4_tzwvfd.jpg",
          alt: "Activity Tracking",
          title: "Activity Tracking",
          color: "from-cyan-400 to-purple-500",
          icon: TrendingUp,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766245355/2_eyktwm.jpg",
          alt: "Activity Tracking",
          title: "Activity Tracking",
          color: "from-cyan-400 to-purple-500",
          icon: TrendingUp,
        },
      ],
      features: [
        "Recipe Discovery",
        "Personalized Experience",
        "Step-by-Step Guidance",
        "Community Features",
      ],
      highlights: [
        "Kotlin & Android Jetpack",
        "Firebase Backend",
        "Machine Learning Integration ",
        "Advanced Search Algorithm",
      ],
    },
    {
      title: "Shop Tracking ",
      description:
        "The Shop Tracking App is a comprehensive solution designed to monitor and analyze the progress of distributors and shops effectively. The app allows administrators to track distributor activities, including shop visits, task completion, and overall performance. It also provides insights into shop-specific metrics, ensuring better visibility into operations and progress. With real-time tracking and detailed analytics, the app helps optimize distributor workflows and ensures shops are managed efficiently. The intuitive interface and robust features make it an essential tool for businesses looking to streamline their tracking and performance evaluation processes.",
      longDescription:
        "The Shop Tracking App is a comprehensive solution designed to monitor and analyze the progress of distributors and shops effectively. The app allows administrators to track distributor activities, including shop visits, task completion, and overall performance. It also provides insights into shop-specific metrics, ensuring better visibility into operations and progress. With real-time tracking and detailed analytics, the app helps optimize distributor workflows and ensures shops are managed efficiently. The intuitive interface and robust features make it an essential tool for businesses looking to streamline their tracking and performance evaluation processes.",
      impact: [
        "1M+ streams daily",
        "50% reduction in buffering",
        "TechCrunch featured",
      ],
      tech: [
        "Android Development ",
        "Smart Geolocation & Mapping ",
        "Dynamic Data Visualization",
        "Cloud-Powered Backend ",
        "RESTful API Integration",
        "Material Design UI/UX",
      ],
      gradient: "from-blue-500 via-cyan-500 to-purple-500",
      metrics: {
        Results: "5000+ Shop Visits Tracked",
        Achievements: "40% Time Savings",
        Performance: "99.8%",
      },
      images: [
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766299435/image1_evyhi2.jpg",
          alt: "Video Player",
          title: "Video Player",
          color: "from-blue-400 to-cyan-500",
          icon: Play,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766299426/image2_cmfvzz.jpg",
          alt: "Content Library",
          title: "Content Library",
          color: "from-cyan-400 to-purple-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766299427/image3_y1q0t8.jpg",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766299429/image4_bladvs.jpg",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766299428/image5_attcbm.jpg",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766299428/feedback_cg3uqe.jpg",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
      ],
      features: [
        "Live Distributor Tracking ",
        "Shop Management System",
        "Smart Shop Hub",
        "Task & Activity Monitoring ",
      ],
      highlights: [
        "Real-time Synchronization",
        "Zero-Friction Experience",
        "Works Anywhere, Anytime",
        "Smart Auto-Sync",
      ],
    },
    {
      title: "RetailAudit & MarkitSurvey - B2B Field Apps ",
      description:
        "Developed two connected Android applications for field teams conducting store audits and market surveys.Challenge: Field teams needed to collect data offline and sync when internet was available. Manual data entry was consuming 15 hours weekly.Solution: Built offline-first apps with local SQLite databases, automatic sync, and JSON API integration that streamlined data flow across three different apps. Technologies: Java, SQLite, Retrofit, Node.js (API optimization) Results: - Reduced manual data entry by 15 hours per week- Saved 200+ hours annually on database management - Enabled seamless offline-to-online data sync Client: Markematics Digital (Jan 2024 - Dec 2024)",
      longDescription:
        "Developed two connected Android applications for field teams conducting store audits and market surveys.Challenge: Field teams needed to collect data offline and sync when internet was available. Manual data entry was consuming 15 hours weekly.Solution: Built offline-first apps with local SQLite databases, automatic sync, and JSON API integration that streamlined data flow across three different apps. Technologies: Java, SQLite, Retrofit, Node.js (API optimization) Results: - Reduced manual data entry by 15 hours per week- Saved 200+ hours annually on database management - Enabled seamless offline-to-online data sync Client: Markematics Digital (Jan 2024 - Dec 2024)",
      impact: [
        "1M+ streams daily",
        "50% reduction in buffering",
        "TechCrunch featured",
      ],
      tech: [
        "Kotlin",
        "Retrofit",
        "Node.js",
        "Offline-First Architecture ",
        "Data Synchronization",
        "Database Optimization",
      ],
      gradient: "from-blue-500 via-cyan-500 to-purple-500",
      metrics: {
        Scale: "1000+ Daily Syncs",
        Accuracy: "99%",
        Efficiency: "900 Hours Saved ",
      },
      images: [
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314769/Hotpot_0_ifzlid.png",
          alt: "Video Player",
          title: "Video Player",
          color: "from-blue-400 to-cyan-500",
          icon: Play,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314783/Hotpot_1_lohei7.png",
          alt: "Video Player",
          title: "Video Player",
          color: "from-blue-400 to-cyan-500",
          icon: Play,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314768/Hotpot_2_otsuph.png",
          alt: "Content Library",
          title: "Content Library",
          color: "from-cyan-400 to-purple-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314789/Hotpot_3_jkpu6m.png",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314768/Hotpot_4_j2whmh.png",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314770/Hotpot_5_haecbc.png",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314786/Hotpot_7_ufvib0.png",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314774/Hotpot_8_lcvlaq.png",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314779/Hotpot_9_gf9kmm.png",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314783/Hotpot_10_o4jvyr.png",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314768/Hotpot_6_v5kdw9.png",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314784/Hotpot_12_ekralz.png",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766314787/Hotpot_14_ajoiu0.png",
          alt: "Social Feed",
          title: "Social Feed",
          color: "from-purple-400 to-blue-500",
          icon: Users,
        },
      ],
      features: [
        "Complete Offline Functionality ",
        "Automatic Background Sync",
        "Local SQLite Database",
        "Real-Time API Synchronization ",
      ],
      highlights: [
        "Data Integrity Guaranteed ",
        "Cross-App Data Flow",
        "Multi-Device Support",
        "Smart Auto-Sync",
      ],
    },
    {
      title: "Laugh & Rhyme",
      description:
        "Laugh & Rhyme brings a world of fun and creativity to your fingertips with a wide collection of jokes, riddles, and poetry in both English and Urdu. Enjoy daily humor, challenge yourself with engaging riddles, and explore user-generated content. With AI-powered features, personalize your experience and share your own creations in this interactive entertainment app.",
      longDescription:
        "Laugh & Rhyme brings a world of fun and creativity to your fingertips with a wide collection of jokes, riddles, and poetry in both English and Urdu. Enjoy daily humor, challenge yourself with engaging riddles, and explore user-generated content. With AI-powered features, personalize your experience and share your own creations in this interactive entertainment app.",
      impact: ["2M+ downloads", "4.8★ rating", "40% faster than competitors"],
      tech: ["Kotlin", "Compose", "JSON", "Hilt", "Room"],
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      metrics: {
        Scale: "1000+ Entries",
        Precision: "99% Stable",
        Delight: "Highly Rated",
      },
      images: [
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766295807/image1_wag1eg.png",
          alt: "Positfy Dashboard",
          title: "Dashboard",
          color: "from-cyan-400 to-blue-500",
          icon: TrendingUp,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766295807/image2_u1t5jb.png",
          alt: "Positfy Analytics",
          title: "Analytics",
          color: "from-blue-400 to-purple-500",
          icon: TrendingUp,
        },

        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766295807/image3_wsncz2.png",
          alt: "Positfy Reports",
          title: "Reports",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766295806/image5_ulrmll.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },

        {
          src: "https://res.cloudinary.com/dfyphobvp/image/upload/v1766295806/image4_sugwwe.png",
          alt: "Positfy Settings",
          title: "Settings",
          color: "from-purple-400 to-pink-500",
          icon: Database,
        },
      ],
      features: [
        "Bilingual Support (English & Urdu)",
        "AI-Powered Personalization",
        "Extensive Content Library",
        "Social Sharing & Bookmarking",
      ],
      highlights: [
        "Java & Android SDK",
        "Offline-first architecture",
        "Material Design 3",
        "JSON Data Parsing",
      ],
    },
  ];

  const achievements = [
    {
      icon: Sliders,
      title: "Android UI Performance",
      desc: "Jetpack Compose Performance Optimization",
      year: "2026",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Rocket,
      title: "Deployed in multiple countries",
      desc: "(Pakistan, Bangladesh, Thailand, Philippines)",
      year: "2025",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Top 1% Developer",
      desc: "Android dev community",
      year: "2026",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Zap,
      title: "5+ Years Experience",
      desc: "Building production apps",
      year: "2020-2026",
      color: "from-green-400 to-cyan-500",
    },
  ];

  const testimonials = [
    {
      name: "Ali Zohair",
      role: "Project Lead",
      text: "Delivered a high-quality Android application with clean architecture and efficient performance. Communication and reliability throughout the project were outstanding.",
      rating: 5,
      avatar: "AJ",
    },
    {
      name: "Muhammad Saleh",
      role: "Product Manager",
      text: "Demonstrated exceptional problem-solving skills and attention to detail. The app was intuitive, smooth, and met all project requirements on time.",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Fahad Zafar",
      role: "Tech Consultant",
      text: "Professional, knowledgeable, and reliable. Delivered a scalable Android solution with optimized UI and robust features, making collaboration seamless.",
      rating: 5,
      avatar: "DK",
    },
  ];

  const stats = [
    {
      label: "Years Experience",
      value: "5+",
      color: "from-cyan-400 to-blue-500",
      icon: Zap,
    },
    {
      label: "Projects Delivered",
      value: "25+",
      color: "from-purple-400 to-pink-500",
      icon: Code,
    },
    {
      label: "Total Users Reached",
      value: "10k+",
      color: "from-blue-400 to-cyan-500",
      icon: Users,
    },
    {
      label: "Client Satisfaction",
      value: "99%",
      color: "from-pink-400 to-purple-500",
      icon: Award,
    },
  ];

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Enhanced Image Modal with Zoom and Pan
  const ImageModal = ({ image, project, onClose }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [lastTouchDistance, setLastTouchDistance] = useState(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);

    // Reset state when image changes
    useEffect(() => {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      setIsDragging(false);
      setLastTouchDistance(null);
    }, [image?.src, image?.title]);

    // Calculate distance between two touch points
    const getTouchDistance = (touches) => {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // Get center point between two touches
    const getTouchCenter = (touches) => {
      return {
        x: (touches[0].clientX + touches[1].clientX) / 2,
        y: (touches[0].clientY + touches[1].clientY) / 2,
      };
    };

    // Constrain position to prevent image from going out of bounds
    const constrainPosition = (pos, currentScale) => {
      if (!imageRef.current || !containerRef.current) return pos;

      const container = containerRef.current.getBoundingClientRect();
      const img = imageRef.current.getBoundingClientRect();

      const scaledWidth = img.width * currentScale;
      const scaledHeight = img.height * currentScale;

      const maxX = Math.max(0, (scaledWidth - container.width) / 2);
      const maxY = Math.max(0, (scaledHeight - container.height) / 2);

      return {
        x: Math.max(-maxX, Math.min(maxX, pos.x)),
        y: Math.max(-maxY, Math.min(maxY, pos.y)),
      };
    };

    // Handle touch start
    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        // Pinch gesture
        setLastTouchDistance(getTouchDistance(e.touches));
        setIsDragging(false);
      } else if (e.touches.length === 1 && scale > 1) {
        // Pan gesture (only when zoomed)
        setIsDragging(true);
        setDragStart({
          x: e.touches[0].clientX - position.x,
          y: e.touches[0].clientY - position.y,
        });
      }
    };

    // Handle touch move
    const handleTouchMove = (e) => {
      e.preventDefault();

      if (e.touches.length === 2 && lastTouchDistance) {
        // Pinch zoom
        const currentDistance = getTouchDistance(e.touches);
        const scaleChange = currentDistance / lastTouchDistance;
        const newScale = Math.max(1, Math.min(4, scale * scaleChange));

        setScale(newScale);
        setLastTouchDistance(currentDistance);

        // Adjust position to keep image centered during zoom
        if (newScale === 1) {
          setPosition({ x: 0, y: 0 });
        } else {
          setPosition(constrainPosition(position, newScale));
        }
      } else if (e.touches.length === 1 && isDragging && scale > 1) {
        // Pan
        const newPos = {
          x: e.touches[0].clientX - dragStart.x,
          y: e.touches[0].clientY - dragStart.y,
        };
        setPosition(constrainPosition(newPos, scale));
      }
    };

    // Handle touch end
    const handleTouchEnd = (e) => {
      if (e.touches.length < 2) {
        setLastTouchDistance(null);
      }
      if (e.touches.length === 0) {
        setIsDragging(false);
      }
    };

    // Mouse wheel zoom
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.max(1, Math.min(4, scale * delta));

      setScale(newScale);

      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      } else {
        setPosition(constrainPosition(position, newScale));
      }
    };

    // Mouse drag for desktop
    const handleMouseDown = (e) => {
      if (scale > 1) {
        setIsDragging(true);
        setDragStart({
          x: e.clientX - position.x,
          y: e.clientY - position.y,
        });
      }
    };

    const handleMouseMove = (e) => {
      if (isDragging && scale > 1) {
        const newPos = {
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        };
        setPosition(constrainPosition(newPos, scale));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Zoom controls
    const handleZoomIn = () => {
      const newScale = Math.min(4, scale + 0.5);
      setScale(newScale);
      setPosition(constrainPosition(position, newScale));
    };

    const handleZoomOut = () => {
      const newScale = Math.max(1, scale - 0.5);
      setScale(newScale);
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
      } else {
        setPosition(constrainPosition(position, newScale));
      }
    };

    const handleResetZoom = () => {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    };

    if (!image || !project) return null;

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      >
        <div
          className="relative max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Zoom controls */}
          <div className="absolute -top-12 left-0 flex gap-2 z-10">
            <button
              onClick={handleZoomIn}
              disabled={scale >= 4}
              className="p-2 bg-slate-800/80 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors text-white"
              title="Zoom In"
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={handleZoomOut}
              disabled={scale <= 1}
              className="p-2 bg-slate-800/80 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors text-white"
              title="Zoom Out"
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={handleResetZoom}
              disabled={scale === 1}
              className="p-2 bg-slate-800/80 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors text-white"
              title="Reset"
            >
              <Maximize size={20} />
            </button>
          </div>

          {/* Zoom indicator */}
          {scale > 1 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800/90 rounded-full text-white text-sm z-10">
              {Math.round(scale * 100)}%
            </div>
          )}

          {/* Image container */}
          <div
            ref={containerRef}
            className="aspect-[9/16] bg-slate-900 rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl cursor-move"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
          >
            <div className="h-full bg-gradient-to-br from-slate-900 to-slate-950 p-8 flex items-center justify-center overflow-hidden">
              {image.src ? (
                <img
                  ref={imageRef}
                  src={image.src}
                  alt={image.alt || image.title}
                  className="max-w-full max-h-full object-contain select-none transition-transform duration-200"
                  style={{
                    transform: `scale(${scale}) translate(${
                      position.x / scale
                    }px, ${position.y / scale}px)`,
                    transformOrigin: "center center",
                  }}
                  draggable={false}
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${image.color} rounded-2xl p-6 flex flex-col justify-between shadow-2xl select-none`}
                  style={{
                    transform: `scale(${scale}) translate(${
                      position.x / scale
                    }px, ${position.y / scale}px)`,
                    transformOrigin: "center center",
                  }}
                >
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 bg-white/20 rounded backdrop-blur-sm" />
                    <div className="h-4 w-1/2 bg-white/20 rounded backdrop-blur-sm" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-32 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <image.icon className="text-white/40" size={48} />
                    </div>
                    <div className="h-24 bg-white/10 rounded-xl backdrop-blur-md border border-white/20" />
                    <div className="h-20 bg-white/10 rounded-xl backdrop-blur-md border border-white/20" />
                  </div>
                  <div className="text-center">
                    <div className="text-white/80 font-bold text-lg mb-2">
                      {image.title}
                    </div>
                    <div className="text-white/60 text-sm">{project.title}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 text-center text-slate-400 text-sm">
            <p>Pinch to zoom • Drag to pan • Scroll to zoom</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden relative font-sans">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-2/3 -right-64 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-50 transition-all duration-300 shadow-lg shadow-cyan-500/50"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-sm shadow-lg shadow-cyan-500/30">
              AD
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Android Developer
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-6 py-3 text-left transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <div
        className="hidden lg:block fixed w-[500px] h-[500px] rounded-full pointer-events-none z-50 opacity-30 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)",
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          filter: "blur(40px)",
        }}
      />

      <section
        id="hero"
        className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 pt-20"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-slate-800/40 backdrop-blur-xl rounded-full border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
            <span className="text-cyan-400 font-medium text-sm tracking-wide">
              AVAILABLE FOR HIRE
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
              style={{ backgroundSize: "200% auto" }}
            >
              Elite Android Engineer
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">
              Building Digital Excellence
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Transforming ideas into{" "}
            <span className="text-cyan-400 font-semibold">
              production-ready apps
            </span>{" "}
            with exceptional performance, scalable architecture, and{" "}
            <span className="text-purple-400 font-semibold">
              delightful user experiences
            </span>
            .
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold overflow-hidden shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                View Projects
                <ChevronRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl font-semibold hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Kotlin",
              "Jetpack Compose",
              "Coroutines",
              "Hilt",
              "Room",
              "Retrofit",
              "Flow",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl text-sm font-medium text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 cursor-default shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-slate-500 uppercase tracking-widest">
            Scroll
          </span>
          <ChevronRight className="rotate-90 text-cyan-400" size={24} />
        </div>
      </section>

      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-cyan-500/20">
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">
                  ABOUT ME
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Passionate About Creating Impact
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed font-light">
                With over a decade of experience in Android development, I
                specialize in crafting high-performance, scalable applications
                that serve millions of users worldwide. My expertise spans from
                modern UI development with Jetpack Compose to complex backend
                integrations and performance optimization.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                I believe in writing clean, maintainable code and following
                industry best practices. Every project is an opportunity to push
                boundaries and deliver exceptional results that exceed
                expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  />
                  <div className="relative text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} p-3`}
                    >
                      <stat.icon className="w-full h-full text-white" />
                    </div>
                    <div
                      className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 font-light">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-purple-500/20">
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">
                EXPERTISE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Technical Excellence
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Mastery across the entire Android development stack with
              production-proven expertise
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <skill.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 font-light">
                    {skill.description}
                  </p>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-slate-400 mb-3">
                      <span className="font-light">Proficiency</span>
                      <span className="font-mono font-semibold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-700/30">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-cyan-500/20">
              {/* <Terminal size={16} className="text-cyan-400" /> */}
              {/* <span className="text-cyan-400 text-sm font-medium">
                PORTFOLIO
              </span> */}
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">
                PORTFOLIO
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Production apps serving millions of users with exceptional
              performance and UX
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={project.title} className="group relative">
                <div className="relative p-8 md:p-12 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl hover:border-cyan-500/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/10">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  />

                  <div className="relative">
                    <div className="mb-8">
                      <div
                        className={`inline-block px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-xl text-sm font-bold mb-6 shadow-lg`}
                      >
                        Featured Project {index + 1}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-lg mb-6 leading-relaxed font-light">
                        {project.longDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm font-medium text-slate-300 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                          <Eye size={20} className="text-cyan-400" />
                          App Screens
                        </h4>
                        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                          {project.images.map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="group/img relative flex-shrink-0 w-24 h-48 bg-slate-800/40 backdrop-blur-xl rounded-lg overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
                              onClick={() =>
                                setSelectedImageModal({ image, project })
                              }
                            >
                              <div className="absolute inset-1.5 rounded-md border border-slate-900/50 bg-slate-950 overflow-hidden">
                                <div className="h-3 bg-slate-900/80 flex items-center justify-between px-1.5 text-[6px] text-slate-400">
                                  <span>9:41</span>
                                  <div className="flex gap-0.5">
                                    <div className="w-1.5 h-1 border border-slate-400 rounded-[1px]" />
                                  </div>
                                </div>

                                {image.src ? (
                                  <img
                                    src={image.src}
                                    alt={image.alt || image.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div
                                    className={`h-full bg-gradient-to-br ${image.color} p-2 flex flex-col justify-between relative`}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
                                    <div className="relative space-y-1">
                                      <div className="h-1 w-3/4 bg-white/20 rounded backdrop-blur-sm" />
                                      <div className="h-1 w-1/2 bg-white/20 rounded backdrop-blur-sm" />
                                    </div>
                                    <div className="relative space-y-1">
                                      <div className="h-8 bg-white/10 rounded backdrop-blur-md border border-white/20 flex items-center justify-center">
                                        <image.icon
                                          className="text-white/30"
                                          size={12}
                                        />
                                      </div>
                                      <div className="h-6 bg-white/10 rounded backdrop-blur-md border border-white/20" />
                                    </div>
                                    <div className="relative text-center">
                                      <div className="text-[6px] text-white/60 font-medium mb-0.5">
                                        {image.title}
                                      </div>
                                      <div className="w-3 h-3 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover/img:bg-white/30 transition-colors">
                                        <Play
                                          className="text-white/60"
                                          size={6}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="absolute inset-0 bg-cyan-500/0 group-hover/img:bg-cyan-500/10 transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 text-white font-semibold text-[8px] px-1">
                                  View
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                            <CheckCircle size={20} className="text-cyan-400" />
                            Key Features
                          </h4>
                          <div className="space-y-3">
                            {project.features.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 text-slate-300 p-3 bg-slate-800/30 rounded-xl border border-slate-700/30 backdrop-blur-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
                                <span className="font-light">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                            <Star size={20} className="text-purple-400" />
                            Highlights
                          </h4>
                          <div className="space-y-3">
                            {project.highlights.map((highlight, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 text-slate-300 p-3 bg-slate-800/30 rounded-xl border border-slate-700/30 backdrop-blur-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
                                <span className="font-light">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 flex flex-col justify-center items-center border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 shadow-lg"
                        >
                          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                            {value}
                          </div>
                          <div className="text-xs text-slate-400 uppercase tracking-wider text-center font-light">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-purple-500/20">
              <Award size={16} className="text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">
                ACHIEVEMENTS
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Industry Impact
            </h2>
            <p className="text-xl text-slate-400 font-light">
              Recognition and achievements in the Android development community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="group relative p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl hover:border-purple-500/50 transition-all duration-500 text-center hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${achievement.color} p-5 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                  >
                    <achievement.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-sm text-slate-500 font-medium mb-2">
                    {achievement.year}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-400 font-light text-sm">
                    {achievement.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-cyan-500/20">
              <MessageSquare size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Trusted by companies worldwide to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="group relative p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed font-light">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-400 font-light">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-cyan-500/20">
            <Mail size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">CONTACT</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Let's Build Something Exceptional
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
            Available for consulting, technical leadership roles, and ambitious
            Android projects
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="mailto:zameersahil318@gmail.com"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-xl"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://github.com/zameer-sahil"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl font-semibold hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-xl"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="www.linkedin.com/in/zameer-hussain-286250252"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl font-semibold hover:bg-slate-800/60 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-xl"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="text-slate-500 text-sm font-light">
            <p>
              © 2025 Elite Android Developer. Crafted with precision and
              passion.
            </p>
          </div>
        </div>
      </section>

      {selectedImageModal && (
        <ImageModal
          image={selectedImageModal.image}
          project={selectedImageModal.project}
          onClose={() => setSelectedImageModal(null)}
        />
      )}

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default AndroidPortfolio;
