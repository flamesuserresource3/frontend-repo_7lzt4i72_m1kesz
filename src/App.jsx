import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import ExpenseForm from './components/ExpenseForm';
import GamifiedStats from './components/GamifiedStats';
import TransactionsList from './components/TransactionsList';

const initialData = [
  { id: 't1', title: 'Coffee latte', amount: 4.5, category: 'Food', date: new Date().toISOString().slice(0, 10) },
  { id: 't2', title: 'Metro pass', amount: 2.75, category: 'Transport', date: new Date().toISOString().slice(0, 10) },
  { id: 't3', title: 'Streaming', amount: 12.99, category: 'Entertainment', date: new Date().toISOString().slice(0, 10) },
];

export default function App() {
  const [transactions, setTransactions] = useState(initialData);

  const stats = useMemo(() => {
    const total = transactions.reduce((sum, t) => sum + t.amount, 0);
    const count = transactions.length;
    const points = count * 10; // 10 XP per expense
    const level = Math.floor(points / 50) + 1; // every 50 XP -> new level
    const monthlyGoal = 200; // sample goal
    const goalProgress = Math.min(100, (total / monthlyGoal) * 100);
    return { total, count, points, level, goalProgress };
  }, [transactions]);

  const handleAdd = (tx) => {
    setTransactions((prev) => [tx, ...prev]);
  };

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-6 md:space-y-10 md:py-10">
        <Hero />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ExpenseForm onAdd={handleAdd} />
          </div>
          <div className="lg:col-span-1">
            <GamifiedStats
              total={stats.total}
              count={stats.count}
              points={stats.points}
              level={stats.level}
              goalProgress={stats.goalProgress}
            />
          </div>
        </div>

        <TransactionsList items={transactions} onDelete={handleDelete} />

        <footer id="rewards" className="py-6 text-center text-sm text-slate-500">
          Built for better money habits — earn points as you track.
        </footer>
      </div>
    </div>
  );
}
