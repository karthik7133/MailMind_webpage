import { Mail, Sparkles, MessageCircle, Linkedin, Code2, Zap, Layout, Brain, Cloud, Database, Server, Smartphone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Mail className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              MailMind
            </span>
          </div>
          {/* UPDATED NAVIGATION LINKS */}
          <div className="flex gap-4 items-center"> 
            <a
              href="#" // Home link scrolls to the top
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#design"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Design
            </a>
            <a
              href="#about" // New About Link
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              About
            </a>
          </div>
          {/* END UPDATED NAVIGATION LINKS */}
        </div>
      </nav>

      {/* Hero Section (Home) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0F3460] to-[#16213E] opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="mb-8 inline-block animate-bounce">
            <Sparkles className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            MailMind
          </h1>
          <p className="text-3xl md:text-4xl font-semibold mb-4 text-gray-200">
            Your AI-Powered Email Assistant
          </p>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Stop drowning in your inbox. Summarize, chat, and prioritize with intelligent efficiency.
          </p>

          {/* Mock App Screenshot */}
          <div className="relative max-w-sm mx-auto mb-12 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
            <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-3xl p-8 border border-gray-700 transform group-hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    K
                  </div>
                  <div>
                    <p className="text-white font-semibold">Karthik</p>
                    <p className="text-gray-400 text-sm">chkarthik853@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-semibold text-blue-400">Recent Email</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">Meeting scheduled for tomorrow at 10 AM. Please review the attached documents...</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold text-green-400">AI Summary</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">Meeting tomorrow 10 AM • Review documents • Confirm attendance required</p>
                </div>
              </div>
            </div>
          </div>
          {/* UPDATED BUTTON TO ABOUT SECTION */}
          <a
            href="#about"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 text-lg font-semibold"
          >
            <Code2 className="w-6 h-6" />
            About MailMind
          </a>
        </div>
      </section>

      {/* Feature Sections Grouped under ID="features" */}
      <div id="features">
        {/* Feature 1: AI Summaries */}
        <section className="relative py-32 bg-gradient-to-br from-[#16213E] to-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500" />
                  <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-2xl p-8 border border-gray-700 transform group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">Email Summary</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold border border-green-500/30">
                        Summarized
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">Project deadline extended to next Friday</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">Client feedback incorporated in latest design</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">Team meeting scheduled for Thursday 3 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/30 group-hover:bg-green-500/20 transition-all duration-300">
                    <Sparkles className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Instant AI Summaries
                </h2>
                <p className="text-xl text-gray-300 mb-4">
                  Turn endless text into <span className="text-green-400 font-semibold">actionable bullet points</span> in seconds.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Our AI analyzes your emails and extracts the key information, helping you make decisions faster and stay on top of what matters most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Chat with Mail */}
        <section className="relative py-32 bg-gradient-to-br from-black to-[#0F3460]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/30 group-hover:bg-purple-500/20 transition-all duration-300">
                    <MessageCircle className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Chat with Your Mail
                </h2>
                <p className="text-xl text-gray-300 mb-4">
                  Ask follow-up questions, get context, and draft replies using the dedicated <span className="text-purple-400 font-semibold">AI Chat Screen</span>.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Experience context-aware conversations about your emails. The AI understands the full context and helps you craft perfect responses.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Context-Aware</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                    <MessageCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-300">Real-time</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500" />
                  <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#0F3460] rounded-2xl p-8 border border-gray-700 transform group-hover:scale-105 transition-all duration-500">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">
                          AI
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-800/50 rounded-2xl rounded-tl-none p-4 border border-gray-700">
                            <p className="text-gray-300 text-sm leading-relaxed">This email is about the Q4 budget review. Would you like me to summarize the key points?</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 justify-end">
                        <div className="flex-1 max-w-xs">
                          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl rounded-tr-none p-4 border border-blue-500/30">
                            <p className="text-blue-100 text-sm leading-relaxed">Yes, please provide a quick summary</p>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                          You
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">
                          AI
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-800/50 rounded-2xl rounded-tl-none p-4 border border-gray-700">
                            <p className="text-gray-300 text-sm leading-relaxed">Budget increased by 15% • New hiring approved • Marketing spend prioritized for Q1</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End Features Section Group */}

      {/* Design & Experience */}
      <section id="design" className="relative py-32 bg-gradient-to-br from-[#16213E] to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <Layout className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Immersive, Focused Design
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Engineered for focus, our dark theme uses deep, non-fatiguing gradients and <span className="text-blue-400 font-semibold">rounded cards</span> to create a premium, immersive workspace.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { color: 'from-[#000000] to-[#1A1A2E]', label: 'Deep Space' },
              { color: 'from-[#16213E] to-[#0F3460]', label: 'Ocean Night' },
              { color: 'from-blue-500 to-purple-500', label: 'Primary Accent' },
              { color: 'from-green-400 to-blue-400', label: 'Success Tone' },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative mb-3">
                  <div className={`h-32 rounded-xl bg-gradient-to-br ${item.color} transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-2xl`} />
                </div>
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Replaced Technical Stack) */}
      <section id="about" className="relative py-32 bg-gradient-to-br from-black to-[#0F3460]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/30">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About MailMind
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              MailMind was created with a single mission: to cut through the noise of your inbox and let you focus on what matters. We leverage the power of **Generative AI** to transform email management from a chore into a seamless, intelligent conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
            <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <Sparkles className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-white">Our Vision</h3>
                <p className="text-gray-400">To be the most efficient and intelligent email assistant in the world, giving back hours to our users every week.</p>
            </div>
            <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <MessageCircle className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-white">Core Value</h3>
                <p className="text-gray-400">Contextual communication. We ensure every interaction with your email is informed, precise, and highly productive.</p>
            </div>
            <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                <Code2 className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-white">Built By</h3>
                <p className="text-gray-400">A passionate developer focused on using modern, scalable technology for real-world productivity gains.</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-lg">
                For more information or to connect with the developer, please scroll to the bottom.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect with the Developer
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/chipinapikarthik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 hover:text-blue-400 text-gray-400 group"
              >
                <div className="transform group-hover:rotate-12 transition-transform duration-300">
                  <Linkedin className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/karthik7133"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 hover:text-purple-400 text-gray-400 group"
              >
                <div className="transform group-hover:rotate-12 transition-transform duration-300">
                  <Code2 className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="mailto:chkarthik853@gmail.com"
                className="flex flex-col items-center gap-2 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-green-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/20 hover:text-green-400 text-gray-400 group"
              >
                <div className="transform group-hover:rotate-12 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-800">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                MailMind
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 MailMind. Built with passion for productivity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;