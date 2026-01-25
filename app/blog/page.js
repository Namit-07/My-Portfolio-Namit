"use client"
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Next.js 15",
        excerpt: "Exploring the latest features in Next.js 15 and how they improve performance and developer experience.",
        date: "October 20, 2025",
        readTime: "5 min read",
        tags: ["Next.js", "React"],
        emoji: "📝",
        bgColor: "bg-[#2665d6]",
        tagBg: "bg-[#2665d6]/10",
        tagText: "text-[#2665d6]",
        buttonBg: "bg-[#2665d6]",
        buttonHover: "hover:bg-[#1e54b7]",
        link: "/blog/nextjs-15"
    },
    {
        id: 2,
        title: "My Journey to GSoC 2026",
        excerpt: "Why I'm aiming for Google Summer of Code and how I'm preparing for it through open source contributions.",
        date: "October 15, 2025",
        readTime: "8 min read",
        tags: ["GSoC", "Open Source"],
        emoji: "🚀",
        bgColor: "bg-[#d2e823]",
        emojiText: "text-[#254f1a]",
        tagBg: "bg-[#d2e823]/30",
        tagText: "text-[#254f1a]",
        buttonBg: "bg-[#254f1a]",
        buttonHover: "hover:bg-[#1a3a13]",
        link: "/blog/gsoc-journey"
    },
    {
        id: 3,
        title: "Building Secure Password Managers",
        excerpt: "Best practices for building password management applications with React and MongoDB.",
        date: "October 10, 2025",
        readTime: "6 min read",
        tags: ["Security", "MongoDB"],
        emoji: "💻",
        bgColor: "bg-[#780016]",
        tagBg: "bg-[#780016]/10",
        tagText: "text-[#780016]",
        buttonBg: "bg-[#780016]",
        buttonHover: "hover:bg-[#5a0010]",
        link: "/blog/password-manager"
    },
    {
        id: 4,
        title: "Mastering Tailwind CSS",
        excerpt: "Tips and tricks for building beautiful, responsive UIs faster with Tailwind CSS.",
        date: "October 5, 2025",
        readTime: "7 min read",
        tags: ["CSS", "Tailwind"],
        emoji: "🎨",
        bgColor: "bg-[#2665d6]",
        tagBg: "bg-[#2665d6]/10",
        tagText: "text-[#2665d6]",
        buttonBg: "bg-[#2665d6]",
        buttonHover: "hover:bg-[#1e54b7]",
        link: "/blog/tailwind-tips"
    },
    {
        id: 5,
        title: "Node.js Performance Tips",
        excerpt: "Essential techniques for optimizing Node.js applications for production environments.",
        date: "September 30, 2025",
        readTime: "10 min read",
        tags: ["Node.js", "Performance"],
        emoji: "⚡",
        bgColor: "bg-[#d2e823]",
        emojiText: "text-[#254f1a]",
        tagBg: "bg-[#d2e823]/30",
        tagText: "text-[#254f1a]",
        buttonBg: "bg-[#254f1a]",
        buttonHover: "hover:bg-[#1a3a13]",
        link: "/blog/nodejs-performance"
    },
    {
        id: 6,
        title: "REST API Best Practices",
        excerpt: "Design patterns and conventions for building scalable RESTful APIs with Express.js.",
        date: "September 25, 2025",
        readTime: "9 min read",
        tags: ["API", "Express"],
        emoji: "🔧",
        bgColor: "bg-[#780016]",
        tagBg: "bg-[#780016]/10",
        tagText: "text-[#780016]",
        buttonBg: "bg-[#780016]",
        buttonHover: "hover:bg-[#5a0010]",
        link: "/blog/rest-api"
    }
];

