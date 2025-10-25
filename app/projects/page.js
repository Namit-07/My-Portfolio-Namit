"use client"
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    const [hideNavbar, setHideNavbar] = useState(false);
    const section2Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHideNavbar(true);
                    } else {
                        setHideNavbar(false);
                    }
                });
            },
            { threshold: 0.3 }
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
            <section className="bg-[#780016] min-h-screen pt-32 px-10">
                <div className="max-w-7xl mx-auto my-30">
                    <h1 className="text-[#e9c0e9] font-extrabold text-7xl mb-10 text-center">My Projects</h1>
                    <p className="text-[#e9c0e9] font-medium text-2xl mb-16 text-center">
                        Here are some of the projects I've built. Each one represents a unique challenge and learning experience. These projects showcase my hands-on experience in developing full-stack applications using modern web technologies. From secure authentication systems to scalable backend APIs, every project represents my step toward contributing to open source and achieving my goal of being part of Google Summer of Code 2026.
                    </p>


                </div>
            </section>

            <section ref={section2Ref} className="bg-[#e8efd6] min-h-screen grid grid-cols-2">
                <div className="flex justify-center flex-col ml-[10vw] my-50">
                    <p className="text-[#1e2330] font-extrabold text-6xl whitespace-nowrap">BiTTree</p>
                    <p className="text-[#1e2330] font-extrabold text-3xl">LinkTree Clone.</p>
                    
                    <div className="flex my-6">
                        <span className="text-[#1e2330] font-bold text-xl">Tech Stack:</span>
                        <span className="text-[#1e2330] font-medium text-lg ml-2">Next.js, Tailwind CSS, Node.js, MongoDB</span>
                    </div>

                    <div className="my-2">
                    <p className="text-[#1e2330] font-bold text-xl m">Description:</p>
                    <p className="text-[#1e2330] font-medium text-lg ">A customizable profile link aggregator that lets users share multiple links through a single bio page.</p>
                    </div>

                    <div className="my-5">
                    <p className="text-[#1e2330] font-bold text-xl ">Key Features:</p>
                    <p className="text-[#1e2330] font-medium text-lg ">- Dynamic user dashboard for managing links.</p>
                    <p className="text-[#1e2330] font-medium text-lg ">- Backend API integration for link management.</p>
                    <p className="text-[#1e2330] font-medium text-lg ">- Responsive, minimal UI with Tailwind.</p>
                    <p className="text-[#1e2330] font-medium text-lg ">- Next.js for server-side rendering and SEO optimization.</p>
                    </div>
                    
                    <div className="input flex ">
                        <Link href="http://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/Link%20Tree/linktree" target="_blank" rel="noopener noreferrer">
                        <button className="text-white bg-[#1e2330] py-3 px-14 rounded-full mx-50 text-2xl whitespace-nowrap my-5 cursor-pointer hover:scale-110 hover:shadow-2xl hover:bg-[#2a3040] transition-all duration-300 ease-in-out active:scale-95">Github</button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col ">
                    <div className="relative z-[100] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" style={{ width: '700px', height: '500px' }}>
                        <Link href="http://github.com/Namit-07/Web-Dev/tree/main/Sigma%20Web%20Dev%20course/Projects/Link%20Tree/linktree" target="_blank" rel="noopener noreferrer">
                        <Image className="rounded-4xl" src="/p1.png" fill alt="project1" />
                        </Link>

                    </div>
                </div>
            </section>



        </main>
    );
}
