import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 1.8 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -20,
            transition: { duration: 0.5, ease: "easeInOut" } 
          }}
          className="fixed inset-0 bg-[#030712] z-[999] flex flex-col items-center justify-center"
        >
          {/* Animated Center Symbol */}
          <div className="relative mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 1], 
                opacity: 1,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
            >
              Shoeb<span className="text-gray-400">.dev</span>
            </motion.div>
            
            {/* Glowing Rings */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -inset-4 border border-blue-500/20 rounded-xl -z-10 blur-sm"
            />
          </div>

          {/* Typing Subtitle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-gray-500 tracking-[0.25em] uppercase font-mono"
          >
            Initializing Experience
          </motion.div>

          {/* Progress Bar */}
          <div className="mt-8 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
