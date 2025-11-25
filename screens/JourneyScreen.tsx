import React from 'react';
import { useNavigate } from 'react-router-dom';
import { JOURNEY_STEPS } from '../constants';
import { ChevronLeft, MapPin, Calendar, Truck, CheckCircle, Plane, Package } from 'lucide-react';

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
            <h1 className="text-2xl font-black text-gray-900">Track Journey</h1>
        </div>
        <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">Live Status</span>
            <p className="text-gray-400 text-xs font-bold">Tracking ID: #PLM-8834X</p>
        </div>
      </div>

      <div className="px-4 py-6 pb-32">
        
        {/* Passport / Header Card */}
        <div className="bg-plum-deep rounded-2xl p-6 text-white mb-8 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 transform rotate-12 translate-x-4 -translate-y-2">
                <Plane size={100} />
            </div>
            <h2 className="text-xs font-bold opacity-70 uppercase tracking-widest mb-1">Origin Story</h2>
            <h3 className="text-2xl font-black mb-4">Kerala to You</h3>
            <div className="flex justify-between items-center relative z-10">
                <div className="text-center">
                    <span className="block text-3xl font-black text-peach">KOC</span>
                    <span className="text-[10px] font-bold opacity-70">COCHIN</span>
                </div>
                <div className="flex-1 border-t-2 border-dashed border-white/30 mx-4 relative">
                    <Plane size={16} className="absolute -top-2 left-1/2 -translate-x-1/2 text-white" />
                </div>
                <div className="text-center">
                    <span className="block text-3xl font-black text-peach">HOME</span>
                    <span className="text-[10px] font-bold opacity-70">DELIVERED</span>
                </div>
            </div>
        </div>

        {/* Timeline Path */}
        <div className="relative pl-4">
          {/* Connected Line */}
          <div className="absolute left-[27px] top-4 bottom-0 w-1 bg-gray-200 rounded-full"></div>
          <div className="absolute left-[27px] top-4 bottom-0 w-1 bg-gradient-to-b from-plum-primary via-peach to-transparent rounded-full" style={{height: '85%'}}></div>

          <div className="space-y-8 relative">
            {JOURNEY_STEPS.map((step, index) => {
              const isLast = index === JOURNEY_STEPS.length - 1;
              
              return (
              <div key={index} className="relative pl-12 animate-slide-up group" style={{ animationDelay: `${index * 0.15}s` }}>
                
                {/* Timeline Node */}
                <div className={`absolute left-0 top-6 w-14 h-14 rounded-full border-4 border-gray-50 shadow-lg flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-105 ${isLast ? 'bg-green-500 text-white' : 'bg-white text-plum-primary'}`}>
                    {isLast ? <CheckCircle size={24} className="animate-bounce" /> : <step.icon size={24} strokeWidth={1.5} />}
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-[24px] overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-xl">
                   
                   {/* Image Banner */}
                   {step.image && (
                       <div className="h-36 w-full relative">
                           <img 
                                src={step.image} 
                                alt={step.title} 
                                className="w-full h-full object-cover"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                           
                           {/* Date Badge */}
                           <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5">
                              <Calendar size={12} /> {step.date}
                           </div>
                       </div>
                   )}

                   <div className="p-5">
                       <div className="flex justify-between items-start mb-2">
                          <h3 className="font-black text-gray-900 text-lg leading-tight">{step.title}</h3>
                          <div className="text-[10px] font-black text-gray-400 bg-gray-50 px-2 py-1 rounded uppercase tracking-wide flex items-center gap-1">
                             <MapPin size={10} /> {step.location}
                          </div>
                       </div>
                       
                       <p className="text-xs text-gray-500 leading-relaxed font-medium border-l-2 border-plum-light pl-3 mb-3">
                         {step.description}
                       </p>

                       {/* Stamp Effect */}
                       <div className="flex justify-end">
                           <div className="border-2 border-plum-primary/20 text-plum-primary/40 text-[10px] font-black uppercase px-2 py-1 rounded -rotate-12">
                               Verified
                           </div>
                       </div>
                   </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyScreen;