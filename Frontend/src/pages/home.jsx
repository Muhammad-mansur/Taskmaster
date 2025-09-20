import { Link } from "react-router-dom";

export default function LandingPage() {
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2]">
            
            {/* Hero Section */}
            <header>
            <h1 className="text-5xl font-bold text-white mb-4 flex flex-col items-center mt-40">Task Master</h1>
            <p className="text-lg text-white text-center max-w-2xl mx-auto px-4">Organize your life, one task at a time. Simple, powerful, and beautiful task management.</p>
            <div className="flex justify-center space-x-6 mt-8">
                <Link to="Login">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-4xl font-bold shadow-md transform transition-transform duration-300 hover:-translate-y-1">Get Started Free</button>
                </Link>

                <Link>
                <button className="border-2 border-white text-white px-6 py-3 rounded-4xl font-bold shadow-md transform transition-transform duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-600">Learn More</button>
                </Link>
                
            </div>
        </header>

        {/* Features */}
        <section className="py-16 px-8 text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center shadow-lg border border-white/20">
                <span className="text-5xl">⚡</span>
                <h3 className="mt-4 text-xl font-bold">Lightning Fast</h3>
                <p className="mt-2 text-sm text-gray-200">Add and organize tasks in seconds with our intuitive interface</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center shadow-lg border border-white/20">
                <span className="text-5xl">🎯</span>
                <h3 className="mt-4 text-xl font-bold">Priority Focus</h3>
                <p className="mt-2 text-sm text-gray-200">Color-coded priorities help you focus on what matters most</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center shadow-lg border border-white/20">
                <span className="text-5xl">📱</span>
                <h3 className="mt-4 text-xl font-bold">Always Synced</h3>
                <p className="mt-2 text-sm text-gray-200">Access your tasks anywhere with cloud synchronization</p>
            </div>
            </div>
            
        </section>

        <footer className="mt-10">
            <p>© 2025 Task Master. All rights reserved.</p>
        </footer>
        </div>
    );
}