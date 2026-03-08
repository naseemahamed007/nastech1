export default function Services() {
  const services = [
    { title: "Full-Stack Development", desc: "Next.js, React, Supabase" },
    { title: "AI Integration", desc: "Smart automation & ML solutions" },
    { title: "UI/UX Design", desc: "Luxury dark-mode aesthetics" },
  ]

  return (
    <section className="grid md:grid-cols-3 gap-6 p-10 bg-gradient-to-br from-gray-900 to-black text-white">
      {services.map((s, i) => (
        <div key={i} className="p-6 rounded-xl bg-white/10 backdrop-blur-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold">{s.title}</h2>
          <p className="mt-2 text-gray-300">{s.desc}</p>
        </div>
      ))}
    </section>
  )
}
