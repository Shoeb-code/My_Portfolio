import { motion } from "framer-motion";
import { 
  Code2, 
  Award, 
  Flame, 
  ExternalLink, 
  Trophy, 
  Brain, 
  TrendingUp 
} from "lucide-react";

export default function DSASection() {
  const USERNAME = "Shoeb_3";
  
  const stats = {
    totalSolved: "520+",
    easySolved: 230,
    mediumSolved: 200,
    hardSolved: 14,
    streak: "365+",
    consistencyRate: "98%"
  };

  return (
    <section id="dsa" className="relative py-28 px-6 bg-[#030712] overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[5%] h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] h-[350px] w-[350px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            DSA &amp; Problem Solving
          </h2>
          <p className="text-gray-500 mt-3 text-sm font-mono tracking-widest uppercase">
            Algorithmic Consistency &amp; Analysis
          </p>
        </div>

        {/* Top metrics dashboard bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <MetricCard
            icon={<Flame className="text-orange-500" />}
            title="Total Solved"
            value={stats.totalSolved}
            subtitle="LeetCode Problems"
          />
          <MetricCard
            icon={<TrendingUp className="text-emerald-500" />}
            title="Consistency Streak"
            value={stats.streak}
            subtitle="Consecutive Days"
          />
          <MetricCard
            icon={<Brain className="text-blue-400" />}
            title="Core Skills"
            value="Algorithms"
            subtitle="Data Structures expert"
          />
          <MetricCard
            icon={<Trophy className="text-yellow-500" />}
            title="Interview Readiness"
            value="Verified"
            subtitle="Solved high-freq topics"
          />
        </div>

        {/* Double-column grid for metrics breakdown */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Difficulty cards */}
          <div className="lg:col-span-8 space-y-4 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-[2rem] p-7 border border-white/5 flex flex-col h-full hover:border-blue-500/10 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/10">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Difficulty Breakdown
                  </h3>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-gray-500 mt-0.5">
                    Verified solve volumes
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <DifficultyRow
                  level="Easy"
                  description="Foundation, sorting, hashing, pointers, arrays, complexity baselines."
                  solved={stats.easySolved}
                  total={300}
                  color="bg-emerald-500"
                />
                <DifficultyRow
                  level="Medium"
                  description="Core logic, DP, trees, graphs, backtracking, stacks/queues, string manipulations."
                  solved={stats.mediumSolved}
                  total={250}
                  color="bg-yellow-500"
                />
                <DifficultyRow
                  level="Hard"
                  description="Advanced algorithms, segment trees, path optimization, complex DP models."
                  solved={stats.hardSolved}
                  total={50}
                  color="bg-red-500"
                />
              </div>
            </motion.div>
          </div>

          {/* Right panel: Leetcode profile portal */}
          <div className="lg:col-span-4 flex">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full glass-card rounded-[2rem] p-7 border border-white/5 hover:border-purple-500/10 hover:shadow-[0_15px_30px_rgba(139,92,246,0.06)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/10">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      LeetCode Profile
                    </h3>
                    <p className="text-[10px] uppercase font-mono tracking-widest text-gray-500 mt-0.5">
                      Username: {USERNAME}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  Strong competency in algorithmic problem solving and memory optimization. Ready for coding assessments, technical interviews, and backend database challenges.
                </p>

                <div className="grid grid-cols-2 gap-3.5 mb-6">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-gray-500 block mb-0.5">Rank</span>
                    <span className="text-sm font-bold text-white">Top 8%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-gray-500 block mb-0.5">Rating</span>
                    <span className="text-sm font-bold text-white">1650+</span>
                  </div>
                </div>
              </div>

              <a
                href={`https://leetcode.com/u/${USERNAME}/`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] font-semibold text-xs sm:text-sm text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                View LeetCode Profile
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}

function MetricCard({ icon, title, value, subtitle }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-2xl p-5.5 border border-white/5 hover:border-blue-500/10 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col cursor-default"
    >
      <div className="mb-3.5 p-2 rounded-xl bg-white/[0.03] w-fit">
        {icon}
      </div>
      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-0.5">{title}</span>
      <span className="text-2xl font-bold text-white mb-0.5">{value}</span>
      <span className="text-[10px] text-gray-400 font-medium">{subtitle}</span>
    </motion.div>
  );
}

interface DifficultyRowProps {
  level: string;
  description: string;
  solved: number;
  total: number;
  color: string;
}

function DifficultyRow({ level, description, solved, total, color }: DifficultyRowProps) {
  const percent = Math.min(Math.round((solved / total) * 100), 100);
  
  return (
    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="space-y-1">
        <h4 className="font-bold text-sm text-white flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
          {level}
        </h4>
        <p className="text-[11px] text-gray-500 leading-normal max-w-lg">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="w-24 text-right">
          <span className="text-sm font-bold text-white">{solved}</span>
          <span className="text-[10px] text-gray-500"> / {total}</span>
        </div>
        
        {/* Progress tracking line */}
        <div className="w-20 h-1.5 bg-white/5 rounded-full overflow-hidden shrink-0">
          <div 
            style={{ width: `${percent}%` }}
            className={`h-full ${color} rounded-full`}
          />
        </div>
      </div>
    </div>
  );
}
