"use client"
import BlogLayout from "@/components/BlogLayout";

const articleData = {
    title: "Getting Started with Next.js 15",
    emoji: "🧭",
    description: "A comprehensive guide to Next.js 15 — the React framework that makes building modern web applications faster, cleaner, and smarter.",
    date: "January 2026",
    readTime: "6 min read",
    category: "Tutorial",
    categoryColor: "bg-[#2665d6]",
    gradientFrom: "from-[#2665d6]",
    gradientTo: "to-[#780016]",
    author: {
        name: "Namit",
        role: "Full Stack Developer",
        avatar: "👨‍💻"
    },
    tags: ["Next.js", "React", "Web Development", "JavaScript"]
};

const tableOfContents = [
    { id: "what-is", title: "What is Next.js?" },
    { id: "game-changer", title: "Why Next.js 15?" },
    { id: "setup", title: "Setting Up" },
    { id: "structure", title: "Project Structure" },
    { id: "why-learn", title: "Why Learn It" }
];

const relatedPosts = [
    {
        title: "My Journey to GSoC 2026",
        slug: "/blog/gsoc-journey",
        emoji: "🚀",
        category: "Journey"
    },
    {
        title: "Node.js Performance Tips",
        slug: "/blog/nodejs-performance",
        emoji: "⚡",
        category: "Tutorial"
    }
];

export default function NextJS15Blog() {
    return (
        <BlogLayout articleData={articleData} tableOfContents={tableOfContents} relatedPosts={relatedPosts}>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                When I first heard about Next.js, it sounded like just another React framework. But the deeper I explored, the more I realized how much power it gives developers — especially in terms of performance, SEO, and scalability.
            </p>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                Now, with the release of <strong className="text-white">Next.js 15</strong>, things have become smoother, faster, and even more developer-friendly.
            </p>

            <h2 id="what-is" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                ⚙️ What is Next.js, really?
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Next.js is a framework built on top of React that lets you create <strong className="text-white">server-side rendered (SSR)</strong> and <strong className="text-white">statically generated (SSG)</strong> applications easily.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                In simple words, it takes the power of React and adds <strong className="text-white">speed, structure, and optimization</strong> right out of the box.
            </p>

            <h2 id="game-changer" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🚀 Why Next.js 15 is a Game-Changer
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                The latest version brings several key updates that make building modern web apps even easier:
            </p>
            
            <div className="space-y-4 my-6">
                {[
                    { title: "Improved Server Actions", desc: "Handle form submissions and mutations directly in server components without writing separate API routes." },
                    { title: "Enhanced Caching and Streaming", desc: "Faster page loads and smoother transitions." },
                    { title: "Better Integration with the App Router", desc: "Clean routing structure and improved layouts." },
                    { title: "Optimized Images & Fonts", desc: "Automatic performance improvements with zero setup." },
                    { title: "TypeScript by Default", desc: "Stronger developer experience and fewer runtime errors." }
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                        <span className="text-[#2665d6] text-xl">✦</span>
                        <div>
                            <strong className="text-white">{item.title}</strong>
                            <span className="text-gray-400"> — {item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Next.js 15 focuses on <strong className="text-white">performance and simplicity</strong>, letting you write less boilerplate and focus more on features.
            </p>

            <h2 id="setup" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧩 Setting Up a New Project
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                To start a new Next.js 15 app, just run:
            </p>
            
            <div className="bg-gray-900 border border-gray-700 text-green-400 p-6 rounded-xl mb-4 overflow-x-auto">
                <code className="font-mono text-base">npx create-next-app@latest my-next-app</code>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                You'll be prompted to select options like TypeScript, Tailwind, and ESLint — pick what fits your stack. Once done, jump into your project directory and run:
            </p>
            
            <div className="bg-gray-900 border border-gray-700 text-green-400 p-6 rounded-xl mb-4 overflow-x-auto">
                <code className="font-mono text-base">npm run dev</code>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Visit <code className="bg-white/10 px-2 py-1 rounded text-[#d2e823] font-mono">http://localhost:3000</code> and boom 💥 — your app is live locally.
            </p>

            <h2 id="structure" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                📁 Project Structure Overview
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                A quick breakdown of what you'll see:
            </p>
            
            <div className="bg-gray-900 border border-gray-700 text-gray-300 p-6 rounded-xl mb-6 overflow-x-auto">
                <pre className="font-mono text-sm">
{`/app
  /page.tsx       → main page
  /layout.tsx     → shared layout
/public           → static assets
/styles           → CSS or Tailwind setup`}
                </pre>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                This new <strong className="text-white">App Router</strong> structure is the heart of Next.js 15 — it makes managing routes, layouts, and server components simple and scalable.
            </p>

            <h2 id="why-learn" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                💡 Why You Should Learn It
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                If you already know React, Next.js 15 is the natural next step. You'll learn how to:
            </p>
            
            <ul className="space-y-3 mb-6">
                {[
                    "Build production-ready apps with zero config.",
                    "Optimize for SEO easily.",
                    "Deploy to platforms like Vercel in seconds."
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                        <span className="text-[#2665d6]">✓</span>
                        {item}
                    </li>
                ))}
            </ul>
            
            <blockquote className="border-l-4 border-[#2665d6] bg-[#2665d6]/10 pl-6 py-4 my-8 rounded-r-xl">
                <p className="text-gray-300 text-lg italic">
                    For me, learning Next.js felt like upgrading from <strong className="text-white">"building websites"</strong> to <strong className="text-white">"engineering web applications."</strong> It's that powerful.
                </p>
            </blockquote>

            <h2 className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧠 Final Thoughts
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Whether you're just getting started or planning your next big project, Next.js 15 is worth diving into.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The ecosystem keeps evolving, but one thing stays the same — <strong className="text-[#d2e823]">Next.js lets you build faster, cleaner, and smarter.</strong>
            </p>

            <div className="bg-gradient-to-r from-[#2665d6] to-[#780016] rounded-2xl p-8 mt-12">
                <p className="text-white text-xl font-bold leading-relaxed text-center">
                    ✨ Stay tuned — I'll be sharing my experience of building and deploying my personal portfolio with Next.js soon! 🚀
                </p>
            </div>
        </BlogLayout>
    );
}
