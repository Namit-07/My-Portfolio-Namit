"use client"
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    const [hideNavbar, setHideNavbar] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [section2Visible, setSection2Visible] = useState(false);
    const [section3Visible, setSection3Visible] = useState(false);
    const [section4Visible, setSection4Visible] = useState(false);
    const [section5Visible, setSection5Visible] = useState(false);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);

    useEffect(() => {
        // Trigger fade-in for first section
        setIsVisible(true);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === section2Ref.current) {
                            setHideNavbar(true);
                            setSection2Visible(true);
                        } else if (entry.target === section3Ref.current) {
                            setSection3Visible(true);
                        } else if (entry.target === section4Ref.current) {
                            setSection4Visible(true);
                        } else if (entry.target === section5Ref.current) {
                            setSection5Visible(true);
                        }
                    }
                    
                    if (entry.target === section2Ref.current && !entry.isIntersecting) {
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
        if (section3Ref.current) {
            observer.observe(section3Ref.current);
        }
        if (section4Ref.current) {
            observer.observe(section4Ref.current);
        }
        if (section5Ref.current) {
            observer.observe(section5Ref.current);
        }

        return () => {
            if (section2Ref.current) {
                observer.unobserve(section2Ref.current);
            }
            if (section3Ref.current) {
                observer.unobserve(section3Ref.current);
            }
            if (section4Ref.current) {
                observer.unobserve(section4Ref.current);
            }
            if (section5Ref.current) {
                observer.unobserve(section5Ref.current);
            }
        };
    }, []);

    return (
        <main>
            <Navbar hideNavbar={hideNavbar} />
            <section className={`bg-[#780016] min-h-screen pt-60 pb-16 px-4 md:px-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-[#e9c0e9] font-extrabold text-4xl md:text-6xl lg:text-7xl mb-10 text-center">My Projects</h1>
                    <p className="text-[#e9c0e9] font-medium text-base md:text-xl lg:text-2xl  text-center px-2">
                        Here are some of the projects I've built. Each one represents a unique challenge and learning experience. These projects showcase my hands-on experience in developing full-stack applications using modern web technologies. From secure authentication systems to scalable backend APIs, every project represents my step toward contributing to open source and achieving my goal of being part of Google Summer of Code 2026.
                    </p>


                </div>
            </section>

            <section ref={section2Ref} className={`bg-[#e8efd6] min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8 py-10 lg:py-0 transition-all duration-1000 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex justify-center flex-col lg:ml-[10vw] lg:my-50 order-2 lg:order-1">
                    <p className="text-[#1e2330] font-extrabold text-4xl md:text-5xl lg:text-6xl">BiTTree</p>
                    <p className="text-[#1e2330] font-extrabold text-2xl md:text-3xl">LinkTree Clone.</p>

                    <div className="flex flex-wrap my-4 lg:my-6">
                        <span className="text-[#1e2330] font-bold text-lg md:text-xl">Tech Stack:</span>
                        <span className="text-[#1e2330] font-medium text-base md:text-lg ml-2">Next.js, React, Tailwind CSS, Node.js, MongoDB</span>
                    </div>

                    <div className="my-2">
                        <p className="text-[#1e2330] font-bold text-lg md:text-xl">Description:</p>
                        <p className="text-[#1e2330] font-medium text-base md:text-lg">A customizable profile link aggregator that lets users share multiple links through a single bio page.</p>
                    </div>

                    <div className="my-3 lg:my-5">
                        <p className="text-[#1e2330] font-bold text-lg md:text-xl">Key Features:</p>
                        <p className="text-[#1e2330] font-medium text-base md:text-lg">- Dynamic user dashboard for managing links.</p>
                        <p className="text-[#1e2330] font-medium text-base md:text-lg">- Backend API integration for link management.</p>
                        <p className="text-[#1e2330] font-medium text-base md:text-lg">- Responsive, minimal UI with Tailwind.</p>
                        <p className="text-[#1e2330] font-medium text-base md:text-lg">- Next.js for server-side rendering and SEO optimization.</p>
                    </div>

                    <div className="input flex justify-center lg:justify-start">
                        <Link href="http://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/Link%20Tree/linktree" target="_blank" rel="noopener noreferrer">
                            <button className="text-white bg-[#1e2330] py-2 md:py-3 px-8 md:px-14 rounded-full text-lg md:text-2xl my-5 cursor-pointer hover:scale-110 hover:shadow-2xl hover:bg-[#2a3040] transition-all duration-300 ease-in-out active:scale-95">🔗Github</button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col order-1 lg:order-2 py-10">
                    <div className="relative z-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-[214px] sm:w-[500px] sm:h-[357px] lg:w-[700px] lg:h-[500px]">
                        <Link href="http://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/Link%20Tree/linktree" target="_blank" rel="noopener noreferrer">
                            <Image className="rounded-4xl" src="/p1.png" fill alt="project1" />
                        </Link>

                    </div>
                </div>
            </section>

            <section ref={section3Ref} className={`bg-[#d2e823] min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8 transition-all duration-1000 ${section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center justify-center flex-col order-1 py-10">
                    <div className="relative z-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-[200px] sm:w-[500px] sm:h-[333px] lg:w-[600px] lg:h-[400px]">
                        <Link href="https://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/Password%20Manager" target="_blank" rel="noopener noreferrer">
                            <Image className="rounded-4xl" src="/p2.png" fill alt="project1" />
                        </Link>

                    </div>
                </div>
                <div className="flex justify-center flex-col lg:ml-[5vw]  lg:my-50 order-2">
                    <p className="text-[#254f1a] font-extrabold text-4xl md:text-5xl lg:text-6xl">&lt;PassJAIL/&gt;</p>
                    <p className="text-[#254f1a] font-extrabold text-2xl md:text-3xl">(Local & MongoDB Version).</p>

                    <div className="flex flex-wrap my-4 lg:my-6">
                        <span className="text-[#254f1a] font-bold text-lg md:text-xl">Tech Stack:</span>
                        <span className="text-[#254f1a] font-medium text-base md:text-lg ml-2">React, Node.js, Express, MongoDB, Tailwind CSS</span>
                    </div>

                    <div className="my-2">
                        <p className="text-[#254f1a] font-bold text-lg md:text-xl">Description:</p>
                        <p className="text-[#254f1a] font-medium text-base md:text-lg">A secure web-based password management tool that allows users to store, edit, and manage their credentials locally or via MongoDB for cloud access.</p>
                    </div>

                    <div className="my-3 lg:my-5">
                        <p className="text-[#254f1a] font-bold text-lg md:text-xl">Key Features:</p>
                        <p className="text-[#254f1a] font-medium text-base md:text-lg">- CRUD operations for storing and retrieving passwords.</p>
                        <p className="text-[#254f1a] font-medium text-base md:text-lg">- Built using modern UI with Tailwind CSS.</p>
                        <p className="text-[#254f1a] font-medium text-base md:text-lg">- LocalStorage + MongoDB integration for offline and online versions.</p>
                        <p className="text-[#254f1a] font-medium text-base md:text-lg">- Implements best practices for form handling and data validation.</p>
                    </div>

                    <div className="input flex justify-center lg:justify-start">
                        <Link href="https://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/Password%20Manager" target="_blank" rel="noopener noreferrer">
                            <button className="text-white bg-[#254f1a] py-2 md:py-3 px-8 md:px-14 rounded-full text-lg md:text-2xl my-5 cursor-pointer hover:scale-110 hover:shadow-2xl hover:bg-[#2a3040] transition-all duration-300 ease-in-out active:scale-95">🔗Github</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section ref={section4Ref} className={`bg-[#2665d6] min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8 transition-all duration-1000 ${section4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex justify-center flex-col lg:ml-[8vw]  lg:my-50 order-2 lg:order-1">
                    <p className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl">Todo List App</p>
                    <p className="text-white font-extrabold text-2xl md:text-3xl">Everyday Planner.</p>

                    <div className="flex flex-wrap my-4 lg:my-6">
                        <span className="text-white font-bold text-lg md:text-xl">Tech Stack:</span>
                        <span className="text-white font-medium text-base md:text-lg ml-2">React, TailwindCSS</span>
                    </div>

                    <div className="my-2">
                        <p className="text-white font-bold text-lg md:text-xl">Description:</p>
                        <p className="text-white font-medium text-base md:text-lg">A customizable todo list app that helps users plan and manage their daily tasks efficiently.</p>
                    </div>

                    <div className="my-3 lg:my-5">
                        <p className="text-white font-bold text-lg md:text-xl">Key Features:</p>
                        <p className="text-white font-medium text-base md:text-lg">- Add, delete, and mark tasks as complete.</p>
                        <p className="text-white font-medium text-base md:text-lg">- Data persistence using browser storage.</p>
                        <p className="text-white font-medium text-base md:text-lg">- Lightweight UI with responsive design.</p>
                    </div>

                    <div className="input flex justify-center lg:justify-start">
                        <Link href="https://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/ToDo%20List" target="_blank" rel="noopener noreferrer">
                            <button className="text-white bg-black py-2 md:py-3 px-8 md:px-14 rounded-full text-lg md:text-2xl my-5 cursor-pointer hover:scale-110 hover:shadow-2xl hover:bg-[#2a3040] transition-all duration-300 ease-in-out active:scale-95">🔗Github</button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col order-1 lg:order-2 py-10">
                    <div className="relative z-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-[214px] sm:w-[500px] sm:h-[357px] lg:w-[700px] lg:h-[500px]">
                        <Link href="https://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/ToDo%20List" target="_blank" rel="noopener noreferrer">
                            <Image className="rounded-4xl" src="/p3.png" fill alt="project1" />
                        </Link>

                    </div>
                </div>
            </section>

            <section ref={section5Ref} className={`bg-[#780016] min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8 transition-all duration-1000 ${section5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center justify-center flex-col order-1 py-10">
                    <div className="relative z-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-[300px] h-[200px] sm:w-[500px] sm:h-[333px] lg:w-[600px] lg:h-[400px]">
                        <Link href="https://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/X.com%20Clone" target="_blank" rel="noopener noreferrer">
                            <Image className="rounded-4xl" src="/p4.png" fill alt="project1" />
                        </Link>

                    </div>
                </div>
                <div className="flex justify-center flex-col lg:ml-[5vw] lg:my-50 order-2">
                    <p className="text-[#e9c0e9] font-extrabold text-4xl md:text-5xl lg:text-6xl">X.com</p>
                    <p className="text-[#e9c0e9] font-extrabold text-2xl md:text-3xl">Twitter Clone.</p>

                    <div className="flex flex-wrap my-4 lg:my-6">
                        <span className="text-[#e9c0e9] font-bold text-lg md:text-xl">Tech Stack:</span>
                        <span className="text-[#e9c0e9] font-medium text-base md:text-lg ml-2">React, Tailwind CSS</span>
                    </div>

                    <div className="my-2">
                        <p className="text-[#e9c0e9] font-bold text-lg md:text-xl">Description:</p>
                        <p className="text-[#e9c0e9] font-medium text-base md:text-lg">A Twitter clone built with React and Tailwind CSS, featuring real-time updates and a responsive design.</p>
                    </div>

                    <div className="my-3 lg:my-5">
                        <p className="text-[#e9c0e9] font-bold text-lg md:text-xl">Key Features:</p>
                        <p className="text-[#e9c0e9] font-medium text-base md:text-lg">- Real-time updates and notifications.</p>
                        <p className="text-[#e9c0e9] font-medium text-base md:text-lg">- Built using modern UI with Tailwind CSS.</p>
                        <p className="text-[#e9c0e9] font-medium text-base md:text-lg">- Responsive design for mobile and desktop views.</p>
                        <p className="text-[#e9c0e9] font-medium text-base md:text-lg">- Implements best practices for form handling and data validation.</p>
                    </div>

                    <div className="input flex justify-center lg:justify-start">
                        <Link href="https://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/X.com%20Clone" target="_blank" rel="noopener noreferrer">
                            <button className="text-black bg-[#e9c0e9] py-2 md:py-3 px-8 md:px-14 rounded-full text-lg md:text-2xl my-5 cursor-pointer hover:scale-110 hover:shadow-2xl hover:bg-[#ec51ec] transition-all duration-300 ease-in-out active:scale-95">🔗Github</button>
                        </Link>
                    </div>
                </div>
            </section>



        </main>
    );
}
