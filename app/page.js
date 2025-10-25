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
      <section className="bg-[#d2e823] min-h-screen grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[10vw] my-70">
          <p className="text-[#254f1a] font-extrabold text-7xl whitespace-nowrap">Welcome To My</p>
          <p className="text-[#254f1a] font-extrabold text-7xl">Portfolio.</p>
          <p className="text-[#254f1a] font-medium text-xl my-6 ">Hey there! I’m Namit Tickoo, a developer who loves turning ideas into interactive digital experiences. From React and Node.js to Next.js, I build fast, reliable, and beautiful web apps — and I’m on a mission to contribute to open source and crack GSoC 2026 🚀</p>
          <div className="input flex gap-2">
            <input className="bg-white rounded-md py-5 px-8 font-bold text-center"  placeholder="A cup of tea for you" readOnly />
            <button className="text-white bg-[#254f1a] py-3 px-14 rounded-full font-bold text-2xl whitespace-nowrap hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out active:scale-95">🍵</button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <div className="relative z-[100]" style={{width: '500px', height: '600px'}}>
               <Image className="rounded-4xl object-cover " src="/img1.jpg" fill alt="Zay Dante" />
            <p className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white font-semibold px-4 py-2 rounded">
              Namit Tickoo. Dev.
            </p>
          </div>
        </div>
      </section>


      <section ref={section2Ref} className="bg-[#2665d6] min-h-screen flex flex-col items-center py-40">
        <p className="text-[#d2e823] font-extrabold text-7xl mb-16">Technologies I Work With.</p>
        
        <div className="grid grid-cols-4 grid-rows-3 gap-8 max-w-6xl w-full px-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-white font-bold text-xl hover:bg-white/20 transition-all">
            Java
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-white font-bold text-xl hover:bg-white/20 transition-all">
            HTML
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-white font-bold text-xl hover:bg-white/20 transition-all">
            CSS
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-white font-bold text-xl hover:bg-white/20 transition-all">
            TailwindCSS
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-white font-bold text-xl hover:bg-white/20 transition-all">
            JavaScript
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-white font-bold text-xl hover:bg-white/20 transition-all">
            React
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-white font-bold text-xl hover:bg-white/20 transition-all">
            Node.js
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-white font-bold text-xl hover:bg-white/20 transition-all">
            Next.js
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-white font-bold text-xl hover:bg-white/20 transition-all">
            Express.js
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-white font-bold text-xl hover:bg-white/20 transition-all">
            MongoDB
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center text-white font-bold text-xl hover:bg-white/20 transition-all">
            Git & GitHub
          </div>
          
        </div>
        <Link href="/projects">
        <button className="text-black bg-[#d2e823] py-6 px-14 rounded-full font-bold text-xl whitespace-nowrap my-20 hover:scale-105 hover:shadow-2xl hover:bg-[#c5d320] transition-all duration-300 ease-in-out active:scale-95">Let's go to Project section ---&gt; </button>
      </Link>
      </section>
    </main>
  );
}