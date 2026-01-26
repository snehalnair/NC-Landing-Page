import { Sparkles, Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#8CA3B0]" />
              <span className="tracking-wide">NeuralConnexions</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              The world's first cognitive companion platform. Building emotional intelligence infrastructure for humanity.
            </p>
            <p className="text-white/50 text-xs italic">
              Find • Nurture • Sustain
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white/90">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">AI Companion</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Digital Twin</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-white/90">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2025 NeuralConnexions. Built in the UK. Designed for global empathy.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
