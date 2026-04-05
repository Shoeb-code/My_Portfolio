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
      className="relative py-32 bg-gray-950 text-white overflow-hidden"
    >
      {/* ===== Premium Background ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-[30rem] h-[30rem] bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-500/10 blur-3xl rounded-full" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#6366f115,transparent_35%),radial-gradient(circle_at_bottom_right,#a855f715,transparent_35%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm text-gray-300 tracking-wide">
              Engineering Excellence
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-5">
            DSA &
            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Problem Solving
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
            Solved{" "}
            <span className="font-semibold text-green-500">
              500+ LeetCode problems
            </span>{" "}
            with a strong focus on algorithms, data structures,
            analytical thinking, and interview-driven problem solving.
          </p>
        </motion.div>

        {/* ===== Premium Top Metrics ===== */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <MetricCard
            icon={<Flame className="text-orange-400" size={28} />}
            title="Problems Solved"
            value="500+"
            subtitle="Across all levels"
          />

          <MetricCard
            icon={<Brain className="text-purple-400" size={28} />}
            title="Core Strength"
            value="DSA"
            subtitle="Problem solving"
          />

          <MetricCard
            icon={<TrendingUp className="text-pink-400" size={28} />}
            title="Consistency"
            value="365+"
            subtitle="Daily practice"
          />

          <MetricCard
            icon={<Trophy className="text-yellow-400" size={28} />}
            title="Interview Ready"
            value="Strong"
            subtitle="Coding rounds"
          />
        </div>

        {/* ===== Main Showcase ===== */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left stats */}
          <motion.div
            whileHover={{ y: -6 }}
            className="lg:col-span-2 rounded-[2rem]
                       border border-white/10 bg-white/5
                       backdrop-blur-2xl p-8 shadow-2xl"
          >
            {/* Premium Header */}
            <div
              className="rounded-3xl border border-white/10
                         bg-white/5 backdrop-blur-xl
                         p-5 mb-8 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl
                             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                             flex items-center justify-center shadow-2xl"
                >
                  <Code2 size={24} />
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-500">
                    Coding Strength
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    Difficulty Breakdown
                  </h3>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-400">Updated</p>
                <p className="text-sm text-white font-medium">Latest</p>
              </div>
            </div>

            {/* Difficulty cards */}
            <div className="space-y-6">
              <DifficultyCard
                label="Easy"
                subtitle="Foundation & Speed"
                value={stats.easySolved}
                color="from-emerald-600 to-green-500"
                glow="shadow-emerald-500/20"
              />

              <DifficultyCard
                label="Medium"
                subtitle="Core Problem Solving"
                value={stats.mediumSolved}
                color="from-yellow-400 to-orange-500"
                glow="shadow-orange-500/20"
              />

              <DifficultyCard
                label="Hard"
                subtitle="Advanced Algorithms"
                value={stats.hardSolved}
                color="from-red-400 to-pink-500"
                glow="shadow-pink-500/20"
              />
            </div>
          </motion.div>

          {/* Right profile panel */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-[2rem]
                       border border-white/10
                       bg-white/5 backdrop-blur-2xl
                       p-8 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10" />

            <div className="relative z-10 flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl
                           bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                           flex items-center justify-center shadow-xl"
              >
                <Award size={26} className="text-white" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Verified Account
                </p>

                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  LeetCode Profile
                </h3>
              </div>
            </div>

            <p className="relative z-10 text-gray-300 leading-8 mb-8">
              Solved{" "}
              <span className="text-white font-semibold">
                500+ problems
              </span>{" "}
              across arrays, trees, graphs, recursion, dynamic
              programming, and SQL-based challenges.
            </p>

            <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
              <MiniStat title="Questions" value="500+" />
              <MiniStat title="Consistency" value="365+" />
              <MiniStat title="Hard" value="14+" />
              <MiniStat title="Ready" value="Yes" />
            </div>

            <a
              href={`https://leetcode.com/u/${USERNAME}/`}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 w-full inline-flex justify-center
                         items-center gap-2 px-6 py-4 rounded-2xl
                         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                         hover:scale-[1.02] transition duration-300
                         font-medium shadow-xl"
            >
              Explore Full Profile
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===== Reusable Components ===== */

function MetricCard({ icon, title, value, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="rounded-3xl border border-white/10
                 bg-white/5 backdrop-blur-xl p-6 shadow-xl"
    >
      <div className="mb-4">{icon}</div>

      <h3 className="text-gray-400 text-sm mb-2">{title}</h3>

      <p className="text-3xl font-bold text-white mb-1">{value}</p>

      <p className="text-sm text-gray-500">{subtitle}</p>
    </motion.div>
  );
}

function MiniStat({ title, value }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-white font-semibold">{value}</p>
    </div>
  );
}

function DifficultyCard({
  label,
  subtitle,
  value,
  color,
  glow,
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className={`rounded-3xl border border-white/10
                  bg-white/5 backdrop-blur-xl
                  p-6 shadow-xl ${glow}
                  relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10`}
      />

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <h4 className="text-xl font-semibold text-white mb-1">
            {label}
          </h4>

          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>

        <div
          className={`px-5 py-3 rounded-2xl
                      bg-gradient-to-r ${color}
                      shadow-xl min-w-[100px]
                      text-center`}
        >
          <p className="text-2xl font-bold text-white">{value}</p>

          <p className="text-xs text-white/80 tracking-wide">
            Solved
          </p>
        </div>
      </div>
    </motion.div>
  );
}