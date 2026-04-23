import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, BarChart3, TrendingUp, MonitorPlay, FileCheck, Mic2 } from 'lucide-react';

const Milestones = () => {
  const milestones = [
    {
      icon: ClipboardList,
      title: "Project Proposal",
      desc: "Proposal presentation and the proposal report submission.",
      marks: "12%"
    },
    {
      icon: BarChart3,
      title: "Progress Presentation 1",
      desc: "50% progress presentation of the research project.",
      marks: "15%"
    },
    {
      icon: TrendingUp,
      title: "Progress Presentation 2",
      desc: "90% progress presentation of the research project.",
      marks: "18%"
    },
    {
      icon: MonitorPlay,
      title: "Demonstration",
      desc: "Submission and presentation of the camera-ready research poster.",
      marks: "10%"
    },
    {
      icon: FileCheck,
      title: "Final Assessment",
      desc: "Submission of final reports and the final presentation of the research.",
      marks: "10%"
    },
    {
      icon: Mic2,
      title: "Viva",
      desc: "Final viva of the research Commercialization Video with an User Testing and Research Team Member.",
      marks: "10%"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-primary-800 dark:text-primary-400 mb-4"
          >
            Milestones
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((ms, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-50/50 dark:bg-primary-900/10 p-8 rounded-[2rem] border border-primary-100/50 dark:border-primary-800/30 text-center flex flex-col items-center group hover:bg-primary-100/50 dark:hover:bg-primary-900/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <ms.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-800 dark:text-primary-400 mb-4">{ms.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {ms.desc}
              </p>
              <p className="text-sm font-bold text-primary-700 dark:text-primary-500">
                Marks Allocated: <span className="text-slate-900 dark:text-white">{ms.marks}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
