"use client"
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
    const [hideNavbar, setHideNavbar] = useState(false);
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('');

        const formData = new FormData(e.target);
        
        // Add your Web3Forms access key here
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
            <section className={`bg-[#780016] min-h-screen pt-32 px-4 md:px-10 flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-[#e9c0e9] font-extrabold text-4xl md:text-6xl lg:text-7xl mb-10">Let's Connect</h1>
                    <p className="text-[#e9c0e9] font-medium text-base md:text-xl lg:text-2xl mb-16 max-w-4xl mx-auto px-4">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these platforms!
                    </p>

                    {/* Download Resume Button */}
                    <div className="mb-8">
                        <a href="/resume.pdf" download="Namit_Tickoo_Resume.pdf">
                            <button className="bg-[#e9c0e9] text-[#780016] px-6 md:px-10 py-4 md:py-5 rounded-full font-extrabold text-lg md:text-2xl flex items-center gap-3 hover:scale-110 hover:shadow-2xl hover:bg-white transition-all duration-300 active:scale-95 mx-auto border-4 border-white">
                                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </button>
                        </a>
                    </div>

                    {/* Social Media Buttons */}
                    <div className="flex gap-4 md:gap-6 justify-center flex-wrap mb-12 px-4">
                        <Link href="https://github.com/Namit-07" target="_blank" rel="noopener noreferrer">
                            <button className="bg-white text-[#780016] px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-xl flex items-center gap-2 md:gap-3 hover:scale-110 hover:shadow-2xl transition-all duration-300 active:scale-95">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <span className="hidden sm:inline">GitHub</span>
                            </button>
                        </Link>

                        <Link href="https://www.linkedin.com/in/namit-tickoo-69b2a9367/" target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#0077b5] text-white px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-xl flex items-center gap-2 md:gap-3 hover:scale-110 hover:shadow-2xl transition-all duration-300 active:scale-95">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                <span className="hidden sm:inline">LinkedIn</span>
                            </button>
                        </Link>

                        <Link href="mailto:namittickoo@gmail.com">
                            <button className="bg-[#e9c0e9] text-[#780016] px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-xl flex items-center gap-2 md:gap-3 hover:scale-110 hover:shadow-2xl transition-all duration-300 active:scale-95">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="hidden sm:inline">Email</span>
                            </button>
                        </Link>

                        <Link href="https://x.com/tickoonamit?s=21" target="_blank" rel="noopener noreferrer">
                            <button className="bg-white text-[#780016] px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-xl flex items-center gap-2 md:gap-3 hover:scale-110 hover:shadow-2xl transition-all duration-300 active:scale-95">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                                <span className="hidden sm:inline">Twitter</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section ref={section2Ref} className={`bg-[#d2e823] min-h-screen py-12 md:py-20 px-4 md:px-10 flex items-center justify-center transition-all duration-1000 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-3xl w-full">
                    <h2 className="text-[#254f1a] font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 text-center">Send Me a Message</h2>
                    <p className="text-[#254f1a] font-medium text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-center px-4">
                        Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible!
                    </p>

                    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
                        {formStatus === 'success' && (
                            <div className="mb-6 bg-green-100 border-2 border-green-500 text-green-700 px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold text-center text-sm md:text-base animate-pulse">
                                ✅ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        
                        {formStatus === 'error' && (
                            <div className="mb-6 bg-red-100 border-2 border-red-500 text-red-700 px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold text-center text-sm md:text-base">
                                ❌ Something went wrong. Please try again or email me directly.
                            </div>
                        )}

                        <div className="mb-6">
                            <label htmlFor="name" className="block text-[#254f1a] font-bold text-base md:text-lg mb-2">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-300 focus:border-[#254f1a] focus:outline-none transition-all text-sm md:text-base"
                                placeholder="John Doe"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-[#254f1a] font-bold text-base md:text-lg mb-2">Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-300 focus:border-[#254f1a] focus:outline-none transition-all text-sm md:text-base"
                                placeholder="john@example.com"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-[#254f1a] font-bold text-base md:text-lg mb-2">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject"
                                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-300 focus:border-[#254f1a] focus:outline-none transition-all text-sm md:text-base"
                                placeholder="Project Collaboration"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-[#254f1a] font-bold text-base md:text-lg mb-2">Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                rows="6"
                                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-300 focus:border-[#254f1a] focus:outline-none transition-all resize-none text-sm md:text-base"
                                placeholder="Tell me about your project or idea..."
                                required
                                disabled={isSubmitting}
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#254f1a] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-lg md:text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
                        </button>
                    </form>

                    {/* Quick Info */}
                    <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center">
                            <div className="text-3xl md:text-4xl mb-2 md:mb-3">📍</div>
                            <h3 className="text-[#254f1a] font-bold text-base md:text-lg mb-1 md:mb-2">Location</h3>
                            <p className="text-gray-700 text-sm md:text-base">India</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center">
                            <div className="text-3xl md:text-4xl mb-2 md:mb-3">💼</div>
                            <h3 className="text-[#254f1a] font-bold text-base md:text-lg mb-1 md:mb-2">Work Status</h3>
                            <p className="text-gray-700 text-sm md:text-base">Open to Opportunities</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center">
                            <div className="text-3xl md:text-4xl mb-2 md:mb-3">⏰</div>
                            <h3 className="text-[#254f1a] font-bold text-base md:text-lg mb-1 md:mb-2">Response Time</h3>
                            <p className="text-gray-700 text-sm md:text-base">Within 24 hours</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
