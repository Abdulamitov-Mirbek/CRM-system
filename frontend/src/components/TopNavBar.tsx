import React from 'react';
import { Search, Bell, RefreshCw, Zap } from 'lucide-react';

export const TopNavBar = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-20 glass-panel z-40 px-8 flex items-center justify-between">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-velocity-cyan transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Omni-search contacts, deals, or signals..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-velocity-cyan/50 focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-velocity-purple/10 text-velocity-purple text-sm font-semibold hover:bg-velocity-purple/20 transition-all border border-velocity-purple/20">
          <RefreshCw size={16} />
          <span>Quick Sync</span>
        </button>

        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
          <button className="relative p-2 text-white/40 hover:text-white transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-velocity-cyan rounded-full shadow-neon-cyan" />
          </button>
          
          <div className="w-px h-6 bg-white/10" />
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-velocity-purple to-velocity-cyan p-[2px]">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-xs font-bold">
                <Zap size={14} className="text-velocity-cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
