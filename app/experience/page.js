"use client"
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const experiences = [
    {
        id: 1,
        date: "2025 - June",
        title: "Learning Web Development",
        subtitle: "Frontend & Backend Fundamentals",
        description: "Mastered HTML, CSS, JavaScript, and Tailwind CSS. Built responsive UIs and learned modern web development practices.",
        skills: ["HTML/CSS", "JavaScript", "Tailwind CSS"],
        icon: "🌱",
        color: "bg-[#2665d6]",
        tagBg: "bg-[#2665d6]/10",
        tagText: "text-[#2665d6]"
    },
    {
        id: 2,
        date: "2025 - August",
        title: "Self-Learning & Projects",
        subtitle: "Full Stack Development",
        description: "Building modern web applications using React, Next.js, Node.js, and MongoDB. Creating projects like BiTTree (LinkTree clone) and PassJAIL (password manager).",
        skills: ["React", "Next.js", "MongoDB"],
        icon: "💻",
        color: "bg-[#780016]",
        tagBg: "bg-[#780016]/10",
        tagText: "text-[#780016]"
    },
    {
        id: 3,
        date: "2025 - 2029",
        title: "BTech in Electrical and Computer Engineering",
        subtitle: "Manipal University Jaipur",
        description: "Studying Electrical and Computer Engineering with a focus on software engineering, data structures, algorithms, and web technologies.",
        skills: ["Java", "DSA", "Python"],
        icon: "🎓",
        color: "bg-[#d2e823]",
        tagBg: "bg-[#d2e823]/30",
        tagText: "text-[#254f1a]"
    },
    {
        id: 4,
        date: "2026 - Present",
        title: "Open Source Contributor",
        subtitle: "Preparing for GSoC 2026",
        description: "Actively contributing to open source projects and preparing for Google Summer of Code 2026. Learning collaborative development and best practices.",
        skills: ["Git", "GitHub", "Open Source"],
        icon: "🚀",
        color: "bg-[#780016]",
        tagBg: "bg-[#780016]/10",
        tagText: "text-[#780016]",
        isGoal: true
    },
    {
        id: 5,
        date: "2026 - Present",
        title: "Data Structures & Algorithms",
        subtitle: "Mastering Problem Solving",
        description: "Deepening understanding of data structures and algorithms to enhance problem-solving skills and coding efficiency. Solving problems on LeetCode and preparing for technical interviews.",
        skills: ["Algorithms", "Data Structures", "Problem Solving", "LeetCode"],
        icon: "🧠",
        color: "bg-[#2665d6]",
        tagBg: "bg-[#2665d6]/10",
        tagText: "text-[#2665d6]",
        isGoal: true
    }

];

const skills = [
    { name: "React / Next.js", icon: "⚛️", level: 90 },
    { name: "Node.js / Express", icon: "🟢", level: 85 },
    { name: "MongoDB", icon: "🍃", level: 80 },
    { name: "Tailwind CSS", icon: "🎨", level: 95 },
    { name: "JavaScript / TypeScript", icon: "📜", level: 88 },
    { name: "Git / GitHub", icon: "🔧", level: 85 }
];

