"use client";

import { motion, useScroll, useMotionValue } from "framer-motion";
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
import FooterFour from "@/layouts/footers/footer-four";
import { useState, useRef, useEffect } from "react";
import NavigatingSection from "@/components/NavigatingSection";
import AchievementsSection from "@/components/OurServiceSection";
import WhySecure365Section from "@/components/WhySecure365Section";
import HeroSection from "@/components/HeroSectionNew";
import { config } from "../../config";
import { toast, ToastContainer } from "react-toastify";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
    const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
    const [servicesSlide, setServicesSlide] = useState(0);
    const containerRef = useRef(null);
    const rocketRef = useRef(null);
    const [serviceList, setServiceList] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        jobTitle: "",
        howDidYouFindUs: "",
        website: ""
    });
    const [copied, setCopied] = useState(false);
    const email = "Secure@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            toast.success("Copied Successfully.");
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
        alert("Form submitted and data saved to localStorage.");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${config.APP_URL}/secure-plugin/v1/home`,
                    {
                        cache: "no-store",
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log("data of home page2222", data);
                setServiceList(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (rocketRef.current) {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                const maxScroll = document.documentElement.scrollHeight - windowHeight;
                const moveDistance = (scrollPosition / maxScroll) * -200;
                rocketRef.current.style.transform = `translateX(${moveDistance}vw) translateY(-50%)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const services = [
        [
            { icon: <Shield className="w-8 h-8" />, title: "Cyber Security", desc: "Advanced threat protection and monitoring" },
            { icon: <Lock className="w-8 h-8" />, title: "Data Protection", desc: "Secure data management and encryption" },
            { icon: <Eye className="w-8 h-8" />, title: "24/7 Monitoring", desc: "Round-the-clock system surveillance" },
            { icon: <Users className="w-8 h-8" />, title: "Expert Consulting", desc: "Professional security guidance" },
        ],
        [
            { icon: <Globe className="w-8 h-8" />, title: "Network Security", desc: "Infrastructure protection solutions" },
            { icon: <Zap className="w-8 h-8" />, title: "Incident Response", desc: "Rapid threat mitigation services" },
            { icon: <CheckCircle className="w-8 h-8" />, title: "Compliance", desc: "Regulatory compliance management" },
            { icon: <AlertTriangle className="w-8 h-8" />, title: "Risk Assessment", desc: "Comprehensive security auditing" },
        ],
    ];

    const serviceCards = [
        { icon: "/images/rocket/service6.png", title: "UI/UX", subtitle: "Design", desc: "Advanced threat protection and monitoring" },
        { icon: "/images/rocket/service1.png", title: "Web", subtitle: "Development", desc: "Secure data management and encryption" },
        { icon: "/images/rocket/service2.png", title: "Brand", subtitle: "Identity", desc: "Round-the-clock surveillance and alerts" },
        { icon: "/images/rocket/service3.png", title: "Digital", subtitle: "Marketing", desc: "Professional security guidance" },
        { icon: "/images/rocket/service4.png", title: "Network", subtitle: "Security", desc: "Infrastructure protection solutions" },
        { icon: "/images/rocket/service6.png", title: "Incident", subtitle: "Response", desc: "Rapid threat mitigation" },
        { icon: "/images/rocket/service1.png", title: "Compliance", subtitle: "Design", desc: "Regulatory compliance management" },
        { icon: "/images/rocket/service2.png", title: "Risk", subtitle: "Assessment", desc: "Comprehensive security auditing" },
        { icon: "/images/rocket/service3.png", title: "24/7", subtitle: "Support", desc: "Always-on assistance" },
        { icon: "/images/rocket/service4.png", title: "Security", subtitle: "Training", desc: "Employee awareness programs" },
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ fontFamily: "Arial, sans-serif" }}>
            <ToastContainer />
            <HeroSection serviceList={serviceList} />
            <NavigatingSection serviceList={serviceList} rocketRef={rocketRef} className="relative z-20" />
            <WhySecure365Section containerRef={containerRef} className="relative z-20" />

            {/* What Make Us Different Section */}
            <section className="relative overflow-hidden what-make-different-sec z-20">
                <div className="absolute inset-0">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
                        style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <div className="flex gap-5 items-start justify-between what-make-outer-box">
                        <motion.div
                            className="what-make-heading-left-box"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="what-make-heading font-semibold text-white">
                                What Make<br />
                                Us Different?
                            </h2>
                            <Link href={"/contact-us"} className="bg-[#00AEEF] rounded-lg hover:bg-[#0099d4] text-white primary-btn-style">Start Your Mission</Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6 what-make-card-box-inner"
                        >
                            <div className="what-make-card-box flex items-start space-x-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                                <div className="flex items-center flex-shrink-0 what-icon-head-txt">
                                    <img src="/Security-icon.svg" alt="security-icon" />
                                    <h3 className="text-white mb-0 what-make-card-head font-anta">Information Security <br /> Solutions</h3>
                                </div>
                                <div>
                                    <p className="what-make-para m-0">
                                        Protect your business from threats with advanced security measures, real-time monitoring, and threat intelligence.
                                    </p>
                                </div>
                            </div>
                            <div className="what-make-card-box flex items-start space-x-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                                <div className="flex items-center flex-shrink-0 what-icon-head-txt">
                                    <img src="/Solution-icon.svg" alt="security-icon" />
                                    <h3 className="text-white mb-0 what-make-card-head font-anta">Comprehensive <br /> Solutions</h3>
                                </div>
                                <div>
                                    <p className="what-make-para m-0">
                                        Secure365 is build on years of battling cybercrime, managing e-commerce platform, and developing technology strategies.
                                    </p>
                                </div>
                            </div>
                            <div className="what-make-card-box flex items-start space-x-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                                <div className="flex items-center flex-shrink-0 what-icon-head-txt">
                                    <img src="/Victim-icon.svg" alt="security-icon" />
                                    <h3 className="text-white mb-0 what-make-card-head font-anta">Victim <br /> Approach</h3>
                                </div>
                                <div>
                                    <p className="what-make-para m-0">
                                        Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing real-world strategies.
                                    </p>
                                </div>
                            </div>
                            <div className="what-make-card-box flex items-start space-x-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                                <div className="flex items-center flex-shrink-0 what-icon-head-txt">
                                    <img src="/Protection-icon.svg" alt="security-icon" />
                                    <h3 className="text-white mb-0 what-make-card-head font-anta">Advanced <br /> Protection</h3>
                                </div>
                                <div>
                                    <p className="what-make-para m-0">
                                        Secure365 provides innovative approaches to combat threats, ensuring the highest security standards.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <AchievementsSection achievementCards={serviceCards} className="relative z-20" />

             <section className="bg-[#02050f] relative z-20 website-audit-form">
                <div className="audit-form-box relative">
                    <div className="flex flex-col">
                        {/* Left Column */}
                        <div className="flex top-audit-head">
                            <h2 className="text-5xl md:text-6xl text-white leading-snug mb-0">
                                Wanna A Free <br /> WEBSITE AUDIT?
                            </h2>
                            <div className="text-left mr-20 mt-3 right-audit-cont">
                                <p className=" text-white audit-para">
                                    Or a GTM Design Plan? Hop on a 30-min <br />
                                    call to unlock the potential of your business.
                                </p>
                                <div className="relative flex audit-link-box">
                                    <a
                                        href={`mailto:${email}`}
                                        className="block text-[#00AEEF] text-sm relative"
                                        style={{
                                            textDecoration: "none",
                                            borderBottom: "1px solid #00AEEF",
                                            paddingBottom: "3px",
                                            width: "40%",
                                            display: "flex"
                                        }}
                                    >
                                        {email}
                                        <i
                                            className="fas fa-copy ml-2 cursor-pointer"
                                            onClick={copyToClipboard}
                                        />
                                    </a>
                                    {copied && <span className="absolute text-xs text-green-500">Copied!</span>}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your name*"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-transparent text-white text-sm focus:border-[#00AEEF] outline-none form-input-home"
                                />
                                <input
                                    type="email"
                                    placeholder="Your email*"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-white text-sm focus:border-[#00AEEF] outline-none form-input-home"
                                />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Job title"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-gray-700 text-white text-sm focus:border-[#00AEEF] outline-none form-input-home"
                                />
                                <select
                                    name="howDidYouFindUs"
                                    value={formData.howDidYouFindUs}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-white text-sm focus:border-[#00AEEF] outline-none form-input-home"
                                >
                                    <option value="">How did you find secure365</option>
                                    <option value="Google">Google</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Referral">Referral</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <input
                                type="text"
                                placeholder="Drop any details (optional)"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-white text-sm focus:border-[#00AEEF] outline-none form-input-home"
                            />

                            <div className="flex justify-between text-btn-wrap">
                                <p className="text-xs text-white font-normal paragraph-line-home">
                                    Curious how we handle your data with care? Scoop into our Privacy Policy
                                </p>
                                <button
                                    type="submit"
                                    className="bg-[#00AEEF] hover:bg-[#0095c4] transition text-white font-normal send-req-btn"
                                >
                                    Send Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <FooterFour className="relative z-20" />
        </div>
    );
}