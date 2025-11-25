import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  Gift, 
  MessageCircle, 
  Star, 
  RefreshCw, 
  Bell,
  ExternalLink,
  X,
  Box,
  Droplet,
  AlertTriangle,
  Map as MapIcon,
  Share2,
  Layers,
  Plus,
  Navigation,
  Calendar,
  Scan,
  ChevronDown
} from 'lucide-react';
import { AppRoute } from '../types';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [hasNotification, setHasNotification] = useState(true);
  const [showUsageModal, setShowUsageModal] = useState(false);
  const [autoOrder, setAutoOrder] = useState(false);
  const [expandedRoutineStep, setExpandedRoutineStep] = useState<number | null>(0);

  // Pack Usage Mock Data
  const totalVolume = 75; // ml
  const currentVolume = 45; // ml
  const percentage = (currentVolume / totalVolume) * 100;

  const handleShare = async () => {
    const shareData = {
      title: 'Plum Coconut Squalane Serum',
      text: 'Loving my Plum Coconut Squalane Nutri-Shine Hair Serum! 💜✨',
      url: 'https://plumgoodness.com/products/plum-coconut-squalane-nutri-shine-hair-serum-contains-coconut-oil-squalene-almond-oil-smoothens-and-adds-glossy-shine-paraben-free-100-vegan',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      alert('Sharing is supported on mobile devices.');
    }
  };

  const routineSteps = [
    { step: '01', title: 'Cleanse', name: 'Coconut Shampoo', desc: 'Soft Cleanse', price: '₹349', img: 'https://images.unsplash.com/photo-1631729371254-42c2a89ddf0d?q=80&w=400&auto=format&fit=crop' },
    { step: '02', title: 'Treat', name: 'Hair Mask', desc: 'Deep Condition', price: '₹550', img: 'https://images.unsplash.com/photo-1556228552-603be3301d31?q=80&w=400&auto=format&fit=crop' },
    { step: '03', title: 'Boost', name: 'Scalp Serum', desc: 'Root Strength', price: '₹450', img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="flex flex-col min-h-full pb-24 relative bg-[#FDFBFF]">
      
      {/* HEADER: Linear Gradient with Animated Blobs */}
      <div className="bg-gradient-to-br from-[#6A1B9A] to-[#4A0072] pt-12 pb-32 rounded-b-[50px] relative overflow-hidden z-0 animate-fade-in shadow-2xl">
        {/* Background Patterns - ANIMATED */}
        <div className="absolute top-0 left-0 w-[200%] h-[200%] opacity-10 animate-pan pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2.5px)', backgroundSize: '30px 30px' }}>
        </div>
        
        {/* Decorative Animated Blobs */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF8A80] rounded-full blur-[60px] opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#F3E5F5] rounded-full blur-[50px] opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 right-10 w-48 h-48 bg-white rounded-full blur-[40px] opacity-10 animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 left-1/2 w-32 h-32 bg-[#6A1B9A] rounded-full blur-[30px] opacity-40 mix-blend-overlay animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="px-6 flex justify-between items-start relative z-10">
          <div className="flex flex-col items-start">
             {/* Logo */}
             <img 
               src="https://plumgoodness.com/cdn/shop/files/Plum_Logo_Purple_160x.png?v=1614333649" 
               alt="Plum" 
               className="h-10 w-auto mb-4 brightness-0 invert drop-shadow-md"
             />
             <h1 className="text-3xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
               Hello, <span className="text-[#FF8A80]">Beautiful!</span>
             </h1>
             <p className="text-[#F3E5F5]/90 text-sm font-bold mt-1 tracking-wide">Welcome to your smart experience</p>
          </div>

          <button 
            onClick={() => navigate(AppRoute.NOTIFICATIONS)}
            className="relative p-2.5 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 active:scale-90"
          >
            <Bell size={22} className="text-white" />
            {hasNotification && (
              <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-[#FF8A80] border-2 border-[#4A0072] rounded-full shadow-sm animate-bounce"></span>
            )}
          </button>
        </div>
      </div>

      {/* HERO SECTION: Circular Layout with Side Buttons */}
      <div className="px-4 -mt-24 mb-8 relative z-10 animate-slide-up flex flex-col items-center text-center" style={{ animationDelay: '0.1s' }}>
        
        <div className="flex items-center justify-between w-full mb-6 max-w-[400px]">
             {/* LEFT: Tracking Icon */}
             <button 
                onClick={() => navigate(AppRoute.JOURNEY)}
                className="flex flex-col items-center gap-2 group transition-transform duration-200 active:scale-90"
             >
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-xl border-2 border-white/50 flex items-center justify-center text-[#6A1B9A] transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-active:scale-95">
                     <Navigation size={28} strokeWidth={2.5} className="fill-[#F3E5F5]" />
                 </div>
                 <span className="text-sm font-black text-white uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-opacity group-hover:opacity-100 shadow-black">Track</span>
             </button>

             {/* CENTER: Circular Image Container */}
             <div className="relative w-48 h-48 mx-2 group">
                  {/* Decorative Rings */}
                  <div className="absolute inset-0 rounded-full border-[6px] border-white shadow-2xl z-20 transition-all duration-500 group-hover:shadow-[#6A1B9A]/30"></div>
                  <div className="absolute -inset-2 rounded-full border-2 border-[#F3E5F5]/50 animate-pulse-slow z-10"></div>
                  
                  {/* Image */}
                  <div className="w-full h-full rounded-full bg-white overflow-hidden relative z-20 flex items-center justify-center p-2">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop" 
                        alt="Coconut Hair Serum" 
                        className="w-full h-full object-contain transform scale-110 transition-transform duration-700 ease-out group-hover:scale-125 drop-shadow-xl" 
                      />
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute bottom-4 right-2 z-30 bg-white rounded-full p-1.5 shadow-lg border border-gray-100 animate-bounce-subtle">
                      <div className="bg-green-100 p-1.5 rounded-full">
                          <CheckCircle size={16} className="text-green-600 fill-current" />
                      </div>
                  </div>
             </div>

             {/* RIGHT: AR Scan Icon */}
             <button 
                onClick={() => navigate(AppRoute.AR_SCAN)}
                className="flex flex-col items-center gap-2 group transition-transform duration-200 active:scale-90"
             >
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-xl border-2 border-white/50 flex items-center justify-center text-[#6A1B9A] transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-active:scale-95">
                     <Scan size={28} strokeWidth={2.5} />
                 </div>
                 <span className="text-sm font-black text-white uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-opacity group-hover:opacity-100 shadow-black">AR View</span>
             </button>
        </div>

        {/* Product Title Card - FULL WIDTH */}
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-[32px] shadow-xl border border-white w-full transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
             <h3 className="text-2xl font-black text-gray-900 leading-tight mb-2 tracking-tight">
               Coconut Squalane<br/><span className="text-[#6A1B9A]">Nutri-Shine Serum</span>
             </h3>
             <p className="text-xs text-gray-500 font-extrabold uppercase tracking-widest mb-5">75ml • Batch #PLM2023</p>

             <div className="flex gap-2 justify-center w-full">
                  <a 
                    href="https://plumgoodness.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 text-[10px] font-extrabold text-white bg-[#6A1B9A] px-5 py-3.5 rounded-xl shadow-lg shadow-[#6A1B9A]/30 hover:bg-[#4A0072] hover:-translate-y-0.5 hover:shadow-xl transition-all active:scale-95 tracking-wide uppercase duration-200"
                  >
                    View Website <ExternalLink size={12} strokeWidth={3} />
                  </a>
                  <button
                    onClick={handleShare}
                    className="w-12 flex items-center justify-center bg-gray-50 rounded-xl text-[#6A1B9A] border border-gray-100 hover:bg-[#F3E5F5]/50 hover:-translate-y-0.5 hover:shadow-md transition-all active:scale-95 shadow-sm duration-200"
                  >
                    <Share2 size={20} strokeWidth={2.5} />
                  </button>
              </div>
        </div>
      </div>

      {/* Quick Actions - Bright Cards */}
      <div className="px-6 grid grid-cols-4 gap-3 mb-8 relative z-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        {[
          { icon: ShieldCheck, label: 'Authentic', path: AppRoute.AUTHENTICITY, color: 'text-green-600', bg: 'bg-green-50' },
          { icon: HelpCircle, label: 'Usage', path: AppRoute.INFO, color: 'text-blue-600', bg: 'bg-blue-50' },
          { icon: Gift, label: 'Rewards', path: AppRoute.REWARDS, color: 'text-orange-600', bg: 'bg-orange-50' },
          { icon: Star, label: 'Reviews', path: AppRoute.REVIEW, color: 'text-yellow-600', bg: 'bg-yellow-50' },
        ].map((item, idx) => (
          <button 
            key={idx}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-2 group transition-transform duration-200 active:scale-90"
          >
            <div className="w-[76px] h-[76px] bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-active:scale-95 group-active:shadow-none">
              <div className={`w-11 h-11 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                 <item.icon size={24} strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-[11px] font-black text-[#4A0072] uppercase tracking-wide group-hover:text-[#6A1B9A] transition-colors">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Product Journey Teaser - New Card */}
      <div className="px-6 mb-10 animate-slide-up" style={{ animationDelay: '0.25s' }}>
        <div 
            className="relative rounded-[28px] overflow-hidden shadow-xl group cursor-pointer active:scale-[0.98] transition-all" 
            onClick={() => navigate(AppRoute.JOURNEY)}
        >
           {/* Background Image */}
           <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3]" 
                alt="Map Background" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A0072]/90 to-[#6A1B9A]/40 mix-blend-multiply"></div>
           </div>

           <div className="relative p-6 flex flex-col items-start text-white">
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl mb-3 border border-white/10">
                 <MapIcon size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-1 tracking-tight">Farm to Bottle Journey</h3>
              <p className="text-xs font-bold text-[#F3E5F5] mb-4 max-w-[80%] leading-relaxed">
                Trace the origin of your coconuts from Kerala to your doorstep.
              </p>
              
              <button className="bg-white text-[#6A1B9A] text-xs font-extrabold px-5 py-2.5 rounded-xl uppercase tracking-wide shadow-lg hover:bg-gray-50 transition-all flex items-center gap-2 group-hover:gap-3">
                 View Timeline <ArrowRight size={14} strokeWidth={3} />
              </button>
           </div>
        </div>
      </div>

      {/* Usage Section (Smart Refill) */}
      <div className="mb-10 relative z-10 px-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
         <div className="flex justify-between items-end mb-4">
            <h3 className="font-extrabold text-gray-900 text-xl tracking-tight">My Usage</h3>
            <span className="text-[10px] text-[#6A1B9A] font-black uppercase tracking-wider bg-[#F3E5F5]/50 px-2.5 py-1 rounded-lg">
              Track & Refill
            </span>
         </div>
         
         <div className="bg-white rounded-[28px] p-6 shadow-xl shadow-[#6A1B9A]/5 border border-gray-100 transition-all hover:shadow-2xl duration-500">
            {/* Header Stats */}
            <div className="flex justify-between items-baseline mb-4">
               <div>
                  <h4 className="text-3xl font-black text-gray-900 tracking-tight">
                    {currentVolume}<span className="text-sm text-gray-400 font-extrabold ml-1 uppercase tracking-wide">ml left</span>
                  </h4>
               </div>
               <div className="text-right">
                   <span className="text-2xl font-black text-[#6A1B9A]">{Math.round(percentage)}%</span>
               </div>
            </div>

            {/* Linear Progress Bar */}
            <div className="h-4 bg-gray-100 w-full rounded-full mb-6 overflow-hidden shadow-inner">
               <div 
                 className="h-full bg-gradient-to-r from-[#6A1B9A] to-[#4A0072] rounded-full transition-all duration-1000 ease-out relative" 
                 style={{width: `${percentage}%`}}
               >
                 <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse"></div>
               </div>
            </div>
            
            {/* Smart Refill Options */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-5 border border-gray-100 flex justify-between items-center transition-colors hover:bg-gray-100/80">
                <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-xl text-[#6A1B9A] shadow-sm border border-gray-50">
                        <Calendar size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-wide mb-0.5">Est. Refill Date</p>
                        <p className="text-sm font-black text-gray-900">Nov 24, 2023</p>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>
                <div className="flex flex-col items-end">
                     <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Auto-Order</span>
                        <button 
                            onClick={() => setAutoOrder(!autoOrder)}
                            className={`w-10 h-6 rounded-full relative transition-colors duration-300 ease-in-out ${autoOrder ? 'bg-[#6A1B9A]' : 'bg-gray-300'}`}
                        >
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${autoOrder ? 'translate-x-5' : 'translate-x-1'}`}></div>
                        </button>
                     </div>
                     <span className={`text-[9px] font-black uppercase tracking-wide transition-all duration-300 ${autoOrder ? 'text-green-600 opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        Enabled
                     </span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
               <button 
                 onClick={() => setShowUsageModal(true)}
                 className="flex-1 py-3.5 rounded-xl bg-gray-50 text-gray-600 text-xs font-extrabold uppercase tracking-wide hover:bg-gray-100 transition-all active:scale-95 border border-gray-200"
               >
                 View Tips
               </button>
               <button 
                 onClick={() => navigate(AppRoute.REFILL)}
                 className="flex-1 py-3.5 rounded-xl bg-[#6A1B9A] text-white text-xs font-extrabold uppercase tracking-wide shadow-lg shadow-[#6A1B9A]/20 hover:bg-[#4A0072] hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 flex items-center justify-center gap-2"
               >
                 <RefreshCw size={14} strokeWidth={3} /> Reorder
               </button>
            </div>
         </div>
      </div>

      {/* Recommended Routine - Accordion */}
      <div className="mb-8 px-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="flex justify-between items-center mb-5">
          <div>
             <h3 className="font-extrabold text-gray-900 text-xl tracking-tight">Curated Routine</h3>
             <p className="text-xs text-gray-500 font-bold mt-0.5 uppercase tracking-wide">Complete the look</p>
          </div>
          <div className="bg-[#F3E5F5] p-3 rounded-xl">
            <Layers size={20} className="text-[#6A1B9A]" strokeWidth={2.5} />
          </div>
        </div>
        
        <div className="space-y-3">
          {routineSteps.map((item, idx) => {
            const isExpanded = expandedRoutineStep === idx;
            return (
              <div key={idx} className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-md border-[#6A1B9A]/20' : ''}`}>
                <button
                    onClick={() => setExpandedRoutineStep(isExpanded ? null : idx)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-100 transition-colors active:bg-gray-100"
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-2 transition-all duration-300 ${isExpanded ? 'bg-[#6A1B9A] text-white border-[#6A1B9A] scale-110' : 'bg-white text-gray-400 border-gray-200'}`}>
                            {item.step}
                        </div>
                        <div className="text-left">
                            <span className="text-[10px] font-black uppercase tracking-wider text-[#6A1B9A] block mb-0.5">{item.title}</span>
                            <span className="text-sm font-bold text-gray-900">{item.name}</span>
                        </div>
                    </div>
                    <div className={`transition-transform duration-300 text-gray-400 ${isExpanded ? 'rotate-180 text-[#6A1B9A] scale-110' : ''}`}>
                        <ChevronDown size={20} strokeWidth={2.5} />
                    </div>
                </button>

                <div 
                    className={`transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden bg-white ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="p-4 pt-0 border-t border-gray-100 mt-2 flex gap-4 items-center">
                        <img src={item.img} alt={item.name} className="w-16 h-16 rounded-xl object-cover shadow-sm hover:scale-105 transition-transform" />
                        <div className="flex-1">
                            <p className="text-xs text-gray-500 font-bold mb-3">{item.desc}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-black text-gray-900">{item.price}</span>
                                <button className="bg-[#6A1B9A] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide flex items-center gap-1 shadow-md shadow-[#6A1B9A]/20 hover:bg-[#4A0072] hover:shadow-lg active:scale-95 transition-all">
                                    Add <Plus size={10} strokeWidth={4} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-6 pb-10 text-center pt-10 bg-gradient-to-b from-transparent to-[#F3E5F5]/20 -mx-0 animate-fade-in">
          <div className="inline-block p-4 rounded-full bg-white text-gray-400 mb-4 shadow-sm animate-bounce-subtle">
             <Box size={20} strokeWidth={1.5} />
          </div>
          <p className="text-[10px] font-extrabold text-[#6A1B9A] uppercase tracking-widest mb-2">
            Marketed By
          </p>
          <img 
               src="https://plumgoodness.com/cdn/shop/files/Plum_Logo_Purple_160x.png?v=1614333649" 
               alt="Plum" 
               className="h-6 w-auto mx-auto mb-2 opacity-80"
          />
          <p className="text-xs text-gray-600 font-extrabold mb-8 tracking-wide">
            Pureplay Skin Sciences (India) Pvt Ltd
          </p>
          
          <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 opacity-60">
            <span className="font-bold uppercase tracking-wider">Tech Partner</span>
            <span className="w-1 h-1 rounded-full bg-gray-400"></span>
            <span className="font-black tracking-wide">OCX Labs</span>
          </div>
      </div>

      {/* Floating Chat Bubble (Ask an Expert) - FIXED POSITIONING */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] pointer-events-none z-50 h-full">
         <div className="absolute bottom-[90px] right-4 flex flex-col items-end pointer-events-auto">
             {/* Tooltip */}
             <div className="bg-white px-4 py-2.5 rounded-l-2xl rounded-t-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 animate-fade-in origin-bottom-right mb-2 mr-1">
                <p className="text-xs font-extrabold text-gray-800">Hi! Need hair advice? 👋</p>
             </div>
             
             <button 
                onClick={() => navigate(AppRoute.CHAT)}
                className="w-14 h-14 bg-[#4A0072] text-white rounded-full shadow-xl shadow-[#6A1B9A]/40 hover:scale-110 hover:-rotate-12 active:scale-90 transition-all duration-300 flex items-center justify-center border-2 border-white animate-bounce-subtle"
             >
               <MessageCircle size={24} className="fill-white/20" strokeWidth={2.5} />
             </button>
         </div>
      </div>

      {/* Usage Details Modal (Bottom Sheet) */}
      {showUsageModal && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center pointer-events-none">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#4A0072]/40 backdrop-blur-sm pointer-events-auto transition-opacity animate-fade-in"
            onClick={() => setShowUsageModal(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-white w-full max-w-[430px] rounded-t-[40px] p-6 pb-10 shadow-2xl relative pointer-events-auto animate-slide-up max-h-[85vh] overflow-y-auto no-scrollbar">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>
            <button 
              onClick={() => setShowUsageModal(false)}
              className="absolute top-6 right-6 w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors active:scale-90"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2 tracking-tight">
               Usage Guide
            </h2>

            <div className="space-y-8">
              {/* Recommended Usage */}
              <div>
                <h3 className="text-xs font-black text-[#6A1B9A] mb-5 uppercase tracking-widest flex items-center gap-2">
                  <Droplet size={14} strokeWidth={3} /> Recommended Routine
                </h3>
                <ul className="space-y-5">
                  {[
                    { title: "Warm Up", text: "2–3 pumps between palms." },
                    { title: "Apply", text: "On towel-dried, damp hair." },
                    { title: "Any Hair Type", text: "Won't weigh hair down." }
                  ].map((step, i) => (
                     <li key={i} className="flex gap-4 items-start group">
                        <div className="w-7 h-7 rounded-full bg-[#6A1B9A] text-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-lg shadow-[#6A1B9A]/20 transition-transform group-hover:scale-110">
                           {i + 1}
                        </div>
                        <div>
                           <span className="block text-sm font-extrabold text-gray-900 mb-0.5">{step.title}</span>
                           <span className="text-sm text-gray-500 font-bold">{step.text}</span>
                        </div>
                     </li>
                  ))}
                </ul>
              </div>

              {/* Pack & Product Details */}
              <div className="p-6 bg-[#FDFBFF] rounded-[28px] border border-[#6A1B9A]/10 shadow-inner hover:bg-[#F3E5F5]/10 transition-colors">
                <h3 className="text-xs font-black text-gray-400 mb-4 uppercase tracking-widest">
                  Pack Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm pb-2 border-b border-gray-200/50">
                    <span className="text-gray-500 font-bold">Size</span>
                    <span className="font-extrabold text-gray-900">75 ml</span>
                  </div>
                  <div className="flex justify-between items-start text-sm pb-2 border-b border-gray-200/50">
                    <span className="text-gray-500 font-bold">Ingredients</span>
                    <span className="font-extrabold text-gray-900 text-right max-w-[60%]">Coconut Oil, Squalane, Almond Oil</span>
                  </div>
                </div>
              </div>

              {/* Limitations */}
              <div className="bg-orange-50 rounded-[28px] p-6 border border-orange-100 hover:shadow-md transition-shadow">
                <h3 className="text-xs font-black text-orange-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                  <AlertTriangle size={14} strokeWidth={3} /> Good to know
                </h3>
                <ul className="space-y-2 text-xs text-orange-900/70 font-bold list-disc pl-4 leading-relaxed">
                  <li>No heat protection provided.</li>
                  <li>Always patch-test before full usage.</li>
                  <li>Use consistently for best results.</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-100 text-center">
               <img 
                 src="https://plumgoodness.com/cdn/shop/files/Plum_Logo_Purple_160x.png?v=1614333649" 
                 alt="Plum" 
                 className="h-5 w-auto mx-auto opacity-40 grayscale"
               />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default HomeScreen;