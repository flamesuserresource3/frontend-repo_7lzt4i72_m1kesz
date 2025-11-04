import React, { useState } from 'react';
import { PlusCircle, Tag, Calendar, Wallet } from 'lucide-react';

const categories = ['Food', 'Transport', 'Shopping', 'Bills', 'Entertainment', 'Health', 'Other'];

const ExpenseForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (!title.trim() || isNaN(amt) || amt <= 0) return;
    onAdd({ id: crypto.randomUUID(), title: title.trim(), amount: amt, category, date });
    setTitle('');
    setAmount('');
    setCategory(categories[0]);
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <section id="add" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <PlusCircle className="h-5 w-5" />
        </div>
        <h2 className="text-lg font-semibold text-slate-800">Add expense</h2>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="md:col-span-4">
          <label className="mb-1 block text-sm text-slate-600">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Coffee latte"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-800 placeholder-slate-400 outline-none ring-blue-100 focus:ring"
          />
        </div>
        <div className="md:col-span-3">
          <label className="mb-1 block text-sm text-slate-600">Amount</label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-2.5 text-slate-400">
              <Wallet className="h-4 w-4" />
            </span>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="12.50"
              className="w-full rounded-lg border border-slate-200 bg-white px-9 py-2.5 text-slate-800 placeholder-slate-400 outline-none ring-blue-100 focus:ring"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <label className="mb-1 block text-sm text-slate-600">Category</label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-2.5 text-slate-400">
              <Tag className="h-4 w-4" />
            </span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-9 py-2.5 text-slate-800 outline-none ring-blue-100 focus:ring"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm text-slate-600">Date</label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-2.5 text-slate-400">
              <Calendar className="h-4 w-4" />
            </span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-9 py-2.5 text-slate-800 outline-none ring-blue-100 focus:ring"
            />
          </div>
        </div>
        <div className="md:col-span-12">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white shadow-sm transition hover:bg-blue-700"
          >
            <PlusCircle className="h-5 w-5" /> Add expense
          </button>
        </div>
      </form>
    </section>
  );
};

export default ExpenseForm;
