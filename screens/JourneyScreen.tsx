import React from 'react';
import { useNavigate } from 'react-router-dom';
import { JOURNEY_STEPS } from '../constants';
import { ChevronLeft, MapPin, Calendar, CheckCircle, Globe, Stamp, Truck, Package } from 'lucide-react';

const JourneyScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-full bg-gray-50 relative overflow-hidden">
      {/* Global Map Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
        }}
      ></div>

      {/* Header */}
      <div className="px-6 pt-8 pb-6 bg-white/90 backdrop-blur-md sticky top-0 z-30 border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
                <button onClick={() => navigate(-1)} className="mr-3 text-gray-500 hover:text-[#6A1B9A] transition-all duration-200 active:scale-90 p-1 rounded-full hover:bg-gray-100">
                    <ChevronLeft size={24} />
                </button>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">Trace Product</h1>
            </div>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm animate-pulse-slow">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest">Live</span>
            </div>
        </div>
        <p className="text-gray-400 text-xs font-bold pl-10 uppercase tracking-wide">Tracking ID: <span className="text-gray-900 font-extrabold font-mono">#PLM-8834X</span></p>
      </div>

      <div className="px-4 py-6 pb-32 relative z-10">
        
        {/* Digital Logistics Dashboard Card */}
        <div className="bg-[#2E2E3A] rounded-[32px] p-6 text-white mb-10 shadow-2xl shadow-gray-400/50 relative overflow-hidden border border-gray-700/50 transition-transform duration-500 hover:scale-[1.01]">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10" 
                 style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
            </div>
            
            {/* World Map Overlay */}
            <div className="absolute right-[-20px] top-[-20px] opacity-20 transform rotate-12 transition-transform duration-1000 hover:rotate-6">
                <Globe size={140} />
            </div>
            
            <div className="relative z-10">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Logistics Status</h2>
                    <Truck size={16} className="text-[#F3E5F5]" />
                </div>
                
                <div className="flex justify-between items-end relative">
                    {/* Route Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 -z-10 -translate-y-2"></div>

                    <div className="bg-[#2E2E3A] pr-2 z-10 group cursor-pointer">
                        <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1 tracking-wider">Source</span>
                        <span className="block text-3xl font-black text-white tracking-tight group-hover:text-[#F3E5F5] transition-colors">KER</span>
                        <div className="flex items-center gap-1 mt-1 text-green-400">
                             <CheckCircle size={10} />
                             <span className="text-[10px] font-extrabold uppercase tracking-wide">Dispatched</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center bg-[#2E2E3A] px-2 z-10">
                        <div className="w-8 h-8 rounded-full bg-[#6A1B9A] flex items-center justify-center border-2 border-[#2E2E3A] shadow-lg mb-1 animate-bounce-subtle">
                            <Package size={14} />
                        </div>
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">In Transit</span>
                    </div>

                    <div className="text-right bg-[#2E2E3A] pl-2 z-10 group cursor-pointer">
                        <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1 tracking-wider">Destination</span>
                        <span className="block text-3xl font-black text-[#FF8A80] tracking-tight group-hover:text-white transition-colors">YOU</span>
                         <div className="flex items-center gap-1 mt-1 text-green-400 justify-end">
                             <CheckCircle size={10} />
                             <span className="text-[10px] font-extrabold uppercase tracking-wide">Arrived</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-2 space-y-0">
          {/* Connector Line - Fixed Alignment */}
          <div className="absolute left-[34px] top-6 bottom-10 w-[2px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-100"></div>

          {JOURNEY_STEPS.map((step, index) => {
            const isLast = index === JOURNEY_STEPS.length - 1;
            
            return (
              <div key={index} className="relative pl-14 pb-8 animate-slide-up group" style={{ animationDelay: `${index * 0.15}s` }}>
                
                {/* Timeline Icon Node - Perfectly Centered on Line */}
                <div className={`absolute left-[10px] top-0 w-12 h-12 rounded-full border-4 shadow-md flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${isLast ? 'bg-[#6A1B9A] border-[#F3E5F5] text-white' : 'bg-white border-gray-50 text-gray-400'}`}>
                    {isLast ? <CheckCircle size={20} /> : <step.icon size={20} strokeWidth={2} />}
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-[24px] overflow-hidden shadow-lg shadow-gray-200/40 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]">
                   
                   {/* Image Banner */}
                   {step.image && (
                       <div className="h-32 w-full relative overflow-hidden">
                           <img 
                                src={step.image} 
                                alt={step.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                           
                           {/* Date Badge */}
                           <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-lg text-[10px] font-black flex items-center gap-1.5 uppercase tracking-widest shadow-sm">
                              <Calendar size={12} strokeWidth={3} /> {step.date}
                           </div>
                       </div>
                   )}

                   <div className="p-5 relative">
                       {/* Decorative Watermark */}
                       <div className="absolute top-4 right-4 opacity-[0.03] rotate-[-15deg] transition-transform duration-500 group-hover:rotate-0 group-hover:opacity-[0.05]">
                           <step.icon size={60} />
                       </div>

                       <div className="mb-2">
                          <h3 className="font-black text-gray-900 text-lg leading-tight tracking-tight">{step.title}</h3>
                       </div>
                       
                       <div className="flex items-center gap-2 mb-3">
                             <MapPin size={12} className="text-[#6A1B9A]" />
                             <span className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">{step.location}</span>
                        </div>
                       
                       <p className="text-xs text-gray-600 leading-relaxed font-bold border-l-2 border-[#F3E5F5] pl-3">
                         {step.description}
                       </p>
                   </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer End Marker */}
        <div className="text-center mt-4 text-gray-300 flex flex-col items-center">
            <div className="w-3 h-3 bg-gray-200 rounded-full mb-2 ring-4 ring-gray-100 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Journey Completed</span>
        </div>

      </div>
    </div>
  );
};

export default JourneyScreen;