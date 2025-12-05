"use client"
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "BiTTree",
        subtitle: "LinkTree Clone",
        description: "A customizable profile link aggregator that lets users share multiple links through a single bio page.",
        techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
        features: [
            "Dynamic user dashboard for managing links",
            "Backend API integration for link management",
            "Responsive, minimal UI with Tailwind",
            "Server-side rendering and SEO optimization"
        ],
        image: "/p1.png",
        github: "http://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/Link%20Tree/linktree",
        bgColor: "bg-[#e8efd6]",
        textColor: "text-[#1e2330]",
        accentColor: "bg-[#1e2330]",
        accentText: "text-white"
    },
    {
        id: 2,
        title: "<PassJAIL/>",
        subtitle: "Password Manager",
        description: "A secure web-based password management tool with local storage and MongoDB cloud sync options.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        features: [
            "CRUD operations for credentials",
            "LocalStorage + MongoDB integration",
            "Secure form handling & validation",
            "Modern, intuitive UI design"
        ],
        image: "/p2.png",
        github: "https://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/Password%20Manager",
        bgColor: "bg-[#d2e823]",
        textColor: "text-[#254f1a]",
        accentColor: "bg-[#254f1a]",
        accentText: "text-white"
    },
    {
        id: 3,
        title: "TaskFlow",
        subtitle: "Todo List App",
        description: "A sleek todo list app that helps users plan and manage their daily tasks efficiently with persistent storage.",
        techStack: ["React", "Tailwind CSS", "LocalStorage"],
        features: [
            "Add, delete, and complete tasks",
            "Data persistence using browser storage",
            "Lightweight & responsive design",
            "Smooth animations & interactions"
        ],
        image: "/p3.png",
        github: "https://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/ToDo%20List",
        bgColor: "bg-[#2665d6]",
        textColor: "text-white",
        accentColor: "bg-[#1e2330]",
        accentText: "text-white"
    },
    {
        id: 4,
        title: "X Clone",
        subtitle: "Twitter Recreation",
        description: "A Twitter/X clone built with React and Tailwind CSS, featuring modern UI patterns and responsive design.",
        techStack: ["React", "Tailwind CSS", "JavaScript"],
        features: [
            "Tweet feed with real-time updates",
            "Responsive mobile-first design",
            "Modern UI component patterns",
            "Interactive user interface"
        ],
        image: "/p4.png",
        github: "https://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/X.com%20Clone",
        bgColor: "bg-[#780016]",
        textColor: "text-[#e9c0e9]",
        accentColor: "bg-[#e9c0e9]",
        accentText: "text-[#780016]"
    }
];

export default function Projects() {
    const [hideNavbar, setHideNavbar] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [visibleProjects, setVisibleProjects] = useState({});
    const projectRefs = useRef([]);

    useEffect(() => {
        setIsVisible(true);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = projectRefs.current.indexOf(entry.target);
                    if (entry.isIntersecting) {
                        setVisibleProjects(prev => ({ ...prev, [index]: true }));
                        if (index >= 0) setHideNavbar(true);
                    } else if (index === 0) {
                        const rect = entry.target.getBoundingClientRect();
                        if (rect.top > 0) setHideNavbar(false);
                    }
                });
            },
            { threshold: 0.15 }
        );

        projectRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <main>
            <Navbar hideNavbar={hideNavbar} />
            
            {/* Hero Section */}
            <section className={`bg-[#780016] min-h-screen flex flex-col items-center justify-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-5xl mx-auto text-center">
                    <p className={`text-[#d2e823] font-bold text-lg md:text-xl mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        ✨ Featured Work
                    </p>
                    
                    <h1 className={`text-[#e9c0e9] font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        My Projects.
                    </h1>
                    
                    <p className={`text-[#e9c0e9]/80 font-medium text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        A curated collection of projects showcasing my journey in full-stack development. 
                        Each project represents a unique challenge solved with modern technologies.
                    </p>
                    
                    {/* Stats */}
                    <div className={`flex justify-center gap-8 md:gap-16 mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#d2e823]">{projects.length}</p>
                            <p className="text-[#e9c0e9]/60 text-sm mt-1">Projects</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#d2e823]">10+</p>
                            <p className="text-[#e9c0e9]/60 text-sm mt-1">Technologies</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#d2e823]">∞</p>
                            <p className="text-[#e9c0e9]/60 text-sm mt-1">Passion</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            {projects.map((project, index) => (
                <section 
                    key={project.id}
                    ref={el => projectRefs.current[index] = el}
                    className={`${project.bgColor} min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8 py-16 lg:py-0 transition-all duration-1000 ${visibleProjects[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {/* Image - alternates sides */}
                    <div className={`flex items-center justify-center flex-col ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} py-10`}>
                        <div className="relative group">
                            {/* Project number watermark */}
                            <span className={`absolute -top-12 ${index % 2 === 0 ? '-right-4' : '-left-4'} text-8xl md:text-9xl font-black ${project.textColor} opacity-10 select-none z-0`}>
                                0{project.id}
                            </span>
                            
                            <div className="relative z-10 hover:scale-105 transition-all duration-500 ease-out cursor-pointer w-[300px] h-[200px] sm:w-[500px] sm:h-[333px] lg:w-[600px] lg:h-[400px]">
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Image 
                                        className="rounded-3xl shadow-2xl" 
                                        src={project.image} 
                                        fill 
                                        alt={project.title}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 rounded-3xl bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-6 py-3 rounded-full font-bold text-[#1e2330]">
                                            View Project →
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`flex justify-center flex-col ${index % 2 === 0 ? 'lg:order-1 lg:ml-[8vw]' : 'lg:order-2 lg:ml-[5vw]'} lg:my-50`}>
                        {/* Subtitle */}
                        <p className={`${project.textColor} opacity-70 font-bold text-lg md:text-xl mb-2`}>
                            {project.subtitle}
                        </p>
                        
                        {/* Title */}
                        <h2 className={`${project.textColor} font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4`}>
                            {project.title}
                        </h2>
                        
                        {/* Description */}
                        <p className={`${project.textColor} opacity-80 font-medium text-base md:text-lg mb-6`}>
                            {project.description}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.map((tech, i) => (
                                <span 
                                    key={i}
                                    className={`${project.accentColor} ${project.accentText} px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform duration-300`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        {/* Features */}
                        <div className="space-y-2 mb-8">
                            <p className={`${project.textColor} font-bold text-lg`}>Key Features:</p>
                            {project.features.map((feature, i) => (
                                <p key={i} className={`${project.textColor} opacity-80 font-medium text-base flex items-center gap-2`}>
                                    <span className={`w-2 h-2 rounded-full ${project.accentColor}`} />
                                    {feature}
                                </p>
                            ))}
                        </div>
                        
                        {/* Button */}
                        <div className="flex justify-center lg:justify-start">
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                <button className={`${project.accentColor} ${project.accentText} py-3 md:py-4 px-8 md:px-12 rounded-full text-lg md:text-xl font-bold flex items-center gap-3 hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out active:scale-95`}>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    View on GitHub
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Section */}
            <section className="bg-[#d2e823] py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-[#254f1a] font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
                        Want to work together?
                    </h2>
                    <p className="text-[#254f1a]/80 font-medium text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        I'm always excited to collaborate on innovative projects. Let's create something amazing together.
                    </p>
                    <Link href="/contact">
                        <button className="bg-[#254f1a] text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 active:scale-95">
                            Let's Connect 🚀
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
