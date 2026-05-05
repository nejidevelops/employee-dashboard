import { NavLink } from 'react-router-dom';
import { Home, Zap, BarChart2, Trophy, User, Star, HelpCircle, LogOut } from 'lucide-react';

export default function SideNavBar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
      isActive 
        ? 'text-indigo-700 bg-indigo-50/80 font-bold' 
        : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50 font-semibold'
    }`;

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-slate-100 bg-white py-6 flex-col hidden md:flex z-40">
      <nav className="flex-1 px-3 space-y-1">
        <NavLink to="/" className={navLinkClass}>
          <Home className="w-5 h-5" />
          <span className="text-sm">Home</span>
        </NavLink>
        <NavLink to="/activity" className={navLinkClass}>
          <Zap className="w-5 h-5" />
          <span className="text-sm">Activity</span>
        </NavLink>
        <NavLink to="/scorecard" className={navLinkClass}>
          <BarChart2 className="w-5 h-5" />
          <span className="text-sm">Scorecard</span>
        </NavLink>
        <NavLink to="/leaderboard" className={navLinkClass}>
          <Trophy className="w-5 h-5" />
          <span className="text-sm">Leaderboard</span>
        </NavLink>
        <NavLink to="/profile" className={navLinkClass}>
          <User className="w-5 h-5" />
          <span className="text-sm">Profile</span>
        </NavLink>
      </nav>
      
      <div className="px-6 mt-4">
        <button className="w-full bg-primary text-white font-bold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-all">
          <Star className="w-4 h-4 fill-current" />
          Give Praise
        </button>
      </div>
      
      <div className="px-3 mt-auto border-t border-slate-100 pt-4">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-all text-sm font-medium">
          <HelpCircle className="w-5 h-5" />
          Help Center
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all text-sm font-medium">
          <LogOut className="w-5 h-5" />
          Sign Out
        </a>
      </div>
    </aside>
  );
}
