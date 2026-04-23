import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, AlertCircle, Cpu } from 'lucide-react';

const Domain = () => {
  const sections = [
    {
      icon: BookOpen,
      title: "Literature Survey",
      content: "Current research in canine health shows that Breed Detection, Growth Monitoring, and early Skin Disease Detection can increase a dog's lifespan by up to 30%. Traditional methods rely on manual vet checks which lack the real-time, continuous data needed for comprehensive health tracking."
    },
    {
      icon: AlertCircle,
      title: "Research Problem",
      content: "Dog owners often face challenges in identifying specific breeds, monitoring growth patterns, and detecting early signs of health issues like skin diseases. There is a significant gap between traditional veterinary knowledge and accessible, technology-driven solutions for Breed Detection, Growth Monitoring, and Skin Disease Treatment Suggestions."
    },
    {
      icon: Cpu,
      title: "Technologies Used",
      content: "Our project utilizes deep learning models for multi-modal data analysis, including Breed Detection, Growth Monitoring, and Skin Disease Detection. We leverage AI algorithms to ensure accurate health assessments and provide proactive Treatment Suggestions for domestic dogs."
    }
  ];

  const memberComponents = [
    {
      member: "Sowmiya.S (Member 1)",
      title: "Growth Monitoring",
      description: "Creating a comprehensive monitoring system to track the physical development of dogs at various life stages. By analyzing growth metrics against breed-specific benchmarks, this component ensures that pets are developing healthily and identifies potential issues early."
    },
    {
      member: "Sakithiyan.C (Member 2)",
      title: "Breed Detection",
      description: "Implementing advanced deep learning models to accurately identify dog breeds from multi-modal data. This component helps owners understand the specific biological and behavioral needs of their pets based on their precise genetic heritage and breed characteristics."
    },
    {
      member: "Kavinilavan.U (Member 3)",
      title: "Skin Disease Detection and Treatment Suggestions",
      description: "Developing an AI-driven system to identify various skin diseases in domestic dogs through image analysis. The component focuses on providing immediate, actionable treatment suggestions and care plans to help owners manage their pet's skin health effectively."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-primary-800 dark:text-primary-400 mb-4"
          >
            Domain & Research Details
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-600 flex-shrink-0">
                <section.icon size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-800 dark:text-primary-400 mb-4">{section.title}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Member Specific Components */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary-800 dark:text-primary-400 mb-4"
            >
              Individual Research Components
            </motion.h3>
            <div className="w-16 h-1 bg-primary-600/50 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {memberComponents.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all"
              >
                <p className="text-xs font-bold text-primary-600 mb-3 uppercase tracking-widest">{item.member}</p>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domain;
