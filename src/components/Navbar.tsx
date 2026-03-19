import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-black">
          Academic Website
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="#" className="hover:text-black transition">
            Research
          </Link>
          <Link href="#" className="hover:text-black transition">
            Publications
          </Link>
          <Link href="#" className="hover:text-black transition">
            Projects
          </Link>
          <Link href="#" className="hover:text-black transition">
            Teaching
          </Link>
          <Link href="#" className="hover:text-black transition">
            CV
          </Link>
          <Link href="#" className="hover:text-black transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}