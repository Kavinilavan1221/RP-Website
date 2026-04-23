import React from 'react';
import { motion } from 'framer-motion';
import { Search, Scale, Stethoscope, CheckCircle2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 'breed',
      icon: Search,
      title: "Breed Detection",
      subtitle: "Pure or Mixed Breed Identification",
      desc: "Our multi-label classification models analyze facial and body features to identify breeds with 95%+ accuracy. Knowing the breed helps tailor nutrition and health expectations.",
      points: ["Mixed breed percentage", "Genetic health predispositions", "Breed-specific traits"],
      color: "blue"
    },
    {
      id: 'growth',
      icon: Scale,
      title: "Growth Monitoring",
      subtitle: "Bark Analysis & BCS Tracking",
      desc: "Track physical development through acoustic age estimation (barking analysis) and visual Body Condition Score (BCS) processing.",
      points: ["Acoustic age estimation", "Automated BCS scoring", "Ideal weight recommendations"],
      color: "teal"
    },
    {
      id: 'skin',
      icon: Stethoscope,
      title: "Skin Disease Detection",
      subtitle: "Early-Stage Anomaly Detection",
      desc: "Identify early signs of dermatitis, mites, or fungal infections. Our AI highlights affected areas and suggests next steps.",
      points: ["Lesion segmentation", "Severity assessment", "Treatment suggestions"],
      color: "rose"
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Core Modules</h2>
          <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="flex-1">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' : 
                  feature.color === 'teal' ? 'bg-teal-100 text-teal-600' : 'bg-rose-100 text-rose-600'
                }`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-2">{feature.subtitle}</h3>
                <h4 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{feature.title}</h4>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
                  {feature.desc}
                </p>
                <ul className="space-y-4">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 size={18} className="text-green-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 relative">
                <div className={`aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br ${
                  feature.color === 'blue' ? 'from-blue-400/20 to-blue-600/20' : 
                  feature.color === 'teal' ? 'from-teal-400/20 to-teal-600/20' : 'from-rose-400/20 to-rose-600/20'
                } flex items-center justify-center p-8 border border-white/20 shadow-inner`}>
                  {/* Placeholder for feature-specific graphic */}
                  <div className="text-center">
                     <feature.icon size={120} strokeWidth={1} className="opacity-20 mb-4 mx-auto" />
                     <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">Analysis Module v2.0</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
