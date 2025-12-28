//src/app/login/page.tsx

'use client'

import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => signIn("google")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Entrar com Google
      </button>
    </div>
  )
}
