export default function RestAPI() {

  return (
    <div className="min-h-screen bg-linear-to-b from-[#780016] to-[#2665d6] py-20 px-4 md:px-8">
      <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-[#780016] font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
          🌐 REST API Best Practices: Writing Clean, Scalable APIs
        </h1>
        
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          When I first built APIs, I only cared if they worked — returning a JSON was victory enough.
        </p>
        
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          But as I built bigger apps, I realized a good API isn't just functional — it's <strong>consistent, predictable, and developer-friendly</strong>.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          So, here's my take on REST API best practices — lessons learned while working with Node.js, Express, and MongoDB 🚀
        </p>

        {/* Tip 1 */}
        <div className="bg-linear-to-r from-[#780016]/5 to-transparent border-l-4 border-[#780016] p-6 rounded-r-2xl mb-8">
          <h2 className="text-[#780016] font-bold text-2xl md:text-3xl mb-4">
            🧭 1. Use Meaningful, Consistent Endpoints
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Your URLs should be <strong>nouns, not verbs</strong>, representing resources — not actions.
          </p>
          
          <div className="mb-4">
            <p className="text-red-600 font-bold text-lg mb-2">Bad ❌</p>
            <div className="bg-gray-900 text-red-400 p-4 rounded-xl overflow-x-auto">
              <pre className="font-mono text-sm">
{`/getUsers  
/createUser  
/updateUser`}
              </pre>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-green-600 font-bold text-lg mb-2">Good ✅</p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto">
              <pre className="font-mono text-sm">
{`/users  
/users/:id`}
              </pre>
            </div>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed italic">
            REST is all about resources — so use <strong>plural nouns</strong> and HTTP methods (GET, POST, PUT, DELETE) to define actions.
          </p>
        </div>

        {/* Tip 2 */}
        <div className="bg-linear-to-r from-[#2665d6]/10 to-transparent border-l-4 border-[#2665d6] p-6 rounded-r-2xl mb-8">
          <h2 className="text-[#2665d6] font-bold text-2xl md:text-3xl mb-4">
            🧱 2. Use Proper HTTP Methods
          </h2>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2665d6]/10">
                  <th className="border border-gray-300 px-4 py-3 text-left text-[#2665d6] font-bold">Method</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-[#2665d6] font-bold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono font-bold text-gray-700">GET</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Retrieve data</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono font-bold text-gray-700">POST</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Create new data</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono font-bold text-gray-700">PUT</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Update existing data</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono font-bold text-gray-700">DELETE</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Remove data</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-700 text-lg font-bold mb-2">Example 👇</p>
          <div className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
            <pre className="font-mono text-sm">
{`GET /api/users → fetch all users  
POST /api/users → create new user  
PUT /api/users/1 → update user  
DELETE /api/users/1 → delete user`}
            </pre>
          </div>
        </div>

        {/* Tip 3 */}
        <div className="bg-linear-to-r from-[#780016]/5 to-transparent border-l-4 border-[#780016] p-6 rounded-r-2xl mb-8">
          <h2 className="text-[#780016] font-bold text-2xl md:text-3xl mb-4">
            ⚙️ 3. Version Your API
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            APIs evolve. Always version them from the start — it saves breaking changes later.
          </p>
          
          <p className="text-gray-700 text-lg font-bold mb-2">✅ Example:</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto mb-4">
            <pre className="font-mono text-sm">
{`/api/v1/users
/api/v2/users`}
            </pre>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed italic">
            Versioning gives freedom to experiment without breaking existing clients.
          </p>
        </div>

        {/* Tip 4 */}
        <div className="bg-linear-to-r from-[#2665d6]/10 to-transparent border-l-4 border-[#2665d6] p-6 rounded-r-2xl mb-8">
          <h2 className="text-[#2665d6] font-bold text-2xl md:text-3xl mb-4">
            🧩 4. Use Status Codes Properly
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Return the right HTTP status codes — they help users of your API understand what happened.
          </p>
          
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2665d6]/10">
                  <th className="border border-gray-300 px-4 py-3 text-left text-[#2665d6] font-bold">Code</th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-[#2665d6] font-bold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono font-bold text-green-600">200</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Success</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono font-bold text-green-600">201</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Created</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono font-bold text-orange-600">400</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Bad Request</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono font-bold text-orange-600">401</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Unauthorized</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono font-bold text-red-600">404</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Not Found</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono font-bold text-red-600">500</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Server Error</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-700 text-lg font-bold mb-2">Example 👇</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto">
            <code className="font-mono text-sm">return res.status(404).json(&#123; message: 'User not found' &#125;);</code>
          </div>
        </div>

        {/* Tip 5 */}
        <div className="bg-linear-to-r from-[#780016]/5 to-transparent border-l-4 border-[#780016] p-6 rounded-r-2xl mb-8">
          <h2 className="text-[#780016] font-bold text-2xl md:text-3xl mb-4">
            🔒 5. Secure Your APIs
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Security is not optional. Always:
          </p>
          
          <ul className="space-y-2 mb-4 ml-6">
            <li className="text-gray-700 text-lg">• <strong>Validate user input</strong></li>
            <li className="text-gray-700 text-lg">• <strong>Sanitize data</strong> (to prevent XSS & injection attacks)</li>
            <li className="text-gray-700 text-lg">• Use <strong>JWT (JSON Web Tokens)</strong> or <strong>OAuth</strong> for authentication</li>
            <li className="text-gray-700 text-lg">• <strong>Rate limit</strong> requests to prevent abuse</li>
          </ul>
          
          <p className="text-gray-700 text-lg font-bold mb-2">Example with JWT 👇</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto mb-3">
            <code className="font-mono text-sm">app.use(authMiddleware);</code>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed italic">
            This ensures only verified users can access certain endpoints.
          </p>
        </div>

        {/* Tip 6 */}
        <div className="bg-linear-to-r from-[#2665d6]/10 to-transparent border-l-4 border-[#2665d6] p-6 rounded-r-2xl mb-8">
          <h2 className="text-[#2665d6] font-bold text-2xl md:text-3xl mb-4">
            🧠 6. Handle Errors Gracefully
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A consistent error response format makes debugging easier for developers.
          </p>
          
          <p className="text-gray-700 text-lg font-bold mb-2">✅ Example:</p>
          <div className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto mb-3">
            <pre className="font-mono text-sm">
{`{
  "success": false,
  "message": "Invalid email format",
  "code": 400
}`}
            </pre>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed italic">
            Instead of random strings, always structure your error output clearly.
          </p>
        </div>

        {/* Tip 7 */}
        <div className="bg-linear-to-r from-[#780016]/5 to-transparent border-l-4 border-[#780016] p-6 rounded-r-2xl mb-8">
          <h2 className="text-[#780016] font-bold text-2xl md:text-3xl mb-4">
            ⚡ 7. Pagination and Filtering
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Never return huge data sets at once. Always implement:
          </p>
          
          <ul className="space-y-2 mb-4 ml-6">
            <li className="text-gray-700 text-lg">• <strong>Pagination</strong></li>
            <li className="text-gray-700 text-lg">• <strong>Search</strong></li>
            <li className="text-gray-700 text-lg">• <strong>Sorting</strong></li>
            <li className="text-gray-700 text-lg">• <strong>Filtering</strong></li>
          </ul>
          
          <p className="text-gray-700 text-lg font-bold mb-2">Example 👇</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto mb-3">
            <code className="font-mono text-sm">GET /users?page=2&limit=10&sort=name</code>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed italic">
            Efficient APIs respect both performance and the client's time.
          </p>
        </div>

        {/* Tip 8 */}
        <div className="bg-linear-to-r from-[#2665d6]/10 to-transparent border-l-4 border-[#2665d6] p-6 rounded-r-2xl mb-8">
          <h2 className="text-[#2665d6] font-bold text-2xl md:text-3xl mb-4">
            🧰 8. Use JSON as the Standard Format
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Keep it consistent. JSON is the universal standard for REST APIs — human-readable and easily parsed.
          </p>
          
          <p className="text-gray-700 text-lg font-bold mb-2">✅ Example:</p>
          <div className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
            <pre className="font-mono text-sm">
{`{
  "id": 1,
  "name": "Namit",
  "email": "namit@example.com"
}`}
            </pre>
          </div>
        </div>

        {/* Tip 9 */}
        <div className="bg-linear-to-r from-[#780016]/5 to-transparent border-l-4 border-[#780016] p-6 rounded-r-2xl mb-8">
          <h2 className="text-[#780016] font-bold text-2xl md:text-3xl mb-4">
            🚦 9. Log Everything
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Logs are your best debugging ally in production.
            Use libraries like <strong>Winston</strong> or <strong>Morgan</strong> to track requests and catch errors.
          </p>
          
          <p className="text-gray-700 text-lg font-bold mb-2">Example 👇</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto mb-3">
            <code className="font-mono text-sm">app.use(morgan('combined'));</code>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed italic">
            A well-logged API tells you why something went wrong before users do.
          </p>
        </div>

        {/* Tip 10 */}
        <div className="bg-linear-to-r from-[#2665d6]/10 to-transparent border-l-4 border-[#2665d6] p-6 rounded-r-2xl mb-8">
          <h2 className="text-[#2665d6] font-bold text-2xl md:text-3xl mb-4">
            🚀 10. Documentation Is King
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Even the best API is useless without docs.
            Tools like <strong>Swagger</strong>, <strong>Postman</strong>, or <strong>Redoc</strong> help document endpoints and make them easy to test.
          </p>
          
          <div className="bg-[#2665d6]/10 border-l-4 border-[#2665d6] p-4 rounded-r-xl">
            <p className="text-[#2665d6] text-xl font-bold italic">
              "A well-documented API saves more time than a perfectly written one."
            </p>
          </div>
        </div>

        {/* Final Thoughts */}
        <h2 className="text-[#780016] font-bold text-3xl md:text-4xl mb-4 mt-12">
          🏁 Final Thoughts
        </h2>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          REST APIs aren't just about sending JSON responses — they're about <strong>building trust between systems</strong>.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          When your API is predictable, documented, and secure, other developers love working with it.
        </p>

        <div className="bg-linear-to-r from-[#780016] to-[#2665d6] rounded-2xl p-8 mt-12">
          <p className="text-white text-2xl md:text-3xl font-bold text-center leading-relaxed">
            So keep it clean, consistent, and future-ready — because great APIs are invisible when they work right 💪
          </p>
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
