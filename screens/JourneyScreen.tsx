import React from 'react';
import { useNavigate } from 'react-router-dom';
import { JOURNEY_STEPS } from '../constants';
import { ChevronLeft, MapPin, Calendar, Truck } from 'lucide-react';

const JourneyScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 sticky top-0 bg-white/95 backdrop-blur-sm z-20 border-b border-gray-50">
        <div className="flex items-center mb-1">
             <button onClick={() => navigate(-1)} className="mr-3 text-gray-400 hover:text-plum-primary transition-colors">
                <ChevronLeft size={24} />
            </button>
            <h1 className="text-2xl font-black text-gray-900">Product Journey</h1>
        </div>
        <p className="text-gray-400 text-sm font-bold pl-9">Farm to Bathroom Cabinet</p>
      </div>

      <div className="px-6 py-8 pb-32">
        <div className="relative">
          {/* Dashed Timeline Line */}
          <div className="absolute left-[19px] top-4 bottom-10 w-0.5 border-l-2 border-dashed border-gray-200"></div>

          <div className="space-y-10">
            {JOURNEY_STEPS.map((step, index) => {
              const isLast = index === JOURNEY_STEPS.length - 1;
              
              return (
              <div key={index} className="relative pl-14 animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                
                {/* Timeline Node */}
                <div className={`absolute left-0 top-0 w-10 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 ${isLast ? 'bg-plum-primary text-white' : 'bg-white text-plum-primary'}`}>
                    {isLast ? <Truck size={16} className="animate-pulse" /> : <step.icon size={16} />}
                </div>

                {/* Content Card */}
                <div className={`bg-white rounded-[24px] p-5 border transition-all duration-300 ${isLast ? 'shadow-xl shadow-plum-primary/10 border-plum-primary/20 ring-1 ring-plum-primary/10' : 'shadow-sm border-gray-100 hover:shadow-md'}`}>
                   
                   {/* Date & Location Header */}
                   <div className="flex justify-between items-start mb-3">
                       <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">
                          <Calendar size={10} /> {step.date}
                       </div>
                       <div className="flex items-center gap-1 text-[10px] font-bold text-plum-primary">
                          <MapPin size={10} /> {step.location}
                       </div>
                   </div>

                   <h3 className="font-black text-gray-900 text-lg mb-2 leading-tight">{step.title}</h3>
                   <p className="text-xs text-gray-500 mb-4 font-medium leading-relaxed">{step.description}</p>
                   
                   {/* Image Attachment */}
                   {step.image && (
                       <div className="h-32 w-full rounded-2xl overflow-hidden shadow-inner relative group-hover:shadow-lg transition-all">
                           <img 
                                src={step.image} 
                                alt={step.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                       </div>
                   )}
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
      
       {/* AR Teaser Footer */}
       <div className="px-6 mb-8 mt-4">
        <div className="rounded-[28px] h-40 relative overflow-hidden shadow-2xl shadow-plum-primary/20 group cursor-pointer border border-white">
             <img 
                src="https://images.unsplash.com/photo-1634648729577-50a31eb8f395?q=80&w=800&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="AR Experience"
             />
            <div className="absolute inset-0 bg-gradient-to-r from-plum-deep/90 to-plum-primary/40 p-6 flex flex-col justify-center">
                <div className="relative z-10">
                    <span className="text-[10px] font-black text-peach uppercase tracking-widest mb-1 block">Augmented Reality</span>
                    <h3 className="font-black text-xl text-white mb-1">Meet the Coconut!</h3>
                    <p className="text-xs text-white/90 mb-4 font-medium max-w-[80%]">Scan the bottle to see our mascot come to life.</p>
                    <button className="bg-white text-plum-deep hover:bg-peach hover:text-white text-xs font-black py-2.5 px-5 rounded-xl transition-all shadow-lg transform active:scale-95">
                        Launch AR View
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyScreen;