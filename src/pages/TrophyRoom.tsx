import { useNavigate } from 'react-router-dom';
import { Award, Sparkles, Gauge, Coins } from 'lucide-react';

export default function TrophyRoom() {
  const navigate = useNavigate();

  const trophies = [
    { id: 1, title: 'Executive Badge', desc: 'Earned for long-term excellence', date: 'Mar 2, 2026', icon: Award, color: 'bg-indigo-50 text-indigo-600' },
    { id: 2, title: '5-Star Service', desc: 'Received a 5-star Google review', date: 'Apr 5, 2026', icon: Sparkles, color: 'bg-amber-50 text-amber-500' },
    { id: 3, title: 'Top Performer', desc: 'Quarterly target achieved', date: 'Jan 15, 2026', icon: Gauge, color: 'bg-teal-50 text-teal-500' },
    { id: 4, title: 'Customer Champion', desc: 'Multiple gratitude rewards', date: 'Feb 20, 2026', icon: Coins, color: 'bg-yellow-50 text-yellow-500' },
  ];

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-indigo-900">Trophy Room</h1>
            <p className="text-sm text-slate-500">Your earned badges and milestones</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="py-2 px-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50"
              type="button"
            >
              Back
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trophies.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-4 items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${t.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-indigo-900">{t.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{t.desc}</p>
                  <p className="text-xs text-slate-400 mt-2">{t.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
