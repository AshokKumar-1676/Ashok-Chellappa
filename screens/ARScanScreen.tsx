import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Camera, Scan, X, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

const ARScanScreen: React.FC = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(true);
  const [detected, setDetected] = useState(false);
  const [mascotAction, setMascotAction] = useState('idle');
  const [dialogue, setDialogue] = useState("Hi! I'm Coco! 🥥 Let's make your hair shine!");

  useEffect(() => {
    // Simulate detection process
    if (scanning) {
      const timer = setTimeout(() => {
        setScanning(false);
        setDetected(true);
      }, 3000); // Detect after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [scanning]);

  const handleInteraction = (action: string) => {
    setMascotAction(action);
    if (action === 'wave') {
      setDialogue("Hello gorgeous! 👋 Ready for a good hair day?");
    } else if (action === 'tip') {
      setDialogue("Pro Tip: Apply me on damp ends for max shine! ✨");
    } else if (action === 'dance') {
        setDialogue("Wiggle wiggle! 💃 Squalane makes it smooth!");
    }
    
    // Reset action after animation
    setTimeout(() => setMascotAction('idle'), 2000);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white relative overflow-hidden">
      {/* Camera Feed Placeholder */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        {/* Simulated Camera Feed Image - Front of Pack */}
        <img 
          src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60"
          alt="Camera Feed"
        />
        
        {/* Scanning Grid Overlay */}
        {scanning && (
           <div className="absolute inset-0 z-10 opacity-30 pointer-events-none" 
                style={{
                    backgroundImage: 'linear-gradient(#00ff00 1px, transparent 1px), linear-gradient(90deg, #00ff00 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
           ></div>
        )}

        {/* Scanning Line Animation */}
        {scanning && (
            <div className="absolute top-0 left-0 w-full h-1 bg-green-400 shadow-[0_0_20px_rgba(0,255,0,0.8)] animate-[scan_2s_ease-in-out_infinite] z-20"></div>
        )}
      </div>

      {/* UI Layer */}
      <div className="relative z-30 flex flex-col h-full p-6">
         <div className="flex justify-between items-center">
            <button 
                onClick={() => navigate(-1)}
                className="p-3 bg-black/40 backdrop-blur-md rounded-full hover:bg-black/60 transition-colors"
            >
                <ChevronLeft size={24} />
            </button>
            <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                <Camera size={16} className="text-green-400" />
                <span className="text-xs font-bold tracking-wide">AI Object Detect</span>
            </div>
         </div>

         <div className="flex-1 flex flex-col items-center justify-center">
             {!detected ? (
                 <div className="relative w-64 h-64 border-2 border-white/30 rounded-[32px] flex items-center justify-center overflow-hidden">
                     {/* Cornes */}
                     <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-400 rounded-tl-xl"></div>
                     <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-green-400 rounded-tr-xl"></div>
                     <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-green-400 rounded-bl-xl"></div>
                     <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-green-400 rounded-br-xl"></div>
                     
                     <div className="text-center space-y-2 p-4 bg-black/20 backdrop-blur-sm rounded-xl">
                        <Scan size={32} className="mx-auto text-white/80 animate-pulse" />
                        <p className="font-bold text-sm tracking-wide">Point at Bottle Front</p>
                        <p className="text-[10px] text-white/60">Analyzing visual features...</p>
                     </div>
                 </div>
             ) : (
                 // 3D Character / Content Overlay
                 <div className="flex flex-col items-center animate-fade-in">
                     <div className="relative mb-8">
                        {/* Mascot Image - Simulating 3D */}
                        <div className={`relative w-48 h-48 transition-transform duration-500 ${mascotAction === 'dance' ? 'animate-bounce' : mascotAction === 'wave' ? 'rotate-12' : 'animate-float'}`}>
                             <img 
                                src="https://cdn-icons-png.flaticon.com/512/4193/4193290.png" 
                                alt="Coco Mascot" 
                                className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                                style={{ filter: 'brightness(1.1) contrast(1.1)' }} 
                            />
                        </div>
                        
                        {/* Speech Bubble */}
                        <div className="absolute -top-16 right-[-40px] bg-white text-plum-deep p-4 rounded-2xl rounded-bl-none shadow-2xl animate-slide-up max-w-[180px] border-2 border-plum-primary transform rotate-2">
                            <p className="text-xs font-black leading-tight">{dialogue}</p>
                        </div>
                     </div>

                     {/* Interaction Buttons */}
                     <div className="flex gap-3 bg-black/30 backdrop-blur-md p-2 rounded-2xl border border-white/10">
                        <button onClick={() => handleInteraction('wave')} className="flex flex-col items-center gap-1 p-2 min-w-[60px] rounded-xl hover:bg-white/10 transition-colors">
                            <span className="text-xl">👋</span>
                            <span className="text-[10px] font-bold">Wave</span>
                        </button>
                        <button onClick={() => handleInteraction('tip')} className="flex flex-col items-center gap-1 p-2 min-w-[60px] rounded-xl hover:bg-white/10 transition-colors">
                            <span className="text-xl">💡</span>
                            <span className="text-[10px] font-bold">Tips</span>
                        </button>
                         <button onClick={() => handleInteraction('dance')} className="flex flex-col items-center gap-1 p-2 min-w-[60px] rounded-xl hover:bg-white/10 transition-colors">
                            <span className="text-xl">💃</span>
                            <span className="text-[10px] font-bold">Dance</span>
                        </button>
                     </div>
                 </div>
             )}
         </div>

         {/* Bottom Info Card */}
         {detected && (
             <div className="bg-white rounded-[32px] p-6 text-gray-900 shadow-2xl animate-slide-up mt-4 relative z-20">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                             <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wide">Match Found</span>
                        </div>
                        <h2 className="text-xl font-black text-plum-primary tracking-tight">Coconut Squalane</h2>
                        <p className="text-xs text-gray-500 font-bold">75ml • Serum</p>
                    </div>
                    <button onClick={() => { setDetected(false); setScanning(true); }} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                        <X size={18} />
                    </button>
                 </div>
                 
                 <div className="flex gap-3 mb-5">
                    <div className="flex-1 bg-plum-light/30 p-3 rounded-2xl border border-plum-light flex flex-col items-center text-center">
                         <Sparkles size={20} className="text-plum-primary mb-2" />
                         <p className="text-[10px] font-bold uppercase text-gray-500 mb-0.5">Top Benefit</p>
                         <p className="text-xs font-black">Instant Shine</p>
                    </div>
                    <div className="flex-1 bg-peach/10 p-3 rounded-2xl border border-peach/20 flex flex-col items-center text-center">
                         <MessageCircle size={20} className="text-peach mb-2" />
                         <p className="text-[10px] font-bold uppercase text-gray-500 mb-0.5">Reviews</p>
                         <p className="text-xs font-black">4.8/5 Stars</p>
                    </div>
                 </div>

                 <button onClick={() => navigate('/info')} className="w-full bg-plum-primary text-white py-3.5 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 uppercase tracking-wide hover:bg-plum-deep transition-colors">
                    View Full Details <ArrowRight size={16} strokeWidth={3} />
                 </button>
             </div>
         )}
         
         {!detected && (
             <div className="text-center pb-12">
                 <p className="text-sm font-bold text-white tracking-wide">Align bottle front within frame</p>
                 <p className="text-[10px] text-white/60 mt-1">Searching for product markers...</p>
             </div>
         )}
      </div>
      
      <style>{`
        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ARScanScreen;