export default function Blog() {
    const [hideNavbar, setHideNavbar] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [section2Visible, setSection2Visible] = useState(false);
    const [visibleCards, setVisibleCards] = useState({});
    const section2Ref = useRef(null);
    const cardRefs = useRef([]);

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
                    
                    const cardIndex = cardRefs.current.indexOf(entry.target);
                    if (cardIndex !== -1 && entry.isIntersecting) {
                        setVisibleCards(prev => ({ ...prev, [cardIndex]: true }));
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (section2Ref.current) observer.observe(section2Ref.current);
        cardRefs.current.forEach(ref => ref && observer.observe(ref));

        return () => {
            if (section2Ref.current) observer.unobserve(section2Ref.current);
            cardRefs.current.forEach(ref => ref && observer.unobserve(ref));
        };
    }, []);

    return (
        <main>
            <Navbar hideNavbar={hideNavbar} />
            
            {/* Hero Section */}
            <section className={`bg-[#2665d6] min-h-screen flex flex-col items-center justify-center px-6 pt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-5xl mx-auto text-center">
                    <p className={`text-[#d2e823] font-bold text-lg md:text-xl mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        ✍️ Thoughts & Insights
                    </p>
                    
                    <h1 className={`text-white font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        My Blog.
                    </h1>

                    <p className={`text-white/80 font-medium text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Thoughts on web development, open source, and my journey toward GSoC 2026.
                        Here I share what I learn, build, and discover along the way.
                    </p>

                    {/* Stats */}
                    <div className={`flex justify-center gap-8 md:gap-16 mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#d2e823]">{blogPosts.length}</p>
                            <p className="text-white/60 text-sm mt-1">Articles</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#d2e823]">10+</p>
                            <p className="text-white/60 text-sm mt-1">Topics</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#d2e823]">∞</p>
                            <p className="text-white/60 text-sm mt-1">Ideas</p>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="animate-bounce">
                            <svg className="w-8 h-8 mx-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Section */}
            <section ref={section2Ref} className={`bg-[#e8efd6] min-h-screen py-20 md:py-28 px-4 md:px-10 transition-all duration-1000 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <p className="text-[#2665d6] font-bold text-lg mb-4">📚 Latest Posts</p>
                        <h2 className="text-[#1e2330] font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">Recent Articles</h2>
                        <p className="text-[#1e2330]/70 font-medium text-lg max-w-2xl mx-auto">
                            Deep dives into development topics, tutorials, and my experiences in the tech world.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <div 
                                key={post.id}
                                ref={el => cardRefs.current[index] = el}
                                className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Card Header */}
                                <div className={`${post.bgColor} h-48 flex items-center justify-center relative overflow-hidden`}>
                                    {/* Decorative circles */}
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
                                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
                                    
                                    <span className={`text-7xl group-hover:scale-125 transition-transform duration-500 relative z-10 ${post.emojiText || 'text-white'}`}>
                                        {post.emoji}
                                    </span>

                                    {/* Read time badge */}
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="text-white text-sm font-medium">{post.readTime}</span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {post.date}
                                    </div>

                                    <h3 className="text-[#1e2330] font-bold text-xl md:text-2xl mb-3 group-hover:text-[#2665d6] transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-5 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex gap-2 flex-wrap mb-5">
                                        {post.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={`${post.tagBg} ${post.tagText} px-3 py-1 rounded-full text-sm font-medium`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <Link href={post.link}>
                                        <button className={`${post.buttonBg} ${post.buttonHover} text-white w-full py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn`}>
                                            Read Article
                                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter CTA */}
                    <div className="mt-20 bg-gradient-to-r from-[#2665d6] to-[#1e54b7] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="relative z-10">
                            <span className="text-5xl mb-4 block">📬</span>
                            <h3 className="text-white font-extrabold text-2xl md:text-3xl lg:text-4xl mb-4">
                                Stay Updated
                            </h3>
                            <p className="text-white/80 font-medium text-lg max-w-xl mx-auto mb-8">
                                Get notified when I publish new articles. No spam, just quality content about web development and tech.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="your@email.com"
                                    className="w-full sm:flex-1 px-6 py-4 rounded-full text-[#1e2330] font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
                                />
                                <button className="w-full sm:w-auto bg-[#d2e823] text-[#1e2330] px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-all duration-300 whitespace-nowrap">
                                    Subscribe →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
