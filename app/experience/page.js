"use client"
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Experience() {
    const [hideNavbar, setHideNavbar] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [section2Visible, setSection2Visible] = useState(false);
    const section2Ref = useRef(null);

    useEffect(() => {
        setIsVisible(true);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target === section2Ref.current) {
                        setHideNavbar(true);
                        setSection2Visible(true);
                    } else if (entry.target === section2Ref.current && !entry.isIntersecting) {
                        const section2Top = section2Ref.current.getBoundingClientRect().top;
                        if (section2Top > 0) {
                            setHideNavbar(false);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (section2Ref.current) {
            observer.observe(section2Ref.current);
        }

        return () => {
            if (section2Ref.current) {
                observer.unobserve(section2Ref.current);
            }
        };
    }, []);

    return (
        <main>
            <Navbar hideNavbar={hideNavbar} />
            
            {/* Hero Section */}
            <section className={`bg-[#d2e823] min-h-screen pt-32 px-4 md:px-10 flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-[#254f1a] font-extrabold text-4xl md:text-6xl lg:text-7xl mb-10">My Experience</h1>
                    <p className="text-[#254f1a] font-medium text-base md:text-xl lg:text-2xl mb-16 max-w-4xl mx-auto px-4">
                        A journey through my education, internships, and hands-on projects. Building skills in full-stack development while working toward contributing to open source.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section ref={section2Ref} className={`bg-[#2665d6] min-h-screen py-12 md:py-20 px-4 md:px-10 transition-all duration-1000 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[#d2e823] font-extrabold text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16 text-center">Professional Timeline</h2>
                    
                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Vertical Line - Hidden on mobile */}
                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#d2e823]/30"></div>
                        
                        {/* Timeline Item 1 - Right Side on desktop, stacked on mobile */}
                        <div className="mb-12 md:mb-16 flex lg:justify-end items-center w-full">
                            <div className="hidden lg:block lg:w-5/12"></div>
                            <div className="hidden lg:flex relative items-center justify-center w-16">
                                <div className="absolute w-8 h-8 bg-[#d2e823] rounded-full border-4 border-[#2665d6] z-10"></div>
                            </div>
                            <div className="w-full lg:w-5/12 bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <span className="text-[#2665d6] font-bold text-sm">2025 - June</span>
                                <h3 className="text-[#254f1a] font-extrabold text-xl md:text-2xl mt-2 mb-2">Learning Web Development</h3>
                                <h4 className="text-gray-600 font-semibold text-base md:text-lg mb-3">Frontend & Backend Fundamentals</h4>
                                <p className="text-gray-700 mb-3 text-sm md:text-base">
                                    Mastered HTML, CSS, JavaScript, and Tailwind CSS. Built responsive UIs and learned modern web development practices.
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="bg-[#2665d6]/10 text-[#2665d6] px-3 py-1 rounded-full text-sm font-medium">HTML/CSS</span>
                                    <span className="bg-[#2665d6]/10 text-[#2665d6] px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                                    <span className="bg-[#2665d6]/10 text-[#2665d6] px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 2 - Left Side on desktop, stacked on mobile */}
                        <div className="mb-12 md:mb-16 flex items-center w-full">
                            <div className="w-full lg:w-5/12 bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <span className="text-[#780016] font-bold text-sm">2025 - August</span>
                                <h3 className="text-[#254f1a] font-extrabold text-xl md:text-2xl mt-2 mb-2">Self-Learning & Projects</h3>
                                <h4 className="text-gray-600 font-semibold text-base md:text-lg mb-3">Full Stack Development</h4>
                                <p className="text-gray-700 mb-3 text-sm md:text-base">
                                   Building modern web applications using React, Next.js, Node.js, and MongoDB. Creating projects like BiTTree (LinkTree clone) and PassJAIL (password manager).
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="bg-[#780016]/10 text-[#780016] px-3 py-1 rounded-full text-sm font-medium">React</span>
                                    <span className="bg-[#780016]/10 text-[#780016] px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
                                    <span className="bg-[#780016]/10 text-[#780016] px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                                </div>
                            </div>
                            <div className="hidden lg:flex relative items-center justify-center w-16">
                                <div className="absolute w-8 h-8 bg-[#780016] rounded-full border-4 border-[#2665d6] z-10"></div>
                            </div>
                            <div className="hidden lg:block lg:w-5/12"></div>
                        </div>

                        {/* Timeline Item 3 - Right Side on desktop, stacked on mobile */}
                        <div className="mb-12 md:mb-16 flex lg:justify-end items-center w-full">
                            <div className="hidden lg:block lg:w-5/12"></div>
                            <div className="hidden lg:flex relative items-center justify-center w-16">
                                <div className="absolute w-8 h-8 bg-[#d2e823] rounded-full border-4 border-[#2665d6] z-10"></div>
                            </div>
                            <div className="w-full lg:w-5/12 bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <span className="text-[#2665d6] font-bold text-sm">2025 - 2029</span>
                                <h3 className="text-[#254f1a] font-extrabold text-xl md:text-2xl mt-2 mb-2">BTech in Electrical and Computer Engineering</h3>
                                <h4 className="text-gray-600 font-semibold text-base md:text-lg mb-3">Manipal University Jaipur</h4>
                                <p className="text-gray-700 mb-3 text-sm md:text-base">
                                    Studying Electrical and Computer Engineering with a focus on software engineering, data structures, algorithms, and web technologies.
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="bg-[#2665d6]/10 text-[#2665d6] px-3 py-1 rounded-full text-sm font-medium">Java</span>
                                    <span className="bg-[#2665d6]/10 text-[#2665d6] px-3 py-1 rounded-full text-sm font-medium">DSA</span>
                                    <span className="bg-[#2665d6]/10 text-[#2665d6] px-3 py-1 rounded-full text-sm font-medium">Python</span>
                                </div>
                            </div>

                            
                        </div>

                        {/* Timeline Item 4 - Left Side on desktop, stacked on mobile */}
                        <div className="mb-12 md:mb-16 flex items-center w-full">
                            <div className="w-full lg:w-5/12 bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                <span className="text-[#780016] font-bold text-sm">2026 - Goal</span>
                                <h3 className="text-[#254f1a] font-extrabold text-xl md:text-2xl mt-2 mb-2">Open Source Contributor</h3>
                                <h4 className="text-gray-600 font-semibold text-base md:text-lg mb-3">Preparing for GSoC 2026</h4>
                                <p className="text-gray-700 mb-3 text-sm md:text-base">
                                    Actively contributing to open source projects and preparing for Google Summer of Code 2026. Learning collaborative development and best practices.
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="bg-[#780016]/10 text-[#780016] px-3 py-1 rounded-full text-sm font-medium">Git</span>
                                    <span className="bg-[#780016]/10 text-[#780016] px-3 py-1 rounded-full text-sm font-medium">GitHub</span>
                                    <span className="bg-[#780016]/10 text-[#780016] px-3 py-1 rounded-full text-sm font-medium">Open Source</span>
                                </div>
                            </div>
                            <div className="hidden lg:flex relative items-center justify-center w-16">
                                <div className="absolute w-8 h-8 bg-[#780016] rounded-full border-4 border-[#2665d6] z-10 animate-pulse"></div>
                            </div>
                            <div className="hidden lg:block lg:w-5/12"></div>
                        </div>

                    </div>

                    {/* Skills Section */}
                    <div className="mt-12 md:mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                        <h3 className="text-[#d2e823] font-extrabold text-2xl md:text-3xl mb-6 md:mb-8 text-center">Core Skills</h3>
                        <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
                            <div className="bg-white/20 rounded-xl p-3 md:p-4 text-center hover:bg-white/30 transition-all">
                                <p className="text-white font-bold text-sm md:text-lg">Frontend Development</p>
                            </div>
                            <div className="bg-white/20 rounded-xl p-3 md:p-4 text-center hover:bg-white/30 transition-all">
                                <p className="text-white font-bold text-sm md:text-lg">Backend Development</p>
                            </div>
                            <div className="bg-white/20 rounded-xl p-3 md:p-4 text-center hover:bg-white/30 transition-all">
                                <p className="text-white font-bold text-sm md:text-lg">Backend APIs</p>
                            </div>
                            <div className="bg-white/20 rounded-xl p-3 md:p-4 text-center hover:bg-white/30 transition-all">
                                <p className="text-white font-bold text-sm md:text-lg">Database Design</p>
                            </div>
                            <div className="bg-white/20 rounded-xl p-3 md:p-4 text-center hover:bg-white/30 transition-all">
                                <p className="text-white font-bold text-sm md:text-lg">UI/UX Design</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}