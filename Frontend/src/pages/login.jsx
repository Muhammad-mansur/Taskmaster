export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h1>
                <p className="text-sm text-gray-500 text-center mb-6">Login to your account</p>

            <form className="flex flex-col gap-4">
                <div>
                    <label className="block text-gray-700 mb-1">Email Address</label>
                    <input type="email" placeholder="Mansur@example.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input type="password" placeholder="********" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                </div>

                <div>
                    <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition">Login</button>
                </div>
            </form>

            <p className="text-sm text-gray-600 text-center mt-6"> Don't have an account? {" "}
                <a href="/Signup" className="text-indigo-600 font-medium hover:underline">Sign up</a>
            </p>
            </div>
        </div>
    );
}