import { Search, Bell, Settings } from 'lucide-react';

export default function TopAppBar() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 h-16 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="flex items-center gap-6">
        <span className="text-xl font-black text-indigo-900 tracking-tight">Zola</span>
        <div className="hidden md:flex items-center bg-slate-100/50 px-4 py-2 rounded-full border border-slate-100">
          <Search className="text-slate-400 w-5 h-5 mr-2" />
          <input 
            className="bg-transparent border-none focus:outline-none text-sm w-64" 
            placeholder="Search the community..." 
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-50 transition-colors rounded-full cursor-pointer active:scale-95 duration-150 text-slate-500">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-slate-50 transition-colors rounded-full cursor-pointer active:scale-95 duration-150 text-slate-500">
          <Settings className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
          <img 
            alt="User profile" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByzfD0ob4x6hRjWnLS4ebBm7itYAksi5GwtHtlmV2036yFN9sAEhW5a42n5vLX1ajB0aQlt5dXVFrvl4Bx8g88iFpRdZ05gpq0ORfdkOWXY-MEx9J4W8ZWJ5n5WowTRLFNjEppXv7cVSRMTujTGpJHXXpzMg1d3ZehcF0_nZQyplIHPJd4tY74ceQAjBSJlcdwT1NMD5nCbOpQp5rcB0d5dxkKpUBqgWJooeqRYxmiijzL2cUv_xsVB-j1TqF1JISxS6yHCnvT7G4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
