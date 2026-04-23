import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const Documents = () => {
  const docs = [
    "Project charter",
    "Proposal Document",
    "Checklist Document",
    "Individual report - Sowmiya.S IT22225924",
    "Individual report - Sakithiyan.C IT22329042",
    "Individual report - Kavinilavan.U IT22124944",
    "Final Document"
  ];

  return (
    <section id="upload" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          {/* Header Bar */}
          <div className="bg-primary-700 py-6 text-center">
            <h2 className="text-2xl font-bold text-white tracking-wide">Available Documents</h2>
          </div>

          {/* Document List */}
          <div className="p-8 space-y-4">
            {docs.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center justify-between bg-primary-50/50 dark:bg-primary-900/10 hover:bg-primary-100/50 dark:hover:bg-primary-900/20 py-4 px-8 rounded-2xl border border-primary-100/50 dark:border-primary-800/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary-600 shadow-sm">
                    <FileText size={20} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-800 dark:group-hover:text-primary-400 transition-colors">
                    {doc}
                  </span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Download size={18} className="text-primary-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
