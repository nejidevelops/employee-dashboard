import { PartyPopper, Zap, Check, Sparkles, Info, PiggyBank, ShoppingBag, Coffee, Award, Handshake, Gauge, Clock, Coins, Quote, Heart, MessageCircle, Lightbulb, ChevronDown } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-on-background tracking-tight">Good morning, Alex! 👋</h1>
          <p className="text-on-surface-variant text-base mt-1">Ready for another day of making an impact?</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-secondary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 active:scale-95">
            <PartyPopper className="w-5 h-5 fill-current" />
            Give Zola
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Individual Focus & Progress */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Today's Focus */}
          <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(21,25,108,0.08)] border border-slate-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-indigo-900 flex items-center gap-2">
                <Zap className="text-amber-500 w-5 h-5 fill-current" />
                Today's Focus
              </h3>
              <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">1/3 Done</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-400 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-200"></div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-on-background">Secure a 5-star Google Review</span>
                    <span className="text-[10px] text-slate-400">Goal: 1 review</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-400">0/1</span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 border border-transparent hover:border-slate-200 transition-colors cursor-pointer group">
                <div className="w-6 h-6 rounded-full border-2 border-teal-500 bg-teal-500/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-teal-500" strokeWidth={4} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-slate-500 line-through">Maintain NPS score above 75 today</span>
                  <span className="text-[10px] text-teal-500 font-bold">Current: 86 NPS</span>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-secondary/30 transition-colors cursor-pointer">
                <div className="w-6 h-6 rounded-full border-2 border-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-on-background">Complete 100% seat belt usage</span>
                  <span className="text-[10px] text-slate-400">Safety compliance goal</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Your Wins */}
          <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(21,25,108,0.08)] border border-slate-100 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Your Wins</span>
                <Sparkles className="text-amber-500 w-5 h-5 fill-current" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">12,450</span>
                <span className="text-teal-500 font-bold text-sm">Points available</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mt-4">
                <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full w-[75%]"></div>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-3 font-semibold flex items-center gap-1">
                <Info className="w-3 h-3" />
                Only 550 points until your "Executive Badge" upgrade!
              </p>
            </div>
          </div>

          {/* Tips & Earnings */}
          <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(21,25,108,0.08)] border border-amber-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-indigo-900 flex items-center gap-2">
                <PiggyBank className="text-amber-500 w-5 h-5 fill-current" />
                Tips & Micro-bonuses
              </h3>
              <span className="text-[10px] bg-white px-2 py-1 rounded-full font-bold text-amber-500 border border-amber-100 shadow-sm">NEW</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <ShoppingBag className="text-teal-500 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-900">Customer Gratitude</p>
                    <p className="text-[10px] text-slate-500">Quick help with order #124</p>
                  </div>
                </div>
                <span className="font-bold text-teal-500">+$15.00</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Coffee className="text-amber-500 w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-900">Sarah J. sent a coffee</p>
                    <p className="text-[10px] text-slate-500">For the great presentation</p>
                  </div>
                </div>
                <span className="font-bold text-amber-500">+$5.00</span>
              </div>
            </div>
            <button className="w-full mt-4 py-2.5 text-xs font-bold text-indigo-900 hover:bg-amber-100/50 rounded-lg transition-colors border border-dashed border-amber-200">
              View Earning History
            </button>
          </div>

          {/* Achievements */}
          <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(21,25,108,0.08)] border border-slate-100">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-4">Milestone Badges</span>
            <div className="flex justify-around">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary shadow-[0_0_0_2px_white,0_0_0_4px_#0262ff]">
                  <Award className="w-8 h-8 fill-current" />
                </div>
                <span className="text-[10px] font-bold text-center">Innovator</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-50">
                <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                  <Handshake className="w-8 h-8 fill-current" />
                </div>
                <span className="text-[10px] font-bold text-center">Team Hero</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-50">
                <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                  <Gauge className="w-8 h-8 fill-current" />
                </div>
                <span className="text-[10px] font-bold text-center">Velocity</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2.5 bg-slate-50 text-indigo-700 font-bold text-sm rounded-xl hover:bg-indigo-100 transition-colors">
              View Trophy Room
            </button>
          </div>
        </div>

        {/* Right Column: Wall of Fame */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(21,25,108,0.08)] border border-slate-100 h-full flex flex-col overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-gradient-to-r from-white to-slate-50/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                  <PartyPopper className="text-secondary w-5 h-5 fill-current" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-indigo-900">Wall of Fame</h2>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wide">Celebrate our community</p>
                </div>
              </div>
              <div className="flex gap-2 p-1 bg-slate-100 rounded-full">
                <button className="px-4 py-1.5 text-xs font-bold rounded-full transition-all text-slate-500 hover:text-indigo-900">Everyone</button>
                <button className="px-4 py-1.5 text-xs font-bold bg-white text-indigo-900 rounded-full shadow-sm">My Circle</button>
              </div>
            </div>
            
            {/* Recognition Feed */}
            <div className="flex-1 p-6 space-y-8 overflow-y-auto">
              
              {/* Feed Item 1 */}
              <div className="group relative bg-white transition-all duration-300">
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-secondary shadow-[0_0_0_2px_white,0_0_0_4px_#0262ff] rotate-3 group-hover:rotate-0 transition-transform">
                      <img alt="Sarah Jenkins" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3AEqFg2gY-D-mjY7pmozOVUZU4sqpWbPcyv7iUuQB7LDxqks8LaZRdN7-ZBuOVy_4R94iF3_GG6y6ckJxqyIEF7pDKIaSec9St4aaxEMOOURjUDAmvk5V9IcIpgSvE70SgqbDWvgiTmIPTd1eFLRiXL9W9BfAhBX1xVsJKjql_mUJUdOvdcuJBDuh-EuGcPLJYnom5_ybSIIx-xySRWG4bJwAHe1g8bYBG_nvB2vNrniZ3Z0HvinmNGL00pd-zWLrts-S4r314gA" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white rounded-full p-1.5 border-2 border-white shadow-md">
                      <Award className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm font-bold text-indigo-900">Sarah Jenkins <span className="text-slate-400 font-normal">celebrated</span> Michael Chen</p>
                        <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> 2 hours ago • <span className="text-secondary font-bold">#CustomerObsession</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-teal-500 bg-teal-50 px-2 py-1 rounded-lg border border-teal-100">
                        <span className="text-xs font-black">+250</span>
                        <Coins className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                    <div className="mt-3 bg-gradient-to-br from-white to-blue-50 p-5 rounded-2xl border border-blue-50 italic text-indigo-900/80 text-base relative shadow-sm">
                      "Michael went above and beyond to help a client during the server migration. His calm demeanor and technical expertise saved the day! Truly an inspiration to the team."
                      <Quote className="absolute -top-3 -left-2 text-indigo-200 w-8 h-8 opacity-50 fill-current" />
                    </div>
                    <div className="mt-4 flex items-center gap-6">
                      <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-secondary transition-all hover:scale-105">
                        <Heart className="w-5 h-5 fill-current" /> 12 Claps
                      </button>
                      <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-secondary transition-all hover:scale-105">
                        <MessageCircle className="w-5 h-5" /> 3 Comments
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feed Item 2 */}
              <div className="group relative bg-white transition-all duration-300">
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-slate-100 -rotate-2 group-hover:rotate-0 transition-transform">
                      <img alt="David Miller" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR3fVPjaysof3dsmbln8E_ftFzFglZi56IoiOeVQbgAbJbN1vAvuLTY-tXbV8x_XS7G9xSYrK7R2DYDm9vDscQGJztgnY10-ZAH7DtQu2PHMOWGPEwOiiGVmkwM49SP3JIDBaE54bIS9OxBOZ4cC7JjYR_Og5aGfuLQdB_YA8wtN8yo1PnXqRB8RJsv_Qmcr6-khgFqWYUy5R8av9xjCG5YHKMtRoGIJb9BzH8Z-KXbBb39Vq58SNLbBHa-UO6c_KBoH6-w7CTZrw" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white rounded-full p-1.5 border-2 border-white shadow-md">
                      <Lightbulb className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm font-bold text-indigo-900">David Miller <span className="text-slate-400 font-normal">shouted out</span> The UX Team</p>
                        <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> 5 hours ago • <span className="text-secondary font-bold">#Innovation</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-teal-500 bg-teal-50 px-2 py-1 rounded-lg border border-teal-100">
                        <span className="text-xs font-black">+500</span>
                        <Coins className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                    <div className="mt-3 bg-slate-50/50 p-5 rounded-2xl border border-slate-100 italic text-indigo-900/80 text-base relative">
                      "The new dashboard design is a game changer. The team worked tirelessly to balance data density with elegant aesthetics. Great work everyone!"
                      <Quote className="absolute -top-3 -left-2 text-slate-200 w-8 h-8 fill-current" />
                    </div>
                    <div className="mt-4 flex items-center gap-6">
                      <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-secondary transition-all">
                        <Heart className="w-5 h-5" /> 28 Claps
                      </button>
                      <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-secondary transition-all">
                        <MessageCircle className="w-5 h-5" /> 8 Comments
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feed Item 3 */}
              <div className="group relative bg-white transition-all duration-300">
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-slate-100">
                      <img alt="Jessica Wong" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Cknyy34cxw0rObjCTqZBJVZvqcINJ5CdcE4bPAuKhOa6i8LJyqTyh7SneWnYDgDeJ1xrc8-PXxGhMx1kZqYs0zqNnw3ATXicr74lpTK5OO-KgVZuJMnC4vifrqkxvtRAuQZifwpp1HX8AaAgUP9LBt72eA1iGtB-1HkXkprGxRy95kF9RtoWhlRtGh5tKY63djz-mtBflR4nPUx9FKS8kjLB8NYRrooD8EWpYB6B6MOrrCOFU52cpIOT3s20PP0h8769zLshnuw" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm font-bold text-indigo-900">Jessica Wong <span className="text-slate-400 font-normal">gave a high-five to</span> Liam O'Reilly</p>
                        <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Yesterday • <span className="text-secondary font-bold">#TeamSpirit</span>
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-indigo-900/80 text-base">Thanks for organizing the team lunch, Liam! It was exactly what we needed to recharge. 🥗✨</p>
                    <div className="mt-4 rounded-2xl overflow-hidden h-48 w-full relative group shadow-sm border border-slate-100">
                      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtp9ugrAHEsIT9X7h4TxBJS3Vv2M3jMGsB-zODr81l2AC4TDKWJCg18ruEeY0JAi708vVAVFR2KSAnb_bG08cby1ENpjhdoBP9Ee3wRveq_NrgsqOX7hPTQ21LJfHZYB8cddkN0bYSh1ss89B93iyZg69g4Zg8dTaEB3Xf2RdcPAnYckhh85LDFRgPL1QV24Ds9u9ts1K1nAjkQ6AJRFJUeyPp2ETJgSR_QgHHmDyjwsRomHK3WZ2IJsSdcYk4EbpWyG_Zq4J12HA" />
                      <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="bg-white text-indigo-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">View Album</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-6">
                      <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-secondary transition-all">
                        <Heart className="w-5 h-5" /> 45 Claps
                      </button>
                      <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-secondary transition-all">
                        <MessageCircle className="w-5 h-5" /> 15 Comments
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Load More */}
            <div className="p-6 bg-slate-50/50 border-t border-slate-50 text-center">
              <button className="text-sm font-bold text-indigo-700 hover:text-indigo-900 transition-colors flex items-center justify-center gap-2 mx-auto">
                <ChevronDown className="w-4 h-4" />
                See more recognitions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
