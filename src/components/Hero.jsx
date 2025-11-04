import React from 'react';
import Spline from '@splinetool/react-spline';
import { Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent" />

      <div className="relative z-10 flex h-full items-center px-6 md:px-10">
        <div className="max-w-3xl text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Trophy className="h-4 w-4 text-amber-400" />
            <span className="font-medium">Gamified expense manager</span>
          </div>
          <h1 className="font-geist text-4xl font-semibold leading-tight md:text-6xl">
            Spend smart. Level up your finances.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            Track daily expenses, hit savings quests, and unlock rewards as you build better money habits.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#add"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 font-medium text-slate-900 shadow-sm transition hover:shadow md:px-6"
            >
              Add your first expense
            </a>
            <a
              href="#rewards"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-5 py-2.5 font-medium text-white backdrop-blur transition hover:bg-white/10 md:px-6"
            >
              View rewards
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
