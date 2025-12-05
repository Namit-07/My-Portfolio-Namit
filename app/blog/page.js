"use client"
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
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
            <section className={`bg-[#2665d6] min-h-screen pt-32 px-4 md:px-10 flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-[#d2e823] font-extrabold text-4xl md:text-6xl lg:text-7xl mb-10">My Blog</h1>
                    <p className="text-white font-medium text-base md:text-xl lg:text-2xl mb-16 max-w-4xl mx-auto px-4">
                        Thoughts on web development, open source, and my journey toward GSoC 2026. Here I share what I learn, build, and discover along the way.
                    </p>
                </div>
            </section>

            {/* Blog Posts Section */}
            <section ref={section2Ref} className={`bg-[#e8efd6] min-h-screen py-12 md:py-20 px-4 md:px-10 transition-all duration-1000 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[#1e2330] font-extrabold text-3xl md:text-4xl lg:text-5xl mb-12 text-center">Recent Posts</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        
                        {/* Blog Post Card 1 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="bg-[#2665d6] h-48 flex items-center justify-center">
                                <span className="text-white text-6xl">📝</span>
                            </div>
                            <div className="p-6">
                                <div className="text-gray-500 text-sm mb-2">October 20, 2025</div>
                                <h3 className="text-[#1e2330] font-bold text-2xl mb-3">Getting Started with Next.js 15</h3>
                                <p className="text-gray-600 mb-4">
                                    Exploring the latest features in Next.js 15 and how they improve performance and developer experience.
                                </p>
                                <div className="flex gap-2 flex-wrap mb-4">
                                    <span className="bg-[#2665d6]/10 text-[#2665d6] px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
                                    <span className="bg-[#2665d6]/10 text-[#2665d6] px-3 py-1 rounded-full text-sm font-medium">React</span>
                                </div>
                                <Link href="/blog/nextjs-15">
                                    <button className="bg-[#2665d6] text-white px-6 py-2 rounded-full font-bold hover:bg-[#1e54b7] hover:scale-105 transition-all duration-300">
                                        Read More →
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Blog Post Card 2 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="bg-[#d2e823] h-48 flex items-center justify-center">
                                <span className="text-[#254f1a] text-6xl">🚀</span>
                            </div>
                            <div className="p-6">
                                <div className="text-gray-500 text-sm mb-2">October 15, 2025</div>
                                <h3 className="text-[#1e2330] font-bold text-2xl mb-3">My Journey to GSoC 2026</h3>
                                <p className="text-gray-600 mb-4">
                                    Why I'm aiming for Google Summer of Code and how I'm preparing for it through open source contributions.
                                </p>
                                <div className="flex gap-2 flex-wrap mb-4">
                                    <span className="bg-[#d2e823]/30 text-[#254f1a] px-3 py-1 rounded-full text-sm font-medium">GSoC</span>
                                    <span className="bg-[#d2e823]/30 text-[#254f1a] px-3 py-1 rounded-full text-sm font-medium">Open Source</span>
                                </div>
                                <Link href="/blog/gsoc-journey">
                                    <button className="bg-[#254f1a] text-white px-6 py-2 rounded-full font-bold hover:bg-[#1a3a13] hover:scale-105 transition-all duration-300">
                                        Read More →
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Blog Post Card 3 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="bg-[#780016] h-48 flex items-center justify-center">
                                <span className="text-white text-6xl">💻</span>
                            </div>
                            <div className="p-6">
                                <div className="text-gray-500 text-sm mb-2">October 10, 2025</div>
                                <h3 className="text-[#1e2330] font-bold text-2xl mb-3">Building Secure Password Managers</h3>
                                <p className="text-gray-600 mb-4">
                                    Best practices for building password management applications with React and MongoDB.
                                </p>
                                <div className="flex gap-2 flex-wrap mb-4">
                                    <span className="bg-[#780016]/10 text-[#780016] px-3 py-1 rounded-full text-sm font-medium">Security</span>
                                    <span className="bg-[#780016]/10 text-[#780016] px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                                </div>
                                <Link href="/blog/password-manager">
                                    <button className="bg-[#780016] text-white px-6 py-2 rounded-full font-bold hover:bg-[#5a0010] hover:scale-105 transition-all duration-300">
                                        Read More →
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Blog Post Card 4 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="bg-[#2665d6] h-48 flex items-center justify-center">
                                <span className="text-white text-6xl">🎨</span>
                            </div>
                            <div className="p-6">
                                <div className="text-gray-500 text-sm mb-2">October 5, 2025</div>
                                <h3 className="text-[#1e2330] font-bold text-2xl mb-3">Mastering Tailwind CSS</h3>
                                <p className="text-gray-600 mb-4">
                                    Tips and tricks for building beautiful, responsive UIs faster with Tailwind CSS.
                                </p>
                                <div className="flex gap-2 flex-wrap mb-4">
                                    <span className="bg-[#2665d6]/10 text-[#2665d6] px-3 py-1 rounded-full text-sm font-medium">CSS</span>
                                    <span className="bg-[#2665d6]/10 text-[#2665d6] px-3 py-1 rounded-full text-sm font-medium">Tailwind</span>
                                </div>
                                <Link href="/blog/tailwind-tips">
                                    <button className="bg-[#2665d6] text-white px-6 py-2 rounded-full font-bold hover:bg-[#1e54b7] hover:scale-105 transition-all duration-300">
                                        Read More →
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Blog Post Card 5 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="bg-[#d2e823] h-48 flex items-center justify-center">
                                <span className="text-[#254f1a] text-6xl">⚡</span>
                            </div>
                            <div className="p-6">
                                <div className="text-gray-500 text-sm mb-2">September 30, 2025</div>
                                <h3 className="text-[#1e2330] font-bold text-2xl mb-3">Node.js Performance Tips</h3>
                                <p className="text-gray-600 mb-4">
                                    Essential techniques for optimizing Node.js applications for production environments.
                                </p>
                                <div className="flex gap-2 flex-wrap mb-4">
                                    <span className="bg-[#d2e823]/30 text-[#254f1a] px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                                    <span className="bg-[#d2e823]/30 text-[#254f1a] px-3 py-1 rounded-full text-sm font-medium">Performance</span>
                                </div>
                                <Link href="/blog/nodejs-performance">
                                    <button className="bg-[#254f1a] text-white px-6 py-2 rounded-full font-bold hover:bg-[#1a3a13] hover:scale-105 transition-all duration-300">
                                        Read More →
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Blog Post Card 6 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="bg-[#780016] h-48 flex items-center justify-center">
                                <span className="text-white text-6xl">🔧</span>
                            </div>
                            <div className="p-6">
                                <div className="text-gray-500 text-sm mb-2">September 25, 2025</div>
                                <h3 className="text-[#1e2330] font-bold text-2xl mb-3">REST API Best Practices</h3>
                                <p className="text-gray-600 mb-4">
                                    Design patterns and conventions for building scalable RESTful APIs with Express.js.
                                </p>
                                <div className="flex gap-2 flex-wrap mb-4">
                                    <span className="bg-[#780016]/10 text-[#780016] px-3 py-1 rounded-full text-sm font-medium">API</span>
                                    <span className="bg-[#780016]/10 text-[#780016] px-3 py-1 rounded-full text-sm font-medium">Express</span>
                                </div>
                                <Link href="/blog/rest-api">
                                    <button className="bg-[#780016] text-white px-6 py-2 rounded-full font-bold hover:bg-[#5a0010] hover:scale-105 transition-all duration-300">
                                        Read More →
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
