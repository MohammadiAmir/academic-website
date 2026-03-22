import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-[#0b1020]/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          Amir Mohammadi
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-cyan-300 transition">
            Home
          </Link>
          <Link href="/journey" className="hover:text-cyan-300 transition">
            My Journey
          </Link>
          <Link href="#" className="hover:text-cyan-300 transition">
            Research
          </Link>
          <Link href="/publications" className="hover:text-cyan-300 transition">
            Publications
          </Link>
          <Link href="/projects" className="hover:text-cyan-300 transition">
            Projects
          </Link>
          <Link href="#" className="hover:text-cyan-300 transition">
            Teaching
          </Link>
          <Link href="#" className="hover:text-cyan-300 transition">
            CV
          </Link>
          <Link href="#" className="hover:text-cyan-300 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}