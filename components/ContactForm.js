"use client"
import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await supabase.from("contacts").insert([form])
    alert("Message sent!")
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white/10 backdrop-blur-lg rounded-xl text-white">
      <input type="text" placeholder="Name" className="w-full p-2 mb-3 bg-black/30 rounded"
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" className="w-full p-2 mb-3 bg-black/30 rounded"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <textarea placeholder="Message" className="w-full p-2 mb-3 bg-black/30 rounded"
        onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
      <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded">
        Send
      </button>
    </form>
  )
}
