"use client"
import BlogLayout from "@/components/BlogLayout";

const articleData = {
    title: "Building Secure Password Managers",
    emoji: "🔐",
    description: "A deep dive into building a secure password manager — from understanding data security to implementing encryption and creating both local and cloud-based solutions.",
    date: "January 2026",
    readTime: "7 min read",
    category: "Project",
    categoryColor: "bg-[#780016]",
    gradientFrom: "from-[#780016]",
    gradientTo: "to-[#2665d6]",
    author: {
        name: "Namit",
        role: "Full Stack Developer",
        avatar: "👨‍💻"
    },
    tags: ["Security", "React", "Node.js", "MongoDB"]
};

const tableOfContents = [
    { id: "idea", title: "The Idea Behind It" },
    { id: "tech-stack", title: "Tech Stack" },
    { id: "key-concepts", title: "Key Concepts Learned" },
    { id: "modes", title: "Offline vs Online Mode" },
    { id: "takeaways", title: "Takeaways" }
];

const relatedPosts = [
    {
        title: "REST API Best Practices",
        slug: "/blog/rest-api",
        emoji: "🌐",
        category: "Tutorial"
    },
    {
        title: "Node.js Performance Tips",
        slug: "/blog/nodejs-performance",
        emoji: "⚡",
        category: "Tutorial"
    }
];

export default function PasswordManagerBlog() {
    return (
        <BlogLayout articleData={articleData} tableOfContents={tableOfContents} relatedPosts={relatedPosts}>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
                In today's world, we use dozens of apps, websites, and tools — each needing its own login credentials. Most people end up reusing passwords or saving them in plain text files, which is a <strong className="text-white">serious security risk</strong>.
            </p>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                That's exactly why I decided to build my own <strong className="text-white">Password Manager</strong> — a simple, secure web app where users can safely store and manage their credentials.
            </p>

            <h2 id="idea" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                💡 The Idea Behind It
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                When I started this project, my goal was simple — to create something useful while also learning about <strong className="text-white">data security, encryption, and backend logic</strong>.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Instead of relying on traditional note-taking apps or insecure methods, I wanted a platform that could:
            </p>
            
            <ul className="space-y-3 mb-6">
                {["Safely store passwords", "Allow quick access", "Work both online (with MongoDB) and offline (with localStorage)"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                        <span className="text-[#780016]">✓</span>
                        {item}
                    </li>
                ))}
            </ul>
            
            <blockquote className="border-l-4 border-[#780016] bg-[#780016]/10 pl-6 py-4 my-8 rounded-r-xl">
                <p className="text-gray-300 text-lg italic">
                    It wasn't just another CRUD app — it was a <strong className="text-white">real-world problem I wanted to solve with code</strong>.
                </p>
            </blockquote>

            <h2 id="tech-stack" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                ⚙️ Tech Stack
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Here's what I used to bring it to life:
            </p>
            
            <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
                <div className="space-y-3">
                    {[
                        { label: "Frontend", value: "React + Tailwind CSS", color: "text-[#780016]" },
                        { label: "Backend", value: "Node.js + Express.js", color: "text-[#2665d6]" },
                        { label: "Database", value: "MongoDB (for the cloud version)", color: "text-[#780016]" },
                        { label: "Storage", value: "LocalStorage (for offline version)", color: "text-[#2665d6]" },
                        { label: "Deployment", value: "Netlify + Render", color: "text-[#780016]" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <strong className={item.color}>{item.label}:</strong>
                            <span className="text-gray-300">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <h2 id="key-concepts" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧠 Key Concepts Learned
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Building a password manager taught me more than I expected — especially about how sensitive data should (and shouldn't) be handled.
            </p>
            
            <div className="space-y-4 mb-8">
                {[
                    { title: "Never store raw passwords.", desc: "Every password should be hashed or encrypted before saving.", color: "border-[#780016]" },
                    { title: "Use encryption for storage.", desc: "I used a simple encryption library to encode passwords before sending them to the database.", color: "border-[#2665d6]" },
                    { title: "Validate user inputs.", desc: "Prevent XSS, SQL injection, and similar attacks by sanitizing all data.", color: "border-[#780016]" },
                    { title: "Add copy-to-clipboard features carefully.", desc: "Even small features like this should have limits to prevent misuse.", color: "border-[#2665d6]" },
                    { title: "Keep the UI clean and responsive.", desc: "Security is serious — but the user experience matters too.", color: "border-[#780016]" }
                ].map((item, i) => (
                    <div key={i} className={`bg-white/5 p-5 rounded-xl border-l-4 ${item.color}`}>
                        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>

            <h2 id="modes" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🔄 Offline vs. Online Mode
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I made two versions of this project:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#780016]/10 p-6 rounded-2xl border border-[#780016]/30">
                    <h3 className="text-[#d2e823] font-bold text-xl mb-3">LocalStorage Version</h3>
                    <p className="text-gray-400">
                        Perfect for local use, stores encrypted passwords directly in the browser.
                    </p>
                </div>
                
                <div className="bg-[#2665d6]/10 p-6 rounded-2xl border border-[#2665d6]/30">
                    <h3 className="text-[#d2e823] font-bold text-xl mb-3">MongoDB Version</h3>
                    <p className="text-gray-400">
                        Cloud-based, can be accessed from any device securely.
                    </p>
                </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                This dual setup helped me understand how <strong className="text-white">frontend-only apps differ from full-stack architectures</strong>.
            </p>

            <div id="takeaways" className="bg-gradient-to-r from-[#780016] to-[#2665d6] rounded-2xl p-8 mt-12 scroll-mt-24">
                <h2 className="text-white font-bold text-2xl md:text-3xl mb-6">
                    🧩 Takeaways for Developers
                </h2>
                
                <div className="space-y-4">
                    {[
                        { icon: "🔒", text: "Encrypt everything — treat all data as sensitive." },
                        { icon: "🧠", text: "Understand how browsers store data (localStorage ≠ secure)." },
                        { icon: "💻", text: "Never log sensitive info in the console." },
                        { icon: "🚀", text: "Deploy often — testing in production-like environments exposes real issues." },
                        { icon: "🧩", text: "Keep learning about security standards like OAuth, JWT, HTTPS." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                            <span className="text-2xl">{item.icon}</span>
                            <p className="text-white text-lg">{item.text}</p>
                        </div>
                    ))}
                </div>
                
                <p className="text-white/90 text-lg font-medium mt-6 italic text-center">
                    Building a secure password manager isn't just about storing passwords — it's about understanding responsibility as a developer.
                </p>
            </div>
        </BlogLayout>
    );
}
