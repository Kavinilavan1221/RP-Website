import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Domain', href: '#features' },
    { name: 'Milestones', href: '#how-it-works' },
    { name: 'Documents', href: '#upload' },
    { name: 'Presentations', href: '#presentations' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white pt-12 pb-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 mb-10">
          {/* Brand Info */}
          <div>
            <a href="#" className="inline-block">
              <h4 className="text-xl font-bold mb-4 text-primary-500 hover:text-primary-400 transition-colors">Happy Pup</h4>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl text-justify">
              Empowering dog owners through smart technology and AI-driven monitoring. Our research focuses on Breed Detection, Growth Monitoring, and Skin Disease Detection with Treatment Suggestions to provide real-time health insights for domestic dogs. By utilizing multi-modal data analysis and advanced deep learning algorithms, we ensure high accuracy in identifying breed-specific traits and early health warning signs. Our platform is designed to bridge the gap between traditional veterinary knowledge and modern, accessible technology, allowing for continuous care outside of clinical settings. Ultimately, our goal is to improve the quality of life and longevity of your canine companions through data-driven decisions and personalized health recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-20">
            <h4 className="text-base font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-primary-500 text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-base font-bold mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary-600 hover:text-white transition-all shadow-lg"
                >
                  <item.Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 pt-6 text-center">
          <p className="text-slate-500 text-[10px]">
            © 2025 CanineAI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
