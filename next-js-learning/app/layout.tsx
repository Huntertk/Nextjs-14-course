import type { Metadata } from "next";
import "./globals.css";


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
      <body>
        {children}
      </body>
    </html>
  );
}
