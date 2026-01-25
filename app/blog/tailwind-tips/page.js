"use client"
import BlogLayout from "@/components/BlogLayout";

const articleData = {
    title: "Mastering Tailwind CSS",
    emoji: "🎨",
    description: "Styling at the speed of thought — how Tailwind CSS changed my approach to web design and helped me build faster, cleaner, and more consistent UIs.",
    date: "November 2025",
    readTime: "6 min read",
    category: "Tutorial",
    categoryColor: "bg-[#2665d6]",
    gradientFrom: "from-[#2665d6]",
    gradientTo: "to-[#d2e823]",
    author: {
        name: "Namit",
        role: "Full Stack Developer",
        avatar: "👨‍💻"
    },
    tags: ["Tailwind CSS", "CSS", "Frontend", "Design"]
};

const tableOfContents = [
    { id: "different", title: "What Makes It Different" },
    { id: "why-love", title: "Why Developers Love It" },
    { id: "features", title: "Features I Can't Live Without" },
    { id: "tips", title: "Tips to Master Tailwind" },
    { id: "learned", title: "What Tailwind Taught Me" }
];

const relatedPosts = [
    {
        title: "Next.js 15 Tutorial",
        slug: "/blog/nextjs-15",
        emoji: "⚡",
        category: "Tutorial"
    },
    {
        title: "Building Password Managers",
        slug: "/blog/password-manager",
        emoji: "🔐",
        category: "Project"
    }
];

export default function TailwindBlog() {
    return (
        <BlogLayout articleData={articleData} tableOfContents={tableOfContents} relatedPosts={relatedPosts}>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
                When I first started web development, writing CSS used to feel slow and repetitive. Managing class names, maintaining files, and writing media queries manually — it all added up.
            </p>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                Then I discovered <strong className="text-white">Tailwind CSS</strong>, and it completely changed how I approached styling.
            </p>
            
            <blockquote className="border-l-4 border-[#2665d6] bg-[#2665d6]/10 pl-6 py-4 my-8 rounded-r-xl">
                <p className="text-gray-300 text-lg italic mb-2">
                    Tailwind made me realize something simple yet powerful:
                </p>
                <p className="text-[#d2e823] text-xl font-bold">
                    "Good design isn't about writing more CSS — it's about writing smarter CSS."
                </p>
            </blockquote>

            <h2 id="different" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                ⚙️ What Makes Tailwind CSS Different
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                <strong className="text-white">Tailwind CSS is a utility-first CSS framework.</strong> Instead of writing long custom styles, you use predefined classes directly in your HTML or JSX. It's like having Lego blocks for design — you just stack them to build any layout you want.
            </p>
            
            <div className="bg-black/50 p-4 rounded-xl mb-4">
                <p className="text-gray-400 text-sm mb-2">Example 👇</p>
                <pre className="text-white font-mono text-sm overflow-x-auto">
{`<div class="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
  <h1 class="text-2xl font-bold mb-2">Hello, Tailwind!</h1>
  <p class="text-gray-300">Clean design meets simplicity.</p>
</div>`}
                </pre>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 italic">
                No separate CSS file, no naming headache — just <strong className="text-white">focus on building</strong>.
            </p>

            <h2 id="why-love" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🚀 Why Developers Love Tailwind
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                After using Tailwind across multiple projects — from small components to my personal portfolio website — here's what I've learned about why it stands out:
            </p>
            
            <div className="space-y-3 mb-8">
                {[
                    { icon: "⚡", title: "Speed", desc: "You can build responsive UIs in minutes.", color: "border-[#2665d6]" },
                    { icon: "🎯", title: "Consistency", desc: "Design stays clean and uniform across pages.", color: "border-[#780016]" },
                    { icon: "🧠", title: "Customization", desc: "The tailwind.config.js file lets you define your own theme, colors, and breakpoints.", color: "border-[#2665d6]" },
                    { icon: "📱", title: "Responsive by Design", desc: "Classes like sm:, md:, and lg: make responsiveness effortless.", color: "border-[#780016]" },
                    { icon: "🧩", title: "Integration", desc: "Works beautifully with React, Next.js, and any JS framework.", color: "border-[#2665d6]" }
                ].map((item, i) => (
                    <div key={i} className={`bg-white/5 p-4 rounded-xl border-l-4 ${item.color}`}>
                        <p className="text-gray-300 text-lg">
                            <span className="font-bold text-[#d2e823]">{item.icon} {item.title}:</span> {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            <h2 id="features" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧰 Tailwind Features I Can't Live Without
            </h2>
            
            <ul className="space-y-3 mb-6">
                {[
                    { text: "Flexbox & Grid utilities — perfect for layout control.", color: "text-[#2665d6]" },
                    { text: "Dark mode toggling with simple classes.", color: "text-[#780016]" },
                    { text: "Hover and transition effects for smooth animations.", color: "text-[#2665d6]" },
                    { text: "Reusability with components — create small reusable UI blocks.", color: "text-[#780016]" }
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                        <span className={item.color}>•</span>
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Every project I built with Tailwind — whether it was a <strong className="text-white">Password Manager</strong>, <strong className="text-white">URL Shortener</strong>, or my <strong className="text-white">Portfolio</strong> — turned out faster, cleaner, and way more consistent.
            </p>

            <h2 id="tips" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🎯 Tips to Master Tailwind CSS
            </h2>
            
            <div className="space-y-4 mb-8">
                {[
                    { icon: "🧠", title: "Learn the naming system.", desc: "Once you understand how classes are structured (text-, bg-, p-, m-, etc.), you'll code without looking at docs every time.", color: "bg-[#2665d6]/10 border-[#2665d6]" },
                    { icon: "🪶", title: "Use Tailwind Play.", desc: "Experiment live at play.tailwindcss.com", color: "bg-[#780016]/10 border-[#780016]" },
                    { icon: "📚", title: "Understand responsiveness.", desc: "Learn how breakpoints (sm, md, lg) change layouts smoothly.", color: "bg-[#2665d6]/10 border-[#2665d6]" },
                    { icon: "⚙️", title: "Customize your config.", desc: "Add your colors, fonts, and shadows — make Tailwind your design system.", color: "bg-[#780016]/10 border-[#780016]" },
                    { icon: "💪", title: "Build real projects.", desc: "Practice by converting designs into Tailwind layouts — you'll learn faster than by reading.", color: "bg-[#2665d6]/10 border-[#2665d6]" }
                ].map((item, i) => (
                    <div key={i} className={`${item.color} p-5 rounded-xl border-l-4`}>
                        <h3 className="text-[#d2e823] font-bold text-lg mb-1">{item.icon} {item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>

            <h2 id="learned" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧠 What Tailwind Taught Me
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Tailwind CSS didn't just make me faster — it made me <strong className="text-white">think like a designer</strong>.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                It taught me to balance <strong className="text-white">structure with creativity</strong> and focus on <strong className="text-white">clarity over complexity</strong>.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're a beginner or building your next big project, Tailwind CSS can help you design like a pro — without ever leaving your HTML.
            </p>

            <div className="bg-gradient-to-r from-[#2665d6] to-[#780016] rounded-2xl p-8 mt-12">
                <p className="text-white text-2xl md:text-3xl font-bold text-center leading-relaxed mb-2">
                    "Code less. Style more. Ship faster."
                </p>
                <p className="text-white/90 text-xl text-center font-medium">
                    That's the Tailwind way. ✨
                </p>
            </div>
        </BlogLayout>
    );
}
