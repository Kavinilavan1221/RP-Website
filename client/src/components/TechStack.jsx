import React from 'react';

const TechStack = () => {
  const techs = [
    { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Express", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Node.js_logo.svg" }, // Node logo for Express context
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "PyTorch", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" }
  ];

  return (
    <section className="py-24 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-12">Powered By Modern Technology</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {techs.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-4 group">
              <img src={tech.logo} alt={tech.name} className="h-12 lg:h-16 w-auto group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-slate-400 group-hover:text-primary-500 transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
