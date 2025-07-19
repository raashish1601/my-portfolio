"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Zap,
  Target,
  Users,
  TrendingUp,
  Menu,
  X,
  Award,
  Star,
  Trophy,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Enhanced text animation
const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// Floating animation
const floatingAnimation = {
  y: [-5, 5, -5],
  transition: {
    duration: 3,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Loading animation
    setTimeout(() => setIsLoading(false), 2000)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setIsMobileMenuOpen(false)
    }
  }

  const skills = [
    { name: "React JS", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Next JS", level: 90, color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-800" },
    { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-600" },
    { name: "Redux/RTK", level: 85, color: "from-purple-500 to-purple-700" },
    { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-teal-600" },
    { name: "DSA", level: 88, color: "from-green-500 to-green-700" },
    { name: "React Storybook", level: 82, color: "from-pink-500 to-pink-700" },
  ]

  const projects = [
    {
      title: "CARS24 - New Cars Platform",
      description:
        "Led the development of the new cars platform with advanced search, compare, and filtering systems. Implemented widget-driven UI architecture controllable via CMS.",
      tech: ["React JS", "TypeScript", "Redux", "Performance Optimization"],
      link: "https://www.cars24.com/new-cars/",
      achievements: ["70% bundle size reduction", "Improved Core Web Vitals", "Widget-driven architecture"],
    },
    {
      title: "Bikes24 Platform",
      description:
        "Developed end-to-end features including Search Flow, Compare Bikes Flow, and advanced filtering systems with focus on intuitive user experiences.",
      tech: ["React JS", "PHP Integration", "CMS", "Responsive Design"],
      link: "https://www.bikes24.com/",
      achievements: ["30-40% MoM revenue increase", "Lead generation integration", "Advanced filtering system"],
    },
    {
      title: "GeeksforGeeks Community",
      description:
        "Enhanced community search functionality with Posts search feature, optimized with DFS algorithm achieving 30% improvement in search performance.",
      tech: ["React JS", "Search Optimization", "DFS Algorithm", "lexical-dev"],
      link: "https://www.geeksforgeeks.org/community/",
      achievements: ["30% search improvement", "50% user following increase", "Hashtag plugin development"],
    },
    {
      title: "Team-BHP Integration",
      description:
        "Integrated ReactJS-based lead generation form into PHP-powered Team-BHP platform, enabling new user acquisition capabilities.",
      tech: ["React JS", "PHP", "Lead Generation", "Integration"],
      link: "https://www.team-bhp.com/forum/shifting-gears/292536-argentina-play-exhibition-match-october-2025-kochi-kerala.html",
      achievements: ["Seamless React-PHP integration", "Lead generation system", "User acquisition boost"],
    },
    {
      title: "GeeksforGeeks Main Platform",
      description:
        "Architected and designed the entire structure and UI for GFG's home page, college/companies pages, implementing SEO strategies and performance optimization.",
      tech: ["React JS", "SEO Optimization", "Performance", "UI Architecture"],
      link: "https://www.geeksforgeeks.org/",
      achievements: ["Complete UI architecture", "SEO implementation", "Performance optimization"],
    },
  ]

  const experience = [
    {
      title: "Software Development Engineer 1 (Frontend)",
      company: "CARS24",
      period: "August 2024 - Present",
      location: "Gurgaon",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JEEN3Daq96FKo6ytIEfYTu8y5tLJkl.png",
      highlights: [
        "Integrated ReactJS-based lead generation form contributing to 30-40% MoM revenue increase",
        "Developed Search Flow, Compare Bikes Flow, and advanced filtering systems",
        "Reduced bundle size by 70% and improved Core Web Vitals",
        "Built reusable UI components using React Storybook",
      ],
    },
    {
      title: "Software Development Engineer 1 (Frontend)",
      company: "GeeksforGeeks",
      period: "January 2023 - July 2024",
      location: "Noida",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-klVAyC3CzJOeQnmpL8SpfEuo4MSk9g.png",
      highlights: [
        "Architected entire UI structure for GFG's home page and search functionality",
        "Optimized search with DFS algorithm achieving 30% improvement",
        'Developed "Apply for Jobs" feature increasing user following by 50%',
        "Created email templates reaching 50,000+ users",
      ],
    },
    {
      title: "Software Development Intern (Frontend)",
      company: "Nagarro",
      period: "July 2022 - December 2022",
      location: "Delhi",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3WQantLpQLge1goL3uUbCfMVbqdpmw.png",
      highlights: [
        "Performed development, debugging, and optimization",
        "Reduced LCP and FCP to increase page speed",
        "Implemented authentication, shopping cart, and checkout logic",
      ],
    },
  ]

  // Technologies data for carousel
  const technologies = [
    { name: "React JS", icon: "⚛️", color: "from-blue-400 to-cyan-400", description: "Component Library" },
    { name: "Next.js", icon: "▲", color: "from-gray-600 to-gray-800", description: "Full-Stack Framework" },
    { name: "TypeScript", icon: "TS", color: "from-blue-600 to-blue-800", description: "Type Safety" },
    { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-600", description: "Core Language" },
    { name: "Redux/RTK", icon: "🔄", color: "from-purple-500 to-purple-700", description: "State Management" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-teal-400 to-teal-600", description: "Utility-First CSS" },
    { name: "React Storybook", icon: "📚", color: "from-pink-500 to-pink-700", description: "Component Documentation" },
    {
      name: "Performance Optimization",
      icon: "⚡",
      color: "from-green-500 to-green-700",
      description: "Web Vitals & Speed",
    },
    { name: "Git & GitHub", icon: "🔧", color: "from-orange-500 to-red-500", description: "Version Control" },
    { name: "Responsive Design", icon: "📱", color: "from-indigo-500 to-purple-500", description: "Mobile-First" },
    {
      name: "SEO Optimization",
      icon: "🔍",
      color: "from-emerald-500 to-green-500",
      description: "Search Engine Optimization",
    },
    { name: "CMS Integration", icon: "📝", color: "from-cyan-500 to-blue-500", description: "Content Management" },
  ]

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl font-bold text-white"
          >
            {"Loading Portfolio...".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-2xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 },
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Raashish Aggarwal
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["hero", "about", "skills", "projects", "experience", "contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-cyan-400 transition-colors cursor-pointer capitalize"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                {item === "hero" ? "Home" : item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {["hero", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left hover:text-cyan-400 transition-colors cursor-pointer capitalize py-2"
                  whileHover={{ x: 10 }}
                >
                  {item === "hero" ? "Home" : item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Sticky Social Links - Hidden on mobile */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        className="fixed left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-4"
      >
        <div className="w-0.5 h-16 bg-gradient-to-b from-transparent to-emerald-500"></div>
        <motion.a
          href="https://linkedin.com/in/raashish-aggarwal"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 5 }}
          className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center hover:from-emerald-500 hover:to-green-500 transition-all shadow-lg"
        >
          <Linkedin className="w-5 h-5 text-white" />
        </motion.a>
        <motion.a
          href="https://github.com/raashish1601"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 5 }}
          className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg"
        >
          <Github className="w-5 h-5 text-white" />
        </motion.a>
        <motion.a
          href="https://drive.google.com/file/d/1Y3r1p_mRvKH9zK8Yzf-mcup9z7pLpR2v/view"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 5 }}
          className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center hover:from-emerald-500 hover:to-green-500 transition-all shadow-lg"
        >
          <GraduationCap className="w-5 h-5 text-white" />
        </motion.a>
        <div className="w-0.5 h-16 bg-gradient-to-b from-emerald-500 to-transparent"></div>
      </motion.div>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="mb-8"
          >
            <motion.div
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 p-1"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Code className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6"
          >
            <motion.span
              className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              {"Frontend Developer".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4"
          >
            Crafting exceptional user experiences with React, Next.js, and modern web technologies. Specialized in
            performance optimization and scalable frontend architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12 px-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-6 sm:px-8 py-3 rounded-full w-full sm:w-auto"
                onClick={() => window.open("mailto:raashish1601@gmail.com", "_blank")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-300 hover:border-emerald-300 px-6 sm:px-8 py-3 rounded-full bg-transparent w-full sm:w-auto transition-all duration-300"
                onClick={() => window.open("https://github.com/raashish1601", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="animate-bounce"
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronDown className="w-8 h-8 mx-auto text-emerald-400" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* REDESIGNED Awards Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-red-500/5" />

        {/* Floating Award Elements */}
        <motion.div
          className="absolute top-10 left-10 text-6xl opacity-10"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        >
          🏆
        </motion.div>
        <motion.div
          className="absolute top-20 right-20 text-4xl opacity-10"
          animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-5xl opacity-10"
          animate={{ x: [-10, 10, -10], scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
        >
          🎯
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileInView={{ scale: [0.8, 1.1, 1] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Trophy className="w-8 h-8 text-amber-400" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Action Hero Award Winner
              </h2>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles className="w-8 h-8 text-amber-400" />
              </motion.div>
            </motion.div>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Sole recipient of CARS24's most prestigious recognition for exceptional performance and raising standards
              of excellence
            </motion.p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 border border-amber-500/20 backdrop-blur-xl overflow-hidden shadow-2xl">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-red-500/5"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                />

                <CardContent className="p-6 sm:p-12 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Award Images */}
                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ scale: 1.03, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                        <div className="relative overflow-hidden rounded-xl border-2 border-amber-500/30 group-hover:border-amber-400/50 transition-all duration-300">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s0BR1bhcpbWx3lVwkYToLdXRaomLSA.png"
                            alt="Action Hero Award Certificate"
                            className="w-full h-auto shadow-2xl"
                          />
                          <motion.div
                            className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full p-2"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Star className="w-6 h-6 text-white" />
                          </motion.div>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.03, rotateY: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                        <div className="relative overflow-hidden rounded-xl border-2 border-orange-500/30 group-hover:border-orange-400/50 transition-all duration-300">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0RluWLPNVNA2tJvwdsQHcu0evFtSv7.png"
                            alt="Award Ceremony at CARS24"
                            className="w-full h-auto shadow-2xl"
                          />
                          <motion.div
                            className="absolute -bottom-3 -left-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full p-2"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Trophy className="w-6 h-6 text-white" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Award Details */}
                    <div className="space-y-8">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center"
                          >
                            <Trophy className="w-8 h-8 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-amber-400">Action Hero Award</h3>
                            <p className="text-orange-400 font-medium">December 2024</p>
                          </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                          Recognized as the <span className="text-amber-400 font-semibold">sole recipient</span> of
                          CARS24's most prestigious award for
                          <span className="text-orange-400 font-semibold"> exemplary performance</span> and
                          <span className="text-red-400 font-semibold"> raising standards of excellence</span> in the
                          BIKES24 platform development.
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                      >
                        {[
                          {
                            icon: "🎯",
                            title: "Sole Winner",
                            desc: "Only recipient",
                            color: "from-amber-500 to-orange-500",
                          },
                          {
                            icon: "📈",
                            title: "Excellence",
                            desc: "Standards raised",
                            color: "from-orange-500 to-red-500",
                          },
                          { icon: "🚀", title: "BIKES24", desc: "Platform impact", color: "from-red-500 to-pink-500" },
                          { icon: "💎", title: "Recent", desc: "Dec 2024", color: "from-purple-500 to-blue-500" },
                        ].map((item, index) => (
                          <motion.div
                            key={item.title}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`text-center p-4 bg-gradient-to-br ${item.color}/20 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300`}
                          >
                            <motion.div
                              className="text-3xl mb-2"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                            >
                              {item.icon}
                            </motion.div>
                            <div className="text-lg font-bold text-white mb-1">{item.title}</div>
                            <div className="text-sm text-gray-400">{item.desc}</div>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-xl p-6 border border-amber-500/20"
                      >
                        <div className="text-center">
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                            className="text-4xl mb-4"
                          >
                            💬
                          </motion.div>
                          <p className="text-gray-300 italic text-lg mb-3">
                            "You've been awarded for exemplary performance and raising the standards of excellence -
                            this month's true entrepreneur of change"
                          </p>
                          <div className="text-amber-400 font-semibold">- CARS24 Leadership</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.02, rotateY: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 sm:p-8 hover:border-emerald-500/30 transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-400">Frontend Engineer</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                      Passionate Frontend Developer with 3+ years of experience building scalable web applications.
                      Currently working at CARS24, where I've contributed to significant revenue growth through
                      innovative frontend solutions and performance optimizations.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                        <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-300">Gurgaon, India</span>
                      </motion.div>
                      <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                        <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-300">+91-8800555656</span>
                      </motion.div>
                      <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                        <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-300">raashish1601@gmail.com</span>
                      </motion.div>
                      <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                        <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-300">B.Tech IT (8.22 CGPA)</span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <motion.div whileHover={{ scale: 1.02, rotateZ: 2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-emerald-500/30 p-4 sm:p-6 text-center hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-emerald-400 mb-1">Problem Solver</div>
                      <div className="text-xs text-gray-200">Creative Solutions</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, rotateZ: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 p-4 sm:p-6 text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <Target className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-1">Goal Oriented</div>
                      <div className="text-xs text-gray-200">Results Driven</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, rotateZ: 2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-green-500/30 p-4 sm:p-6 text-center hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <Users className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-1">Team Player</div>
                      <div className="text-xs text-gray-200">Collaborative</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, rotateZ: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 p-4 sm:p-6 text-center hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-1">Growth Mindset</div>
                      <div className="text-xs text-gray-200">Always Learning</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Skills & Expertise
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 sm:gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, rotateX: 5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 sm:p-6 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-white text-sm sm:text-base">{skill.name}</span>
                  <motion.span
                    className="text-emerald-400 font-bold text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                icon: Code,
                title: "Frontend Development",
                desc: "React, Next.js, TypeScript, Redux",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: Award,
                title: "Performance Optimization",
                desc: "Web Vitals, Bundle Optimization, SEO",
                color: "from-violet-500 to-purple-500",
              },
              {
                icon: Briefcase,
                title: "UI/UX Implementation",
                desc: "Responsive Design, Storybook, Figma",
                color: "from-emerald-500 to-teal-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{
                  scale: 1.02,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  className={`bg-gradient-to-br ${item.color}/20 border-2 border-transparent hover:border-white/20 p-4 sm:p-6 transition-all duration-300`}
                >
                  <CardContent className="p-0 text-center">
                    <motion.div
                      animate={floatingAnimation}
                      transition={{ ...floatingAnimation.transition, delay: index * 0.5 }}
                    >
                      <item.icon className="w-10 sm:w-12 h-10 sm:h-12 text-white mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-500/50 transition-all duration-300 h-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <CardContent className="p-4 sm:p-6 h-full flex flex-col relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3
                        className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div whileHover={{ scale: 1.2, rotate: 45 }} className="text-cyan-400 hover:text-cyan-300">
                        <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
                      </motion.div>
                    </div>

                    <p className="text-gray-300 mb-4 flex-grow text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors text-xs"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-xs sm:text-sm text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                          />
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies & Skills Carousel - FIXED EDGE-TO-EDGE */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technologies I Work With
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Modern frontend technologies and tools I use to build exceptional web experiences
            </p>
          </motion.div>
        </div>

        {/* Fixed Infinite Carousel - TRUE EDGE-TO-EDGE with padding for hover */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4">
          <motion.div
            className="flex space-x-6 items-center"
            animate={{
              x: [0, -100 * 6], // Move by 6 items width
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {/* Create seamless loop by tripling the array */}
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  className={`bg-gradient-to-br ${tech.color}/20 border-2 border-transparent hover:border-emerald-500/30 transition-all duration-300 group w-44 sm:w-48 h-28 sm:h-32`}
                >
                  <CardContent className="p-3 sm:p-4 h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <motion.div
                      className="text-2xl sm:text-3xl mb-2"
                      animate={{
                        rotate: tech.name === "React JS" ? [0, 360] : 0,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                      }}
                    >
                      {tech.icon}
                    </motion.div>

                    <h4
                      className={`font-bold text-xs sm:text-sm mb-1 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}
                    >
                      {tech.name}
                    </h4>

                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievement Stats - Updated */}
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              { value: "70%", label: "Bundle Size Reduction", icon: "📦", color: "emerald" },
              { value: "30%", label: "Search Performance Boost", icon: "🔍", color: "blue" },
              { value: "40%", label: "Revenue Impact", icon: "📈", color: "green" },
              { value: "3+", label: "Years Experience", icon: "⏱️", color: "purple" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-center p-4 sm:p-6 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 rounded-lg border border-${stat.color}-500/30 hover:border-${stat.color}-400/50 transition-all duration-300`}
              >
                <motion.div
                  className="text-2xl sm:text-3xl mb-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className={`text-2xl sm:text-3xl font-bold text-${stat.color}-400 mb-1`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 text-4xl opacity-20"
          animate={floatingAnimation}
          transition={{ ...floatingAnimation.transition, delay: 0 }}
        >
          💻
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-3xl opacity-20"
          animate={floatingAnimation}
          transition={{ ...floatingAnimation.transition, delay: 1.5 }}
        >
          🚀
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-5 text-2xl opacity-20"
          animate={floatingAnimation}
          transition={{ ...floatingAnimation.transition, delay: 3 }}
        >
          ⚡
        </motion.div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-8 sm:mb-12 last:mb-0"
              >
                {/* Enhanced Timeline line */}
                {index < experience.length - 1 && (
                  <motion.div
                    className="absolute left-6 sm:left-8 top-16 w-0.5 bg-gradient-to-b from-emerald-500 to-green-500"
                    initial={{ height: 0 }}
                    whileInView={{ height: 128 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                )}

                <div className="flex items-start">
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-grow"
                  >
                    <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={exp.logo || "/placeholder.svg"}
                              alt={`${exp.company} logo`}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded"
                            />
                            <div>
                              <motion.h3
                                className="text-lg sm:text-xl font-bold text-white mb-1"
                                whileHover={{ color: "#22d3ee" }}
                              >
                                {exp.title}
                              </motion.h3>
                              <p className="text-cyan-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                            </div>
                          </div>
                          <div className="text-left md:text-right mt-2 md:mt-0">
                            <p className="text-gray-300 font-medium text-sm sm:text-base">{exp.period}</p>
                            <p className="text-gray-400 text-xs sm:text-sm">{exp.location}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start text-gray-300 text-xs sm:text-sm"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                              />
                              <span>{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Work Together
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div whileHover={{ scale: 1.02, rotateX: 2 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-emerald-400">Get In Touch</h3>
                      <div className="space-y-4">
                        <motion.a
                          href="mailto:raashish1601@gmail.com"
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                        >
                          <Mail className="w-4 sm:w-5 h-4 sm:h-5 mr-4" />
                          <span className="text-sm sm:text-base">raashish1601@gmail.com</span>
                        </motion.a>
                        <motion.a
                          href="tel:+918800555656"
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                        >
                          <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-4" />
                          <span className="text-sm sm:text-base">+91-8800555656</span>
                        </motion.a>
                        <motion.div whileHover={{ x: 10, scale: 1.02 }} className="flex items-center text-gray-300">
                          <MapPin className="w-4 sm:w-5 h-4 sm:h-5 mr-4" />
                          <span className="text-sm sm:text-base">Gurgaon, India</span>
                        </motion.div>
                      </div>

                      <div className="flex space-x-4 mt-8">
                        <motion.a
                          href="https://linkedin.com/in/raashish-aggarwal"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center hover:from-cyan-600 hover:to-blue-600 transition-all"
                        >
                          <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
                        </motion.a>
                        <motion.a
                          href="https://github.com/raashish1601"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -360 }}
                          transition={{ duration: 0.3 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:from-gray-600 hover:to-gray-800 transition-all"
                        >
                          <Github className="w-4 sm:w-5 h-4 sm:h-5" />
                        </motion.a>
                      </div>

                      {/* Mobile Social Links */}
                      <div className="lg:hidden mt-6">
                        <h4 className="text-lg font-bold mb-4 text-purple-400">Quick Links</h4>
                        <div className="flex space-x-4">
                          <motion.a
                            href="https://linkedin.com/in/raashish-aggarwal"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center"
                          >
                            <Linkedin className="w-5 h-5 text-white" />
                          </motion.a>
                          <motion.a
                            href="https://github.com/raashish1601"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center"
                          >
                            <Github className="w-5 h-5 text-white" />
                          </motion.a>
                          <motion.a
                            href="https://drive.google.com/file/d/1Y3r1p_mRvKH9zK8Yzf-mcup9z7pLpR2v/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center"
                          >
                            <GraduationCap className="w-5 h-5 text-white" />
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-purple-400">Quick Stats</h3>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {[
                          { value: "3+", label: "Years Experience", color: "cyan" },
                          { value: "5+", label: "Major Projects", color: "purple" },
                          { value: "70%", label: "Performance Boost", color: "green" },
                          { value: "40%", label: "Revenue Impact", color: "yellow" },
                        ].map((stat, index) => (
                          <motion.div
                            key={stat.label}
                            whileHover={{ scale: 1.1, rotateZ: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`text-center p-3 sm:p-4 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color === "cyan" ? "blue" : stat.color === "purple" ? "pink" : stat.color === "green" ? "teal" : "orange"}-500/20 rounded-lg border border-${stat.color}-500/30 hover:border-${stat.color}-400/50 transition-all duration-300`}
                          >
                            <motion.div
                              className={`text-xl sm:text-2xl font-bold text-${stat.color}-400 mb-1`}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: index * 0.1, type: "spring" }}
                              viewport={{ once: true }}
                            >
                              {stat.value}
                            </motion.div>
                            <div className="text-xs text-gray-300">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <motion.footer
        className="py-6 sm:py-8 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.p className="text-gray-400 text-sm sm:text-base" whileHover={{ scale: 1.05 }}>
            © 2025 Raashish Aggarwal. Crafted with passion and modern web technologies.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  )
}
