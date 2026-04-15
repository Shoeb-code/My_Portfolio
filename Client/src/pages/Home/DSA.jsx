import { motion } from "framer-motion";
import {
  Code2,
  Award,
  Flame,
  ExternalLink,
  Trophy,
  Brain,
  TrendingUp,
} from "lucide-react";

const USERNAME = "Shoeb_3";

const stats = {
  totalSolved: 520,
  easySolved: 230,
  mediumSolved: 200,
  hardSolved: 14,
};

export default function DSA() {
  return (
    <section
      id="dsa"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Ambient Premium Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-[28rem] h-[28rem] bg-indigo-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-purple-500/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-xl">
            <span className="text-sm text-gray-400 tracking-wide">
              Engineering Excellence
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-5 bg-gradient-to-r from-gray-300  bg-clip-text text-transparent">
            DSA & Problem Solving
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            Solved{" "}
            <span className="font-semibold text-white">
              500+ LeetCode problems
            </span>{" "}
            across arrays, trees, graphs, dynamic programming,
            and interview-level problem solving.
          </p>
        </motion.div>

        {/* Top Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <MetricCard
            icon={<Flame className="text-orange-400" size={28} />}
            title="Problems"
            value="520+"
            subtitle="All levels"
          />

          <MetricCard
            icon={<Brain className="text-purple-400" size={28} />}
            title="Core Skill"
            value="DSA"
            subtitle="Algorithms"
          />

          <MetricCard
            icon={<TrendingUp className="text-pink-400" size={28} />}
            title="Consistency"
            value="365+"
            subtitle="Daily streak"
          />

          <MetricCard
            icon={<Trophy className="text-yellow-400" size={28} />}
            title="Interview"
            value="Strong"
            subtitle="Ready"
          />
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Breakdown */}
          <motion.div
            whileHover={{ y: -6 }}
            className="lg:col-span-2 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-purple-400/30 hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)] transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center shadow-[0_8px_30px_rgba(168,85,247,0.25)]">
                <Code2 size={24} className="text-indigo-300" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Coding Strength
                </p>
                <h3 className="text-2xl font-medium">
                  Difficulty Breakdown
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <DifficultyCard
                label="Easy"
                subtitle="Foundation & Speed"
                value={stats.easySolved}
                color="from-emerald-500 to-green-400"
              />

              <DifficultyCard
                label="Medium"
                subtitle="Core Problem Solving"
                value={stats.mediumSolved}
                color="from-yellow-400 to-orange-400"
              />

              <DifficultyCard
                label="Hard"
                subtitle="Advanced Algorithms"
                value={stats.hardSolved}
                color="from-red-400 to-pink-400"
              />
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-indigo-400/30 hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)] transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
                <Award size={26} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Verified Profile
                </p>
                <h3 className="text-2xl font-medium">
                  LeetCode
                </h3>
              </div>
            </div>

            <p className="text-gray-300 leading-8 mb-8">
              Solved <span className="text-white font-semibold">520+</span>{" "}
              problems with strong expertise in algorithms,
              optimization, and coding interviews.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <MiniStat title="Solved" value="520+" />
              <MiniStat title="Streak" value="365+" />
              <MiniStat title="Hard" value="14+" />
              <MiniStat title="Ready" value="Yes" />
            </div>

            <a
              href={`https://leetcode.com/u/${USERNAME}/`}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-[1.02] transition-all duration-300 font-medium shadow-[0_10px_40px_rgba(168,85,247,0.35)]"
            >
              Explore Profile
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon, title, value, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-purple-400/20 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-all duration-300"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
      <p className="text-3xl font-semibold">{value}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </motion.div>
  );
}

function MiniStat({ title, value }) {
  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
}

function DifficultyCard({ label, subtitle, value, color }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-xl font-medium mb-1">{label}</h4>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        <div
          className={`px-5 py-3 rounded-2xl bg-gradient-to-r ${color} shadow-xl min-w-[100px] text-center`}
        >
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-xs text-white/80">Solved</p>
        </div>
      </div>
    </motion.div>
  );
}