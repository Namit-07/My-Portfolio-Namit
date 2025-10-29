export default function NextJS15Blog() {

  return (
    <div className="min-h-screen bg-linear-to-b from-[#2665d6] to-[#780016] py-20 px-4 md:px-8">
      <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-[#2665d6] font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
          🧭 Getting Started with Next.js 15
        </h1>
        
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          When I first heard about Next.js, it sounded like just another React framework. But the deeper I explored, the more I realized how much power it gives developers — especially in terms of performance, SEO, and scalability.
        </p>
        
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          Now, with the release of <strong>Next.js 15</strong>, things have become smoother, faster, and even more developer-friendly.
        </p>

        <h2 className="text-[#780016] font-bold text-3xl md:text-4xl mb-4 mt-12">
          ⚙️ What is Next.js, really?
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Next.js is a framework built on top of React that lets you create <strong>server-side rendered (SSR)</strong> and <strong>statically generated (SSG)</strong> applications easily.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          In simple words, it takes the power of React and adds <strong>speed, structure, and optimization</strong> right out of the box.
        </p>

        <h2 className="text-[#2665d6] font-bold text-3xl md:text-4xl mb-4 mt-12">
          🚀 Why Next.js 15 is a Game-Changer
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          The latest version brings several key updates that make building modern web apps even easier:
        </p>
        
        <ul className="space-y-3 mb-6 ml-6">
          <li className="text-gray-700 text-lg">
            <strong className="text-[#2665d6]">Improved Server Actions</strong> – You can handle form submissions and mutations directly in server components without writing separate API routes.
          </li>
          <li className="text-gray-700 text-lg">
            <strong className="text-[#2665d6]">Enhanced Caching and Streaming</strong> – Faster page loads and smoother transitions.
          </li>
          <li className="text-gray-700 text-lg">
            <strong className="text-[#2665d6]">Better Integration with the App Router</strong> – Clean routing structure and improved layouts.
          </li>
          <li className="text-gray-700 text-lg">
            <strong className="text-[#2665d6]">Optimized Images & Fonts</strong> – Automatic performance improvements with zero setup.
          </li>
          <li className="text-gray-700 text-lg">
            <strong className="text-[#2665d6]">TypeScript by Default</strong> – Stronger developer experience and fewer runtime errors.
          </li>
        </ul>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Next.js 15 focuses on <strong>performance and simplicity</strong>, letting you write less boilerplate and focus more on features.
        </p>

        <h2 className="text-[#780016] font-bold text-3xl md:text-4xl mb-4 mt-12">
          🧩 Setting Up a New Project
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          To start a new Next.js 15 app, just run:
        </p>
        
        <div className="bg-gray-900 text-green-400 p-6 rounded-xl mb-4 overflow-x-auto">
          <code className="font-mono text-base">npx create-next-app@latest my-next-app</code>
        </div>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          You'll be prompted to select options like TypeScript, Tailwind, and ESLint — pick what fits your stack.
          Once done, jump into your project directory and run:
        </p>
        
        <div className="bg-gray-900 text-green-400 p-6 rounded-xl mb-4 overflow-x-auto">
          <code className="font-mono text-base">npm run dev</code>
        </div>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Visit <code className="bg-gray-200 px-2 py-1 rounded text-[#780016] font-mono">http://localhost:3000</code> and boom 💥 — your app is live locally.
        </p>

        <h2 className="text-[#2665d6] font-bold text-3xl md:text-4xl mb-4 mt-12">
          📁 Project Structure Overview
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          A quick breakdown of what you'll see:
        </p>
        
        <div className="bg-gray-900 text-white p-6 rounded-xl mb-6 overflow-x-auto">
          <pre className="font-mono text-sm">
{`/app
  /page.tsx       → main page
  /layout.tsx     → shared layout
/public           → static assets
/styles           → CSS or Tailwind setup`}
          </pre>
        </div>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          This new <strong>App Router</strong> structure is the heart of Next.js 15 — it makes managing routes, layouts, and server components simple and scalable.
        </p>

        <h2 className="text-[#780016] font-bold text-3xl md:text-4xl mb-4 mt-12">
          💡 Why You Should Learn It
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          If you already know React, Next.js 15 is the natural next step.
          You'll learn how to:
        </p>
        
        <ul className="space-y-3 mb-6 ml-6">
          <li className="text-gray-700 text-lg flex items-start">
            <span className="text-[#2665d6] font-bold mr-3">✓</span>
            Build production-ready apps with zero config.
          </li>
          <li className="text-gray-700 text-lg flex items-start">
            <span className="text-[#2665d6] font-bold mr-3">✓</span>
            Optimize for SEO easily.
          </li>
          <li className="text-gray-700 text-lg flex items-start">
            <span className="text-[#2665d6] font-bold mr-3">✓</span>
            Deploy to platforms like Vercel in seconds.
          </li>
        </ul>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
          For me, learning Next.js felt like upgrading from <strong>"building websites"</strong> to <strong>"engineering web applications."</strong> It's that powerful.
        </p>

        <h2 className="text-[#2665d6] font-bold text-3xl md:text-4xl mb-4 mt-12">
          🧠 Final Thoughts
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Whether you're just getting started or planning your next big project, Next.js 15 is worth diving into.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          The ecosystem keeps evolving, but one thing stays the same — <strong className="text-[#780016]">Next.js lets you build faster, cleaner, and smarter.</strong>
        </p>

        <div className="bg-linear-to-r from-[#2665d6] to-[#780016] rounded-2xl p-8 mt-12">
          <p className="text-white text-xl font-bold leading-relaxed">
            ✨ Stay tuned — I'll be sharing my experience of building and deploying my personal portfolio with Next.js soon! 🚀
          </p>
        </div>

        <div className="mt-12 text-center">
          <a href="/blog" className="inline-block bg-[#2665d6] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 active:scale-95">
            ← Back to Blog
          </a>
        </div>
      </article>
    </div>
  );
}