export default function Experience() {
    const [hideNavbar, setHideNavbar] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [section2Visible, setSection2Visible] = useState(false);
    const [visibleItems, setVisibleItems] = useState({});
    const section2Ref = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        setIsVisible(true);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === section2Ref.current) {
                        if (entry.isIntersecting) {
                            setHideNavbar(true);
                            setSection2Visible(true);
                        } else {
                            const rect = entry.target.getBoundingClientRect();
                            if (rect.top > 0) setHideNavbar(false);
                        }
                    }
                    
                    const itemIndex = itemRefs.current.indexOf(entry.target);
                    if (itemIndex !== -1 && entry.isIntersecting) {
                        setVisibleItems(prev => ({ ...prev, [itemIndex]: true }));
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (section2Ref.current) observer.observe(section2Ref.current);
        itemRefs.current.forEach(ref => ref && observer.observe(ref));

        return () => {
            if (section2Ref.current) observer.unobserve(section2Ref.current);
            itemRefs.current.forEach(ref => ref && observer.unobserve(ref));
        };
    }, []);

    return (
        <main>
            <Navbar hideNavbar={hideNavbar} />
            
            {/* Hero Section */}
            <section className={`bg-[#d2e823] min-h-screen flex flex-col items-center justify-center px-6 pt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-5xl mx-auto text-center">
                    <p className={`text-[#780016] font-bold text-lg md:text-xl mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        📈 My Journey
                    </p>
                    
                    <h1 className={`text-[#254f1a] font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Experience.
                    </h1>

                    <p className={`text-[#254f1a]/80 font-medium text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        A journey through my education, learning, and hands-on projects. 
                        Building skills in full-stack development while working toward contributing to open source.
                    </p>

                    {/* Stats */}
                    <div className={`flex justify-center gap-8 md:gap-16 mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#780016]">1+</p>
                            <p className="text-[#254f1a]/60 text-sm mt-1">Years Coding</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#780016]">5+</p>
                            <p className="text-[#254f1a]/60 text-sm mt-1">Projects Built</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#780016]">∞</p>
                            <p className="text-[#254f1a]/60 text-sm mt-1">Learning</p>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="animate-bounce">
                            <svg className="w-8 h-8 mx-auto text-[#254f1a]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section ref={section2Ref} className={`bg-[#2665d6] min-h-screen py-20 md:py-28 px-4 md:px-10 transition-all duration-1000 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <p className="text-[#d2e823] font-bold text-lg mb-4">🛤️ The Path</p>
                        <h2 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">Professional Timeline</h2>
                        <p className="text-white/70 font-medium text-lg max-w-2xl mx-auto">
                            Key milestones in my journey from learning the basics to building full-stack applications.
                        </p>
                    </div>
                    
                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Vertical Line - Hidden on mobile */}
                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#d2e823] via-white/30 to-[#780016]"></div>
                        
                        {experiences.map((exp, index) => (
                            <div 
                                key={exp.id}
                                ref={el => itemRefs.current[index] = el}
                                className={`mb-12 md:mb-16 flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} items-center w-full transition-all duration-700 ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                {/* Timeline dot - left side for even items */}
                                {index % 2 === 0 && (
                                    <div className="hidden lg:flex relative items-center justify-center w-16 order-2">
                                        <div className={`absolute w-12 h-12 ${exp.color} rounded-full border-4 border-[#2665d6] z-10 flex items-center justify-center text-2xl shadow-lg ${exp.isGoal ? 'animate-pulse' : ''}`}>
                                            {exp.icon}
                                        </div>
                                    </div>
                                )}
                                
                                {/* Card */}
                                <div className={`w-full lg:w-5/12 group ${index % 2 === 0 ? 'order-1' : 'order-1'}`}>
                                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                        {/* Decorative corner */}
                                        <div className={`absolute top-0 right-0 w-24 h-24 ${exp.color} opacity-10 rounded-bl-full`}></div>
                                        
                                        {/* Mobile icon */}
                                        <div className={`lg:hidden ${exp.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-md`}>
                                            {exp.icon}
                                        </div>
                                        
                                        {/* Date badge */}
                                        <span className={`inline-block ${exp.tagBg} ${exp.tagText} font-bold text-sm px-4 py-1 rounded-full mb-3`}>
                                            {exp.date}
                                        </span>
                                        
                                        <h3 className="text-[#1e2330] font-extrabold text-xl md:text-2xl mb-2 group-hover:text-[#2665d6] transition-colors">
                                            {exp.title}
                                        </h3>
                                        
                                        <h4 className="text-gray-500 font-semibold text-base md:text-lg mb-4">
                                            {exp.subtitle}
                                        </h4>
                                        
                                        <p className="text-gray-600 mb-5 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        
                                        {/* Skills */}
                                        <div className="flex gap-2 flex-wrap">
                                            {exp.skills.map((skill, i) => (
                                                <span 
                                                    key={i}
                                                    className={`${exp.tagBg} ${exp.tagText} px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {exp.isGoal && (
                                            <div className="mt-5 flex items-center gap-2 text-[#780016] font-bold">
                                                <span className="animate-pulse">🎯</span>
                                                Current Goal
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Timeline dot - right side for odd items */}
                                {index % 2 === 1 && (
                                    <div className="hidden lg:flex relative items-center justify-center w-16 order-2">
                                        <div className={`absolute w-12 h-12 ${exp.color} rounded-full border-4 border-[#2665d6] z-10 flex items-center justify-center text-2xl shadow-lg ${exp.isGoal ? 'animate-pulse' : ''}`}>
                                            {exp.icon}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Skills Section */}
                    <div className="mt-20 md:mt-28">
                        <div className="text-center mb-12">
                            <p className="text-[#d2e823] font-bold text-lg mb-4">💪 What I Bring</p>
                            <h3 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4">Core Skills</h3>
                            <p className="text-white/70 font-medium text-lg max-w-xl mx-auto">
                                Technologies and tools I use to bring ideas to life.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map((skill, index) => (
                                <div 
                                    key={skill.name}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                                        <h4 className="text-white font-bold text-lg">{skill.name}</h4>
                                    </div>
                                    
                                    {/* Skill bar */}
                                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-[#d2e823] to-[#9fc516] rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: section2Visible ? `${skill.level}%` : '0%' }}
                                        ></div>
                                    </div>
                                    <p className="text-white/60 text-sm mt-2 text-right">{skill.level}%</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 bg-gradient-to-r from-[#d2e823] to-[#9fc516] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="relative z-10">
                            <span className="text-5xl mb-4 block">🤝</span>
                            <h3 className="text-[#254f1a] font-extrabold text-2xl md:text-3xl lg:text-4xl mb-4">
                                Let's Work Together
                            </h3>
                            <p className="text-[#254f1a]/80 font-medium text-lg max-w-xl mx-auto mb-8">
                                I'm always looking for new opportunities to learn and grow. Let's connect!
                            </p>
                            <Link href="/contact">
                                <button className="bg-[#254f1a] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto">
                                    Get In Touch
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}