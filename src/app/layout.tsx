import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  title: "My Portfolio",
  description: "Freelance UX Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
       
      </body>
    </html>
  );
}
