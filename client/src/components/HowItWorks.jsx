import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Mic, Cpu, PieChart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { icon: Upload, title: "Upload Image", desc: "Submit a clear photo of your dog." },
    { icon: Mic, title: "Upload Audio", desc: "Provide a short recording of barking." },
    { icon: Cpu, title: "AI Processing", desc: "Our neural networks analyze the data." },
    { icon: PieChart, title: "Get Results", desc: "Receive health and breed insights." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-primary-900 text-white overflow-hidden relative">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-800 skew-x-12 translate-x-32 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-4">How It Works</h2>
          <p className="text-primary-200 max-w-2xl mx-auto">Follow these simple steps to get a comprehensive health report for your pet in seconds.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20 relative">
                <step.icon size={32} className="text-primary-400" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-primary-200 text-sm">{step.desc}</p>
              
              {index < 3 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] border-t-2 border-dashed border-white/20"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
