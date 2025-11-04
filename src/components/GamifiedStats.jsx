import React from 'react';
import { Trophy } from 'lucide-react';

function formatCurrency(n) {
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n);
  } catch {
    return `$${n.toFixed(2)}`;
  }
}

const ProgressBar = ({ value }) => {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
};

const StatCard = ({ label, value, hint }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="text-sm text-slate-500">{label}</div>
    <div className="mt-1 text-2xl font-semibold text-slate-900">{value}</div>
    {hint && <div className="mt-1 text-xs text-slate-500">{hint}</div>}
  </div>
);

const GamifiedStats = ({ total, count, points, level, goalProgress }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-800">Your progress</h2>
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-amber-700">
          <Trophy className="h-4 w-4" />
          <span className="text-sm font-medium">Level {level}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total spent" value={formatCurrency(total)} />
        <StatCard label="Transactions" value={count} />
        <StatCard label="XP" value={`${points} pts`} hint="Earn 10 XP per expense" />
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm text-slate-500">Savings quest</div>
          <div className="mt-1 text-2xl font-semibold text-slate-900">{Math.round(goalProgress)}% to goal</div>
          <div className="mt-3"><ProgressBar value={goalProgress} /></div>
          <div className="mt-1 text-xs text-slate-500">Goal resets monthly</div>
        </div>
      </div>
    </section>
  );
};

export default GamifiedStats;
