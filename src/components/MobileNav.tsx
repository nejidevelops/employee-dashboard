import { NavLink } from 'react-router-dom';
import { Home, Zap, Star, Trophy, User } from 'lucide-react';

export default function MobileNav() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `flex flex-col items-center gap-1 ${
      isActive ? 'text-secondary font-bold' : 'text-slate-400'
    }`;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 flex justify-around py-3 px-2 z-50">
      <NavLink to="/" className={navLinkClass}>
        {({ isActive }) => (
          <>
            <Home className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
            <span className="text-[10px]">Home</span>
          </>
        )}
      </NavLink>
      <NavLink to="/activity" className={navLinkClass}>
        <Zap className="w-6 h-6" />
        <span className="text-[10px]">Activity</span>
      </NavLink>
      
      <div className="relative -top-8">
        <button className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-primary/40 border-4 border-white active:scale-95 transition-transform">
          <Star className="w-6 h-6 fill-current" />
        </button>
      </div>
      
      <NavLink to="/leaderboard" className={navLinkClass}>
        <Trophy className="w-6 h-6" />
        <span className="text-[10px]">Leaderboard</span>
      </NavLink>
      <NavLink to="/profile" className={navLinkClass}>
        <User className="w-6 h-6" />
        <span className="text-[10px]">Profile</span>
      </NavLink>
    </nav>
  );
}
