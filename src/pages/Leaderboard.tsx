import { Trophy, Medal, Star, Heart, TrendingUp, ChevronUp, ChevronDown, Minus, MoreVertical, Banknote } from 'lucide-react';

export default function Leaderboard() {
  return (
    <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
      
      {/* Header & Filters */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-2">Company Leaderboard</h2>
          <p className="text-on-surface-variant max-w-xl">Celebrate momentum and track achievements across the global organization.</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Department</label>
            <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-secondary transition-all focus:outline-none">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Product</option>
              <option>Sales</option>
              <option>Customer Success</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Time Period</label>
            <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-secondary transition-all focus:outline-none" defaultValue="This Month">
              <option>This Week</option>
              <option>This Month</option>
              <option>All-time</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Metric Type</label>
            <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-semibold text-on-surface focus:ring-2 focus:ring-secondary transition-all focus:outline-none">
              <option>Zola Points</option>
              <option>Project Impact</option>
              <option>Peer Feedback</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-10 overflow-x-auto">
        <button className="px-6 py-3 border-b-2 border-primary text-primary font-bold text-sm flex items-center gap-2 whitespace-nowrap">
          <Star className="w-5 h-5 fill-current" />
          Reviews Leaderboard
        </button>
        <button className="px-6 py-3 border-b-2 border-transparent text-on-surface-variant hover:text-primary font-semibold text-sm flex items-center gap-2 transition-colors whitespace-nowrap">
          <Heart className="w-5 h-5" />
          NPS Leaderboard
        </button>
        <button className="px-6 py-3 border-b-2 border-transparent text-on-surface-variant hover:text-primary font-semibold text-sm flex items-center gap-2 transition-colors whitespace-nowrap">
          <Banknote className="w-5 h-5" />
          Tips Earned
        </button>
      </div>

      {/* Top 3 Podium (Visual Treatment) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-16">
        
        {/* Second Place */}
        <div className="order-2 md:order-1 bg-white p-6 rounded-2xl shadow-[0_20px_30px_rgba(45,50,130,0.05)] border border-slate-100 flex flex-col items-center text-center transform transition-all hover:-translate-y-2">
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-full border-4 border-slate-300 p-1">
              <img alt="Jane Smith" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYXTbMjT5Bcgshp5AWoa6JNPzh0SHKSRvatF6vOBKlPc19MYe9eRopVwqi1xE7dycYgzK6brBHFxTwSZdgckw7gGS9vHhgMVGfGgNQ4rSIy2kIO6ChN5bb_3mm9OoHQrzw6CoowCFxXqf_v1UFz5ksPqK_To2Rl5SHOzTdWNDxOfbUuGHmdaSwWceuNFS4IVPPXYCtv1BR-esDx1qsbffDnzAOGkXQGrCq1JEuxhieK30ec4uWMnYjlkfESb3wO2nT6b-oU2hqf38"/>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center text-white border-4 border-white font-bold text-xs">2</div>
          </div>
          <h3 className="text-xl font-bold text-primary">Jane Smith</h3>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-tight mb-3">Product Design</p>
          <div className="flex items-center gap-1 text-secondary font-bold text-xl">
            <Star className="w-5 h-5 fill-current" />
            2,840
          </div>
        </div>

        {/* First Place */}
        <div className="order-1 md:order-2 bg-white p-10 rounded-3xl shadow-[0_30px_50px_rgba(45,50,130,0.1)] border-2 border-indigo-50 flex flex-col items-center text-center scale-105 z-10 transform transition-all hover:-translate-y-2">
          <div className="absolute -top-6">
            <Medal className="w-12 h-12 text-yellow-500 fill-current" />
          </div>
          <div className="relative mb-6">
            <div className="w-28 h-28 rounded-full border-4 border-yellow-500 p-1 shadow-xl">
              <img alt="Marcus Chen" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABkUemtkGiZdDib_6iCDVlPIGCjOVfEyN9dgCN-wPvxCHkc6FHHgFAAMCsk1lsn-hWZ9yaRQYNNgXAecn-Wj_623Q-zxARf4N-iS_Qp2-VzLfgoB0-6IBrmRgcmVbSomDrfWBewVJowEpUbU8HA7ogb-uOtyTtnZCckFHtb18i7HEgtYoymv8JiWmD26l0V7sCh6hkHT7d2qaWmCmFj-5asAo_wIzVt_dQ2pjrBCsKhZp_UkRrG3kr-Hp9uszb0l8ufrT1fxzSVlA"/>
            </div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white border-4 border-white font-black text-sm">1</div>
          </div>
          <h3 className="text-3xl font-bold text-primary">Marcus Chen</h3>
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-tight mb-4">Engineering Architecture</p>
          <div className="flex items-center gap-2 text-indigo-700 font-black text-3xl">
            <Star className="w-6 h-6 fill-current" />
            3,125
          </div>
        </div>

        {/* Third Place */}
        <div className="order-3 bg-white p-6 rounded-2xl shadow-[0_20px_30px_rgba(45,50,130,0.05)] border border-slate-100 flex flex-col items-center text-center transform transition-all hover:-translate-y-2">
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-full border-4 border-amber-600 p-1 opacity-90">
              <img alt="Amara Okafor" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzahjB6fvNfzR2QIfRQnYUNCzLX8ud-3z8dkIlEcBoWfNm31qGC6yuq6P_46Bkg9BSsjhLkhRDOA_g-NMxyExvGVpIBoIzQ9399qvMmykCVMBXe3m-XZAAB0SaZ9vbnqh8xrUlV-kWUkMaUA9EIlT0v6fNc4zy0rwmcAQmo0geyzoOrdouyyqC8N3KNEy6420jbNHQc80NMI9FAMx8oFPV5Z8-v8IE5cNfEwtBxK1KZSLd-iB4m22Ns4ptY5fEf0cjoVqQmSno9vo"/>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white border-4 border-white font-bold text-xs">3</div>
          </div>
          <h3 className="text-xl font-bold text-primary">Amara Okafor</h3>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-tight mb-3">Customer Success</p>
          <div className="flex items-center gap-1 text-secondary font-bold text-xl">
            <Star className="w-5 h-5 fill-current" />
            2,410
          </div>
        </div>

      </div>

      {/* Your Rank Status */}
      <div className="bg-primary rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between text-white shadow-lg overflow-hidden relative gap-6">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <Trophy className="w-40 h-40 fill-current" />
        </div>
        
        <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
          <div className="w-16 h-16 rounded-full border-2 border-indigo-200 overflow-hidden flex-shrink-0">
            <img alt="Your Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEpYMXllBQbEC2N6LCakzKYbBrPMteSJ0dGkxGzoMZ1T25-x8MlUtqHANOy7A8xgfjaatttvJE7zA7WKa92j0REGx001AWiQ19k4wMfwvifzWXpX0BpH-H0iydgD6TmlzcdmOsB65D4NHIZ7lKJUuw1XGd4mXnCl6CjNnDk_1i8yW9Tvxyx-7Yb_VJc4r5nzTSGkp4NDu6e-8YPXQAQDGriHYl8TQQ6Vag9kIbRridB0hhkqBIOZsI2vxMmi2pCvojcr4eCqSIjpQ"/>
          </div>
          <div>
            <p className="text-xs font-bold text-indigo-200 tracking-widest mb-1">REVIEWS TO #10</p>
            <h4 className="text-2xl font-bold leading-none">Ranked #14 <span className="text-sm text-indigo-200 font-normal ml-2">Top 5% of company</span></h4>
          </div>
        </div>
        
        <div className="flex gap-6 relative z-10 w-full md:w-auto justify-between md:justify-end">
          <div className="text-right">
            <p className="text-xs font-bold text-indigo-200 tracking-widest mb-1">REVIEWS TO #10</p>
            <p className="text-2xl font-black">145 pts</p>
          </div>
          <div className="h-12 w-[1px] bg-white/20"></div>
          <div className="text-right pr-4">
            <p className="text-xs font-bold text-indigo-200 tracking-widest mb-1">TREND</p>
            <p className="text-2xl font-black flex items-center gap-1 text-green-400">
              <TrendingUp className="w-6 h-6" />
              +2
            </p>
          </div>
        </div>
      </div>

      {/* List Table */}
      <div className="bg-white rounded-2xl shadow-[0_20px_30px_rgba(0,0,0,0.02)] border border-slate-100 overflow-hidden">
        
        <div className="grid grid-cols-12 gap-4 px-8 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="col-span-1 text-xs font-bold tracking-widest text-slate-400">RANK</div>
          <div className="col-span-6 text-xs font-bold tracking-widest text-slate-400">PERFORMER</div>
          <div className="col-span-2 text-xs font-bold tracking-widest text-slate-400 text-right">REVIEWS</div>
          <div className="col-span-3 text-xs font-bold tracking-widest text-slate-400 text-right">TREND</div>
        </div>

        {/* Item 4 */}
        <div className="grid grid-cols-12 gap-4 px-8 py-6 border-b border-slate-50 items-center hover:bg-slate-50 transition-colors cursor-pointer hover:shadow-inner">
          <div className="col-span-1 font-black text-xl text-slate-400">4</div>
          <div className="col-span-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200">
              <img alt="David Low" className="rounded-full w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD30YHGidHx-4K1e_T6zrT9rUwndDLK7aTt8Glx7-lRhahFt2mtvYoAeqx-Txs-be7pKy1PLwJ5swl7O47Q6gQD09da8gU06wh4yhRw5sMiVy2Ywzysx_bxtNDlkYTKJg7r3U8Ee13cLDhnNvep5BL93FWO15daFqkdk8OaRt1Lli0Ovkd3LMH9fvi4VqfOyj8TncRUbrSxVv__8kiin7SMhMNEWYc8iY7FrvQMibCbFFRFg_JVAumFnX6b3vFLfd5UXQIaHzXfgn0"/>
            </div>
            <div>
              <h5 className="font-bold text-indigo-900">David Low</h5>
              <p className="text-xs text-slate-500">Global Sales</p>
            </div>
          </div>
          <div className="col-span-2 text-right font-bold text-indigo-900">2,180</div>
          <div className="col-span-3 text-right flex justify-end">
            <span className="flex items-center gap-1 text-green-500 font-semibold text-sm">
              <ChevronUp className="w-5 h-5" /> 1 spot
            </span>
          </div>
        </div>

        {/* Item 5 */}
        <div className="grid grid-cols-12 gap-4 px-8 py-6 border-b border-slate-50 items-center hover:bg-slate-50 transition-colors cursor-pointer hover:shadow-inner">
          <div className="col-span-1 font-black text-xl text-slate-400">5</div>
          <div className="col-span-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200">
              <img alt="Elena Kuznetsova" className="rounded-full w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaffo_w9-3EfjASXs2lWjULbsU0PcjZ5j4iEFoSKO8VTcjk6xt3T1o3uRLUxkqznus5M4hoW5KLZzrCLE1qeJpAkF_7OmfM1rumihwECMar4eUn-QKUuTx2WkPjP6fCgjXTMqgieSUm3hbFWfaaBBLCf7DvgWXlkJ_3268VBmJu5GpXI1lOaYrV9XtCYlkkiSze5iwVpSD5LsZJcQIlQ4LpwtwP-2D3V92JDY3VhqHMTa627WUgcd3XK-nll16CGThEyv0ja99XzQ"/>
            </div>
            <div>
              <h5 className="font-bold text-indigo-900">Elena Kuznetsova</h5>
              <p className="text-xs text-slate-500">Engineering</p>
            </div>
          </div>
          <div className="col-span-2 text-right font-bold text-indigo-900">2,050</div>
          <div className="col-span-3 text-right flex justify-end">
            <span className="flex items-center gap-1 text-slate-400 font-semibold text-sm">
              <Minus className="w-4 h-4" /> Static
            </span>
          </div>
        </div>

        {/* Item 6 */}
        <div className="grid grid-cols-12 gap-4 px-8 py-6 border-b border-slate-50 items-center hover:bg-slate-50 transition-colors cursor-pointer hover:shadow-inner">
          <div className="col-span-1 font-black text-xl text-slate-400">6</div>
          <div className="col-span-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200">
              <img alt="Tom Wilson" className="rounded-full w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_OMfhKDeuYR6R-LgOHB17KGTjJRRTzkXI1GCsT7498-GX090wz1GOGciV8Fd-hkIqgW7g1XLYuxNTSb8pW8ycblPr2qaZu_9A2gqnBOcsQaSIEV_5NR4FLk9pzqmjR8iHlOu0gE0JNBVm6tdrDh3cOWlh7PPtfEpiY7T0cyT8mp9md_YqKdG92H5Dob-K1L3ZDQPpHoasKCve0iGJy6sYJLugK3QX7ChVvrWEl9vaLass65N1sdru6TN3ZmLN93kOynriGamLseU"/>
            </div>
            <div>
              <h5 className="font-bold text-indigo-900">Tom Wilson</h5>
              <p className="text-xs text-slate-500">Operations</p>
            </div>
          </div>
          <div className="col-span-2 text-right font-bold text-indigo-900">1,995</div>
          <div className="col-span-3 text-right flex justify-end">
            <span className="flex items-center gap-1 text-red-500 font-semibold text-sm">
              <ChevronDown className="w-5 h-5" /> 2 spots
            </span>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex justify-center py-4 bg-slate-50/20">
          <MoreVertical className="w-5 h-5 text-slate-300" />
        </div>

        {/* Your Row */}
        <div className="grid grid-cols-12 gap-4 px-8 py-6 bg-indigo-50/50 border-y border-indigo-100 items-center">
          <div className="col-span-1 font-black text-xl text-indigo-700">14</div>
          <div className="col-span-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-indigo-600 overflow-hidden">
              <img alt="Alex Rodriguez" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHQvfAwZ09EU00_bjDkOqlL0rdovgERIgg_mslPMN7DRIg_TG_kCV0HZrYBaJHIS4MGkqczkpA0c-fbW7nkrHhFHT-VHaclIM5kGDVVVoaugYV4cAv4YZPZounlhsX7aCIb1eVRyIyAqM73j3HK9gVftJ8Z6-yqpoZ_6kg9BXFkHU3dOUCVBWBp7Jhox8vZ2HUgP9kDRsjAneeT06RaKjUz8YURphernaRsv9bEteF2yqmCGuMJ5afun9ocaqaqcTZpTh4JBrOVHg"/>
            </div>
            <div>
              <h5 className="font-bold text-indigo-900 flex items-center gap-2">
                Alex Rodriguez 
                <span className="text-[10px] bg-indigo-600 text-white px-1.5 py-0.5 rounded uppercase tracking-widest">You</span>
              </h5>
              <p className="text-xs text-slate-500">Marketing Strategy</p>
            </div>
          </div>
          <div className="col-span-2 text-right font-bold text-indigo-900">1,480</div>
          <div className="col-span-3 text-right flex justify-end">
            <span className="flex items-center gap-1 text-green-500 font-semibold text-sm">
              <ChevronUp className="w-5 h-5" /> 2 spots
            </span>
          </div>
        </div>

        {/* Load more footer */}
        <div className="flex justify-center py-6 hover:bg-slate-50 transition-colors">
          <button className="text-secondary font-bold text-sm flex items-center gap-2 hover:underline">
            View Full 100 Performers
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
