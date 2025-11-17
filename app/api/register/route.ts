import { sql } from "@/app/lib/db"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { name, email, password } = await request.json()

  const existing = await sql`SELECT * FROM users WHERE email = ${email}`
  if (existing.length > 0)
    return NextResponse.json({ message: "User exists" }, { status: 409 })

  const hashed = await bcrypt.hash(password, 10)
  await sql`
    INSERT INTO users (name, email, password)
    VALUES (${name}, ${email}, ${hashed})
  `

  return NextResponse.json({ message: "Registration successful" })
}
