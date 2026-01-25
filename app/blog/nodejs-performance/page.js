"use client"
import BlogLayout from "@/components/BlogLayout";

const articleData = {
    title: "Node.js Performance Tips",
    emoji: "⚡",
    description: "Building faster, smarter backends — lessons learned from scaling Node.js apps from simple APIs to full-stack production projects.",
    date: "October 2025",
    readTime: "8 min read",
    category: "Tutorial",
    categoryColor: "bg-[#254f1a]",
    gradientFrom: "from-[#254f1a]",
    gradientTo: "to-[#d2e823]",
    author: {
        name: "Namit",
        role: "Full Stack Developer",
        avatar: "👨‍💻"
    },
    tags: ["Node.js", "Performance", "Backend", "JavaScript"]
};

const tableOfContents = [
    { id: "async", title: "Asynchronous Code" },
    { id: "main-thread", title: "Main Thread Optimization" },
    { id: "middleware", title: "Optimize Middleware" },
    { id: "database", title: "Database Queries" },
    { id: "caching", title: "Caching with Redis" },
    { id: "monitoring", title: "Monitoring & Profiling" },
    { id: "env", title: "Environment Variables" },
    { id: "compression", title: "Response Compression" },
    { id: "scaling", title: "Horizontal Scaling" }
];

const relatedPosts = [
    {
        title: "REST API Best Practices",
        slug: "/blog/rest-api",
        emoji: "🌐",
        category: "Tutorial"
    },
    {
        title: "Building Password Managers",
        slug: "/blog/password-manager",
        emoji: "🔐",
        category: "Project"
    }
];

