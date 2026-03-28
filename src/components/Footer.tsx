import Link from "next/link";
import { FileScan, GitBranch, Link2, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-600 text-white">
                <FileScan className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                DocuMint By Alok
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-md text-balance">
              The intelligent way to extract structured data, summaries, and insights from your documents using AI. No coding required.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <GitBranch className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Link2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/tool" className="text-sm text-gray-400 hover:text-brand-400 transition-colors">Extractor Tool</Link></li>
              <li><Link href="#features" className="text-sm text-gray-400 hover:text-brand-400 transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-sm text-gray-400 hover:text-brand-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-brand-400 transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} DocuMint. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4 text-sm text-gray-500">
            <span>Built with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
