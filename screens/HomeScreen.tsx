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
  Navigation
} from 'lucide-react';
import { AppRoute } from '../types';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [hasNotification, setHasNotification] = useState(true);
  const [showUsageModal, setShowUsageModal] = useState(false);

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

  return (
    <div className="flex flex-col min-h-full pb-24 relative bg-[#FDFBFF]">
      
      {/* NEW BOLD HEADER */}
      <div className="bg-plum-deep pt-12 pb-24 rounded-b-[40px] relative overflow-hidden z-0 animate-fade-in">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2.5px)', backgroundSize: '20px 20px' }}>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-plum-primary rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute top-20 -left-10 w-32 h-32 bg-peach rounded-full blur-3xl opacity-20"></div>

        <div className="px-6 flex justify-between items-start relative z-10">
          <div className="flex flex-col items-start">
             {/* Logo - White Version via Filter */}
             <img 
               src="https://plumgoodness.com/cdn/shop/files/Plum_Logo_Purple_160x.png?v=1614333649" 
               alt="Plum" 
               className="h-10 w-auto mb-4 brightness-0 invert"
             />
             <h1 className="text-3xl font-black text-white leading-tight tracking-tight">
               Hello, <span className="text-peach">Beautiful!</span>
             </h1>
             <p className="text-plum-light/80 text-sm font-bold mt-1 tracking-wide">Welcome to your smart experience</p>
          </div>

          <button 
            onClick={() => navigate(AppRoute.NOTIFICATIONS)}
            className="relative p-2.5 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 hover:bg-white/20 transition-colors active:scale-95"
          >
            <Bell size={22} className="text-white" />
            {hasNotification && (
              <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-peach border-2 border-plum-deep rounded-full shadow-sm animate-bounce"></span>
            )}
          </button>
        </div>
      </div>

      {/* Hero Product Section - 3D Pop Out Effect */}
      <div className="px-6 -mt-16 mb-8 relative z-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="bg-white rounded-[32px] p-5 shadow-[0_15px_40px_rgba(74,0,114,0.1)] border border-white relative overflow-visible">
          
          <div className="flex items-center">
             {/* Text Content */}
            <div className="flex-1 pt-2 pb-2 pl-1">
              <div className="flex items-center gap-1.5 mb-2">
                 <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle size={12} className="text-green-600 fill-current" />
                 </div>
                 <span className="text-[10px] font-extrabold text-green-700 uppercase tracking-wider">Verified Authentic</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-1 leading-tight">
                Coconut Squalane<br/>Nutri-Shine
              </h3>
              <p className="text-xs text-gray-500 mb-5 font-extrabold uppercase tracking-wide">Serum • 75ml</p>
              
              <div className="flex gap-2">
                  <a 
                    href="https://plumgoodness.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-white bg-plum-primary px-4 py-3 rounded-xl shadow-lg shadow-plum-primary/30 hover:bg-plum-deep transition-all active:scale-95"
                  >
                    View Website <ExternalLink size={10} strokeWidth={3} />
                  </a>
                  <button
                    onClick={handleShare}
                    className="p-2.5 flex items-center justify-center bg-gray-50 rounded-xl text-plum-primary border border-gray-100 hover:bg-plum-light/50 transition-all active:scale-95"
                  >
                    <Share2 size={18} />
                  </button>
              </div>
            </div>

            {/* Floating Image */}
            <div className="w-[120px] shrink-0 relative -mr-2 -mt-8">
               {/* Glow effect behind bottle */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-plum-primary/20 rounded-full blur-2xl animate-pulse-slow"></div>
               <img 
                 src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop" 
                 alt="Coconut Hair Serum" 
                 className="w-full h-auto object-contain drop-shadow-2xl transform scale-110 animate-float" 
               />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions - Bright Cards */}
      <div className="px-6 grid grid-cols-4 gap-3 mb-10 relative z-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        {[
          { icon: ShieldCheck, label: 'Authentic', path: AppRoute.AUTHENTICITY, color: 'text-green-600', bg: 'bg-green-50' },
          { icon: HelpCircle, label: 'Usage', path: AppRoute.INFO, color: 'text-blue-600', bg: 'bg-blue-50' },
          { icon: Gift, label: 'Rewards', path: AppRoute.REWARDS, color: 'text-orange-600', bg: 'bg-orange-50' },
          { icon: Star, label: 'Review', path: AppRoute.REVIEW, color: 'text-yellow-600', bg: 'bg-yellow-50' },
        ].map((item, idx) => (
          <button 
            key={idx}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-[76px] h-[76px] bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-active:scale-95 group-active:shadow-none">
              <div className={`w-11 h-11 rounded-2xl ${item.bg} flex items-center justify-center ${item.color}`}>
                 <item.icon size={24} strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-[11px] font-extrabold text-gray-700 tracking-tight">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Usage Section (Redesigned - Linear Progress) */}
      <div className="mb-10 relative z-10 px-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
         <div className="flex justify-between items-end mb-4">
            <h3 className="font-extrabold text-gray-900 text-xl tracking-tight">My Usage</h3>
            <span className="text-[10px] text-plum-primary font-extrabold uppercase tracking-wider bg-plum-light px-2 py-1 rounded-md">
              Track & Refill
            </span>
         </div>
         
         <div className="bg-white rounded-[24px] p-6 shadow-xl shadow-plum-primary/5 border border-gray-100">
            {/* Header Stats */}
            <div className="flex justify-between items-baseline mb-3">
               <div>
                  <h4 className="text-3xl font-black text-gray-900 tracking-tight">
                    {currentVolume}<span className="text-sm text-gray-400 font-extrabold ml-1 uppercase">ml left</span>
                  </h4>
               </div>
               <div className="text-right">
                   <span className="text-2xl font-black text-plum-primary">{Math.round(percentage)}%</span>
               </div>
            </div>

            {/* Linear Progress Bar */}
            <div className="h-4 bg-gray-100 w-full rounded-full mb-2 overflow-hidden shadow-inner">
               <div 
                 className="h-full bg-gradient-to-r from-plum-primary to-plum-deep rounded-full transition-all duration-1000 ease-out relative" 
                 style={{width: `${percentage}%`}}
               >
                 <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse"></div>
               </div>
            </div>
            
            <p className="text-xs text-gray-500 font-bold mb-6 text-right">
               Used {totalVolume - currentVolume}ml of 75ml
            </p>

            {/* Actions */}
            <div className="flex gap-3">
               <button 
                 onClick={() => setShowUsageModal(true)}
                 className="flex-1 py-3 rounded-xl bg-gray-50 text-gray-600 text-xs font-extrabold hover:bg-gray-100 transition-colors border border-gray-200"
               >
                 View Tips
               </button>
               <button 
                 onClick={() => navigate(AppRoute.REFILL)}
                 className="flex-1 py-3 rounded-xl bg-plum-primary text-white text-xs font-extrabold shadow-lg shadow-plum-primary/20 hover:bg-plum-deep transition-colors flex items-center justify-center gap-2"
               >
                 <RefreshCw size={14} strokeWidth={3} /> Reorder
               </button>
            </div>
         </div>
      </div>

      {/* Immersive Journey Teaser - Redesigned */}
      <div className="px-6 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div 
          onClick={() => navigate(AppRoute.JOURNEY)}
          className="group relative h-44 rounded-[32px] overflow-hidden shadow-xl shadow-plum-primary/10 cursor-pointer border border-white"
        >
          {/* Background Image - Logistics Map Theme */}
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" 
            alt="Logistics Map" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-50 opacity-90"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-plum-deep/95 via-plum-deep/70 to-transparent"></div>
          
          <div className="absolute inset-0 p-7 flex flex-col justify-center text-white">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 shadow-inner border border-white/20">
              <Navigation size={18} className="text-white fill-white/20" />
            </div>
            <h3 className="text-2xl font-black leading-none mb-2 tracking-tight">Track Your<br/>Product</h3>
            <p className="text-xs text-white/80 font-bold mb-5 max-w-[65%] leading-relaxed">Trace the journey from source to your doorstep.</p>
            
            <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest bg-white text-plum-deep px-4 py-2 rounded-xl w-fit shadow-lg">
               <span>Start Tracking</span> <ArrowRight size={12} strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Routine - Redesigned */}
      <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <div className="px-6 flex justify-between items-center mb-5">
          <div>
             <h3 className="font-extrabold text-gray-900 text-xl tracking-tight">Curated Routine</h3>
             <p className="text-xs text-gray-500 font-bold mt-0.5">Complete the look</p>
          </div>
          <div className="bg-plum-light p-2.5 rounded-xl">
            <Layers size={18} className="text-plum-primary" />
          </div>
        </div>
        
        <div className="flex gap-3 overflow-x-auto px-6 pb-8 no-scrollbar snap-x">
          {[
            { step: '01', title: 'Cleanse', name: 'Coconut Shampoo', desc: 'Soft Cleanse', price: '₹349', img: 'https://images.unsplash.com/photo-1631729371254-42c2a89ddf0d?q=80&w=400&auto=format&fit=crop' },
            { step: '02', title: 'Treat', name: 'Hair Mask', desc: 'Deep Condition', price: '₹550', img: 'https://images.unsplash.com/photo-1556228552-603be3301d31?q=80&w=400&auto=format&fit=crop' },
            { step: '03', title: 'Boost', name: 'Scalp Serum', desc: 'Root Strength', price: '₹450', img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=400&auto=format&fit=crop' },
          ].map((item, idx) => (
            <div key={idx} className="snap-center min-w-[180px] bg-white p-3 rounded-[24px] border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex flex-col relative group">
              
              <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-black text-gray-900 shadow-sm border border-gray-100">
                 Step {item.step}
              </div>

              <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl mb-3 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              
              <div className="px-1">
                <span className="text-[10px] font-extrabold text-plum-primary uppercase tracking-wider mb-1 block">{item.title}</span>
                <h4 className="text-sm font-black text-gray-900 mb-0.5 truncate tracking-tight">{item.name}</h4>
                <p className="text-[10px] text-gray-500 font-bold mb-3">{item.desc}</p>
                
                <button className="w-full py-2.5 bg-gray-50 hover:bg-plum-primary hover:text-white text-gray-800 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 border border-gray-200 hover:border-plum-primary">
                   Add <Plus size={12} strokeWidth={3} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-6 pb-10 text-center pt-10 bg-gradient-to-b from-transparent to-plum-light/20 -mx-0 animate-fade-in">
          <div className="inline-block p-4 rounded-full bg-white text-gray-400 mb-4 shadow-sm">
             <Box size={20} strokeWidth={1.5} />
          </div>
          <p className="text-[10px] font-extrabold text-plum-primary uppercase tracking-widest mb-2">
            Marketed By
          </p>
          <img 
               src="https://plumgoodness.com/cdn/shop/files/Plum_Logo_Purple_160x.png?v=1614333649" 
               alt="Plum" 
               className="h-6 w-auto mx-auto mb-2 opacity-80"
          />
          <p className="text-xs text-gray-600 font-extrabold mb-8">
            Pureplay Skin Sciences (India) Pvt Ltd
          </p>
          
          <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 opacity-60">
            <span>Tech Partner</span>
            <span className="w-1 h-1 rounded-full bg-gray-400"></span>
            <span className="font-extrabold">OCX Labs</span>
          </div>
      </div>

      {/* Floating Chat Bubble (Ask an Expert) - FIXED POSITIONING INSIDE CONTAINER */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] pointer-events-none z-50 h-full">
         <div className="absolute bottom-[90px] right-4 flex flex-col items-end pointer-events-auto">
             {/* Tooltip */}
             <div className="bg-white px-4 py-2.5 rounded-l-2xl rounded-t-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 animate-fade-in origin-bottom-right mb-2 mr-1">
                <p className="text-xs font-extrabold text-gray-800">Hi! Need hair advice? 👋</p>
             </div>
             
             <button 
                onClick={() => navigate(AppRoute.CHAT)}
                className="w-14 h-14 bg-[#4A0072] text-white rounded-full shadow-xl shadow-plum-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center border-2 border-white animate-bounce-subtle"
             >
               <MessageCircle size={24} className="fill-white/20" />
             </button>
         </div>
      </div>

      {/* Usage Details Modal (Bottom Sheet) */}
      {showUsageModal && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center pointer-events-none">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-plum-deep/40 backdrop-blur-sm pointer-events-auto transition-opacity animate-fade-in"
            onClick={() => setShowUsageModal(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-white w-full max-w-[430px] rounded-t-[40px] p-6 pb-10 shadow-2xl relative pointer-events-auto animate-slide-up max-h-[85vh] overflow-y-auto no-scrollbar">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>
            <button 
              onClick={() => setShowUsageModal(false)}
              className="absolute top-6 right-6 w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2 tracking-tight">
               Usage Guide
            </h2>

            <div className="space-y-8">
              {/* Recommended Usage */}
              <div>
                <h3 className="text-xs font-black text-plum-primary mb-5 uppercase tracking-widest flex items-center gap-2">
                  <Droplet size={14} strokeWidth={3} /> Recommended Routine
                </h3>
                <ul className="space-y-5">
                  {[
                    { title: "Warm Up", text: "2–3 pumps between palms." },
                    { title: "Apply", text: "On towel-dried, damp hair." },
                    { title: "Any Hair Type", text: "Won't weigh hair down." }
                  ].map((step, i) => (
                     <li key={i} className="flex gap-4 items-start">
                        <div className="w-7 h-7 rounded-full bg-plum-primary text-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-lg shadow-plum-primary/20">
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
              <div className="p-6 bg-[#FDFBFF] rounded-[28px] border border-plum-primary/10 shadow-inner">
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
              <div className="bg-orange-50 rounded-[28px] p-6 border border-orange-100">
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