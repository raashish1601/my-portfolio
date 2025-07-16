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
  Award,
  ChevronDown,
  Zap,
  Target,
  Users,
  TrendingUp,
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
    }
  }

  const skills = [
    { name: "React JS", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Next JS", level: 90, color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-800" },
    { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-600" },
    { name: "Redux/RTK", level: 85, color: "from-purple-500 to-purple-700" },
    { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-teal-600" },
    { name: "Performance Optimization", level: 88, color: "from-green-500 to-green-700" },
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
      highlights: [
        "Performed development, debugging, and optimization",
        "Reduced LCP and FCP to increase page speed",
        "Implemented authentication, shopping cart, and checkout logic",
      ],
    },
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
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Raashish Aggarwal
          </motion.div>
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
        </div>
      </motion.nav>

      {/* Sticky Social Links */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4"
      >
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
        <div className="w-0.5 h-16 bg-gradient-to-b from-emerald-500 to-transparent mx-auto"></div>
      </motion.div>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div style={{ y }} className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="mb-8"
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 p-1"
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
                  <Code className="w-16 h-16 text-cyan-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold mb-6"
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
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Crafting exceptional user experiences with React, Next.js, and modern web technologies. Specialized in
            performance optimization and scalable frontend architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-3 rounded-full"
                onClick={() => window.open("mailto:raashish1601@gmail.com", "_blank")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-8 py-3 rounded-full bg-transparent"
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

      {/* Awards Section - NEW */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              🏆 Action Hero Award Winner
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Sole recipient of CARS24's prestigious Action Hero Award for exceptional contribution to BIKES24 platform
            </motion.p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Floating trophy icons */}
              <motion.div
                className="absolute -top-10 -left-10 text-6xl"
                animate={floatingAnimation}
                transition={{ ...floatingAnimation.transition, delay: 0 }}
              >
                🏆
              </motion.div>
              <motion.div
                className="absolute -top-5 -right-10 text-4xl"
                animate={floatingAnimation}
                transition={{ ...floatingAnimation.transition, delay: 1 }}
              >
                ⭐
              </motion.div>
              <motion.div
                className="absolute -bottom-5 -left-5 text-5xl"
                animate={floatingAnimation}
                transition={{ ...floatingAnimation.transition, delay: 2 }}
              >
                🎯
              </motion.div>

              <Card className="bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 border-2 border-yellow-500/30 backdrop-blur-md overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-red-500/5"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                <CardContent className="p-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Award Images */}
                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ scale: 1.02, rotateY: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <img
                          src="/images/action-hero-certificate.png"
                          alt="Action Hero Award Certificate"
                          className="w-full rounded-lg shadow-2xl relative z-10 border-2 border-yellow-500/30"
                        />
                        <motion.div
                          className="absolute -top-2 -right-2 text-3xl"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          🌟
                        </motion.div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02, rotateY: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <img
                          src="/images/award-ceremony.png"
                          alt="Award Ceremony at CARS24"
                          className="w-full rounded-lg shadow-2xl relative z-10 border-2 border-orange-500/30"
                        />
                        <motion.div
                          className="absolute -bottom-2 -left-2 text-3xl"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          🎉
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Award Details */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-3xl font-bold text-yellow-400 mb-4 flex items-center">
                          <motion.span
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="mr-3 text-4xl"
                          >
                            🏆
                          </motion.span>
                          Action Hero Award
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          <strong className="text-yellow-400">Sole recipient</strong> of CARS24's most prestigious
                          recognition for
                          <strong className="text-orange-400"> exemplary performance</strong> and
                          <strong className="text-red-400"> raising standards of excellence</strong> in the BIKES24
                          platform development.
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                      >
                        <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 p-4 text-center">
                          <CardContent className="p-0">
                            <motion.div
                              className="text-2xl mb-2"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            >
                              🎯
                            </motion.div>
                            <div className="text-lg font-bold text-yellow-400">Sole Winner</div>
                            <div className="text-xs text-gray-300">Only recipient</div>
                          </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30 p-4 text-center">
                          <CardContent className="p-0">
                            <motion.div
                              className="text-2xl mb-2"
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            >
                              📈
                            </motion.div>
                            <div className="text-lg font-bold text-orange-400">Standards Raised</div>
                            <div className="text-xs text-gray-300">Excellence Achieved</div>
                          </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border-red-500/30 p-4 text-center">
                          <CardContent className="p-0">
                            <motion.div
                              className="text-2xl mb-2"
                              animate={{ y: [-5, 5, -5] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            >
                              🚀
                            </motion.div>
                            <div className="text-lg font-bold text-red-400">BIKES24</div>
                            <div className="text-xs text-gray-300">Platform Impact</div>
                          </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30 p-4 text-center">
                          <CardContent className="p-0">
                            <motion.div
                              className="text-2xl mb-2"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
                            >
                              💎
                            </motion.div>
                            <div className="text-lg font-bold text-purple-400">Dec 2024</div>
                            <div className="text-xs text-gray-300">Recent Achievement</div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-lg p-4 border border-yellow-500/20"
                      >
                        <p className="text-center text-gray-300 italic">
                          "You've been awarded for exemplary performance and raising the standards of excellence - this
                          month's true entrepreneur of change"
                        </p>
                        <div className="text-center mt-2 text-yellow-400 font-semibold">- CARS24 Leadership</div>
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
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.02, rotateY: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-white/5 backdrop-blur-md border-white/10 p-8 hover:border-emerald-500/30 transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-4 text-emerald-400">Frontend Engineer</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Passionate Frontend Developer with 3+ years of experience building scalable web applications.
                      Currently working at CARS24, where I've contributed to significant revenue growth through
                      innovative frontend solutions and performance optimizations.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                        <MapPin className="w-5 h-5 text-emerald-400 mr-2" />
                        <span>Gurgaon, India</span>
                      </motion.div>
                      <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                        <Phone className="w-5 h-5 text-emerald-400 mr-2" />
                        <span>+91-8800555656</span>
                      </motion.div>
                      <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                        <Mail className="w-5 h-5 text-emerald-400 mr-2" />
                        <span>raashish1601@gmail.com</span>
                      </motion.div>
                      <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                        <GraduationCap className="w-5 h-5 text-emerald-400 mr-2" />
                        <span>B.Tech IT (8.22 CGPA)</span>
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
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02, rotateZ: 2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-emerald-500/30 p-6 text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-emerald-400 mb-1">Problem Solver</div>
                      <div className="text-xs text-gray-300">Creative Solutions</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, rotateZ: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 p-6 text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-400 mb-1">Goal Oriented</div>
                      <div className="text-xs text-gray-300">Results Driven</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, rotateZ: 2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-green-500/30 p-6 text-center hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-400 mb-1">Team Player</div>
                      <div className="text-xs text-gray-300">Collaborative</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02, rotateZ: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 p-6 text-center hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-yellow-400 mb-1">Growth Mindset</div>
                      <div className="text-xs text-gray-300">Always Learning</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
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
            className="grid md:grid-cols-2 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, rotateX: 5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <motion.span
                    className="text-emerald-400 font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
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
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Code, title: "Frontend Development", desc: "React, Next.js, TypeScript, Redux", color: "blue" },
              {
                icon: Award,
                title: "Performance Optimization",
                desc: "Web Vitals, Bundle Optimization, SEO",
                color: "purple",
              },
              {
                icon: Briefcase,
                title: "UI/UX Implementation",
                desc: "Responsive Design, Storybook, Figma",
                color: "green",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{
                  scale: 1.02,
                  rotateY: 10,
                  boxShadow: `0 20px 40px rgba(${item.color === "blue" ? "59, 130, 246" : item.color === "purple" ? "147, 51, 234" : "34, 197, 94"}, 0.3)`,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  className={`bg-gradient-to-br from-${item.color}-500/20 to-${item.color === "blue" ? "cyan" : item.color === "purple" ? "pink" : "teal"}-500/20 border-${item.color}-500/30 p-6 hover:border-${item.color}-400/50 transition-all duration-300`}
                >
                  <CardContent className="p-0 text-center">
                    <motion.div
                      animate={floatingAnimation}
                      transition={{ ...floatingAnimation.transition, delay: index * 0.5 }}
                    >
                      <item.icon className={`w-12 h-12 text-${item.color}-400 mx-auto mb-4`} />
                    </motion.div>
                    <h3 className={`text-xl font-bold mb-2 text-${item.color}-400`}>{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  <CardContent className="p-6 h-full flex flex-col relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3
                        className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div whileHover={{ scale: 1.2, rotate: 45 }} className="text-cyan-400 hover:text-cyan-300">
                        <ExternalLink className="w-5 h-5" />
                      </motion.div>
                    </div>

                    <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

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
                              className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
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
                          className="flex items-center text-sm text-gray-400"
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

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
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
                className="relative mb-12 last:mb-0"
              >
                {/* Enhanced Timeline line */}
                {index < experience.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-16 w-0.5 bg-gradient-to-b from-emerald-500 to-green-500"
                    initial={{ height: 0 }}
                    whileInView={{ height: 128 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                )}

                <div className="flex items-start">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Briefcase className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-grow"
                  >
                    <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <motion.h3 className="text-xl font-bold text-white mb-1" whileHover={{ color: "#22d3ee" }}>
                              {exp.title}
                            </motion.h3>
                            <p className="text-cyan-400 font-semibold">{exp.company}</p>
                          </div>
                          <div className="text-right mt-2 md:mt-0">
                            <p className="text-gray-300 font-medium">{exp.period}</p>
                            <p className="text-gray-400 text-sm">{exp.location}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start text-gray-300 text-sm"
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
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-emerald-400">Get In Touch</h3>
                      <div className="space-y-4">
                        <motion.a
                          href="mailto:raashish1601@gmail.com"
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                        >
                          <Mail className="w-5 h-5 mr-4" />
                          raashish1601@gmail.com
                        </motion.a>
                        <motion.a
                          href="tel:+918800555656"
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                        >
                          <Phone className="w-5 h-5 mr-4" />
                          +91-8800555656
                        </motion.a>
                        <motion.div whileHover={{ x: 10, scale: 1.02 }} className="flex items-center text-gray-300">
                          <MapPin className="w-5 h-5 mr-4" />
                          Gurgaon, India
                        </motion.div>
                      </div>

                      <div className="flex space-x-4 mt-8">
                        <motion.a
                          href="https://linkedin.com/in/raashish-aggarwal"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center hover:from-cyan-600 hover:to-blue-600 transition-all"
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href="https://github.com/raashish1601"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -360 }}
                          transition={{ duration: 0.3 }}
                          className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:from-gray-600 hover:to-gray-800 transition-all"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-purple-400">Quick Stats</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: "3+", label: "Years Experience", color: "cyan" },
                          { value: "5+", label: "Major Projects", color: "purple" },
                          { value: "70%", label: "Performance Boost", color: "green" },
                          { value: "50K+", label: "Users Impacted", color: "yellow" },
                        ].map((stat, index) => (
                          <motion.div
                            key={stat.label}
                            whileHover={{ scale: 1.1, rotateZ: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`text-center p-4 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color === "cyan" ? "blue" : stat.color === "purple" ? "pink" : stat.color === "green" ? "teal" : "orange"}-500/20 rounded-lg border border-${stat.color}-500/30 hover:border-${stat.color}-400/50 transition-all duration-300`}
                          >
                            <motion.div
                              className={`text-2xl font-bold text-${stat.color}-400 mb-1`}
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
        className="py-8 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.p className="text-gray-400" whileHover={{ scale: 1.05 }}>
            © 2024 Raashish Aggarwal. Crafted with passion and modern web technologies.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  )
}
