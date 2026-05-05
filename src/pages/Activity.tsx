import { List, Banknote, Star, Cake, PartyPopper, Coins, Heart, MessageCircle, BadgeCheck, MoreHorizontal, Share2, Medal, TrendingUp } from 'lucide-react';

export default function Activity() {
  return (
    <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Sidebar Filters (Desktop) */}
        <div className="hidden xl:block col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(21,25,108,0.05)] sticky top-24 border border-slate-100">
            <h3 className="text-xl font-bold text-on-background mb-4">Filters</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-indigo-50 text-primary font-semibold text-sm">
                <span className="flex items-center gap-2">
                  <List className="w-5 h-5" /> All Activity
                </span>
                <span className="bg-indigo-100 px-2 py-0.5 rounded text-[10px]">24</span>
              </button>
              <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 font-semibold text-sm transition-colors">
                <span className="flex items-center gap-2">
                  <Banknote className="w-5 h-5" /> Tips & Wins
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-[10px]">New</span>
              </button>
              <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 font-semibold text-sm transition-colors">
                <span className="flex items-center gap-2">
                  <Star className="w-5 h-5" /> Recognitions
                </span>
              </button>
              <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 font-semibold text-sm transition-colors">
                <span className="flex items-center gap-2">
                  <Cake className="w-5 h-5" /> Anniversaries
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Center Feed */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-6 space-y-6">
          
          {/* Mobile Tabs */}
          <div className="xl:hidden flex bg-white p-1 rounded-xl shadow-sm border border-slate-100 mb-6">
            <button className="flex-1 py-2 text-sm font-bold bg-indigo-50 text-primary rounded-lg">All Activity</button>
            <button className="flex-1 py-2 text-sm font-semibold text-slate-500">Tips & Wins</button>
          </div>

          {/* Feed Grouped by Time */}
          <div className="space-y-8">
            
            {/* TODAY SECTION */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Today</h2>
                <div className="h-[1px] flex-1 bg-slate-100"></div>
              </div>
              
              <div className="space-y-6">
                
                {/* TIP RECEIVED */}
                <article className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(21,25,108,0.05)] p-6 border-2 border-yellow-100 overflow-hidden group hover:shadow-[0_20px_40px_rgb(255,215,0,0.12)] transition-all">
                  <div className="absolute top-0 right-0 p-4 pointer-events-none">
                    <PartyPopper className="text-yellow-400 w-10 h-10 opacity-20 animate-bounce" />
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400 ring-4 ring-yellow-50">
                        <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQWtQxiZEzGUYmWFOJF8UO6k1YzUK8H6F2C7ejKf0tYPo5vXMg6thUgzAXfqT1fLnbtz_DK-5C6UNdJE43gmEV_WpdlL2V2Y_kl1UuN4Z1BVDYoCJjRC_sB4AFWzMXPTDAWQp9BYKKWix6gbBFRfDli0D7_KYfUtLvQXk7KTIYxVRjyn-hBDN7-KdNfdymJ_JdlcLZLriwJfU-Sg_nr8vDi47K7DFYFvShqNzk0zVsN0rofCgO7ubFyOU0eIlJhU4kjvyvbrTo4Bg"/>
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-yellow-400 p-1 rounded-full shadow-sm">
                        <Coins className="w-3.5 h-3.5 text-white fill-current" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500">You received a <span className="font-bold text-yellow-600">Gold Star Tip</span> from <span className="font-bold text-on-background">Elena Rodriguez</span></p>
                      <p className="text-xs text-slate-400 mt-0.5">30 mins ago • Operations Excellence</p>
                    </div>
                  </div>
                  
                  <div className="pl-16">
                    <div className="bg-yellow-50/50 rounded-xl p-5 border-l-4 border-yellow-400 relative">
                      <p className="text-on-background italic leading-relaxed">
                        "Thank you for going above and beyond on the project migration last night. The $50 bonus is well deserved! 🎉"
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-6">
                      <button className="flex items-center gap-2 px-4 py-2 bg-yellow-100/50 hover:bg-yellow-100 rounded-full transition-colors group">
                        <Heart className="w-5 h-5 text-yellow-600 fill-current" />
                        <span className="text-sm font-bold text-yellow-700">Appreciate Back</span>
                      </button>
                      <button className="flex items-center gap-2 group">
                        <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                        <span className="text-sm font-semibold text-slate-500">Reply</span>
                      </button>
                    </div>
                  </div>
                </article>

                {/* Recognition Post */}
                <article className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(21,25,108,0.05)] p-6 transition-all hover:shadow-[0_20px_40px_rgb(21,25,108,0.08)] border border-slate-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
                        <img alt="Sarah Chen" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKskahyZjsD9NPvAmFh_FB8QzGInBQgteGhYT49GLvHbOQz6GNQNUtbPVR5fIEqBxZmNyuVLC29vZ8Lwxr47N2T8UAKTssy44W91cQFOnn0CyZwfD--52WDDDHwTqdAmxTj8fCgnNULvGqZym9TndC36S9eAYdY_dlrvje3XTKFX95kExhjaKLCCmTQd0X1yv3dspVI-XQPUU9VkYwUvBYpqTRScbnQLGYr1FC4huUh2rOLMU1R02j0RqSRrj_H9KCsw1IkuzDqxI"/>
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
                        <BadgeCheck className="w-4 h-4 text-secondary fill-current" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500"><span className="font-bold text-on-background">Sarah Chen</span> recognized <span className="font-bold text-on-background">Marcus Thorne</span></p>
                      <p className="text-xs text-slate-400 mt-0.5">2 hours ago • Product Design</p>
                    </div>
                    <button className="text-slate-300 hover:text-slate-500 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="pl-16">
                    <div className="bg-indigo-50/50 rounded-xl p-5 border-l-4 border-secondary relative overflow-hidden">
                      <p className="text-on-background italic leading-relaxed">
                        "Marcus did an incredible job leading the Q3 design sprint. His attention to user edge cases and collaborative spirit made all the difference! 🚀"
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white rounded-full text-[11px] font-bold text-secondary uppercase tracking-wider shadow-sm border border-slate-100">#TeamPlayer</span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-6">
                      <button className="flex items-center gap-2 group">
                        <Heart className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />
                        <span className="text-sm font-semibold text-slate-500 group-hover:text-on-background">12</span>
                      </button>
                      <button className="flex items-center gap-2 group">
                        <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                        <span className="text-sm font-semibold text-slate-500 group-hover:text-on-background">4</span>
                      </button>
                      <button className="flex items-center gap-2 group ml-auto">
                        <Share2 className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                      </button>
                    </div>
                  </div>
                </article>

              </div>
            </section>

            {/* YESTERDAY SECTION */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Yesterday</h2>
                <div className="h-[1px] flex-1 bg-slate-100"></div>
              </div>

              <div className="space-y-6">
                {/* Work Anniversary Item */}
                <article className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-[0_8px_30px_rgb(21,25,108,0.05)] p-6 relative overflow-hidden border border-indigo-50">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-secondary to-primary flex-shrink-0">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img alt="David Miller" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjXUGlorn-TDVeYmWWXMtcL2KqhO9YKVMwLJ9UY58gWT984TKjWJ71Jjq3-af8yQZKH1opvc0TrErY-gF3PORTFjl2xf0DhI68W9iCGLjzMF9OLDE8Iwu-KAyqc0CyaQr3kAI64d_ISoGC9soEGkijcREVIgxGh53sKjEvRfirLGtLzsVpyGzJshw6FjXdjDlNhwL4YiXkLxyFEOHXxDVV-lb_JBpSoxiUtH2aHZMU41Mgyht346aZ6MU8oW8uywZrDZhzwBnHgWA"/>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-on-background">Happy 3rd Anniversary!</h4>
                      <p className="text-sm text-slate-500">Congratulations to <span className="text-primary font-bold">David Miller</span> on 3 years.</p>
                    </div>
                    <div className="text-center px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                      <span className="block text-xl font-black text-secondary">3</span>
                      <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Years</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <img alt="Avatar" className="w-6 h-6 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB40VQE1QxDN7krDowWRo1V4GLkkyhooC8qLMhrL8UVscVqgGn1DrnSyrKC-c6R4MoJvDMoca1KgL-v14Zm6ZG910ur1CDyLTSLyKio4f3hlKn0j2fU20MsF0lw8Ce74NCyM95hV5TQpSTmAJPeuaKS4F2DKZ35kHa6bd4j97exZeYKIaZXnJ1ZCkXU4o25qm2z7I78cFPZH42ZQuj-Z9FFbJq-9usiUlHrgXCQO9ATz1beIaltj2Q8_458A1Ux9pXpsBwi2cd04v4"/>
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-bold">+8</div>
                    </div>
                    <p className="text-xs font-semibold text-slate-400">sent wishes</p>
                    <button className="ml-auto py-2 px-4 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-sm">Congratulate</button>
                  </div>
                </article>

                {/* Recognition Post */}
                <article className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(21,25,108,0.05)] p-6 transition-all hover:shadow-[0_20px_40px_rgb(21,25,108,0.08)] border border-slate-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100">
                        <img alt="Elena Rodriguez" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBODEvRUzPz23IbeSJB1T4t3MI-t7EO4aSQlFN_PWdEkmnkxlgRAIFEn0sPGTSFZ0BzCXnqfba4-Y1Up5ASIdIwg7v6bxVVaOYk2g86MIKXm6oVejMxMBYdnsRVfrT8AZGH4TGNQsh8A6qY6EFwAZAJOr0LxLDXRLVyBEq6FMle4cBqJmh5j7EXq-ohzfDict7qVaCubDM4aFt8lGSqmtpE-4kTpF_bxi7GGCORVWLnfv4rCudhoUmLFBlcDZJh694OMONAFx8GNQc"/>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500"><span className="font-bold text-on-background">Elena Rodriguez</span> recognized <span className="font-bold text-on-background">Design Team</span></p>
                      <p className="text-xs text-slate-400 mt-0.5">18 hours ago • Ops</p>
                    </div>
                  </div>
                  
                  <div className="pl-16">
                    <p className="text-on-background leading-relaxed">
                      Major shoutout to the entire design crew for the brand refresh. The new system is incredibly cohesive and intuitive!
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                        <img alt="Work" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeLNedHtx8-GCB-9hARXEyE-HhCOy7oRUoKd-DXOrbC7w1Nhbj1AHmhDVIM_Q1d84oEt4IQJVufxK39mf8g4re1sHKoAEDYRy3950-IcYWWd84dY1aDkWg7HXp1tgf68-Jc7Y5aEt9X6Y4nTlYvflBxUTItYop6ajdOtcNJxq_VYpFQxEO3AiVNSlrUhKcC2Ex9XIdHyTPU5cgGOflmwhppZCHyO7MVhLmCQ0UaMh2JvaDr0wAHoKS0QabN3jmEfuGAOHykDsLc_8"/>
                      </div>
                      <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                        <img alt="Design System" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjQsAQzZHw1uM-EE7bPtozWcNe9J6iLiU96YMTXV1SJyQsvB2AbBe96FsiVXG6qF-QVQp5JQiKIWsoFhEMC7XGJ27x9IxEI48MhHpGpP2odBi0ZpvycCfFGtb4G3RmSqFqIsAg4VA1z6ie3AdY--jcRQOweyIS85kimWUA3n-Cleeklv7H0keYgjH4DwysN9qunhA28b3CmjpeCWK5ctOfrZWd1lcs3gHuQxQfAL-djVW_Gqb9kgXUZiegYktmw445kegd21utSag"/>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-6">
                      <button className="flex items-center gap-2 group">
                        <Heart className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />
                        <span className="text-sm font-semibold text-slate-500 group-hover:text-on-background">34</span>
                      </button>
                      <button className="flex items-center gap-2 group">
                        <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                        <span className="text-sm font-semibold text-slate-500 group-hover:text-on-background">8</span>
                      </button>
                    </div>
                  </div>
                </article>

              </div>
            </section>

          </div>
        </div>

        {/* Right Sidebar - Statistics / Trends */}
        <div className="hidden lg:block col-span-4 xl:col-span-3 space-y-6">
          
          {/* Personal Performance */}
          <div className="bg-gradient-to-br from-primary to-indigo-900 p-6 rounded-xl shadow-lg text-white mb-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 text-sm">
              <Medal className="w-5 h-5 text-yellow-400" />
              Personal Wins
            </h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-black">$240</span>
              <span className="text-indigo-200 text-xs mb-1">Total Appreciation</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-indigo-200">Monthly Goal</span>
                <span className="font-bold">80%</span>
              </div>
              <div className="h-1.5 bg-indigo-800/50 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 w-[80%]"></div>
              </div>
            </div>
          </div>

          {/* Trending Section */}
          <div className="bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(21,25,108,0.05)] border border-slate-100">
            <h3 className="text-xl font-bold text-on-background mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary" />
              Activity Trends
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recognitions</span>
                  <span className="text-sm font-black text-primary">+12%</span>
                </div>
                <div className="h-2 bg-indigo-50 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[72%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(21,25,108,0.05)] border border-slate-100">
            <h3 className="text-xl font-bold text-on-background mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
                  <img alt="James" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8ViWu7hTZFAOlC9GZZQTwk8ADnTBGL1AfsHUmV4PxUgCczZ5kUBxWHZFJiOV4LRgK4qMpCq44QXrMkt-xVdF9u7ZYLuQSn_fJzZdNbuZgTP2JlxEnulpkV1pt3eYYq7_WL3ex1_xOyoX4ntouq0MzKSYdiK1hh_BVjPTNzYA5FjLpjDIMRYQaOegnoYoR9rLf9ftCQk8DSs-AdfyO5UbhGtx_-oV0jWh7c8XTNlM3Dblc3qd-NObaL4go4Gn7lLTKy9_kPtYxvtQ"/>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-on-background leading-tight">James Wilson</p>
                  <p className="text-[11px] text-slate-400">Birthday • Tomorrow</p>
                </div>
                <Cake className="w-4 h-4 text-secondary" />
              </div>
            </div>
            <button className="w-full mt-6 py-2 text-xs font-bold text-primary hover:text-secondary transition-colors border-t border-slate-50 pt-4">View All Events</button>
          </div>

        </div>

      </div>
    </div>
  );
}
