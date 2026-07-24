import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sports Picks App",
  description: "A beginner-friendly sports picks recommendation demo."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