export default function NodeJSPerformanceBlog() {
    return (
        <BlogLayout articleData={articleData} tableOfContents={tableOfContents} relatedPosts={relatedPosts}>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
                When I first started working with Node.js, I was just happy when my server ran without errors.
            </p>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                But as my apps grew — from simple APIs to full-stack projects — I realized something:
            </p>

            <blockquote className="border-l-4 border-[#254f1a] bg-[#254f1a]/10 pl-6 py-4 my-8 rounded-r-xl">
                <p className="text-[#d2e823] text-xl font-bold">
                    "Fast code isn't enough. Scalable, optimized code is what makes great developers."
                </p>
            </blockquote>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                So here's what I've learned through experience — my go-to Node.js performance tips for smooth, production-ready apps 🚀
            </p>

            {/* Tip 1 */}
            <h2 id="async" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧠 1. Use Asynchronous Code the Right Way
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Node.js is built for non-blocking operations. Always use <code className="bg-white/10 px-2 py-1 rounded text-sm text-[#d2e823]">async/await</code> or Promises when dealing with I/O tasks like database queries, file operations, or API calls.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <p className="text-red-400 font-bold text-lg mb-2">Bad ❌</p>
                    <div className="bg-black/50 p-3 rounded-lg">
                        <code className="text-red-400 font-mono text-sm">const data = fs.readFileSync('data.txt');</code>
                    </div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                    <p className="text-green-400 font-bold text-lg mb-2">Good ✅</p>
                    <div className="bg-black/50 p-3 rounded-lg">
                        <code className="text-green-400 font-mono text-sm">const data = await fs.promises.readFile('data.txt');</code>
                    </div>
                </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed italic mb-8">
                This ensures other tasks don't get blocked while one waits for execution.
            </p>

            {/* Tip 2 */}
            <h2 id="main-thread" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧰 2. Avoid Unnecessary Computations in the Main Thread
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Node.js runs on a <strong className="text-white">single thread</strong> — meaning heavy CPU tasks (like loops, encryption, or JSON parsing) can freeze your entire app.
            </p>

            <p className="text-gray-300 text-lg font-bold mb-3">👉 Offload them using:</p>

            <ul className="space-y-2 mb-8">
                {["Worker Threads", "Child Processes", "Queues (BullMQ, RabbitMQ) for background jobs"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                        <span className="text-[#254f1a]">•</span>
                        {item}
                    </li>
                ))}
            </ul>

            {/* Tip 3 */}
            <h2 id="middleware" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧹 3. Optimize Middleware and Routes
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Every middleware you add to Express runs on <strong className="text-white">every request</strong>. Keep middleware lean and only use it where necessary.
            </p>

            <ul className="space-y-2 mb-4">
                {["Use route-level middleware", "Remove console logs and debug tools in production", "Cache static files using CDNs"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                        <span className="text-green-400">✅</span>
                        {item}
                    </li>
                ))}
            </ul>

            <div className="bg-black/50 p-4 rounded-xl mb-8">
                <p className="text-gray-400 text-sm mb-2">Example 👇</p>
                <code className="text-green-400 font-mono text-sm">app.use('/api/users', userRouter); // Not app.use('*', userRouter)</code>
            </div>

            {/* Tip 4 */}
            <h2 id="database" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🗄️ 4. Efficient Database Queries
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                When using MongoDB (or any DB):
            </p>

            <ul className="space-y-2 mb-4">
                {[
                    "Always use indexes for faster lookups",
                    "Avoid fetching unnecessary fields (.select() or projections)",
                    "Batch operations whenever possible"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                        <span className="text-[#d2e823]">•</span>
                        {item}
                    </li>
                ))}
            </ul>

            <div className="bg-black/50 p-4 rounded-xl mb-4">
                <code className="text-green-400 font-mono text-sm">User.find(&#123; active: true &#125;).select('name email');</code>
            </div>

            <p className="text-gray-400 italic mb-8">
                You don't need the entire document every time.
            </p>

            {/* Tip 5 */}
            <h2 id="caching" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧩 5. Use Caching (Redis FTW)
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                One of the biggest boosts to performance comes from <strong className="text-white">caching frequently used data</strong>.
            </p>

            <div className="bg-white/5 p-5 rounded-xl border border-white/10 mb-6">
                <p className="text-[#d2e823] font-bold mb-3">Example uses:</p>
                <ul className="space-y-2">
                    {["Store session info in Redis", "Cache results of expensive DB queries"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                            <span className="text-[#254f1a]">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                It can reduce DB calls by <strong className="text-[#d2e823]">up to 80%</strong> and make your APIs lightning-fast.
            </p>

            {/* Tip 6 */}
            <h2 id="monitoring" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧪 6. Monitor and Profile Your App
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Use tools like:
            </p>

            <div className="grid md:grid-cols-3 gap-3 mb-6">
                {[
                    { name: "PM2", desc: "Process management" },
                    { name: "Node Clinic", desc: "Performance analysis" },
                    { name: "New Relic", desc: "APM monitoring" }
                ].map((tool, i) => (
                    <div key={i} className="bg-[#254f1a]/20 p-4 rounded-xl border border-[#254f1a]/30 text-center">
                        <p className="text-[#d2e823] font-bold">{tool.name}</p>
                        <p className="text-gray-400 text-sm">{tool.desc}</p>
                    </div>
                ))}
            </div>

            <p className="text-gray-400 italic mb-8">
                Optimization only works if you can <strong className="text-white">measure what's slow</strong>.
            </p>

            {/* Tip 7 */}
            <h2 id="env" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🚀 7. Use Environment Variables
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Never hardcode secrets or API keys. Instead, use <code className="bg-white/10 px-2 py-1 rounded text-sm text-[#d2e823]">.env</code> files with <code className="bg-white/10 px-2 py-1 rounded text-sm text-[#d2e823]">process.env</code>.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                It improves <strong className="text-white">security</strong> and lets your app scale easily across environments.
            </p>

            {/* Tip 8 */}
            <h2 id="compression" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧩 8. Compress and Optimize Responses
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                For APIs serving large JSON data — compress your responses using middleware like <code className="bg-white/10 px-2 py-1 rounded text-sm text-[#d2e823]">compression</code>.
            </p>

            <div className="bg-black/50 p-4 rounded-xl mb-4">
                <pre className="text-green-400 font-mono text-sm">
{`import compression from 'compression';
app.use(compression());`}
                </pre>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                This can reduce response size by <strong className="text-[#d2e823]">70-80%</strong>, improving latency significantly.
            </p>

            {/* Tip 9 */}
            <h2 id="scaling" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧠 9. Scale Horizontally
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                When traffic grows, one Node.js process won't cut it. Use:
            </p>

            <div className="space-y-3 mb-8">
                {[
                    { title: "PM2 cluster mode", desc: "Run multiple instances" },
                    { title: "Load balancers", desc: "Distribute traffic" },
                    { title: "Docker containers", desc: "Isolated scaling" }
                ].map((item, i) => (
                    <div key={i} className="bg-white/5 p-4 rounded-xl border-l-4 border-[#254f1a]">
                        <span className="text-[#d2e823] font-bold">{item.title}</span>
                        <span className="text-gray-400"> — {item.desc}</span>
                    </div>
                ))}
            </div>

            {/* Final Thoughts */}
            <div className="bg-gradient-to-r from-[#254f1a] to-[#d2e823] rounded-2xl p-8 mt-12">
                <h2 className="text-white font-bold text-2xl md:text-3xl mb-4">
                    🏁 Final Thoughts
                </h2>
                
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                    Performance isn't about writing complex code — it's about writing <strong className="text-white">efficient code</strong>.
                </p>

                <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Node.js gives you power, but with power comes responsibility — to manage memory, threads, and performance wisely.
                </p>

                <p className="text-white text-xl md:text-2xl font-bold text-center mb-4">
                    "Every millisecond saved in backend = better user experience in frontend."
                </p>
                
                <p className="text-white/90 text-center italic">
                    Keep coding, keep optimizing — the best performance upgrade is your mindset ⚙️
                </p>
            </div>
        </BlogLayout>
    );
}
