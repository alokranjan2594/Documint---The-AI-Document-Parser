import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Parser - AI Document Extraction",
  description: "Extract structured data and summaries from any document effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground flex flex-col relative antialiased selection:bg-brand-500/30 selection:text-brand-200`}>
        {/* Abstract background blobs */}
        <div className="fixed inset-0 -z-10 bg-[#030712] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-brand-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob" />
          <div
            className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-accent-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-pink-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
