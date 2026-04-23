import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Image as ImageIcon, Music, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import axios from 'axios';

const UploadSection = ({ onAnalysisComplete }) => {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  
  const imageInputRef = useRef(null);
  const audioInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
    setError(null);
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file) setAudio(file);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!image || !audio) {
      setError("Please upload both an image and an audio file.");
      return;
    }

    setIsUploading(true);
    setError(null);

    // Simulated API Call
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('audio', audio);

      // In a real app, this would be:
      // const response = await axios.post('/api/analyze', formData);
      // onAnalysisComplete(response.data);

      // Simulating delay and results
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      onAnalysisComplete({
        breed: { name: "Golden Retriever", confidence: 98.5, type: "Pure Breed" },
        growth: { age: "2-3 Years", bcs: 5, status: "Ideal Weight" },
        skin: { detected: false, condition: "Healthy", details: "No lesions or parasites detected." },
        recommendations: [
          "Maintain current protein-rich diet.",
          "Daily 45-minute active exercise.",
          "Monthly skin check recommended during grooming."
        ]
      });
    } catch (err) {
      setError("Something went wrong with the analysis. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section id="upload" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Analyze Your Dog</h2>
          <p className="text-slate-600 dark:text-slate-400">Upload a clear photo and a short audio clip of your dog's bark.</p>
        </div>

        <div className="glass p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Upload */}
            <div 
              className={`relative border-2 border-dashed rounded-3xl p-8 transition-all duration-300 flex flex-col items-center justify-center min-h-[250px] ${
                image ? 'border-primary-500 bg-primary-50/30' : 'border-slate-300 dark:border-slate-700 hover:border-primary-400'
              }`}
            >
              <input 
                type="file" 
                ref={imageInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              
              {image ? (
                <div className="text-center">
                  <div className="relative mb-4">
                    <img src={URL.createObjectURL(image)} alt="Preview" className="w-32 h-32 object-cover rounded-2xl shadow-lg" />
                    <button 
                      onClick={() => setImage(null)}
                      className="absolute -top-2 -right-2 bg-rose-500 text-white p-1 rounded-full shadow-lg"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{image.name}</p>
                </div>
              ) : (
                <div className="text-center cursor-pointer" onClick={() => imageInputRef.current.click()}>
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mb-4 mx-auto shadow-sm">
                    <ImageIcon size={24} />
                  </div>
                  <p className="font-bold text-slate-900 dark:text-white mb-1">Upload Photo</p>
                  <p className="text-xs text-slate-500">JPG, PNG up to 10MB</p>
                </div>
              )}
            </div>

            {/* Audio Upload */}
            <div 
              className={`relative border-2 border-dashed rounded-3xl p-8 transition-all duration-300 flex flex-col items-center justify-center min-h-[250px] ${
                audio ? 'border-secondary-500 bg-secondary-50/30' : 'border-slate-300 dark:border-slate-700 hover:border-secondary-400'
              }`}
            >
              <input 
                type="file" 
                ref={audioInputRef}
                onChange={handleAudioChange}
                accept="audio/*"
                className="hidden"
              />
              
              {audio ? (
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 bg-secondary-100 dark:bg-secondary-900/30 rounded-2xl flex items-center justify-center text-secondary-600 shadow-lg">
                      <Music size={40} />
                    </div>
                    <button 
                      onClick={() => setAudio(null)}
                      className="absolute -top-2 -right-2 bg-rose-500 text-white p-1 rounded-full shadow-lg"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{audio.name}</p>
                </div>
              ) : (
                <div className="text-center cursor-pointer" onClick={() => audioInputRef.current.click()}>
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mb-4 mx-auto shadow-sm">
                    <Music size={24} />
                  </div>
                  <p className="font-bold text-slate-900 dark:text-white mb-1">Upload Audio</p>
                  <p className="text-xs text-slate-500">MP3, WAV up to 5MB</p>
                </div>
              )}
            </div>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 flex items-center gap-2 text-rose-600 bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl"
              >
                <AlertCircle size={20} />
                <span className="text-sm font-medium">{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            onClick={handleAnalyze}
            disabled={isUploading}
            className={`w-full mt-8 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 ${
              isUploading 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
              : 'btn-primary'
            }`}
          >
            {isUploading ? (
              <>
                <Loader2 className="animate-spin" size={24} />
                Processing Data...
              </>
            ) : (
              <>
                Analyze Now
                <CheckCircle2 size={24} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
