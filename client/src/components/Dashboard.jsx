import React from 'react';
import { motion } from 'framer-motion';
import { Search, Scale, Stethoscope, Activity, ClipboardList, Info } from 'lucide-react';

const Dashboard = ({ result }) => {
  return (
    <section id="results" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 lg:p-16 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-primary-500/5"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 border-b border-slate-100 dark:border-slate-800 pb-12">
            <div>
              <div className="flex items-center gap-3 text-green-500 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold uppercase tracking-widest">Live Report</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Health Dashboard</h2>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">Overall Status</p>
                <p className="text-xl font-black text-slate-900 dark:text-white">HEALTHY</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Breed Card */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Search size={80} />
              </div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6">
                <Search size={20} className="text-primary-500" />
                Breed Result
              </h3>
              <p className="text-3xl font-black text-primary-600 mb-2">{result.breed.name}</p>
              <p className="text-slate-500 font-medium mb-4">{result.breed.type}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Confidence</span>
                <span className="font-bold text-primary-500">{result.breed.confidence}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-2">
                <div className="bg-primary-500 h-full rounded-full" style={{ width: `${result.breed.confidence}%` }}></div>
              </div>
            </div>

            {/* Growth Card */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Scale size={80} />
              </div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6">
                <Scale size={20} className="text-teal-500" />
                Growth & BCS
              </h3>
              <p className="text-3xl font-black text-teal-600 mb-2">Age: {result.growth.age}</p>
              <p className="text-slate-500 font-medium mb-4">BCS Score: {result.growth.bcs}/9</p>
              <div className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg inline-block text-xs font-bold uppercase">
                {result.growth.status}
              </div>
            </div>

            {/* Skin Card */}
            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Stethoscope size={80} />
              </div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6">
                <Stethoscope size={20} className="text-rose-500" />
                Skin Condition
              </h3>
              <p className={`text-3xl font-black mb-2 ${result.skin.detected ? 'text-rose-600' : 'text-green-600'}`}>
                {result.skin.condition}
              </p>
              <p className="text-slate-500 font-medium leading-relaxed">{result.skin.details}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6">
                <ClipboardList size={20} className="text-primary-500" />
                Care Recommendations
              </h3>
              <ul className="space-y-4">
                {result.recommendations.map((rec, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 text-primary-600 font-bold text-xs">
                      {i + 1}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{rec}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-[2rem] border border-primary-100 dark:border-primary-800 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-2xl flex items-center justify-center text-primary-600 flex-shrink-0">
                <Info size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Vet Consultation</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  While our AI is highly accurate, it is not a replacement for professional veterinary advice. If you notice any sudden behavioral changes, please consult your vet.
                </p>
                <button className="btn-primary py-2 px-6 text-sm">Find Nearby Vet</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
