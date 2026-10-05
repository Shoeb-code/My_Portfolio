import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.4, ease: "easeInOut" } 
          }}
          className="fixed inset-0 bg-[#000000] z-[999] flex flex-col items-center justify-center select-none"
        >
          {/* Logo Monogram */}
          <div className="relative mb-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-2xl font-bold tracking-tight text-[#F5F5F7] flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#2997FF]" />
              <span>Shoeb<span className="text-[#86868B] font-normal">.dev</span></span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[11px] text-[#86868B] tracking-[0.25em] uppercase font-mono"
          >
            Engineering Portfolio
          </motion.div>

          {/* Progress Bar */}
          <div className="mt-6 w-36 h-[1.5px] bg-white/[0.08] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              className="h-full bg-[#2997FF]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
