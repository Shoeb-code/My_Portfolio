import { motion } from "framer-motion";
import { 
  Code2, 
  Award, 
  Flame, 
  ExternalLink, 
  Trophy, 
  Brain, 
  TrendingUp,
  Layers
} from "lucide-react";

export default function DSASection() {
  const USERNAME = "Shoeb_3";
  
  const stats = {
    totalSolved: "520+",
    easySolved: "230+",
    mediumSolved: "200+",
    hardSolved: "14+",
    streak: "365+ Days",
    rating: "1650+",
    ranking: "Top 8%",
    consistency: "98%"
  };

  const topics = [
    "Dynamic Programming",
    "Graph Theory & BFS/DFS",
    "Binary Trees & BST",
    "Sliding Window",
    "Heaps & Priority Queues",
    "Backtracking",
    "Trie & Strings",
    "Binary Search"
  ];

  const difficulties = [
    {
      level: "Easy",
      count: stats.easySolved,
      color: "#30D158",
      desc: "Arrays, two pointers, hashing, sorting & linear structures.",
      tag: "Basics & Speed"
    },
    {
      level: "Medium",
      count: stats.mediumSolved,
      color: "#FFD60A",
      desc: "Dynamic programming, trees, graphs, heaps & backtracking.",
      tag: "Core Engineering"
    },
    {
      level: "Hard",
      count: stats.hardSolved,
      color: "#FF453A",
      desc: "Segment trees, trie models, complex graph flows & multi-state DP.",
      tag: "Advanced Algorithms"
    }
  ];

  return (
    <section id="dsa" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#000000] overflow-hidden">
      {/* Apple Pro Subtle Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#FFD60A]/5 via-[#2997FF]/5 to-transparent blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-35" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header: Swiss Minimalist & Compact */}
        <div className="flex flex-col items-center text-center space-y-3.5 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7]"
          >
            DSA &amp; Problem Solving
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#86868B] text-[15px] sm:text-base leading-relaxed"
          >
            Algorithmic rigor in data structures, time-space complexity optimization, and system algorithms.
          </motion.p>
        </div>

        {/* Top 4 Compact Metric Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          <MetricTile
            icon={<Flame className="text-[#FF9F0A]" size={18} />}
            title="Total Solved"
            value={stats.totalSolved}
            subtitle="Problems Completed"
            accent="#FF9F0A"
          />
          <MetricTile
            icon={<TrendingUp className="text-[#30D158]" size={18} />}
            title="Consistency"
            value={stats.streak}
            subtitle="Daily Streak"
            accent="#30D158"
          />
          <MetricTile
            icon={<Brain className="text-[#2997FF]" size={18} />}
            title="Contest Rating"
            value={stats.rating}
            subtitle="LeetCode Rating"
            accent="#2997FF"
          />
          <MetricTile
            icon={<Trophy className="text-[#FFD60A]" size={18} />}
            title="Rank"
            value={stats.ranking}
            subtitle="Global Percentile"
            accent="#FFD60A"
          />
        </div>

        {/* Compact 2-Column Core Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Panel: Verified Difficulty Breakdown (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 bg-[#0A0A0C]/90 rounded-3xl p-6 sm:p-7 border border-white/[0.08] hover:border-white/[0.18] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2997FF]/10 border border-[#2997FF]/20 flex items-center justify-center text-[#2997FF]">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight">
                      Problem Solved by Level
                    </h3>
                    <p className="text-xs font-mono text-[#86868B]">
                      Verified Counts
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#F5F5F7] bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]">
                  {stats.totalSolved} Total
                </span>
              </div>

              {/* 3 Compact Difficulty Cards without /300 denominators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {difficulties.map((diff, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors flex flex-col justify-between space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#F5F5F7] flex items-center gap-1.5">
                        <span style={{ backgroundColor: diff.color }} className="w-2 h-2 rounded-full" />
                        {diff.level}
                      </span>
                      <span 
                        style={{ color: diff.color, borderColor: `${diff.color}30` }}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.02] border font-semibold"
                      >
                        {diff.count}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#86868B] leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Topic Mastery Tags */}
            <div className="pt-4 border-t border-white/[0.06] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#86868B]">
                <Layers size={12} className="text-[#2997FF]" />
                <span>Core Topics:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[#C7C7CC] hover:border-white/20 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel: LeetCode Profile Hub (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-5 bg-[#0A0A0C]/90 rounded-3xl p-6 sm:p-7 border border-white/[0.08] hover:border-white/[0.18] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD60A]/10 border border-[#FFD60A]/20 flex items-center justify-center text-[#FFD60A]">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight">
                      LeetCode Profile
                    </h3>
                    <p className="text-xs font-mono text-[#86868B]">
                      Handle: <span className="text-[#2997FF]">@{USERNAME}</span>
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#30D158]/10 border border-[#30D158]/30 text-[11px] font-mono text-[#30D158]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#30D158]" />
                  Active
                </span>
              </div>

              {/* 2x2 Metric Badges */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[10px] font-mono uppercase text-[#86868B] block">Percentile</span>
                  <span className="text-base sm:text-lg font-bold text-[#F5F5F7] font-mono">Top 8%</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[10px] font-mono uppercase text-[#86868B] block">Rating</span>
                  <span className="text-base sm:text-lg font-bold text-[#F5F5F7] font-mono">1650+</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[10px] font-mono uppercase text-[#86868B] block">Consistency</span>
                  <span className="text-base sm:text-lg font-bold text-[#30D158] font-mono">98%</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[10px] font-mono uppercase text-[#86868B] block">Target</span>
                  <span className="text-base sm:text-lg font-bold text-[#FFD60A] font-mono">600+</span>
                </div>
              </div>

              <p className="text-xs sm:text-[13px] text-[#86868B] leading-relaxed">
                Solutions crafted with optimal memory allocation and asymptotic time complexity tradeoffs.
              </p>
            </div>

            {/* Profile Action */}
            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href={`https://leetcode.com/u/${USERNAME}/`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-2xl bg-[#F5F5F7] hover:bg-white text-black font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Verify LeetCode Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

interface MetricTileProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  accent: string;
}

function MetricTile({ icon, title, value, subtitle, accent }: MetricTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -2 }}
      className="bg-[#0A0A0C]/90 border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-4 sm:p-5 flex flex-col justify-between cursor-default shadow-md backdrop-blur-xl transition-all group"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868B]">{title}</span>
        <div 
          style={{ borderColor: `${accent}30` }}
          className="w-8 h-8 rounded-xl bg-white/[0.03] border flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform"
        >
          {icon}
        </div>
      </div>
      <div className="space-y-0.5">
        <span className="text-xl sm:text-2xl font-bold text-[#F5F5F7] block tracking-tight font-mono">{value}</span>
        <span className="text-[11px] text-[#86868B] font-medium">{subtitle}</span>
      </div>
    </motion.div>
  );
}
