import { useNavigate } from 'react-router-dom';
import { Award, Sparkles, Gauge, Coins, ArrowLeft, Medal, ShieldCheck, Flame } from 'lucide-react';

export default function TrophyRoom() {
  const navigate = useNavigate();

  const trophies = [
    { id: 1, title: 'Executive Badge', desc: 'Earned for long-term excellence', date: 'Mar 2, 2026', icon: Award, color: 'bg-indigo-50 text-indigo-600' },
    { id: 2, title: '5-Star Service', desc: 'Received a 5-star Google review', date: 'Apr 5, 2026', icon: Sparkles, color: 'bg-amber-50 text-amber-500' },
    { id: 3, title: 'Top Performer', desc: 'Quarterly target achieved', date: 'Jan 15, 2026', icon: Gauge, color: 'bg-teal-50 text-teal-500' },
    { id: 4, title: 'Customer Champion', desc: 'Multiple gratitude rewards', date: 'Feb 20, 2026', icon: Coins, color: 'bg-yellow-50 text-yellow-500' },
  ];

  const earnedCount = trophies.length;
  const latestTrophy = trophies[1];

  const featuredTrophies = trophies.slice(0, 3);
  const sideTrophies = trophies.slice(3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="space-y-8 animate-in fade-in duration-500">
        <section className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-linear-to-br from-white via-white to-slate-50 shadow-[0_18px_50px_rgba(17,24,39,0.06)]">
          <div className="absolute -left-16 top-6 h-40 w-40 rounded-full bg-indigo-100/45 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-amber-100/35 blur-3xl" />

          <div className="relative grid gap-8 p-6 md:grid-cols-[1.25fr_0.75fr] md:p-8 lg:p-10">
            <div className="space-y-6">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
                type="button"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>

              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                  <Medal className="h-3.5 w-3.5 text-indigo-600" />
                  Recognition vault
                </div>
                <div className="space-y-3">
                  <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">
                    Trophy Room
                  </h1>
                  <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                    Milestones, badges, and the work behind them. A quieter, more human record of progress.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Earned</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{earnedCount}</p>
                </div>
                <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Latest</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{latestTrophy.title}</p>
                </div>
                <div className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Momentum</p>
                  <p className="mt-1 flex items-center gap-2 text-lg font-semibold text-slate-900">
                    <Flame className="h-4 w-4 text-amber-500" />
                    Steady
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="h-1.5 rounded-full bg-slate-200">
                  <div className="h-1.5 w-[84%] rounded-full bg-slate-900" />
                </div>
                <div className="h-1.5 rounded-full bg-slate-200">
                  <div className="h-1.5 w-[68%] rounded-full bg-indigo-500" />
                </div>
                <div className="h-1.5 rounded-full bg-slate-200">
                  <div className="h-1.5 w-[92%] rounded-full bg-amber-400" />
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Spotlight</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-900">{latestTrophy.title}</h2>
                  </div>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-[20px] ${latestTrophy.color}`}>
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                </div>

                <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">{latestTrophy.desc}</p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Earned on</p>
                    <p className="mt-1 text-sm font-medium text-slate-900">{latestTrophy.date}</p>
                  </div>
                  <div className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white">
                    Verified recognition
                  </div>
                </div>
              </article>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200/80 bg-white/90 p-4 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Most recent</p>
                  <p className="mt-2 text-sm font-medium text-slate-900">{featuredTrophies[0].title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{featuredTrophies[0].desc}</p>
                </div>
                <div className="rounded-[24px] border border-slate-200/80 bg-white/90 p-4 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">In view</p>
                  <p className="mt-2 text-sm font-medium text-slate-900">{featuredTrophies[1].title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{featuredTrophies[1].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredTrophies.map((t, index) => {
              const Icon = t.icon;
              const isLarge = index === 0;

              return (
                <article
                  key={t.id}
                  className={`group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,0.08)] ${isLarge ? 'sm:col-span-2' : ''}`}
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[40px] bg-linear-to-bl from-transparent to-slate-50" />

                  <div className="relative flex items-start gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] ${t.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Awarded</p>
                      <h3 className={`mt-2 font-semibold tracking-[-0.03em] text-slate-900 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
                        {t.title}
                      </h3>
                      <p className="mt-2 max-w-prose text-sm leading-6 text-slate-600">{t.desc}</p>

                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
                        <p className="text-slate-500">{t.date}</p>
                        <span className="text-slate-900">Recognition</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="space-y-4">
            <div className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.05)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Archive</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-900">Recent recognitions</h3>
                </div>
                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                  4 items
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {sideTrophies.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.id} className="flex items-center gap-4 rounded-2xl bg-slate-50/80 px-4 py-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${t.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-900">{t.title}</p>
                        <p className="mt-1 text-sm text-slate-600">{t.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200/80 bg-slate-900 p-5 text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Tone</p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.03em]">Clean, confident, and calm.</p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                The composition is intentionally less literal and more editorial, which keeps the page feeling natural.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
