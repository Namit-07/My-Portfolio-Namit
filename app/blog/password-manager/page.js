export default function PasswordManagerBlog() {

  return (
    <div className="min-h-screen bg-linear-to-b from-[#780016] to-[#2665d6] py-20 px-4 md:px-8">
      <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-[#780016] font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
          🔐 Building Secure Password Managers
        </h1>
        
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          In today's world, we use dozens of apps, websites, and tools — each needing its own login credentials. Most people end up reusing passwords or saving them in plain text files, which is a <strong>serious security risk</strong>.
        </p>
        
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          That's exactly why I decided to build my own <strong>Password Manager</strong> — a simple, secure web app where users can safely store and manage their credentials.
        </p>

        <h2 className="text-[#2665d6] font-bold text-3xl md:text-4xl mb-4 mt-12">
          💡 The Idea Behind It
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          When I started this project, my goal was simple — to create something useful while also learning about <strong>data security, encryption, and backend logic</strong>.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Instead of relying on traditional note-taking apps or insecure methods, I wanted a platform that could:
        </p>
        
        <ul className="space-y-3 mb-6 ml-6">
          <li className="text-gray-700 text-lg flex items-start">
            <span className="text-[#780016] font-bold mr-3">✓</span>
            Safely store passwords
          </li>
          <li className="text-gray-700 text-lg flex items-start">
            <span className="text-[#780016] font-bold mr-3">✓</span>
            Allow quick access
          </li>
          <li className="text-gray-700 text-lg flex items-start">
            <span className="text-[#780016] font-bold mr-3">✓</span>
            Work both online (with MongoDB) and offline (with localStorage)
          </li>
        </ul>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
          It wasn't just another CRUD app — it was a <strong>real-world problem I wanted to solve with code</strong>.
        </p>

        <h2 className="text-[#780016] font-bold text-3xl md:text-4xl mb-4 mt-12">
          ⚙️ Tech Stack
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Here's what I used to bring it to life:
        </p>
        
        <div className="bg-gray-50 rounded-2xl p-6 mb-6 border-2 border-[#780016]/20">
          <ul className="space-y-3">
            <li className="text-gray-700 text-lg">
              <strong className="text-[#780016]">Frontend:</strong> React + Tailwind CSS
            </li>
            <li className="text-gray-700 text-lg">
              <strong className="text-[#780016]">Backend:</strong> Node.js + Express.js
            </li>
            <li className="text-gray-700 text-lg">
              <strong className="text-[#780016]">Database:</strong> MongoDB (for the cloud version)
            </li>
            <li className="text-gray-700 text-lg">
              <strong className="text-[#780016]">Storage:</strong> LocalStorage (for offline version)
            </li>
            <li className="text-gray-700 text-lg">
              <strong className="text-[#780016]">Deployment:</strong> Netlify + Render
            </li>
          </ul>
        </div>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          This setup gave me flexibility — I could test locally, deploy fast, and scale easily.
        </p>

        <h2 className="text-[#2665d6] font-bold text-3xl md:text-4xl mb-4 mt-12">
          🧠 Key Concepts Learned
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Building a password manager taught me more than I expected — especially about how sensitive data should (and shouldn't) be handled.
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-linear-to-r from-[#780016]/10 to-transparent p-6 rounded-xl border-l-4 border-[#780016]">
            <h3 className="text-[#780016] font-bold text-xl mb-2">Never store raw passwords.</h3>
            <p className="text-gray-700">
              Every password should be hashed or encrypted before saving. Even developers shouldn't be able to read it directly.
            </p>
          </div>
          
          <div className="bg-linear-to-r from-[#2665d6]/10 to-transparent p-6 rounded-xl border-l-4 border-[#2665d6]">
            <h3 className="text-[#2665d6] font-bold text-xl mb-2">Use encryption for storage.</h3>
            <p className="text-gray-700">
              In the cloud version, I used a simple encryption library to encode passwords before sending them to the database.
            </p>
          </div>
          
          <div className="bg-linear-to-r from-[#780016]/10 to-transparent p-6 rounded-xl border-l-4 border-[#780016]">
            <h3 className="text-[#780016] font-bold text-xl mb-2">Validate user inputs.</h3>
            <p className="text-gray-700">
              Prevent XSS, SQL injection, and similar attacks by sanitizing all data.
            </p>
          </div>
          
          <div className="bg-linear-to-r from-[#2665d6]/10 to-transparent p-6 rounded-xl border-l-4 border-[#2665d6]">
            <h3 className="text-[#2665d6] font-bold text-xl mb-2">Add copy-to-clipboard features carefully.</h3>
            <p className="text-gray-700">
              Even small features like this should have limits to prevent misuse.
            </p>
          </div>
          
          <div className="bg-linear-to-r from-[#780016]/10 to-transparent p-6 rounded-xl border-l-4 border-[#780016]">
            <h3 className="text-[#780016] font-bold text-xl mb-2">Keep the UI clean and responsive.</h3>
            <p className="text-gray-700">
              Security is serious — but the user experience matters too.
            </p>
          </div>
        </div>

        <h2 className="text-[#2665d6] font-bold text-3xl md:text-4xl mb-4 mt-12">
          🔄 Offline vs. Online Mode
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I made two versions of this project:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#780016]/5 p-6 rounded-2xl border-2 border-[#780016]/20">
            <h3 className="text-[#780016] font-bold text-xl mb-3">LocalStorage Version</h3>
            <p className="text-gray-700">
              Perfect for local use, stores encrypted passwords directly in the browser.
            </p>
          </div>
          
          <div className="bg-[#2665d6]/5 p-6 rounded-2xl border-2 border-[#2665d6]/20">
            <h3 className="text-[#2665d6] font-bold text-xl mb-3">MongoDB Version</h3>
            <p className="text-gray-700">
              Cloud-based, can be accessed from any device securely.
            </p>
          </div>
        </div>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          This dual setup helped me understand how <strong>frontend-only apps differ from full-stack architectures</strong>.
        </p>

        <h2 className="text-[#780016] font-bold text-3xl md:text-4xl mb-4 mt-12">
          🚀 Deployment & Final Thoughts
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          After completing the project, I deployed both versions — one on <strong>Netlify</strong> and the other on <strong>Render</strong>.
          It felt amazing to see something I built from scratch actually work seamlessly on the internet.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Building this password manager was a reminder that <strong className="text-[#780016]">security isn't just a feature — it's a mindset</strong>.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
          Every line of code should protect the user's trust, not just their data.
        </p>

        <div className="bg-linear-to-r from-[#780016] to-[#2665d6] rounded-2xl p-8 mt-12">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
            🧩 Takeaways for Developers
          </h2>
          
          <ul className="space-y-4">
            <li className="text-white text-lg flex items-start">
              <span className="mr-3">🔒</span>
              <span><strong>Encrypt everything</strong> — treat all data as sensitive.</span>
            </li>
            <li className="text-white text-lg flex items-start">
              <span className="mr-3">🧠</span>
              <span><strong>Understand how browsers store data</strong> (localStorage ≠ secure).</span>
            </li>
            <li className="text-white text-lg flex items-start">
              <span className="mr-3">💻</span>
              <span><strong>Never log sensitive info in the console.</strong></span>
            </li>
            <li className="text-white text-lg flex items-start">
              <span className="mr-3">🚀</span>
              <span><strong>Deploy often</strong> — testing in production-like environments exposes real issues.</span>
            </li>
            <li className="text-white text-lg flex items-start">
              <span className="mr-3">🧩</span>
              <span><strong>Keep learning about security standards</strong> like OAuth, JWT, HTTPS, and environment variables.</span>
            </li>
          </ul>
          
          <div className="mt-8 pt-6 border-t border-white/30">
            <p className="text-white text-xl leading-relaxed mb-4">
              Building a secure password manager isn't just about storing passwords — it's about <strong>understanding responsibility as a developer</strong>.
            </p>
            <p className="text-white text-xl font-bold italic">
              And for me, this project wasn't just a build — it was the start of writing safer, cleaner, and more thoughtful code.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/blog" className="inline-block bg-[#780016] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 active:scale-95">
            ← Back to Blog
          </a>
        </div>
      </article>
    </div>
  );
}
