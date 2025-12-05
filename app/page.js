"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";

export default function Home() {

  const router = useRouter();
  const [text, setText] = useState("");
  const [hideNavbar, setHideNavbar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [techVisible, setTechVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showTeaAnimation, setShowTeaAnimation] = useState(false);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const teaMessages = [
    "Here's your virtual chai! ☕ Enjoy!",
    "One hot cup of code-fuel coming up! 🍵",
    "Sip, code, repeat! 🫖",
    "Tea-riffic! Your brew is ready! 🍵",
    "Debugging tastes better with chai! ☕",
  ];

  const handleTeaClick = () => {
    const randomMessage = teaMessages[Math.floor(Math.random() * teaMessages.length)];
    setToastMessage(randomMessage);
    setShowToast(true);
    setShowTeaAnimation(true);
    setTimeout(() => setShowToast(false), 3500);
    setTimeout(() => setShowTeaAnimation(false), 4000);
  };

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
      
      {/* Toast Notification */}
      <div className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-100 transition-all duration-500 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="bg-[#254f1a] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-[#d2e823]">
          <span className="text-2xl animate-bounce">🍵</span>
          <span className="font-bold text-sm md:text-base">{toastMessage}</span>
        </div>
      </div>

      {/* Full Screen Tea Animation */}
      {showTeaAnimation && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {/* Flying tea cups from all directions */}
          {[...Array(15)].map((_, i) => (
            <span
              key={i}
              className="absolute text-4xl md:text-6xl animate-tea-fly"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.15}s`,
                animationDuration: `${1.5 + Math.random()}s`,
              }}
            >
              {i % 2 === 0 ? '🍵' : '☕'}
            </span>
          ))}
          
          {/* Giant tilting tea cup in center - sipping effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-tea-sip">
              <span className="text-[150px] md:text-[250px] drop-shadow-2xl">🍵</span>
            </div>
          </div>
          
          {/* Steam particles */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
            <span className="absolute text-4xl animate-steam-1 opacity-60">♨️</span>
            <span className="absolute text-3xl animate-steam-2 opacity-40 ml-8">♨️</span>
            <span className="absolute text-5xl animate-steam-3 opacity-50 -ml-8">♨️</span>
          </div>
        </div>
      )}

      <section className={`bg-[#d2e823] min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center flex-col lg:ml-[10vw] my-5 lg:my-70 order-2 lg:order-1">
          <div className="text-[#254f1a] font-extrabold text-4xl md:text-6xl lg:text-7xl min-h-[5rem] md:min-h-[8rem] lg:min-h-[10rem]">
            <Typewriter 
              words={["Welcome To My Portfolio.", "Let's Build Something.", "Code. Create. Inspire."]}
              typeSpeed={80}
              deleteSpeed={40}
              delayBetweenWords={2500}
            />
          </div>
            <p className="text-[#254f1a] font-medium text-base md:text-lg lg:text-xl my-4 lg:my-6">Hey there! I'm Namit Tickoo, Full-Stack developer who loves turning ideas into interactive digital experiences. From React and Node.js to Next.js, I build fast, reliable,
           beautiful web apps — and I'm on a mission to contribute to open source and crack GSoC 2026 🚀</p>
          <div className="input flex gap-2 flex-col sm:flex-row">
            <input className="bg-white rounded-md py-4 lg:py-5 px-6 lg:px-8 font-bold text-center text-sm lg:text-base" placeholder="A cup of tea for you" readOnly />
            <button 
              onClick={handleTeaClick}
              className="text-white bg-[#254f1a] py-3 px-10 lg:px-14 rounded-full font-bold text-xl lg:text-2xl whitespace-nowrap hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out active:scale-95"
            >
              🍵
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col order-1 lg:order-2 pt-30 pb-8 lg:py-0">
          <div className="relative w-[300px] h-[360px] sm:w-[400px] sm:h-[480px] lg:w-[500px] lg:h-[600px]">
            <Image className="rounded-4xl object-cover" src="/img1.jpg" fill alt="Namit Tickoo" />
            <p className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-white font-semibold px-4 py-2 rounded text-sm lg:text-base">
              Namit Tickoo. coder.
            </p>
          </div>
        </div>
      </section>


      <section ref={section2Ref} className={`bg-[#2665d6] min-h-screen flex flex-col items-center py-20 lg:py-40 px-6 transition-all duration-1000 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-[#d2e823] font-extrabold text-3xl md:text-5xl lg:text-7xl mb-10 lg:mb-16 text-center">Technologies I Work With.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 max-w-6xl w-full px-4 lg:px-10">
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center gap-2 text-white font-bold text-base lg:text-xl hover:bg-white/20 hover:scale-105 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
            <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128"><path fill="#f89820" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/><path fill="#f89820" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/><path fill="#f89820" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/><path fill="#f89820" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/><path fill="#f89820" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/></svg>
            Java
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center gap-2 text-white font-bold text-base lg:text-xl hover:bg-white/20 hover:scale-105 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
            <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>
            HTML
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center gap-2 text-white font-bold text-base lg:text-xl hover:bg-white/20 hover:scale-105 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s' }}>
            <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711zm-.047 27.994v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711z"/></svg>
            CSS
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center gap-2 text-white font-bold text-base lg:text-xl hover:bg-white/20 hover:scale-105 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
            <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/></svg>
            TailwindCSS
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center gap-2 text-white font-bold text-base lg:text-xl hover:bg-white/20 hover:scale-105 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.5s' }}>
            <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>
            JavaScript
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center gap-2 text-white font-bold text-base lg:text-xl hover:bg-white/20 hover:scale-105 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
            <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
            React
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center gap-2 text-white font-bold text-base lg:text-xl hover:bg-white/20 hover:scale-105 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.7s' }}>
            <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.71 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645 1.129 1.24 1.129h5.754c.354 0 .692-.286.94-.534.24-.249.423-.605.423-.96-.67-10.6-5.943-15.616-22.198-15.616-12.68 0-20.206 5.334-20.206 14.277 0 9.698 7.543 12.382 19.676 13.575 14.577 1.422 15.57 3.505 15.57 6.364 0 4.894-3.969 6.979-13.262 6.979z"/></svg>
            Node.js
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center gap-2 text-white font-bold text-base lg:text-xl hover:bg-white/20 hover:scale-105 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
            <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="#fff"/></svg>
            Next.js
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center gap-2 text-white font-bold text-base lg:text-xl hover:bg-white/20 hover:scale-105 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.9s' }}>
            <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128"><path fill="#fff" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/></svg>
            Express.js
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center gap-2 text-white font-bold text-base lg:text-xl hover:bg-white/20 hover:scale-105 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1.0s' }}>
            <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128"><path fill="#439934" d="M117.207 71.657c-4.49 0-8.073 1.674-10.912 4.5l-.156-.084-23.422-13.592c.117-.782.219-1.565.219-2.368 0-.944-.128-1.854-.282-2.75l23.375-13.395.219.125c2.832 2.753 6.38 4.38 10.8 4.38 8.466 0 15.354-6.9 15.354-15.387 0-8.485-6.888-15.393-15.354-15.393-8.47 0-15.36 6.908-15.36 15.393 0 1.46.253 2.858.648 4.191L78.918 50.775c-2.884-4.238-7.494-7.169-12.848-7.888V18.703c7.416-1.416 13.03-7.937 13.03-15.76C79.1 1.32 77.776 0 76.155 0H51.848c-1.619 0-2.943 1.32-2.943 2.943 0 7.823 5.612 14.344 13.026 15.76v24.184c-5.326.723-9.91 3.626-12.797 7.824l-23.47-13.528c.426-1.373.692-2.818.692-4.324 0-8.485-6.889-15.393-15.357-15.393C2.53 17.466-2.36 24.374-2.36 32.86c0 8.486 6.89 15.387 15.359 15.387 4.416 0 7.963-1.627 10.8-4.38l.218-.125 23.375 13.395c-.154.896-.281 1.806-.281 2.75 0 .803.101 1.586.218 2.368L23.906 75.85l-.156.085c-2.84-2.827-6.422-4.501-10.912-4.501-8.47 0-15.359 6.912-15.359 15.397 0 8.486 6.889 15.388 15.36 15.388 8.467 0 15.356-6.902 15.356-15.388 0-1.459-.251-2.854-.647-4.187l23.42-13.499c2.914 4.306 7.586 7.27 13.006 7.953v24.189c-7.414 1.416-13.026 7.937-13.026 15.76 0 1.622 1.324 2.943 2.943 2.943h24.307c1.62 0 2.945-1.32 2.945-2.943 0-7.823-5.614-14.344-13.03-15.76V76.898c5.45-.687 10.146-3.685 13.057-8.035l23.574 13.69c-.365 1.27-.597 2.602-.597 4.001 0 8.486 6.89 15.388 15.36 15.388 8.466 0 15.354-6.902 15.354-15.388 0-8.485-6.888-15.397-15.354-15.397z"/></svg>
            MongoDB
          </div>
          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 flex flex-col items-center justify-center gap-2 text-white font-bold text-base lg:text-xl hover:bg-white/20 hover:scale-105 transition-all duration-700 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1.1s' }}>
            <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/></svg>
            Git & GitHub
          </div>
          
        </div>
        <Link href="/projects">
        <button className={`text-black bg-[#d2e823] py-4 lg:py-6 px-10 lg:px-14 rounded-full font-bold text-base lg:text-xl my-12 lg:my-20 hover:scale-105 hover:shadow-2xl hover:bg-[#c5d320] transition-all duration-700 ease-in-out active:scale-95 ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1.2s' }}>Let's go to Project section →</button>
      </Link>
      </section>
      <Footer />
    </main>
  );
}