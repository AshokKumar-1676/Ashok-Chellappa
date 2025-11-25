import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Info, Map as MapIcon, Gift } from 'lucide-react';
import { AppRoute } from '../types';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: AppRoute.HOME },
    { id: 'info', label: 'Info', icon: Info, path: AppRoute.INFO },
    { id: 'journey', label: 'Journey', icon: MapIcon, path: AppRoute.JOURNEY },
    { id: 'rewards', label: 'Rewards', icon: Gift, path: AppRoute.REWARDS },
  ];

  if (location.pathname === AppRoute.LOADING) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div className="w-full max-w-[430px] bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] pb-safe pt-2 pointer-events-auto rounded-t-2xl">
        <div className="flex justify-around items-center px-2 pb-4 pt-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center p-2 transition-all duration-300 ${
                  isActive ? 'text-plum-primary transform -translate-y-1' : 'text-gray-400 hover:text-plum-primary/70'
                }`}
              >
                <div className={`p-1.5 rounded-xl transition-colors duration-300 ${isActive ? 'bg-plum-light' : 'bg-transparent'}`}>
                  <item.icon size={22} strokeWidth={isActive ? 3 : 2} />
                </div>
                <span className={`text-[10px] font-extrabold mt-1 tracking-wide uppercase ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;