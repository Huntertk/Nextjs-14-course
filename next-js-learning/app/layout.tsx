import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Poppins, Anta} from 'next/font/google'
const poppins = Poppins({weight:["100","200","400","600", "700", "800", "900"], subsets:['latin']})
const anta = Anta({weight:["400"], subsets:['latin']})


export const metadata: Metadata = {
  title: "Learning Next Js App",
  description: "Next Js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anta.className}`}>
        <Navbar />
        <main className="max-w-3xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
