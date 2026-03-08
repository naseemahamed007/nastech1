export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-lg text-white flex justify-between items-center p-4 z-50">
      <h1 className="font-bold text-xl">Nastech Innovation</h1>
      <div className="space-x-6">
        <a href="#services" className="hover:text-purple-400">Services</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>
    </nav>
  )
}
