import React from 'react';
import { Tag, Calendar } from 'lucide-react';

function formatCurrency(n) {
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n);
  } catch {
    return `$${n.toFixed(2)}`;
  }
}

const TransactionsList = ({ items = [], onDelete }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="mb-4 text-lg font-semibold text-slate-800">Recent transactions</h2>
      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-200 p-6 text-center text-slate-500">
          No transactions yet. Add your first expense above.
        </div>
      ) : (
        <ul className="divide-y divide-slate-100">
          {items.map((tx) => (
            <li key={tx.id} className="flex items-center justify-between gap-4 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50">
                  <Tag className="h-5 w-5 text-slate-500" />
                </div>
                <div className="min-w-0">
                  <div className="truncate font-medium text-slate-900">{tx.title}</div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {tx.date}
                    </span>
                    <span>•</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">{tx.category}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-medium text-slate-900">{formatCurrency(tx.amount)}</div>
                {onDelete && (
                  <button
                    onClick={() => onDelete(tx.id)}
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition hover:bg-slate-50"
                  >
                    Delete
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TransactionsList;
