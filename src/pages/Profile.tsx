import { Mail, Star, Heart, Rocket, Medal, Zap, Users, CheckCircle, Lock, TrendingUp } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500 pb-16 md:pb-0">
      
      {/* Profile Header Card */}
      <div className="bg-white rounded-2xl p-8 shadow-[0_4px_30px_rgba(21,25,108,0.05)] flex flex-col lg:flex-row items-center lg:items-end gap-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary to-secondary opacity-10"></div>
        
        <div className="relative z-10">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <img alt="Marcus Sterling" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq4VbvXXdiV1BGFPxKHJF7OSxMtb_cI5YcD6GFb4nor24hFNP_ZejhkPnPeCV6SOcDow3b0Q-lZCxgdHJn7BihuVABcMlX5JuOApwVfO3PCPIPEuQC9E5_RrgT3QItlM3Ks5Ll7r_zW6pE_nKyLQi-wZ5-x3iHoJYWg34yym8jJdAgoWfzXR8yzj3owM4S3zdQL5kSda0MPRTaC12YR1hYvEsOwsS4b3g56R-WqpiCXGqJaS2sqv6DVBi26lpnQ3BQTMNZ8QShHs4"/>
          </div>
        </div>
        
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mb-2">
            <h2 className="text-3xl font-bold text-primary">Marcus Sterling</h2>
            <span className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">
              SR. PRODUCT DESIGNER
            </span>
          </div>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed">
            Passionate about building intuitive experiences and mentoring upcoming talent. Currently leading the design system initiative for the core platform. Always fueled by collaboration and strong coffee.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 z-10 w-full lg:w-auto">
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-95">
            <Star className="w-5 h-5 fill-current" /> Applaud Marcus
          </button>
          <button className="border-2 border-secondary text-secondary px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary/10 transition-all active:scale-95">
            <Mail className="w-5 h-5" /> Message
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Recognition History (Timeline) */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(21,25,108,0.05)]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-on-surface">Recognition History</h3>
            <span className="text-secondary text-xs font-bold cursor-pointer hover:underline">VIEW ALL</span>
          </div>
          
          <div className="space-y-8 relative">
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-100"></div>
            
            {/* Recognition Item 1 */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center border-4 border-white shadow-sm">
                <Star className="w-3 h-3 text-secondary fill-current" />
              </div>
              <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary">Sarah Jenkins</span>
                    <span className="text-slate-400 text-sm">• 2 days ago</span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">+50 pts</span>
                </div>
                <p className="text-on-surface-variant italic text-sm">"Marcus went above and beyond on the Q3 roadmap presentation. His visual storytelling made complex data easy for stakeholders to digest!"</p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">#Excellence</span>
                  <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">#Teamwork</span>
                </div>
              </div>
            </div>
            
            {/* Recognition Item 2 */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-4 border-white shadow-sm">
                <Heart className="w-3 h-3 text-primary fill-current" />
              </div>
              <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary">Engineering Team</span>
                    <span className="text-slate-400 text-sm">• 1 week ago</span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">+100 pts</span>
                </div>
                <p className="text-on-surface-variant italic text-sm">"Amazing collaboration on the handoff for the new dashboard. Marcus provided every asset and spec we could ever need. Super smooth!"</p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded">#Efficiency</span>
                </div>
              </div>
            </div>
            
            {/* Recognition Item 3 */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center border-4 border-white shadow-sm">
                <Rocket className="w-3 h-3 text-slate-600 fill-current" />
              </div>
              <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary">Dave Thompson</span>
                    <span className="text-slate-400 text-sm">• 2 weeks ago</span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">+25 pts</span>
                </div>
                <p className="text-on-surface-variant italic text-sm">"Great insights during the design sprint. Marcus really challenged our assumptions and led us to a better outcome."</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* Right Column: Stats & Skills */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Points Summary */}
          <div className="bg-primary rounded-2xl p-6 text-white shadow-[0_4px_30px_rgba(21,25,108,0.05)] overflow-hidden relative">
            <div className="absolute -right-4 -top-4 opacity-10">
              <Star className="w-32 h-32 fill-current" />
            </div>
            <h4 className="text-xs font-bold opacity-80 mb-4 tracking-widest">LIFETIME Zola</h4>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-5xl font-black">2,850</span>
              <span className="text-lg font-bold opacity-80 mb-1">PTS</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 mt-6">
              <div className="bg-white h-full rounded-full w-[75%]"></div>
            </div>
            <p className="text-xs mt-3 opacity-80">150 points until next rank: <span className="font-bold">Platinum Performer</span></p>
          </div>

          {/* Badges */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(21,25,108,0.05)]">
            <h3 className="text-xl font-bold text-on-surface mb-6">Earned Badges</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                  <Medal className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <span className="text-[10px] font-bold text-slate-500">Mentorship</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                  <Zap className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <span className="text-[10px] font-bold text-slate-500">Fast Mover</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                  <Users className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <span className="text-[10px] font-bold text-slate-500">Cultural Hub</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <span className="text-[10px] font-bold text-slate-500">Top Rated</span>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                  <Rocket className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <span className="text-[10px] font-bold text-slate-500">Innovator</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center mb-2">
                  <Lock className="w-6 h-6 text-slate-300" />
                </div>
                <span className="text-[10px] font-bold text-slate-400">Locked</span>
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(21,25,108,0.05)]">
            <h3 className="text-xl font-bold text-on-surface mb-6">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {['Product Strategy', 'UX Design', 'Prototyping', 'Design Systems', 'User Research', 'A/B Testing', 'Micro-interactions'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-slate-100 text-primary text-sm font-semibold rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Team Collaboration (Asymmetric Section) */}
      <div className="bg-white rounded-2xl p-8 shadow-[0_4px_30px_rgba(21,25,108,0.05)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-on-surface mb-4">Collaborators</h3>
            <p className="text-on-surface-variant mb-6 text-sm">Marcus frequently works with these top contributors from across the organization.</p>
            
            <div className="flex -space-x-4 mb-4">
              <img alt="Team member" className="w-14 h-14 rounded-full border-4 border-white shadow-sm hover:z-10 transition-transform cursor-pointer object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo8xUWlSAdC7_sDi7Wbfsxtd0uPPPYZh7eomSdV_73RXigfnoBcTt075herJv1p7EmfVYWGZUP23bXWiuQ42t0Jjr2MGWj5j9fYLGOKUGdNN7jdot5g0ZPWd1gvaeatPC49izJZ-S-j-jF43AB6MVu34__BxrFriqcRXrSrZbRIiD4nZnC1qf9xLJjkJb_EUeumk_0OFLW0hFSXA1-SUalYRhBJYlDbFhsTMEpELyTyiBgaPGVVP4baGr9UdVHPGY08WTu27pGkLc"/>
              <img alt="Team member" className="w-14 h-14 rounded-full border-4 border-white shadow-sm hover:z-10 transition-transform cursor-pointer object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrxJm-UFpmMbecOQ3sp9qagslYydoYfkJd1IiYnrNCmMLd1_82a-yYQEvClSNlhDZTiRmAovQRVFQwxdNEGvwIyOGDuttFCxwfx8fkm1HXLmBwDuGYt3YGXHOZLBPAkF7JKLbI2MKI7r604-51nFki_MSp_T5TM2qvq4jIuuUqW7uZy3Q52w3mY_R1kk8pwjekp1Xc87B-OD8SJSh6py5TO9mk3-tkNXaxfA6dhFfBTMWsSwdJmWPl4k63ObQYxOgdKmpaWq2t1a0"/>
              <img alt="Team member" className="w-14 h-14 rounded-full border-4 border-white shadow-sm hover:z-10 transition-transform cursor-pointer object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1f3VgcS76CN73i9gcr9ORjaA_qPb05wiDGXMFDR5C3VCh68IbcAM0C_xLk8vOmG2ZAJR7-lx96EUB2o6KeKP_i8pM_HqfEUfYtot9w9y9Y39pOll9GtHsfwJsnKKIRi4iDtiLxf6XxZ7oZPOVxUxZKbXm7APfCk47hO8mXhBKIgwUOLF2YDz4_icIkYZSc93AkFaLiYdxyviP4-UqYojZgc5HCDA15lsz_gZhhuxrT7lIlvX4POkMFf_ahnesORxHGPSUKlrINBg"/>
              <div className="w-14 h-14 rounded-full border-4 border-white shadow-sm bg-slate-100 flex items-center justify-center text-primary font-bold hover:z-10 transition-transform cursor-pointer">+12</div>
            </div>
          </div>
          
          <div className="bg-indigo-50/50 rounded-xl p-6 relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-primary">Momentum</h4>
                <p className="text-sm text-on-surface-variant">Top 5% of Applauded Designers this month</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-black text-primary">12</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Streaks</div>
              </div>
              <div className="w-px h-10 bg-slate-100"></div>
              <div className="text-center">
                <div className="text-2xl font-black text-primary">4.9</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rating</div>
              </div>
              <div className="w-px h-10 bg-slate-100"></div>
              <div className="text-center">
                <div className="text-2xl font-black text-primary">85%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
