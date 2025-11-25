import React, { useState } from 'react';
import { Droplet, Sparkles, Heart, PlayCircle, ChevronRight, Building2, Camera } from 'lucide-react';

// Images for banner
const bannerImages = [
   "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1000&auto=format&fit=crop",
   "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1000&auto=format&fit=crop",
   "https://images.unsplash.com/photo-1616353956184-7832822da8e8?q=80&w=1000&auto=format&fit=crop",
   "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop"
];

// Ingredients Data with Images
const ingredientsData = [
    {
        name: 'Coconut Oil',
        desc: 'An ingredient rich in Vitamin E and fatty acids, helps nourish hair and additionally restores hair moisture.',
        image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=400&auto=format&fit=crop'
    },
    {
        name: 'Squalane',
        desc: 'Derived from olives and found naturally in sebum, it controls frizz, smoothens hair, and forms a protective film to maintain moisture.',
        image: 'https://images.unsplash.com/photo-1474979266404-7cadd259c366?q=80&w=400&auto=format&fit=crop'
    },
    {
        name: 'Almond Oil',
        desc: 'An emollient which conditions and adds shine to the hair and also helps prevent split ends.',
        image: 'https://images.unsplash.com/photo-1623326164223-1d02c8172972?q=80&w=400&auto=format&fit=crop'
    }
];

const ProductInfoScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'usage'>('info');

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Scrollable Banner Gallery */}
      <div className="relative h-80 bg-gray-200 overflow-hidden group">
        <div className="flex overflow-x-auto snap-x snap-mandatory h-full no-scrollbar">
            {bannerImages.map((src, idx) => (
                <div key={idx} className="w-full shrink-0 snap-center h-full relative">
                    <img
                      src={src}
                      alt={`Product view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
            ))}
        </div>
        
        {/* Scroll Indicator Dots */}
        <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none opacity-50">
             {bannerImages.map((_, i) => (
                 <div key={i} className="w-1.5 h-1.5 rounded-full bg-white backdrop-blur-sm"></div>
             ))}
        </div>

        {/* Text Overlay */}
        <div className="absolute bottom-6 left-6 text-white pointer-events-none z-10 pr-6">
          <div className="bg-peach text-white text-[10px] font-black px-2 py-1 rounded-md inline-block mb-3 shadow-sm uppercase tracking-wider">Bestseller</div>
          <h1 className="text-3xl font-black leading-none drop-shadow-lg mb-1">Coconut Squalane</h1>
          <h2 className="text-xl font-bold opacity-90">Nutri-Shine Serum</h2>
        </div>
        
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 text-[10px] text-white font-bold flex items-center gap-1.5 border border-white/10">
            <Camera size={14} /> Gallery
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 py-4 flex gap-4 border-b border-gray-100 bg-white sticky top-0 z-20 shadow-sm">
        <button 
          onClick={() => setActiveTab('info')}
          className={`flex-1 py-3 text-sm font-extrabold rounded-2xl transition-all ${activeTab === 'info' ? 'bg-plum-primary text-white shadow-lg shadow-plum-primary/20' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
        >
          Product Info
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 text-sm font-extrabold rounded-2xl transition-all ${activeTab === 'usage' ? 'bg-plum-primary text-white shadow-lg shadow-plum-primary/20' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
        >
          How to Use
        </button>
      </div>

      <div className="px-6 py-8 pb-24">
        {activeTab === 'info' ? (
          <div className="animate-fade-in space-y-10">
            {/* Benefits Chips */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Squalane', icon: Droplet },
                { label: 'Glossy', icon: Sparkles },
                { label: 'Vegan', icon: Heart },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
                  <div className="text-plum-primary mb-2"><item.icon size={24} strokeWidth={2} /></div>
                  <span className="text-xs font-extrabold text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-extrabold text-gray-900 mb-3 text-lg">Why you'll love it</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-bold">
                A lightweight, pre-wash hair oil or post-wash serum that smoothens hair and adds a glossy shine. Infused with <span className="text-plum-primary font-black">squalane</span>, <span className="text-plum-primary font-black">coconut oil</span>, and <span className="text-plum-primary font-black">almond oil</span> to nourish strands without weighing them down.
              </p>
            </div>

            {/* Detailed Ingredients with Images */}
            <div>
              <h3 className="font-extrabold text-gray-900 mb-5 text-lg flex items-center gap-2">
                 Key Ingredients
              </h3>
              <div className="space-y-4">
                {ingredientsData.map((ing, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-[20px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex gap-4 items-start">
                    <div className="w-16 h-16 shrink-0 rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                        <img src={ing.image} alt={ing.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="font-black text-plum-deep text-sm mb-1">{ing.name}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed font-bold">
                            {ing.desc}
                        </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

             {/* Marketed By */}
             <div className="border-t border-gray-100 pt-8 mt-2">
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-2xl">
                  <div className="mt-1 text-gray-400">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Marketed By</h4>
                    <p className="text-xs font-extrabold text-gray-800 leading-relaxed">
                      Pureplay Skin Sciences (India) Private Limited
                    </p>
                  </div>
                </div>
             </div>
          </div>
        ) : (
          <div className="animate-fade-in space-y-8">
            {/* Video Placeholder */}
            <div className="w-full aspect-video bg-gray-900 rounded-[24px] flex flex-col items-center justify-center text-white relative overflow-hidden group cursor-pointer shadow-xl mb-6">
               <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 opacity-60 object-cover w-full h-full transition-opacity group-hover:opacity-40" alt="Video thumb" />
               <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                   <PlayCircle size={32} className="fill-white" />
               </div>
               <span className="relative z-10 text-xs mt-3 font-black uppercase tracking-wider">Watch Tutorial</span>
            </div>

            {/* Horizontal Scroll Steps */}
            <div>
              <div className="flex items-center justify-between mb-4">
                 <h3 className="font-extrabold text-gray-900 text-lg">Step-by-Step Routine</h3>
                 <div className="text-[10px] font-bold text-gray-400 flex items-center gap-1 uppercase tracking-wide">Swipe <ChevronRight size={10} /></div>
              </div>
              
              <div className="flex gap-4 overflow-x-auto pb-8 -mx-6 px-6 no-scrollbar snap-x">
                {[
                  { 
                    title: 'Dispense', 
                    desc: 'Take 1-2 pumps of serum on your palm.',
                    img: 'https://images.unsplash.com/photo-1616353956184-7832822da8e8?q=80&w=200&auto=format&fit=crop'
                  },
                  { 
                    title: 'Warm Up', 
                    desc: 'Rub palms together to warm the product.',
                    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=200&auto=format&fit=crop'
                  },
                  { 
                    title: 'Apply', 
                    desc: 'Apply evenly to damp or dry hair mid-lengths.',
                    img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=200&auto=format&fit=crop'
                  },
                  { 
                    title: 'Style', 
                    desc: 'Comb through and style as desired.',
                    img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=200&auto=format&fit=crop'
                  },
                ].map((step, idx) => (
                  <div key={idx} className="snap-center shrink-0 w-52 bg-white rounded-[20px] shadow-lg shadow-gray-100 border border-gray-100 overflow-hidden flex flex-col">
                    <div className="h-36 bg-gray-100 relative">
                      <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                      <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-plum-primary text-white flex items-center justify-center text-[10px] font-black shadow-md border-2 border-white">
                          {idx + 1}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col grow">
                      <h4 className="font-extrabold text-gray-900 text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-bold">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfoScreen;