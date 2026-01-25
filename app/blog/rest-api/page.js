"use client"
import BlogLayout from "@/components/BlogLayout";

const articleData = {
    title: "REST API Best Practices",
    emoji: "🌐",
    description: "Writing clean, scalable APIs — lessons learned while working with Node.js, Express, and MongoDB. Master the art of building developer-friendly REST APIs.",
    date: "December 2025",
    readTime: "10 min read",
    category: "Tutorial",
    categoryColor: "bg-[#2665d6]",
    gradientFrom: "from-[#2665d6]",
    gradientTo: "to-[#780016]",
    author: {
        name: "Namit",
        role: "Full Stack Developer",
        avatar: "👨‍💻"
    },
    tags: ["REST API", "Node.js", "Express", "Backend"]
};

const tableOfContents = [
    { id: "endpoints", title: "Meaningful Endpoints" },
    { id: "http-methods", title: "HTTP Methods" },
    { id: "versioning", title: "API Versioning" },
    { id: "status-codes", title: "Status Codes" },
    { id: "security", title: "Security" },
    { id: "errors", title: "Error Handling" },
    { id: "pagination", title: "Pagination & Filtering" },
    { id: "json", title: "JSON Standard" },
    { id: "logging", title: "Logging" },
    { id: "documentation", title: "Documentation" }
];

const relatedPosts = [
    {
        title: "Node.js Performance Tips",
        slug: "/blog/nodejs-performance",
        emoji: "⚡",
        category: "Tutorial"
    },
    {
        title: "Building Secure Password Managers",
        slug: "/blog/password-manager",
        emoji: "🔐",
        category: "Project"
    }
];

