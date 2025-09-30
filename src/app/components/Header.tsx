import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 bg-white text-black flex items-center justify-between">
      {/* Logo + Site Name */}
      <Link href="/">
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/logo.svg"   // Place your logo in the /public folder
            alt="Logo"
            width={80}        // Adjust size
            height={80}
            priority          // Optional: loads the logo immediately
          />
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6">
        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
        <Link href="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
        <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
      </nav>
    </header>
  );
}
