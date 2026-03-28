import { Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 lg:pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">DocuMint</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400">
          Our mission is to help people and businesses effortlessly extract value, insights, and structured data from the mountains of unstructured files they receive every day.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="glass-card text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-brand-500/20 text-brand-400">
              <Target className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
          <p className="text-gray-400">To make data extraction as easy as uploading a file, removing technical barriers for everyone.</p>
        </div>

        <div className="glass-card text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-accent-500/20 text-accent-400">
              <Zap className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Pioneering AI</h3>
          <p className="text-gray-400">We leverage the latest foundational models to accurately parse text without rigid templates.</p>
        </div>

        <div className="glass-card text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-pink-500/20 text-pink-400">
              <Users className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">For Everyone</h3>
          <p className="text-gray-400">Designed for researchers reading novels, shops parsing catalogues, and accountants scanning receipts.</p>
        </div>
      </div>

      <div className="glass-card relative overflow-hidden p-8 md:p-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
        <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-4xl">
          <p>
            It all started with a simple problem: parsing hundreds of supplier catalogues into our e-commerce database. We were writing custom scripts for every different vendor. It was a nightmare.
          </p>
          <p>
            With the advent of advanced language models, we realized we could create a general-purpose parsing tool. A tool where you simply declare <strong>what</strong> you want, rather than coding <strong>how</strong> to get it. That's how DocuMint was born.
          </p>
        </div>
      </div>
    </div>
  );
}
