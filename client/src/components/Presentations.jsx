import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, Download } from 'lucide-react';

const Presentations = () => {
  const presentations = [
    "Proposal Presentation",
    "Progress Presentation 1",
    "Progress Presentation 2",
    "Final Presentation"
  ];

  return (
    <section id="presentations" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-primary-800 dark:text-primary-400 mb-4"
          >
            Presentations
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* List Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900"
          >
            <div className="bg-primary-700 py-6 text-center">
              <h3 className="text-2xl font-bold text-white tracking-wide">Available Presentations</h3>
            </div>
            <div className="p-8 space-y-4">
              {presentations.map((pres, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-between bg-primary-50/50 dark:bg-primary-900/10 hover:bg-primary-100/50 dark:hover:bg-primary-900/20 py-5 px-8 rounded-2xl border border-primary-100/50 dark:border-primary-800/20 transition-all duration-300 cursor-pointer text-center"
                >
                  <span className="w-full font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-800 dark:group-hover:text-primary-400 transition-colors">
                    {pres}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800"
          >
            <img 
              src="/assets/dog-research.png" 
              alt="AI Dog Monitoring Research" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Presentations;
