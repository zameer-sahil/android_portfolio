import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Smartphone,
  Zap,
  Users,
  Award,
  Star,
  ChevronRight,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  Sparkles,
  MessageSquare,
  TrendingUp,
  Eye,
  Play,
  ZoomIn,
  ZoomOut,
  Maximize,
  ShoppingCart,
  Heart,
  Clock,
  Activity,
} from "lucide-react";

const AndroidPortfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedImageModal, setSelectedImageModal] = useState(null);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "impact", label: "Impact" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const stats = [
    {
      icon: Code,
      value: "10+",
      label: "Years Experience",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Smartphone,
      value: "50+",
      label: "Apps Delivered",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Users,
      value: "10M+",
      label: "Active Users",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction",
      color: "from-orange-400 to-red-500",
    },
  ];

  const skills = [
    {
      name: "Kotlin & Java",
      icon: Code,
      level: 98,
      color: "from-cyan-400 to-blue-500",
      description: "Expert in modern Android development with Kotlin",
    },
    {
      name: "Jetpack Compose",
      icon: Sparkles,
      level: 95,
      color: "from-purple-400 to-pink-500",
      description: "Building beautiful UIs with declarative paradigm",
    },
    {
      name: "Architecture",
      icon: TrendingUp,
      level: 96,
      color: "from-green-400 to-emerald-500",
      description: "MVVM, Clean Architecture, and design patterns",
    },
    {
      name: "Performance",
      icon: Zap,
      level: 94,
      color: "from-orange-400 to-red-500",
      description: "Optimization and memory management expertise",
    },
    {
      name: "Testing",
      icon: CheckCircle,
      level: 92,
      color: "from-blue-400 to-indigo-500",
      description: "Unit, UI, and integration testing mastery",
    },
    {
      name: "CI/CD",
      icon: Activity,
      level: 90,
      color: "from-pink-400 to-rose-500",
      description: "Automated pipelines and deployment workflows",
    },
  ];

  const projects = [
    {
      title: "NextGen E-Commerce Platform",
      longDescription:
        "Revolutionary shopping experience with AI-powered recommendations, real-time inventory, AR product preview, and seamless checkout. Built with Jetpack Compose and modern architecture patterns for exceptional performance.",
      tech: [
        "Kotlin",
        "Jetpack Compose",
        "Hilt",
        "Room",
        "Retrofit",
        "Coroutines",
        "Flow",
      ],
      gradient: "from-cyan-400 to-blue-500",
      images: [
        { icon: ShoppingCart, title: "Shop", color: "from-cyan-400 to-blue-500" },
        { icon: Heart, title: "Wishlist", color: "from-pink-400 to-rose-500" },
        { icon: ShoppingCart, title: "Cart", color: "from-purple-400 to-pink-500" },
        { icon: CheckCircle, title: "Checkout", color: "from-green-400 to-emerald-500" },
      ],
      features: [
        "AI-powered product recommendations",
        "Real-time inventory tracking",
        "AR product visualization",
        "One-tap checkout system",
        "Multi-currency support",
      ],
      highlights: [
        "40% increase in conversion rate",
        "60% faster page load times",
        "99.9% crash-free rate",
        "4.8★ average rating",
      ],
      metrics: {
        Users: "2M+",
        Rating: "4.8★",
        Downloads: "5M+",
      },
    },
    {
      title: "HealthTrack Pro",
      longDescription:
        "Comprehensive health and fitness tracking application with real-time activity monitoring, personalized workout plans, nutrition tracking, and integration with popular wearables. Features beautiful Material You design.",
      tech: [
        "Kotlin",
        "Jetpack Compose",
        "WorkManager",
        "Room",
        "Health Connect",
        "ML Kit",
      ],
      gradient: "from-green-400 to-emerald-500",
      images: [
        { icon: Activity, title: "Activity", color: "from-green-400 to-emerald-500" },
        { icon: TrendingUp, title: "Progress", color: "from-blue-400 to-indigo-500" },
        { icon: Heart, title: "Health", color: "from-pink-400 to-rose-500" },
        { icon: Award, title: "Goals", color: "from-orange-400 to-red-500" },
      ],
      features: [
        "Real-time activity tracking",
        "Personalized workout plans",
        "Nutrition and calorie tracking",
        "Wearable device integration",
        "Social challenges and leaderboards",
      ],
      highlights: [
        "Featured by Google Play",
        "1M+ active monthly users",
        "50% user retention rate",
        "Editor's Choice Award",
      ],
      metrics: {
        Users: "3M+",
        Rating: "4.7★",
        Workouts: "10M+",
      },
    },
    {
      title: "StreamFlow Entertainment",
      longDescription:
        "Next-generation streaming platform with offline downloads, personalized content discovery, multi-device sync, and adaptive streaming quality. Delivers Netflix-level performance with innovative features.",
      tech: [
        "Kotlin",
        "ExoPlayer",
        "Compose",
        "Paging 3",
        "DataStore",
        "Media3",
      ],
      gradient: "from-purple-400 to-pink-500",
      images: [
        { icon: Play, title: "Watch", color: "from-purple-400 to-pink-500" },
        { icon: Star, title: "Featured", color: "from-orange-400 to-red-500" },
        { icon: Eye, title: "Discover", color: "from-cyan-400 to-blue-500" },
        { icon: Clock, title: "Continue", color: "from-green-400 to-emerald-500" },
      ],
      features: [
        "Adaptive bitrate streaming",
        "Offline download support",
        "Multi-profile management",
        "Chromecast integration",
        "Picture-in-picture mode",
      ],
      highlights: [
        "99.9% uptime achieved",
        "30% lower bandwidth usage",
        "Instant playback start",
        "4.9★ user satisfaction",
      ],
      metrics: {
        Users: "5M+",
        Rating: "4.9★",
        Hours: "50M+",
      },
    },
  ];

  const achievements = [
    {
      icon: Award,
      year: "2024",
      title: "Google I/O Winner",
      desc: "Innovative Android app recognized at Google I/O",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Star,
      year: "2023",
      title: "Editor's Choice",
      desc: "Featured on Google Play Store homepage",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: TrendingUp,
      year: "2023",
      title: "Performance Leader",
      desc: "Achieved 99.9% crash-free rate across all apps",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Users,
      year: "2022",
      title: "10M+ Users",
      desc: "Reached 10 million active users milestone",
      color: "from-orange-400 to-red-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechStart Inc",
      text: "Outstanding developer who transformed our vision into a high-performing app. The attention to detail and technical expertise is unmatched.",
      rating: 5,
      avatar: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager, HealthCorp",
      text: "Delivered beyond expectations. The app performance is exceptional and our users love the experience. A true professional.",
      rating: 5,
      avatar: "MR",
    },
    {
      name: "Emily Watson",
      role: "CEO, StreamMedia",
      text: "Exceptional work on our streaming platform. The technical challenges were handled brilliantly and the results speak for themselves.",
      rating: 5,
      avatar: "EW",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      const sections = navItems.map((item) => item.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const ImageModal = ({ image, project, onClose }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [lastTouchDistance, setLastTouchDistance] = useState(0);
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const handleZoomIn = () => setScale((s) => Math.min(s + 0.5, 4));
    const handleZoomOut = () => setScale((s) => Math.max(s - 0.5, 1));
    const handleResetZoom = () => {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * -0.01;
      setScale((s) => Math.max(1, Math.min(4, s + delta)));
    };

    const handleMouseDown = (e) => {
      if (scale > 1) {
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
      }
    };

    const handleMouseMove = (e) => {
      if (isDragging && scale > 1) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const getTouchDistance = (touches) => {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        setLastTouchDistance(getTouchDistance(e.touches));
      } else if (e.touches.length === 1 && scale > 1) {
        setIsDragging(true);
        setDragStart({
          x: e.touches[0].clientX - position.x,
          y: e.touches[0].clientY - position.y,
        });
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 2) {
        const distance = getTouchDistance(e.touches);
        const delta = distance - lastTouchDistance;
        setScale((s) => Math.max(1, Math.min(4, s + delta * 0.01)));
        setLastTouchDistance(distance);
      } else if (e.touches.length === 1 && isDragging && scale > 1) {
        setPosition({
          x: e.touches[0].clientX - dragStart.x,
          y: e.touches[0].clientY - dragStart.y,
        });
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setLastTouchDistance(0);
    };

    if (!image || !project) return null;

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      >
        <div
          className="relative max-w-md w-full mx-4"
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

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-4">
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

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4">
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

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold overflow-hidden shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                View Projects
                <ChevronRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl font-semibold hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
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

      <section id="about" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-cyan-500/20">
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">
                  ABOUT ME
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
                Passionate About Creating Impact
              </h2>
              <p className="text-base sm:text-lg text-slate-400 mb-4 sm:mb-6 leading-relaxed font-light">
                With over a decade of experience in Android development, I
                specialize in crafting high-performance, scalable applications
                that serve millions of users worldwide. My expertise spans from
                modern UI development with Jetpack Compose to complex backend
                integrations and performance optimization.
              </p>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light">
                I believe in writing clean, maintainable code and following
                industry best practices. Every project is an opportunity to push
                boundaries and deliver exceptional results that exceed
                expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative p-6 sm:p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}
                  />
                  <div className="relative text-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 sm:p-3`}
                    >
                      <stat.icon className="w-full h-full text-white" />
                    </div>
                    <div
                      className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 font-light">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-purple-500/20">
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">
                EXPERTISE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4">
              Technical Excellence
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light px-4">
              Mastery across the entire Android development stack with
              production-proven expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-6 sm:p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${skill.color} p-3.5 sm:p-4 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <skill.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
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

      <section id="projects" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-cyan-500/20">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">
                PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light px-4">
              Production apps serving millions of users with exceptional
              performance and UX
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {projects.map((project, index) => (
              <div key={project.title} className="group relative">
                <div className="relative p-6 sm:p-8 md:p-12 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl hover:border-cyan-500/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/10 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}
                  />

                  <div className="relative">
                    <div className="mb-6 sm:mb-8">
                      <div
                        className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${project.gradient} rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg`}
                      >
                        Featured Project {index + 1}
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-4 sm:mb-6 leading-relaxed font-light">
                        {project.longDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8 overflow-hidden">
                      <div className="md:col-span-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white flex items-center gap-2">
                          <Eye size={18} className="text-cyan-400" />
                          App Screens
                        </h4>
                        <div className="flex gap-3 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
                          {project.images.map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="group/img relative flex-shrink-0 w-20 sm:w-24 h-40 sm:h-48 bg-slate-800/40 backdrop-blur-xl rounded-lg overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
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

                      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 min-w-0">
                        <div className="min-w-0">
                          <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white flex items-center gap-2">
                            <CheckCircle size={18} className="text-cyan-400" />
                            Key Features
                          </h4>
                          <div className="space-y-2 sm:space-y-3">
                            {project.features.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 sm:gap-3 text-slate-300 p-2.5 sm:p-3 bg-slate-800/30 rounded-lg sm:rounded-xl border border-slate-700/30 backdrop-blur-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 flex-shrink-0" />
                                <span className="font-light text-xs sm:text-sm md:text-base break-words">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="min-w-0">
                          <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white flex items-center gap-2">
                            <Star size={18} className="text-purple-400" />
                            Highlights
                          </h4>
                          <div className="space-y-2 sm:space-y-3">
                            {project.highlights.map((highlight, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 sm:gap-3 text-slate-300 p-2.5 sm:p-3 bg-slate-800/30 rounded-lg sm:rounded-xl border border-slate-700/30 backdrop-blur-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 flex-shrink-0" />
                                <span className="font-light text-xs sm:text-sm md:text-base break-words">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-slate-900/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col justify-center items-center border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 shadow-lg"
                        >
                          <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                            {value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider text-center font-light">
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

      <section id="impact" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-purple-500/20">
              <Award size={16} className="text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">
                ACHIEVEMENTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4">
              Industry Impact
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light px-4">
              Recognition and achievements in the Android development community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="group relative p-6 sm:p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl hover:border-purple-500/50 transition-all duration-500 text-center hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${achievement.color} p-4 sm:p-5 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                  >
                    <achievement.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mb-2">
                    {achievement.year}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-400 font-light text-xs sm:text-sm">
                    {achievement.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-cyan-500/20">
              <MessageSquare size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-4">
              Client Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light px-4">
              Trusted by companies worldwide to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="group relative p-6 sm:p-8 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex gap-1 mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed font-light">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg text-sm sm:text-base flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm sm:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400 font-light">
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

      <section id="contact" className="py-20 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-slate-800/40 backdrop-blur-xl rounded-full border border-cyan-500/20">
            <Mail size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">CONTACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Let's Build Something Exceptional
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto font-light">
            Available for consulting, technical leadership roles, and ambitious
            Android projects
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
            <a
              href="mailto:zameersahil318@gmail.com"
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-xl w-full sm:w-auto"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://github.com/zameer-sahil"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl font-semibold hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-xl w-full sm:w-auto"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zameer-hussain-286250252"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl font-semibold hover:bg-slate-800/60 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-xl w-full sm:w-auto"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="text-slate-500 text-xs sm:text-sm font-light">
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