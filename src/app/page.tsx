import Link from "next/link";
import { ArrowRight, BookOpen, Database, FileJson, Sparkles, UploadCloud, Zap } from "lucide-react";

export default function Home() {
  const steps = [
    {
      title: "Upload Your Document",
      description: "Drag and drop any PDF, Word doc, or scanned catalogue.",
      icon: <UploadCloud className="w-8 h-8 text-brand-400" />,
    },
    {
      title: "Define Your Goal",
      description: "Ask for a summary or define a schema (e.g., 'extract all product prices and names').",
      icon: <Sparkles className="w-8 h-8 text-accent-400" />,
    },
    {
      title: "Get Structured Data",
      description: "Instantly download clean JSON, CSV, or nicely formatted summaries.",
      icon: <FileJson className="w-8 h-8 text-pink-400" />,
    },
  ];

  const features = [
    {
      name: "Catalogue Parsing",
      description: "Turn unorganized shop catalogues into clean e-commerce databases automatically.",
      icon: <Database className="w-6 h-6 text-brand-500" />
    },
    {
      name: "Novel Summarization",
      description: "Upload long texts or novels and get detailed chapter-by-chapter summaries.",
      icon: <BookOpen className="w-6 h-6 text-brand-500" />
    },
    {
      name: "Lightning Fast",
      description: "Our optimized AI models process hundreds of pages in mere seconds.",
      icon: <Zap className="w-6 h-6 text-brand-500" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span className="text-sm font-medium">DocuMint AI is now in Beta</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="block text-white pb-2">Unleash the data</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-400 to-pink-400 pb-2">
              hidden in your documents.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto animate-slide-up mb-10 text-balance" style={{ animationDelay: '0.2s' }}>
            Turn chaotic PDFs, shop catalogues, and novels into clean, structured JSON or concise summaries in seconds. No coding required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/tool"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105"
            >
              Start Extracting <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 relative animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden glass">
            <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="p-8 aspect-video flex flex-col items-center justify-center text-gray-500 border-dashed border-2 border-white/10 m-8 rounded-xl bg-white/5">
              <UploadCloud className="w-16 h-16 mb-4 text-gray-600" />
              <p className="text-lg">Drag & drop your files here, or click to select files</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How DocuMint Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Three simple steps to transform your unstructured data.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="glass-card text-center relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  {index + 1}
                </div>
                <div className="flex justify-center mb-6 mt-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Extractors</h2>
                <p className="text-gray-400 text-lg">Built for professionals, accessible to everyone. DocuMint understands context like a human would.</p>
              </div>

              <div className="space-y-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{feature.name}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full max-w-md relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-500 blur-[80px] opacity-30 rounded-full"></div>
              <div className="glass-card relative border-brand-500/30">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <h5 className="font-semibold text-white">Example Output</h5>
                  <span className="text-xs font-mono bg-brand-500/20 text-brand-300 px-2 py-1 rounded">JSON</span>
                </div>
                <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
                  <code>{`{
  "document": "catalog_2023.pdf",
  "items": [
    {
      "name": "Wireless Headphones",
      "price": "$199.99",
      "specs": {
        "battery": "30h",
        "noise_canceling": true
      }
    },
    {
      "name": "Smart Watch",
      "price": "$299.00",
      "specs": {
        "battery": "48h",
        "waterproof": "5ATM"
      }
    }
  ]
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-brand-900/40 border-t border-b border-brand-500/20"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to extract intelligence?</h2>
          <p className="text-xl text-brand-200/80 mb-10">Stop doing manual data entry. Let AI do the heavy lifting for you.</p>
          <Link
            href="/tool"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-brand-900 bg-white hover:bg-gray-100 shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-transform hover:scale-105"
          >
            Start Free Now
          </Link>
        </div>
      </section>
    </div>
  );
}
