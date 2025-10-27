"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {

  const router = useRouter();
  const [text, setText] = useState("");
  const [hideNavbar, setHideNavbar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [techVisible, setTechVisible] = useState(false);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    // Trigger fade-in for first section immediately
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === section2Ref.current) {
            if (entry.isIntersecting) {
              setHideNavbar(true);
              setTechVisible(true);
            } else {
              setHideNavbar(false);
            }
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
      <section className={`bg-[#d2e823] min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center flex-col lg:ml-[10vw] my-5 lg:my-70 order-2 lg:order-1">
          <p className="text-[#254f1a] font-extrabold text-4xl md:text-6xl lg:text-7xl">Welcome To My</p>
          <p className="text-[#254f1a] font-extrabold text-4xl md:text-6xl lg:text-7xl">Portfolio.</p>
          <p className="text-[#254f1a] font-medium text-base md:text-lg lg:text-xl my-4 lg:my-6">Hey there! I'm Namit Tickoo, Full-Stack developer who loves turning ideas into interactive digital experiences. From React and Node.js to Next.js, I build fast, reliable, beautiful web apps — and I'm on a mission to contribute to open source and crack GSoC 2026 🚀</p>
          <div className="input flex gap-2 flex-col sm:flex-row">
            <input className="bg-white rounded-md py-4 lg:py-5 px-6 lg:px-8 font-bold text-center text-sm lg:text-base" placeholder="A cup of tea for you" readOnly />
            <button className="text-white bg-[#254f1a] py-3 px-10 lg:px-14 rounded-full font-bold text-xl lg:text-2xl whitespace-nowrap hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out active:scale-95">🍵</button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col order-1 lg:order-2 pt-30 pb-8 lg:py-0 relative">
          <div className="relative w-[300px] h-[360px] sm:w-[400px] sm:h-[480px] lg:w-[500px] lg:h-[600px]" >
               <Image className="rounded-4xl  object-cover" src="/img1.jpg" fill alt="Namit Tickoo" />
            <p className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-white font-semibold px-4 py-2 rounded text-sm lg:text-base">
              Namit Tickoo. coder.
            </p>
          </div>
        </div>
      </section>


      <section ref={section2Ref} className={`bg-[#2665d6] min-h-screen flex flex-col items-center py-20 lg:py-40 px-6 transition-all duration-1000 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-[#d2e823] font-extrabold text-3xl md:text-5xl lg:text-7xl mb-10 lg:mb-16 text-center">Technologies I Work With.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 max-w-6xl w-full px-4 lg:px-10">
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex items-center justify-center text-white font-bold text-base lg:text-xl hover:bg-white/20 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
            Java
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex items-center justify-center text-white font-bold text-base lg:text-xl hover:bg-white/20 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
            HTML
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex items-center justify-center text-white font-bold text-base lg:text-xl hover:bg-white/20 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s' }}>
            CSS
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex items-center justify-center text-white font-bold text-base lg:text-xl hover:bg-white/20 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
            TailwindCSS
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex items-center justify-center text-white font-bold text-base lg:text-xl hover:bg-white/20 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.5s' }}>
            JavaScript
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex items-center justify-center text-white font-bold text-base lg:text-xl hover:bg-white/20 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
            React
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex items-center justify-center text-white font-bold text-base lg:text-xl hover:bg-white/20 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.7s' }}>
            Node.js
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex items-center justify-center text-white font-bold text-base lg:text-xl hover:bg-white/20 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
            Next.js
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex items-center justify-center text-white font-bold text-base lg:text-xl hover:bg-white/20 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.9s' }}>
            Express.js
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex items-center justify-center text-white font-bold text-base lg:text-xl hover:bg-white/20 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1.0s' }}>
            MongoDB
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex items-center justify-center text-white font-bold text-base lg:text-xl hover:bg-white/20 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1.1s' }}>
            Git & GitHub
          </div>
          
        </div>
        <Link href="/projects">
        <button className={`text-black bg-[#d2e823] py-4 lg:py-6 px-10 lg:px-14 rounded-full font-bold text-base lg:text-xl my-12 lg:my-20 hover:scale-105 hover:shadow-2xl hover:bg-[#c5d320] transition-all duration-700 ease-in-out active:scale-95 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1.2s' }}>Let's go to Project section →</button>
      </Link>
      </section>
    </main>
  );
}