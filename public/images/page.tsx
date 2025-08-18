"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Users,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  Globe,
  Headphones,
  Zap,
  Menu,
  Mouse,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const { scrollYProgress } = useScroll();

  // Transform values for parallax effects
  const servicesOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);
  const destinationOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimationComplete(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    [
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Cyber Security",
        desc: "Advanced threat protection and monitoring",
      },
      {
        icon: <Lock className="w-8 h-8" />,
        title: "Data Protection",
        desc: "Secure data management and encryption",
      },
      {
        icon: <Eye className="w-8 h-8" />,
        title: "24/7 Monitoring",
        desc: "Round-the-clock system surveillance",
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Expert Consulting",
        desc: "Professional security guidance",
      },
    ],
    [
      {
        icon: <Globe className="w-8 h-8" />,
        title: "Network Security",
        desc: "Infrastructure protection solutions",
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Incident Response",
        desc: "Rapid threat mitigation services",
      },
      {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Compliance",
        desc: "Regulatory compliance management",
      },
      {
        icon: <AlertTriangle className="w-8 h-8" />,
        title: "Risk Assessment",
        desc: "Comprehensive security auditing",
      },
    ],
  ];

  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">
              SECURE <span className="text-[#00AEEF]">365</span>
            </div>
            <div className="hidden lg:flex space-x-8 text-sm">
              <a
                href="#"
                className="text-white hover:text-[#00AEEF] transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white hover:text-[#00AEEF] transition-colors"
              >
                Our Services
              </a>
              <a
                href="#"
                className="text-white hover:text-[#00AEEF] transition-colors"
              >
                Our Products
              </a>
              <a
                href="#"
                className="text-white hover:text-[#00AEEF] transition-colors"
              >
                Contact Us
              </a>
            </div>
            <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white px-6 py-2 text-sm">
              Get Started
            </Button>
            <button className="lg:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Exact Figma Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/earth-window.jpg')` }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
              {/* Left Side - Heading Only */}
              <div>
                <AnimatePresence>
                  {heroAnimationComplete && (
                    <motion.h1
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="main-banner-heading text-white font-semibold mb-0"
                    >
                      Mission
                      <br />
                      Control For Your
                      <br />
                      <span className="">Digital Galaxy</span>
                    </motion.h1>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Side - Paragraph and Button */}
              <div className="space-y-8">
                <AnimatePresence>
                  {heroAnimationComplete && (
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                      className="space-y-6"
                    >
                      <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                        Navigate the vast expanse of cyberspace with confidence.
                        Our advanced security solutions provide mission-critical
                        protection for your digital assets, ensuring safe
                        passage through the most challenging cyber environments.
                      </p>
                      <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white px-10 py-4 text-lg font-semibold">
                        Get Started
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Mouse Scroll Icon - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70"
          >
            <Mouse className="w-6 h-6 mb-2" />
            <div className="text-sm">Scroll</div>
          </motion.div>
        </div>
      </section>

      {/* Navigating Section - Exact Figma Layout */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Heading Only */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Navigating
                  <br />
                  Your Business
                  <br />
                  Through
                  <br />
                  the Stars... and
                  <br />
                  <span className="text-[#00AEEF]">Safeguarding</span>
                </h2>
              </motion.div>

              {/* Right Side - Paragraph and Button */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  In the infinite digital cosmos, your business deserves more
                  than basic protection. Our comprehensive cybersecurity
                  solutions act as your digital navigation system, guiding you
                  safely through cyber threats while maintaining optimal
                  performance and reliability across all your operations.
                </p>
                <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white px-10 py-4 text-lg font-semibold">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* But Why Secure365 Section - Exact Figma Layout */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Centered Heading */}
          <motion.div
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.1 }}  {/* Decrease the duration to make it faster */}
            // viewport={{ once: true }}
            className="inline-block text-6xl lg:text-9xl  animate-marquee"
          >
            <h2 className="animate-marquee text-5xl lg:text-6xl font-bold">
              But, Why Secure365?
            </h2>
          </motion.div>

          {/* Statistics with Exact Figma Positioning */}
          <div className="relative min-h-[800px]">
            {/* 2500+ Projects - Left side with paragraph and button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 max-w-lg"
            >
              <div className="relative">
                {/* Decorative stars */}
                <div className="absolute -top-4 -right-8 text-[#00AEEF] text-2xl">
                  ✦
                </div>
                <div className="absolute -bottom-4 -left-4 text-[#00AEEF] text-lg">
                  ✦
                </div>

                <div className="text-6xl lg:text-8xl font-bold text-[#00AEEF] mb-4">
                  2500+
                </div>
                <div className="text-2xl lg:text-3xl text-white mb-6">
                  Projects Delivered
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg mb-6 max-w-md">
                Successfully completed over 2500 cybersecurity projects across
                various industries, establishing ourselves as a trusted partner
                in digital protection and innovation.
              </p>
              <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white px-8 py-3">
                Get Started
              </Button>
            </motion.div>

            {/* 100+ Experts - Right side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-32 right-0"
            >
              <div className="relative text-right">
                {/* Decorative stars */}
                <div className="absolute -top-6 -left-8 text-[#00AEEF] text-xl">
                  ✦
                </div>
                <div className="absolute -bottom-2 right-4 text-[#00AEEF] text-lg">
                  ✦
                </div>

                <div className="text-6xl lg:text-8xl font-bold text-[#00AEEF] mb-4">
                  100+
                </div>
                <div className="text-2xl lg:text-3xl text-white">Experts</div>
              </div>
            </motion.div>

            {/* 13+ Years - Center */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-64 left-1/2 transform -translate-x-1/2"
            >
              <div className="relative text-center">
                {/* Decorative stars */}
                <div className="absolute -top-4 -right-12 text-[#00AEEF] text-2xl">
                  ✦
                </div>
                <div className="absolute -bottom-6 -left-8 text-[#00AEEF] text-lg">
                  ✦
                </div>

                <div className="text-6xl lg:text-8xl font-bold text-[#00AEEF] mb-4">
                  13+
                </div>
                <div className="text-2xl lg:text-3xl text-white">
                  Years & Counting
                </div>
              </div>
            </motion.div>

            {/* 32+ Countries - Left side bottom */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0"
            >
              <div className="relative">
                {/* Decorative stars */}
                <div className="absolute -top-2 right-8 text-[#00AEEF] text-xl">
                  ✦
                </div>
                <div className="absolute -bottom-4 -right-4 text-[#00AEEF] text-lg">
                  ✦
                </div>

                <div className="text-6xl lg:text-8xl font-bold text-[#00AEEF] mb-4">
                  32+
                </div>
                <div className="text-2xl lg:text-3xl text-white">
                  Countries Served
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Make Us Different Section - Exact Figma Layout */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Heading and button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                What Make
                <br />
                Us Different?
              </h2>
              <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white px-8 py-3 text-base">
                About Us
              </Button>
            </motion.div>

            {/* Right side - Feature cards in single column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Community Security */}
              <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Security</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Building secure digital communities through collaborative
                    threat intelligence and shared security protocols that
                    protect entire ecosystems.
                  </p>
                </div>
              </div>

              {/* Comprehensive Protection */}
              <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Comprehensive Protection
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    End-to-end security solutions covering all aspects of your
                    digital infrastructure and business operations with advanced
                    monitoring capabilities.
                  </p>
                </div>
              </div>

              {/* 24/7 Support */}
              <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Round-the-clock monitoring and support from our expert team,
                    ensuring continuous protection and rapid response to any
                    security incidents.
                  </p>
                </div>
              </div>

              {/* Advanced Technology */}
              <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Advanced Technology
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Cutting-edge AI and machine learning technologies for
                    proactive threat detection and automated response systems
                    that stay ahead of cyber threats.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section - Exact Figma Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/earth-night.png')` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          className="relative z-10 w-full py-20"
          style={{ opacity: servicesOpacity }}
        >
          <div className="container mx-auto px-6">
            {/* Left-aligned heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-5xl lg:text-6xl font-bold">
                Our
                <br />
                Services
              </h2>
            </motion.div>

            {/* Service Cards Grid - Exact Figma Layout */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
              {/* Row 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-[#00AEEF] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Cyber Security</h3>
                <p className="text-gray-400 text-sm">
                  Advanced threat protection and real-time monitoring
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-[#00AEEF] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Data Protection</h3>
                <p className="text-gray-400 text-sm">
                  Secure data management and encryption services
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-[#00AEEF] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <h3 className="text-lg font-bold mb-2">24/7 Monitoring</h3>
                <p className="text-gray-400 text-sm">
                  Round-the-clock system surveillance and alerts
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-[#00AEEF] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Expert Consulting</h3>
                <p className="text-gray-400 text-sm">
                  Professional security guidance and strategy
                </p>
              </motion.div>
            </div>

            {/* Navigation Controls - Exact Figma Position */}
            <div className="flex justify-between items-center">
              {/* Left side - Service category icons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setCurrentServiceSlide(0)}
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-colors ${
                    currentServiceSlide === 0
                      ? "border-[#00AEEF] bg-[#00AEEF]/20"
                      : "border-gray-600"
                  }`}
                >
                  <Shield className="w-6 h-6 text-[#00AEEF]" />
                </button>
                <button
                  onClick={() => setCurrentServiceSlide(1)}
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-colors ${
                    currentServiceSlide === 1
                      ? "border-[#00AEEF] bg-[#00AEEF]/20"
                      : "border-gray-600"
                  }`}
                >
                  <Globe className="w-6 h-6 text-gray-400" />
                </button>
                <button className="w-12 h-12 rounded-lg border-2 border-gray-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              {/* Right side - Navigation dots */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[#00AEEF] rounded-full"></div>
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* You Arrived Your Destination Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: destinationOpacity }}
        >
          <div className="text-center px-6">
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              You Arrived Your Destination
            </h2>
          </div>
        </motion.div>
      </section>

      {/* Contact Us Section */}
      <section className="relative py-32 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Want A Free <span className="text-[#00AEEF]">Consultation?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Get in touch with our team of experts
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email Us</h3>
                  <p className="text-gray-400">contact@secure365.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#00AEEF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Visit Us</h3>
                  <p className="text-gray-400">
                    123 Security Street, Cyber City
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#00AEEF] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#00AEEF] focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#00AEEF] focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#00AEEF] focus:outline-none"
                ></textarea>
                <Button className="w-full bg-[#00AEEF] hover:bg-[#0099d4] text-white py-3">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                SECURE <span className="text-[#00AEEF]">365</span>
              </div>
              <p className="text-gray-400 mb-4">
                Protecting your digital universe, one day at a time.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-[#00AEEF]/20 rounded flex items-center justify-center">
                  <span className="text-[#00AEEF] text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-[#00AEEF]/20 rounded flex items-center justify-center">
                  <span className="text-[#00AEEF] text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-[#00AEEF]/20 rounded flex items-center justify-center">
                  <span className="text-[#00AEEF] text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Cyber Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Data Protection
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    24/7 Monitoring
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#00AEEF] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Secure 365. All rights reserved. | Protecting your
              digital universe since 2011
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
