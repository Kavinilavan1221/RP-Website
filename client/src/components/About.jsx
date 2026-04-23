import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Mr. Dinith Primal",
      role: "Supervisor",
      image: "/assets/dinith.png",
      socials: { linkedin: "#", github: "#", email: "mailto:dinith@example.com" }
    },
    {
      name: "Mr. Indunil Daluwatte",
      role: "Co-Supervisor",
      image: "/assets/indunil.png",
      socials: { linkedin: "#", github: "#", email: "mailto:indunil@example.com" }
    },
    {
      name: "Sowmiya.S",
      role: "Member 1 - IT22225924",
      image: "/assets/sowmiya.png",
      socials: { linkedin: "#", github: "#", email: "#" }
    },
    {
      name: "Sakithiyan.C",
      role: "Member 2 - IT22329042",
      image: "/assets/sakithiyan.png",
      socials: { linkedin: "#", github: "#", email: "#" }
    },
    {
      name: "Kavinilavan.U",
      role: "Member 3 - IT22124944",
      image: "/assets/kavinilavan.png",
      socials: { 
        linkedin: "https://www.linkedin.com/in/uthayarasa-kavinilavan/", 
        github: "https://github.com/Kavinilavan1221?tab=repositories", 
        email: "mailto:it22124944@my.sliit.lk" 
      }
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-primary-800 dark:text-primary-400 mb-4"
          >
            About Us
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Our dedicated team of researchers and supervisors is committed to advancing canine care through three core pillars: <strong>Breed Detection</strong>, <strong>Growth Monitoring</strong>, and <strong>Skin Disease Detection with Treatment Suggestions</strong>. We combine cutting-edge AI with deep veterinary insights to empower dog owners worldwide.
          </p>
        </div>

        <div className="space-y-16">
          {/* Supervisors Section */}
          <div className="flex flex-wrap justify-center gap-8">
            {team.slice(0, 2).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 p-3 hover:shadow-2xl transition-all group w-full max-w-[260px]"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="text-center pb-4">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-primary-400 mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wider">{member.role}</p>
                  <div className="flex items-center justify-center gap-4">
                    <a href={member.socials.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.socials.github} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <div title={member.socials.email.replace('mailto:', '')} className="text-slate-400 hover:text-rose-500 transition-colors cursor-help">
                      <Mail size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research Members Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.slice(2).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 p-3 hover:shadow-2xl transition-all group max-w-[260px] mx-auto"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="text-center pb-4">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-primary-400 mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-slate-500 mb-4">{member.role}</p>
                  <div className="flex items-center justify-center gap-4">
                    <a href={member.socials.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.socials.github} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <div title={member.socials.email.replace('mailto:', '')} className="text-slate-400 hover:text-rose-500 transition-colors cursor-help">
                      <Mail size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
