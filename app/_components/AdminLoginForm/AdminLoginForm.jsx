'use client'

import { useActionState, useEffect } from "react";
import { adminLogin } from "./actions";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter()
  const [state, action] = useActionState(adminLogin, {
    success: false,
    redirectUrl: null,
    error: null
  })

  useEffect(() => {
    if(state.success) {
      router.push(state.redirectUrl)
    }
  }, [state, router])
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <form action={action}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="yourusername"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
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
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
  