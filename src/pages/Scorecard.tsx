import { TrendingUp, User, MapPin, Building2, Search, Filter, Info, ArrowDown, ChevronLeft, Truck } from 'lucide-react';

export default function Scorecard() {
  return (
    <div className="flex h-full animate-in fade-in duration-500 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(21,25,108,0.08)] border border-slate-100 overflow-hidden">
      
      {/* Center Table Section */}
      <div className="flex-1 flex flex-col overflow-hidden border-r border-slate-200">
        
        {/* Table Header / Tabs */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-2 text-primary mb-6">
            <TrendingUp className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Scorecards</h1>
          </div>
          
          <div className="flex border-b border-slate-200 mb-6">
            <button className="px-4 py-2 border-b-2 border-secondary text-secondary font-bold text-sm">Scores</button>
            <button className="px-4 py-2 text-outline font-medium text-sm hover:text-primary transition-colors">Settings</button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="inline-flex p-1 bg-surface-container-low rounded-lg">
              <button className="flex items-center gap-2 px-6 py-2 bg-white rounded-md shadow-sm text-sm font-bold text-primary">
                <User className="w-4 h-4" />
                Users
              </button>
              <button className="flex items-center gap-2 px-6 py-2 text-outline text-sm font-medium hover:text-primary">
                <MapPin className="w-4 h-4" />
                Locations
              </button>
              <button className="flex items-center gap-2 px-6 py-2 text-outline text-sm font-medium hover:text-primary">
                <Building2 className="w-4 h-4" />
                Company
              </button>
            </div>
          </div>
          
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
              <input 
                className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-secondary focus:outline-none" 
                placeholder="Search users..." 
                type="text"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex items-center border border-slate-200 rounded-lg px-3 bg-white">
                <MapPin className="w-4 h-4 text-outline mr-2" />
                <span className="text-sm font-medium text-primary mr-2">Location:</span>
                <select className="border-none p-0 text-sm font-bold text-primary focus:ring-0 focus:outline-none bg-transparent">
                  <option>All</option>
                </select>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-primary hover:bg-slate-50">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>
        
        {/* The Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-white z-10 border-y border-slate-200">
              <tr className="text-[11px] uppercase tracking-wider text-outline font-bold">
                <th className="px-6 py-3 min-w-[250px]">
                  Name (243) <Info className="w-3 h-3 inline-block ml-1" />
                </th>
                <th className="px-6 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    NPS <ArrowDown className="w-3 h-3" /> <Info className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                    Google reviews <ArrowDown className="w-3 h-3" /> <Info className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                    Driving score <Info className="w-3 h-3" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              
              <tr className="bg-indigo-50/30">
                <td className="px-6 py-3 flex items-center gap-3">
                  <img alt="" className="w-8 h-8 rounded-full border border-secondary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-KELKFzgDVzPIfU37RoqNWzbxXT_S8P7iVpZSLJuS_mTzzwqstauaEoGuVUTAJ1CB8BHMilZXf5Fzp3UJv4ECiU7QMifFn4Bjn-RjBYgNc4zokdV1_ArlYbYrWqEPBw4uEMaiOK_c15X9pIvwzW8psNucYO-1aS8YlOE6v7OAlyGjnL9x9yBnkSrJA-hB-OV-sv_L7qferwwQVH4srHPecCQatwCRIyhhxbG8SXA3ot6XZvR__TvrsDBDTIH4uClFuDMqaPRwleM"/>
                  <span className="text-sm font-bold text-secondary">Mark Hart</span>
                </td>
                <td className="px-6 py-3 text-sm font-semibold text-primary">77/80</td>
                <td className="px-6 py-3 text-sm font-semibold text-primary">10/14</td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-primary">92</span>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </td>
              </tr>
              
              <tr className="hover:bg-slate-50 cursor-pointer">
                <td className="px-6 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">TD</div>
                  <span className="text-sm font-medium text-primary">Trayvon Diggs</span>
                </td>
                <td className="px-6 py-3 text-sm font-medium text-primary">77/80</td>
                <td className="px-6 py-3 text-sm font-medium text-primary">10/14</td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-primary">88</span>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </td>
              </tr>
              
              <tr className="hover:bg-slate-50 cursor-pointer">
                <td className="px-6 py-3 flex items-center gap-3">
                  <img alt="" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_mPUY8n5pYcGguE7FMFV5kefsGr61UllN5pv4YfZ3naRQOBX97fYydIofsnbHIC_06-0XUgjT0ApjhPBiR1RM2bjNodO7ogvrAOpVYnHG3wVEHx6Mnrs_-qgAujLVaDTv9iWuDMiSu7BRVuf45qg-ce-KWexniqfYeLX3CPi5wQUBRE7qBGnnehXrOtYLtYBTyrhLj2-l7i7FfMXCwkRBX5AYXHD_1QnjmGbYmuUkKEkNJrcIr-RtPU4GTJeFy7lCDqu7v62G12U"/>
                  <span className="text-sm font-medium text-primary">Tanisha Jones</span>
                </td>
                <td className="px-6 py-3 text-sm font-semibold text-green-600 bg-green-50/50">98/80</td>
                <td className="px-6 py-3 text-sm font-medium text-primary">8/14</td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-primary">95</span>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 cursor-pointer">
                <td className="px-6 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">AS</div>
                  <span className="text-sm font-medium text-primary">Aaliyah Sun</span>
                </td>
                <td className="px-6 py-3 text-sm font-medium text-primary">78/80</td>
                <td className="px-6 py-3 text-sm font-medium text-primary">9/14</td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-primary">84</span>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </td>
              </tr>
              
            </tbody>
            <tfoot className="sticky bottom-0 bg-slate-50 z-10 border-t border-slate-200">
              <tr className="text-sm font-bold text-primary">
                <td className="px-6 py-4">
                  Average
                  <div className="text-[10px] text-outline mt-1">% meeting expectation</div>
                  <div className="text-[10px] text-outline">Trend</div>
                </td>
                <td className="px-6 py-4">
                  86
                  <div className="text-[10px] text-outline mt-1">41%</div>
                  <div className="text-[10px] text-green-600">+2.2%</div>
                </td>
                <td className="px-6 py-4">
                  8
                  <div className="text-[10px] text-outline mt-1">38%</div>
                  <div className="text-[10px] text-green-600">+0.9%</div>
                </td>
                <td className="px-6 py-4">
                  84
                  <div className="text-[10px] text-outline mt-1">72%</div>
                  <div className="text-[10px] text-red-600">-0.4%</div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
      {/* Right Side Panel */}
      <aside className="w-80 flex-shrink-0 flex flex-col bg-white overflow-y-auto border-l border-slate-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <button className="flex items-center text-sm font-semibold text-secondary hover:underline">
              <ChevronLeft className="w-4 h-4 mr-1" />
              All metrics
            </button>
          </div>
          
          {/* Driving Score Overview */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-primary font-bold mb-4">
              <Truck className="w-5 h-5 text-green-600" />
              Driving score
            </div>
            <div className="mx-auto relative inline-flex flex-col items-center justify-center p-8 bg-green-50/50 rounded-full border-2 border-green-200/50 w-40 h-40">
              <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest mb-1">Expectation 14</p>
              <p className="text-5xl font-black text-green-700">92</p>
              <p className="text-[10px] text-outline font-semibold mt-1">User score</p>
            </div>
            <p className="text-[11px] text-outline font-semibold mt-4">Bonus for reaching expectation: $15.00</p>
            <div className="h-2 w-full bg-slate-100 rounded-full mt-2 overflow-hidden flex">
              <div className="h-full bg-green-500" style={{width: '92%'}}></div>
            </div>
          </div>
          
          {/* Breakdown Metrics */}
          <div className="space-y-4 mb-8">
            {['Harsh braking', 'Idle time', 'Seat belt usage', 'Harsh cornering', 'Harsh acceleration'].map((metric) => (
              <div key={metric} className="flex items-center justify-between group cursor-help">
                <div className="flex items-center gap-3">
                  <Info className="w-4 h-4 text-outline group-hover:text-primary transition-colors" />
                  <p className="text-sm font-medium text-on-surface-variant">{metric}</p>
                </div>
                <span className="text-[11px] text-outline font-semibold">(20% of score)</span>
              </div>
            ))}
          </div>
          
          {/* Explanation Section */}
          <div className="bg-surface-container-low p-4 rounded-xl border border-indigo-50">
            <h4 className="text-sm font-bold text-primary mb-2">What is Driver Safety Score?</h4>
            <p className="text-[11px] text-on-surface-variant leading-relaxed mb-4">
              A driver safety score, often used in telematics, reflects a driver's risk of causing accidents. It's based on specific behaviors and compliance recorded by the vehicle. The scale from 0 to 100, with higher scores representing safer habits.
            </p>
            
            <h4 className="text-sm font-bold text-primary mb-2">How it is calculated</h4>
            <ul className="space-y-1.5">
              {['Harsh braking = 20% of total score', 'Idle time = 20% of total score', 'Seat belt usage = 20% of total score', 'Harsh cornering = 20% of total score', 'Hard acceleration = 20% of total score'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[10px] text-on-surface-variant">
                  <span className="mt-1 w-1 h-1 rounded-full bg-primary flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
