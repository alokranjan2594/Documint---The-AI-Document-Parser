import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 lg:pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-400">We'd love to hear from you. Drop us a line.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="glass-card p-6 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Email</h3>
              <p className="text-gray-400 mt-1">Our friendly team is here to help.</p>
              <a href="mailto:hello@documint.ai" className="text-brand-400 hover:text-brand-300 font-medium mt-2 inline-block">hello@documint.ai</a>
            </div>
          </div>

          <div className="glass-card p-6 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent-500/20 text-accent-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Office</h3>
              <p className="text-gray-400 mt-1">Come say hello at our HQ.</p>
              <p className="text-gray-300 mt-2 font-medium">100 AI Avenue<br />San Francisco, CA 94107</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-8 animate-slide-up relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-[40px] rounded-full pointer-events-none"></div>

          <form className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
