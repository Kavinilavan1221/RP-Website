import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Sparkles, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { icon: Heart, title: "Better Pet Care", desc: "Empower yourself with data to make informed decisions about your dog's lifestyle." },
    { icon: Clock, title: "Early Detection", desc: "Identify health issues in their early stages when they are most treatable." },
    { icon: Sparkles, title: "AI-Powered", desc: "Leverage state-of-the-art technology usually only available at top research clinics." },
    { icon: TrendingUp, title: "Growth Analytics", desc: "Track your dog's development over time and ensure they meet healthy milestones." }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-10">
             <Heart size={300} />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Why Choose Our <br /> Monitoring System?</h2>
              <p className="text-primary-100 text-lg mb-8 max-w-md">
                We bridge the gap between complex AI technology and everyday pet parenting, providing peace of mind through science.
              </p>
              <a href="#upload" className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold hover:bg-primary-50 transition-colors">
                Try It Now
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10"
                >
                  <benefit.icon className="text-white mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-primary-100 text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
