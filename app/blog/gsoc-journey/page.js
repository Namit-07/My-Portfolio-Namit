"use client"
import BlogLayout from "@/components/BlogLayout";

const articleData = {
    title: "My Journey to GSoC 2026",
    emoji: "🚀",
    description: "From a complete beginner to preparing for Google Summer of Code — this is my story of growth, learning, and chasing a goal.",
    date: "January 2026",
    readTime: "8 min read",
    category: "Journey",
    categoryColor: "bg-[#780016]",
    gradientFrom: "from-[#780016]",
    gradientTo: "to-[#2665d6]",
    author: {
        name: "Namit",
        role: "Full Stack Developer",
        avatar: "👨‍💻"
    },
    tags: ["GSoC", "Open Source", "Web Development", "Career"]
};

const tableOfContents = [
    { id: "start", title: "Where It All Started" },
    { id: "projects", title: "Building Projects" },
    { id: "why-gsoc", title: "Why GSoC 2026?" },
    { id: "road-ahead", title: "The Road Ahead" },
    { id: "takeaways", title: "Takeaways for Beginners" }
];

const relatedPosts = [
    {
        title: "Getting Started with Next.js 15",
        slug: "/blog/nextjs-15",
        emoji: "🧭",
        category: "Tutorial"
    },
    {
        title: "Building Secure Password Managers",
        slug: "/blog/password-manager",
        emoji: "🔐",
        category: "Project"
    }
];

export default function GSoCJourney() {
    return (
        <BlogLayout articleData={articleData} tableOfContents={tableOfContents} relatedPosts={relatedPosts}>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                When I first heard about Google Summer of Code (GSoC), it sounded like a dream — working with open-source organizations, writing real production code, and learning from industry-level mentors. But for me, it became more than just a program — it became a goal that keeps me moving forward every single day.
            </p>

            <h2 id="start" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🌱 Where It All Started
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Just a few months ago, I didn't even know HTML or CSS properly. I was a beginner, curious but completely unsure where to start. But I had one thing — <strong className="text-white">clarity of purpose</strong>.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I wanted to grow as a developer, contribute to something meaningful, and eventually become a part of the open-source world.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                That's when I started my journey with the <strong className="text-white">Sigma Web Dev Course by CodeWithHarry</strong>. I dedicated myself to learning every topic — HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and even Next.js.
            </p>
            
            <blockquote className="border-l-4 border-[#780016] bg-[#780016]/10 pl-6 py-4 my-8 rounded-r-xl">
                <p className="text-[#d2e823] font-bold text-xl italic">
                    "Every single day was about progress — not perfection."
                </p>
            </blockquote>

            <h2 id="projects" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                💻 Building Projects, Building Confidence
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Learning is one thing. Building something out of it is another. I began creating small projects and gradually moved to full-stack apps like:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {["Password Manager", "URL Shortener", "LinkTree Clone", "Personal Portfolio"].map((project, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                        <span className="text-green-500 text-xl">✅</span>
                        <span className="text-white font-medium">{project}</span>
                    </div>
                ))}
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Each project made me more confident and taught me how all the pieces of web development fit together. These weren't just assignments — they were proof of growth.
            </p>

            <h2 id="why-gsoc" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧠 Why GSoC 2026?
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                For me, GSoC 2026 isn't just a resume line — it's about learning at scale, collaborating with real developers, and giving back to the same community that helped me learn so much.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                By the time GSoC 2026 arrives, I want to be ready with:
            </p>
            
            <ul className="space-y-3 mb-6">
                {[
                    "10+ open-source contributions",
                    "Strong understanding of React + Next.js + Node",
                    "Clear communication and documentation skills"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                        <span className="text-[#780016]">📌</span>
                        {item}
                    </li>
                ))}
            </ul>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I know the path isn't easy — but I've already learned that <strong className="text-white">consistency beats speed every time</strong>.
            </p>

            <h2 id="road-ahead" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                ⚙️ The Road Ahead
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                My plan is simple:
            </p>
            
            <ul className="space-y-3 mb-8">
                {[
                    "Keep contributing to beginner-friendly open-source repositories.",
                    "Learn how large codebases are structured.",
                    "Build meaningful projects that solve real problems.",
                    "Interact with mentors and learn from their feedback."
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                        <span className="text-[#2665d6]">🎯</span>
                        {item}
                    </li>
                ))}
            </ul>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                This journey is far from over — in fact, it's just beginning. Every day I open my laptop, write a few lines of code, or fix a bug, I know I'm one step closer to that goal.
            </p>
            
            <p className="text-[#d2e823] font-bold text-xl my-8">
                So here's to the grind, the code, and the consistency. GSoC 2026 — I'm coming for you. 💪🔥
            </p>

            <div id="takeaways" className="bg-gradient-to-r from-[#780016] to-[#2665d6] rounded-2xl p-8 mt-12 scroll-mt-24">
                <h2 className="text-white font-bold text-2xl md:text-3xl mb-6">
                    🧩 Takeaways for Beginners Starting Their GSoC Journey
                </h2>
                
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                    If you're just starting out and aiming for GSoC, here's what I've learned so far:
                </p>
                
                <div className="space-y-4">
                    {[
                        { icon: "🌱", title: "Start small.", desc: "Contribute to documentation or fix small bugs first — it builds confidence." },
                        { icon: "🧠", title: "Master one stack deeply.", desc: "Don't chase every new framework — depth beats breadth." },
                        { icon: "💬", title: "Engage with the community.", desc: "Join Discord/Slack groups, read issues, and talk to mentors." },
                        { icon: "🧩", title: "Build personal projects.", desc: "They teach you structure, problem-solving, and debugging." },
                        { icon: "⏳", title: "Be consistent.", desc: "Even one hour a day adds up — momentum matters more than motivation." }
                    ].map((tip, i) => (
                        <div key={i} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                            <span className="text-2xl">{tip.icon}</span>
                            <p className="text-white text-lg">
                                <strong>{tip.title}</strong> {tip.desc}
                            </p>
                        </div>
                    ))}
                </div>
                
                <p className="text-white/90 text-lg font-medium mt-6 italic text-center">
                    Remember, it's not about being the smartest — it's about being the one who shows up every day and keeps learning.
                </p>
            </div>
        </BlogLayout>
    );
}