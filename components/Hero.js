"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white">
      <video autoPlay muted loop className="absolute w-full h-full object-cover opacity-40">
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-6xl font-extrabold z-10"
      >
        Nastech Innovation
      </motion.h1>
    </section>
  )
}
