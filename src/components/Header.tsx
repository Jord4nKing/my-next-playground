import Image from "next/image";
import dynamic from "next/dynamic";
import { client } from "@/lib/sanity";
import { navQuery } from "@/lib/queries";

// Dynamically import the client-side header (so framer-motion only loads when needed)
const HeaderClient = dynamic(() => import("./HeaderClient"), { ssr: false });

export default async function Header() {
  const navItems = await client.fetch(navQuery);

  return (
    <header className="p-6 bg-white text-black flex items-center justify-between relative">
      <a href="/" className="flex items-center gap-3">
        <Image src="/logo.svg" alt="Logo" width={60} height={60} priority />
      </a>
      {/* Pass nav data into the client component */}
      <HeaderClient navItems={navItems} />
    </header>
  );
}
