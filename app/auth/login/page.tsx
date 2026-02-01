"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default async function Page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(e: any) {
    e.preventDefault()

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard"
    })
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input 
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        className="border p-2 w-full"
      />
      <input 
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        className="border p-2 w-full"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  )
}
