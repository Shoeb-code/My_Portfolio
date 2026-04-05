import { motion } from "framer-motion";
import {
  Code2,
  Award,
  Flame,
  ExternalLink,
  Trophy,
  Target,
  Brain,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

const USERNAME = "Shoeb_3";

export default function DSA() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setStats(data);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

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
            A strong foundation in data structures, algorithms, and
            competitive coding that reflects discipline, consistency,
            and analytical thinking.
          </p>
        </motion.div>

        {/* ===== Premium Top Metrics ===== */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <MetricCard
            icon={<Flame className="text-indigo-400" size={28} />}
            title="Problems Solved"
            value={stats ? stats.totalSolved : "378+"}
          />

          <MetricCard
            icon={<Brain className="text-purple-400" size={28} />}
            title="Core Strength"
            value="DSA"
          />

          <MetricCard
            icon={<TrendingUp className="text-pink-400" size={28} />}
            title="Growth"
            value="Consistent"
          />

          <MetricCard
            icon={<Target className="text-green-400" size={28} />}
            title="Practice"
            value="Daily"
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
    <p className="text-sm text-white font-medium">Live</p>
  </div>
</div>

{stats ? (
  <div className="space-y-6">
    <DifficultyCard
      label="Easy"
      subtitle="Foundation & Speed"
      value={stats.easySolved}
      total={stats.totalEasy}
      color="from-green-400 to-emerald-500"
      glow="shadow-emerald-500/20"
    />

    <DifficultyCard
      label="Medium"
      subtitle="Problem Solving"
      value={stats.mediumSolved}
      total={stats.totalMedium}
      color="from-yellow-400 to-orange-500"
      glow="shadow-orange-500/20"
    />

    <DifficultyCard
      label="Hard"
      subtitle="Advanced Logic"
      value={stats.hardSolved}
      total={stats.totalHard}
      color="from-red-400 to-pink-500"
      glow="shadow-pink-500/20"
    />
  </div>
) : (
  <div
    className="rounded-3xl border border-white/10
               bg-white/5 p-6 text-gray-400"
  >
    Loading live stats...
  </div>
)}
          </motion.div>

          {/* Right profile panel */}
          <motion.div
  whileHover={{ y: -6, scale: 1.01 }}
  className="relative overflow-hidden rounded-[2rem]
             border border-white/10
             bg-white/5 backdrop-blur-2xl
             p-8 shadow-2xl"
>
  {/* Premium glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10" />

  {/* Top badge */}
  <div className="relative z-10 flex items-center justify-between mb-6">
    <div className="flex items-center gap-4">
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

    <div
      className="px-3 py-1 rounded-full
                 border border-green-400/20
                 bg-green-400/10 text-green-300 text-xs"
    >
      Live
    </div>
  </div>

  {/* Description */}
  <p className="relative z-10 text-gray-300 leading-8 mb-8">
    A public coding profile that reflects strong algorithmic
    thinking, consistent problem-solving discipline, and deep
    understanding of data structures and complexity analysis.
  </p>

  {/* Premium stats */}
  <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
    <MiniStat title="Problem Solving" value="Excellent" />
    <MiniStat title="Consistency" value="High" />
    <MiniStat title="Analytical Thinking" value="Strong" />
    <MiniStat title="Growth Curve" value="Rising" />
  </div>

  {/* credibility strip */}
  <div
    className="relative z-10 rounded-2xl border border-white/10
               bg-white/5 p-4 mb-8"
  >
    <p className="text-sm text-gray-400 mb-1">
      Competitive Coding Focus
    </p>

    <p className="text-white font-medium leading-7">
      Strong emphasis on arrays, trees, graphs, dynamic
      programming, recursion, and SQL-based problem solving.
    </p>
  </div>

  {/* CTA */}
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

        {error && (
          <p className="text-center text-sm text-gray-500 mt-8">
            Live stats unavailable — showing last known values.
          </p>
        )}
      </div>
    </section>
  );
}

function MetricCard({ icon, title, value }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10
                 bg-white/5 backdrop-blur-xl p-6 shadow-xl"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
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

function StatBar({ label, value, total, color }) {
  const percent = Math.round((value / total) * 100);

  return (
    <div>
      <div className="flex justify-between mb-3">
        <span className="text-gray-200">{label}</span>
        <span className="text-gray-400">
          {value} / {total}
        </span>
      </div>

      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1 }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

function DifficultyCard({
  label,
  subtitle,
  value,
  total,
  color,
  glow,
}) {
  const percent = Math.round((value / total) * 100);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`rounded-3xl border border-white/10
                  bg-white/5 backdrop-blur-xl
                  p-6 shadow-xl ${glow}`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-lg font-semibold text-white">
            {label}
          </h4>

          <p className="text-sm text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-white">
            {value}
          </p>

          <p className="text-sm text-gray-400">
            / {total}
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-3">
        <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percent}%` }}
            transition={{ duration: 1 }}
            className={`h-full rounded-full bg-gradient-to-r ${color}`}
          />
        </div>
      </div>

      {/* Bottom analytics */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Completion Rate
        </p>

        <p className="text-sm font-medium text-white">
          {percent}%
        </p>
      </div>
    </motion.div>
  );
}