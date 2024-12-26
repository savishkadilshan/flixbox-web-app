'use client'

import signup from "./actions";

export default function SignUpForm() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create Your Account
          </h2>
          <form action={signup}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline transition"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    );
  }
  