export default function RestAPI() {
    return (
        <BlogLayout articleData={articleData} tableOfContents={tableOfContents} relatedPosts={relatedPosts}>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
                When I first built APIs, I only cared if they worked — returning a JSON was victory enough.
            </p>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
                But as I built bigger apps, I realized a good API isn't just functional — it's <strong className="text-white">consistent, predictable, and developer-friendly</strong>.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                So, here's my take on REST API best practices — lessons learned while working with Node.js, Express, and MongoDB 🚀
            </p>

            {/* Tip 1 */}
            <h2 id="endpoints" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧭 1. Use Meaningful, Consistent Endpoints
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Your URLs should be <strong className="text-white">nouns, not verbs</strong>, representing resources — not actions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <p className="text-red-400 font-bold text-lg mb-2">Bad ❌</p>
                    <div className="bg-black/50 p-3 rounded-lg">
                        <code className="text-red-400 font-mono text-sm">/getUsers<br/>/createUser<br/>/updateUser</code>
                    </div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                    <p className="text-green-400 font-bold text-lg mb-2">Good ✅</p>
                    <div className="bg-black/50 p-3 rounded-lg">
                        <code className="text-green-400 font-mono text-sm">/users<br/>/users/:id</code>
                    </div>
                </div>
            </div>
            
            <blockquote className="border-l-4 border-[#2665d6] bg-[#2665d6]/10 pl-6 py-4 my-6 rounded-r-xl">
                <p className="text-gray-300 text-lg italic">
                    REST is all about resources — so use <strong className="text-white">plural nouns</strong> and HTTP methods to define actions.
                </p>
            </blockquote>

            {/* Tip 2 */}
            <h2 id="http-methods" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧱 2. Use Proper HTTP Methods
            </h2>
            
            <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden mb-6">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#2665d6]/20">
                            <th className="px-4 py-3 text-left text-[#d2e823] font-bold">Method</th>
                            <th className="px-4 py-3 text-left text-[#d2e823] font-bold">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { method: "GET", purpose: "Retrieve data" },
                            { method: "POST", purpose: "Create new data" },
                            { method: "PUT", purpose: "Update existing data" },
                            { method: "DELETE", purpose: "Remove data" }
                        ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white/5" : ""}>
                                <td className="px-4 py-3 font-mono font-bold text-[#2665d6]">{row.method}</td>
                                <td className="px-4 py-3 text-gray-300">{row.purpose}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="bg-black/50 p-4 rounded-xl mb-8">
                <p className="text-gray-400 text-sm mb-2">Example 👇</p>
                <pre className="text-green-400 font-mono text-sm">
{`GET /api/users → fetch all users
POST /api/users → create new user
PUT /api/users/1 → update user
DELETE /api/users/1 → delete user`}
                </pre>
            </div>

            {/* Tip 3 */}
            <h2 id="versioning" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                ⚙️ 3. Version Your API
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                APIs evolve. Always version them from the start — it saves breaking changes later.
            </p>
            
            <div className="bg-black/50 p-4 rounded-xl mb-4">
                <code className="text-green-400 font-mono">/api/v1/users<br/>/api/v2/users</code>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed italic mb-8">
                Versioning gives freedom to experiment without breaking existing clients.
            </p>

            {/* Tip 4 */}
            <h2 id="status-codes" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧩 4. Use Status Codes Properly
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Return the right HTTP status codes — they help users of your API understand what happened.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {[
                    { code: "200", meaning: "Success", color: "text-green-400 bg-green-500/10" },
                    { code: "201", meaning: "Created", color: "text-green-400 bg-green-500/10" },
                    { code: "400", meaning: "Bad Request", color: "text-orange-400 bg-orange-500/10" },
                    { code: "401", meaning: "Unauthorized", color: "text-orange-400 bg-orange-500/10" },
                    { code: "404", meaning: "Not Found", color: "text-red-400 bg-red-500/10" },
                    { code: "500", meaning: "Server Error", color: "text-red-400 bg-red-500/10" }
                ].map((item, i) => (
                    <div key={i} className={`${item.color} p-3 rounded-xl border border-white/10`}>
                        <span className="font-mono font-bold text-lg">{item.code}</span>
                        <p className="text-gray-400 text-sm">{item.meaning}</p>
                    </div>
                ))}
            </div>
            
            <div className="bg-black/50 p-4 rounded-xl mb-8">
                <code className="text-green-400 font-mono text-sm">return res.status(404).json(&#123; message: 'User not found' &#125;);</code>
            </div>

            {/* Tip 5 */}
            <h2 id="security" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🔒 5. Secure Your APIs
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Security is not optional. Always:
            </p>
            
            <ul className="space-y-2 mb-6">
                {["Validate user input", "Sanitize data (prevent XSS & injection)", "Use JWT or OAuth for authentication", "Rate limit requests to prevent abuse"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                        <span className="text-[#780016]">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            
            <div className="bg-black/50 p-4 rounded-xl mb-8">
                <p className="text-gray-400 text-sm mb-2">Example with JWT 👇</p>
                <code className="text-green-400 font-mono">app.use(authMiddleware);</code>
            </div>

            {/* Tip 6 */}
            <h2 id="errors" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧠 6. Handle Errors Gracefully
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                A consistent error response format makes debugging easier for developers.
            </p>
            
            <div className="bg-black/50 p-4 rounded-xl mb-8">
                <pre className="text-white font-mono text-sm">
{`{
  "success": false,
  "message": "Invalid email format",
  "code": 400
}`}
                </pre>
            </div>

            {/* Tip 7 */}
            <h2 id="pagination" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                ⚡ 7. Pagination and Filtering
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Never return huge data sets at once. Always implement:
            </p>
            
            <div className="flex flex-wrap gap-3 mb-4">
                {["Pagination", "Search", "Sorting", "Filtering"].map((item, i) => (
                    <span key={i} className="bg-[#780016]/20 text-[#d2e823] px-4 py-2 rounded-full font-medium">
                        {item}
                    </span>
                ))}
            </div>
            
            <div className="bg-black/50 p-4 rounded-xl mb-8">
                <code className="text-green-400 font-mono">GET /users?page=2&limit=10&sort=name</code>
            </div>

            {/* Tip 8 */}
            <h2 id="json" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🧰 8. Use JSON as the Standard Format
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Keep it consistent. JSON is the universal standard for REST APIs — human-readable and easily parsed.
            </p>
            
            <div className="bg-black/50 p-4 rounded-xl mb-8">
                <pre className="text-white font-mono text-sm">
{`{
  "id": 1,
  "name": "Namit",
  "email": "namit@example.com"
}`}
                </pre>
            </div>

            {/* Tip 9 */}
            <h2 id="logging" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🚦 9. Log Everything
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Logs are your best debugging ally in production. Use libraries like <strong className="text-white">Winston</strong> or <strong className="text-white">Morgan</strong> to track requests and catch errors.
            </p>
            
            <div className="bg-black/50 p-4 rounded-xl mb-4">
                <code className="text-green-400 font-mono">app.use(morgan('combined'));</code>
            </div>
            
            <p className="text-gray-400 italic mb-8">
                A well-logged API tells you why something went wrong before users do.
            </p>

            {/* Tip 10 */}
            <h2 id="documentation" className="text-[#d2e823] font-bold text-2xl md:text-3xl mb-4 mt-12 scroll-mt-24">
                🚀 10. Documentation Is King
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Even the best API is useless without docs. Tools like <strong className="text-white">Swagger</strong>, <strong className="text-white">Postman</strong>, or <strong className="text-white">Redoc</strong> help document endpoints and make them easy to test.
            </p>
            
            <blockquote className="border-l-4 border-[#2665d6] bg-[#2665d6]/10 pl-6 py-4 my-6 rounded-r-xl">
                <p className="text-[#d2e823] text-xl font-bold italic">
                    "A well-documented API saves more time than a perfectly written one."
                </p>
            </blockquote>

            {/* Final Thoughts */}
            <div className="bg-gradient-to-r from-[#2665d6] to-[#780016] rounded-2xl p-8 mt-12">
                <h2 className="text-white font-bold text-2xl md:text-3xl mb-4">
                    🏁 Final Thoughts
                </h2>
                
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                    REST APIs aren't just about sending JSON responses — they're about <strong className="text-white">building trust between systems</strong>.
                </p>
                
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                    When your API is predictable, documented, and secure, other developers love working with it.
                </p>
                
                <p className="text-white text-xl font-bold text-center mt-6">
                    Keep it clean, consistent, and future-ready — because great APIs are invisible when they work right 💪
                </p>
            </div>
        </BlogLayout>
    );
}
