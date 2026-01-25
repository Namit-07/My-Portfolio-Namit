"use client"
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BlogLayout({ 
    articleData, 
    tableOfContents = [], 
    relatedPosts = [],
    children 
}) {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [hideNavbar, setHideNavbar] = useState(false);
    const articleRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setHideNavbar(scrollTop > 400);

            if (tableOfContents.length > 0) {
                const sections = tableOfContents.map(item => document.getElementById(item.id));
                const currentSection = sections.find((section) => {
                    if (!section) return false;
                    const rect = section.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom > 150;
                });
                if (currentSection) {
                    setActiveSection(currentSection.id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [tableOfContents]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <main className="bg-[#0f0f0f]">
            <Navbar hideNavbar={hideNavbar} />
            
            {/* Hero Section */}
            <section className={`bg-gradient-to-br ${articleData.gradientFrom || 'from-[#780016]'} ${articleData.gradientVia || 'via-[#780016]'} ${articleData.gradientTo || 'to-[#2665d6]'} min-h-[70vh] flex items-center justify-center px-6 pt-40 pb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <span className={`${articleData.categoryColor || 'bg-[#780016]'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                            {articleData.category}
                        </span>
                        <span className="text-white/70 text-sm">{articleData.readTime}</span>
                    </div>

                    <h1 className={`text-white font-extrabold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <span className="inline-block mr-4">{articleData.emoji}</span>
                        {articleData.title}
                    </h1>

                    <p className={`text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        {articleData.description}
                    </p>

                    <div className={`flex items-center justify-center gap-6 flex-wrap transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                                {articleData.author?.avatar || "👨‍💻"}
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold">{articleData.author?.name || "Namit"}</p>
                                <p className="text-white/60 text-sm">{articleData.author?.role || "Full Stack Developer"}</p>
                            </div>
                        </div>
                        <div className="w-px h-10 bg-white/30 hidden sm:block"></div>
                        <p className="text-white/70">{articleData.date}</p>
                    </div>

                    <div className={`mt-12 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="animate-bounce">
                            <svg className="w-6 h-6 mx-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-[#0f0f0f] py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex gap-8">
                    
                    {/* Table of Contents - Sticky Sidebar */}
                    {tableOfContents.length > 0 && (
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <div className="sticky top-24">
                                <h3 className="text-white font-bold text-lg mb-4">📑 Contents</h3>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                                                activeSection === item.id 
                                                    ? 'bg-[#780016] text-white font-medium' 
                                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                        >
                                            {item.title}
                                        </button>
                                    ))}
                                </nav>

                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h3 className="text-white font-bold text-lg mb-4">🔗 Share</h3>
                                    <div className="flex gap-3">
                                        <button className="w-10 h-10 bg-white/10 hover:bg-[#1DA1F2] rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                                            𝕏
                                        </button>
                                        <button className="w-10 h-10 bg-white/10 hover:bg-[#0A66C2] rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                                            in
                                        </button>
                                        <button className="w-10 h-10 bg-white/10 hover:bg-[#780016] rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                                            📋
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    )}

                    {/* Article Content */}
                    <article ref={articleRef} className={`flex-1 ${tableOfContents.length > 0 ? 'max-w-3xl' : 'max-w-4xl mx-auto'}`}>
                        <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 shadow-2xl">
                            {children}

                            {/* Tags */}
                            {articleData.tags && articleData.tags.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-white/10">
                                    <div className="flex flex-wrap gap-2">
                                        {articleData.tags.map((tag, i) => (
                                            <span key={i} className="bg-white/10 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all duration-300">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Author Card */}
                        <div className="bg-[#1a1a1a] rounded-3xl p-8 mt-8 flex flex-col md:flex-row items-center gap-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#780016] to-[#2665d6] rounded-full flex items-center justify-center text-4xl">
                                {articleData.author?.avatar || "👨‍💻"}
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-white font-bold text-xl mb-1">Written by {articleData.author?.name || "Namit"}</h3>
                                <p className="text-gray-400 mb-3">{articleData.author?.role || "Full Stack Developer"}</p>
                                <p className="text-gray-300 text-sm">
                                    A passionate developer on a journey to master full-stack development and contribute to open source. Building projects, sharing knowledge, and growing every day.
                                </p>
                            </div>
                            <Link href="/contact" className="bg-[#780016] hover:bg-[#5a0011] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105">
                                Get in Touch
                            </Link>
                        </div>

                        {/* Related Posts */}
                        {relatedPosts.length > 0 && (
                            <div className="mt-12">
                                <h3 className="text-white font-bold text-2xl mb-6">📚 Related Posts</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {relatedPosts.map((post, i) => (
                                        <Link 
                                            key={i}
                                            href={post.slug}
                                            className="group bg-[#1a1a1a] rounded-2xl p-6 hover:bg-[#252525] transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <span className="text-4xl mb-4 block">{post.emoji}</span>
                                            <span className="text-[#780016] text-sm font-bold">{post.category}</span>
                                            <h4 className="text-white font-bold text-lg mt-2 group-hover:text-[#d2e823] transition-colors">
                                                {post.title}
                                            </h4>
                                            <span className="text-gray-400 text-sm mt-3 inline-flex items-center gap-2">
                                                Read more 
                                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Back to Blog */}
                        <div className="mt-12 text-center">
                            <Link 
                                href="/blog" 
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#780016] to-[#2665d6] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-[#780016]/30 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to All Posts
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
}
