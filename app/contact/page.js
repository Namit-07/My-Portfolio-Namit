"use client"
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const socialLinks = [
    {
        name: "GitHub",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        ),
        href: "https://github.com/Namit-07",
        bg: "bg-[#1e2330]",
        hoverBg: "hover:bg-[#2d3748]",
        description: "Check out my code"
    },
    {
        name: "LinkedIn",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        ),
        href: "https://www.linkedin.com/in/namit-tickoo-69b2a9367/",
        bg: "bg-[#0077b5]",
        hoverBg: "hover:bg-[#006396]",
        description: "Let's connect professionally"
    },
    {
        name: "Twitter",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        ),
        href: "https://x.com/tickoonamit?s=21",
        bg: "bg-[#1e2330]",
        hoverBg: "hover:bg-[#2d3748]",
        description: "Follow my thoughts"
    },
    {
        name: "Email",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        href: "mailto:namittickoo@gmail.com",
        bg: "bg-[#ea4335]",
        hoverBg: "hover:bg-[#d33426]",
        description: "Drop me a message"
    }
];

export default function Contact() {
    const [hideNavbar, setHideNavbar] = useState(false);
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [section2Visible, setSection2Visible] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('');

        const formData = new FormData(e.target);
        formData.append("access_key", "c3756f74-9e7e-40ad-99d8-1cecc9c9f457");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus('success');
                e.target.reset();
                setTimeout(() => setFormStatus(''), 5000);
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main>
            <Navbar hideNavbar={hideNavbar} />
            
            {/* Hero Section */}
            <section className={`bg-[#780016] min-h-screen flex flex-col items-center justify-center px-6 pt-40 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-5xl mx-auto text-center">
                    
                    <h1 className={`text-[#e9c0e9] font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Let's Connect.
                    </h1>

                    <p className={`text-[#e9c0e9]/80 font-medium text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something amazing together!
                    </p>

                    {/* Download Resume Button */}
                    <div className={`mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <a href="https://drive.google.com/file/d/1JXY6xI5efOGaLA7ZHegjNN-2kQUjdEN8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="group bg-[#e9c0e9] text-[#780016] px-8 md:px-12 py-4 md:py-5 rounded-full font-extrabold text-lg md:text-2xl flex items-center gap-4 hover:scale-110 hover:shadow-2xl hover:bg-white transition-all duration-300 active:scale-95 mx-auto border-4 border-white/50">
                                <svg className="w-7 h-7 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </button>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {socialLinks.map((social, index) => (
                            <Link 
                                key={social.name}
                                href={social.href} 
                                target={social.href.startsWith('mailto') ? '_self' : '_blank'} 
                                rel="noopener noreferrer"
                                className={`group ${social.bg} ${social.hoverBg} text-white p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div className="group-hover:scale-110 transition-transform duration-300">
                                        {social.icon}
                                    </div>
                                    <span className="font-bold text-lg">{social.name}</span>
                                    <span className="text-white/60 text-xs text-center hidden md:block">{social.description}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className={`flex justify-center gap-8 md:gap-16 mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#d2e823]">&lt;24h</p>
                            <p className="text-[#e9c0e9]/60 text-sm mt-1">Response Time</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#d2e823]">🇮🇳</p>
                            <p className="text-[#e9c0e9]/60 text-sm mt-1">India</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-extrabold text-[#d2e823]">✓</p>
                            <p className="text-[#e9c0e9]/60 text-sm mt-1">Open to Work</p>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className={`mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="animate-bounce">
                            <svg className="w-8 h-8 mx-auto text-[#e9c0e9]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section ref={section2Ref} className={`bg-[#d2e823] min-h-screen py-20 md:py-28 px-4 md:px-10 flex items-center justify-center transition-all duration-1000 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-6xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Side - Info */}
                        <div className="flex flex-col justify-center">
                            <p className="text-[#780016] font-bold text-lg mb-4">✉️ Contact Form</p>
                            <h2 className="text-[#254f1a] font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
                                Send Me a Message
                            </h2>
                            <p className="text-[#254f1a]/80 font-medium text-lg mb-8">
                                Have a question or want to work together? Fill out the form and I'll get back to you within 24 hours!
                            </p>

                            {/* Info Cards */}
                            <div className="space-y-4">
                                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 flex items-center gap-4 hover:bg-white/70 transition-all duration-300">
                                    <div className="bg-[#254f1a] p-3 rounded-xl">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-[#254f1a] font-bold text-lg">Location</h3>
                                        <p className="text-[#254f1a]/70">India</p>
                                    </div>
                                </div>

                                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 flex items-center gap-4 hover:bg-white/70 transition-all duration-300">
                                    <div className="bg-[#254f1a] p-3 rounded-xl">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-[#254f1a] font-bold text-lg">Work Status</h3>
                                        <p className="text-[#254f1a]/70">Open to Opportunities</p>
                                    </div>
                                </div>

                                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 flex items-center gap-4 hover:bg-white/70 transition-all duration-300">
                                    <div className="bg-[#254f1a] p-3 rounded-xl">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-[#254f1a] font-bold text-lg">Response Time</h3>
                                        <p className="text-[#254f1a]/70">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl">
                                {formStatus === 'success' && (
                                    <div className="mb-6 bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}
                                
                                {formStatus === 'error' && (
                                    <div className="mb-6 bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Something went wrong. Please try again or email me directly.
                                    </div>
                                )}

                                <div className="space-y-5">
                                    <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                                        <label htmlFor="name" className="block text-[#254f1a] font-bold text-base mb-2">Your Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#254f1a] focus:outline-none focus:ring-4 focus:ring-[#254f1a]/10 transition-all text-base font-medium"
                                            placeholder="Your full name"
                                            required
                                            disabled={isSubmitting}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </div>

                                    <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                                        <label htmlFor="email" className="block text-[#254f1a] font-bold text-base mb-2">Your Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#254f1a] focus:outline-none focus:ring-4 focus:ring-[#254f1a]/10 transition-all text-base font-medium"
                                            placeholder="your.email@example.com"
                                            required
                                            disabled={isSubmitting}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </div>

                                    <div className={`relative transition-all duration-300 ${focusedField === 'subject' ? 'scale-[1.02]' : ''}`}>
                                        <label htmlFor="subject" className="block text-[#254f1a] font-bold text-base mb-2">Subject</label>
                                        <input 
                                            type="text" 
                                            id="subject" 
                                            name="subject"
                                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#254f1a] focus:outline-none focus:ring-4 focus:ring-[#254f1a]/10 transition-all text-base font-medium"
                                            placeholder="Project Collaboration"
                                            required
                                            disabled={isSubmitting}
                                            onFocus={() => setFocusedField('subject')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </div>

                                    <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.02]' : ''}`}>
                                        <label htmlFor="message" className="block text-[#254f1a] font-bold text-base mb-2">Message</label>
                                        <textarea 
                                            id="message" 
                                            name="message"
                                            rows="5"
                                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#254f1a] focus:outline-none focus:ring-4 focus:ring-[#254f1a]/10 transition-all resize-none text-base font-medium"
                                            placeholder="Tell me about your project or idea..."
                                            required
                                            disabled={isSubmitting}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                        ></textarea>
                                    </div>
                                </div>

                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full mt-6 bg-[#254f1a] text-white px-8 py-4 rounded-full font-bold text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
