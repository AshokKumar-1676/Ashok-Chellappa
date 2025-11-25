import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingBag, Leaf, Droplet, ArrowRight } from 'lucide-react';

const RefillScreen: React.FC = () => {
  const navigate = useNavigate();
  const [subscribe, setSubscribe] = React.useState(true);

  return (
    <div className="flex flex-col min-h-full bg-plum-bg">
      <div className="px-6 py-6 flex items-center">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-600 hover:bg-gray-100 p-1 rounded-full transition-colors active:scale-90">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-gray-800">Buy Refill Pack</h1>
      </div>

      <div className="flex-1 px-6 pb-24">
         {/* Product Highlight */}
         <div className="bg-white rounded-3xl p-6 shadow-xl mb-6 flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 hover:shadow-2xl group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-teal-500"></div>
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 animate-pulse-slow group-hover:scale-110 transition-transform duration-500">
                <Leaf size={40} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Refill Pouch (50ml)</h2>
            <p className="text-sm text-gray-500 mb-4 px-4">
                Refill your empty bottle and save <span className="text-green-600 font-bold">85% plastic</span>. Good for you, good for the planet!
            </p>
            <div className="flex items-end gap-2 mb-6">
                <span className="text-3xl font-bold text-plum-primary">₹550</span>
                <span className="text-sm text-gray-400 line-through mb-2">₹675</span>
                <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-1 rounded-md mb-2 ml-2">Save 18%</span>
            </div>
            
            <img 
                src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=400" 
                alt="Refill Pack"
                className="w-full h-48 object-cover rounded-2xl mb-4 transition-transform duration-700 group-hover:scale-105"
            />
         </div>

         {/* Features */}
         <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                <Droplet size={24} className="text-blue-500 mb-2" />
                <h3 className="font-bold text-xs">Easy Pour</h3>
                <p className="text-[10px] text-gray-400">No-spill spout nozzle</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                <Leaf size={24} className="text-green-500 mb-2" />
                <h3 className="font-bold text-xs">Eco-Friendly</h3>
                <p className="text-[10px] text-gray-400">Less plastic waste</p>
            </div>
         </div>

         {/* Subscribe Option */}
         <div 
            className="bg-plum-primary/5 rounded-2xl p-4 border border-plum-primary/20 flex items-center justify-between cursor-pointer transition-colors hover:bg-plum-primary/10"
            onClick={() => setSubscribe(!subscribe)}
        >
            <div>
                <h4 className="font-bold text-plum-deep text-sm">Subscribe & Save</h4>
                <p className="text-xs text-gray-500">Get it every month for ₹500</p>
            </div>
            <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ease-in-out ${subscribe ? 'bg-plum-primary' : 'bg-gray-300'}`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${subscribe ? 'translate-x-7' : 'translate-x-1'}`}></div>
            </div>
         </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-50 flex justify-center">
        <div className="w-full max-w-[430px] flex gap-4">
             <button className="flex-1 bg-white border border-plum-primary text-plum-primary font-bold py-3 rounded-xl hover:bg-plum-light transition-all active:scale-95 duration-200">
                 Add to Cart
             </button>
             <button className="flex-1 bg-plum-primary text-white font-bold py-3 rounded-xl shadow-lg hover:bg-plum-deep hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 duration-200 flex items-center justify-center gap-2">
                 Buy Now <ArrowRight size={16} />
             </button>
        </div>
      </div>
    </div>
  );
};

export default RefillScreen;