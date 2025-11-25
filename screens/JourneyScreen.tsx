import React from 'react';
import { useNavigate } from 'react-router-dom';
import { JOURNEY_STEPS } from '../constants';
import { ChevronLeft, MapPin, Calendar, CheckCircle, Globe, Stamp } from 'lucide-react';

const JourneyScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-full bg-gray-50">
      {/* Header */}
      <div className="px-6 pt-8 pb-6 bg-white sticky top-0 z-20 border-b border-gray-100 shadow-sm">
        <div className="flex items-center mb-2">
             <button onClick={() => navigate(-1)} className="mr-3 text-gray-400 hover:text-plum-primary transition-colors">
                <ChevronLeft size={24} />
            </button>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Track Product</h1>
        </div>
        <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">Live Status</span>
            <p className="text-gray-400 text-xs font-bold">Tracking ID: #PLM-8834X</p>
        </div>
      </div>

      <div className="px-4 py-6 pb-32">
        
        {/* Passport / Header Card */}
        <div className="bg-plum-deep rounded-[28px] p-6 text-white mb-8 shadow-xl shadow-plum-primary/20 relative overflow-hidden">
            {/* Decorative Map Pattern */}
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
            
            <div className="absolute right-0 top-0 opacity-10 transform rotate-12 translate-x-4 -translate-y-2">
                <Globe size={120} />
            </div>
            
            <div className="relative z-10">
                <h2 className="text-xs font-bold opacity-70 uppercase tracking-widest mb-6 border-b border-white/20 pb-2 inline-block">Product Passport</h2>
                
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-[10px] font-bold opacity-70 uppercase block mb-1">Origin</span>
                        <span className="block text-3xl font-black text-peach tracking-tight">KER</span>
                        <span className="text-xs font-bold">Kerala, IN</span>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center px-4 pb-2">
                        <div className="border-t-2 border-dashed border-white/40 w-full relative">
                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <span className="text-[10px] font-bold mt-2 opacity-60">12 Days Transit</span>
                    </div>

                    <div className="text-right">
                        <span className="text-[10px] font-bold opacity-70 uppercase block mb-1">Dest</span>
                        <span className="block text-3xl font-black text-peach tracking-tight">YOU</span>
                        <span className="text-xs font-bold">Delivered</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-4 space-y-8">
          {/* Connector Line */}
          <div className="absolute left-[27px] top-4 bottom-0 w-0.5 border-l-2 border-dashed border-gray-300"></div>

          {JOURNEY_STEPS.map((step, index) => {
            const isLast = index === JOURNEY_STEPS.length - 1;
            
            return (
              <div key={index} className="relative pl-10 animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                
                {/* Timeline Node */}
                <div className={`absolute left-0 top-8 w-14 h-14 rounded-full border-4 border-gray-50 shadow-lg flex items-center justify-center z-10 transition-transform duration-300 ${isLast ? 'bg-green-500 text-white scale-110' : 'bg-white text-plum-primary'}`}>
                    {isLast ? <CheckCircle size={24} className="animate-bounce" /> : <step.icon size={24} strokeWidth={2} />}
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-[24px] overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 transition-all hover:shadow-xl">
                   
                   {/* Image Banner */}
                   {step.image && (
                       <div className="h-32 w-full relative overflow-hidden">
                           <img 
                                src={step.image} 
                                alt={step.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                           
                           {/* Date Badge */}
                           <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-lg text-[10px] font-extrabold flex items-center gap-1.5 uppercase tracking-wide">
                              <Calendar size={12} strokeWidth={3} /> {step.date}
                           </div>
                       </div>
                   )}

                   <div className="p-5 relative">
                       {/* Decorative Stamp */}
                       <div className="absolute top-4 right-4 opacity-10 rotate-[-15deg]">
                           <Stamp size={40} />
                       </div>

                       <div className="flex justify-between items-start mb-2">
                          <h3 className="font-black text-gray-900 text-lg leading-tight tracking-tight">{step.title}</h3>
                       </div>
                       
                       <div className="text-[10px] font-extrabold text-gray-400 bg-gray-50 px-2 py-1.5 rounded-lg uppercase tracking-wide flex items-center gap-1.5 w-fit mb-3">
                             <MapPin size={12} strokeWidth={3} /> {step.location}
                        </div>
                       
                       <p className="text-xs text-gray-600 leading-relaxed font-bold">
                         {step.description}
                       </p>
                   </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer End Marker */}
        <div className="text-center mt-10 text-gray-300">
            <div className="w-2 h-2 bg-gray-300 rounded-full mx-auto mb-2"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">End of Journey</span>
        </div>

      </div>
    </div>
  );
};

export default JourneyScreen;