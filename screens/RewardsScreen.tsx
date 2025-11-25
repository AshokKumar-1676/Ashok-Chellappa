import React, { useState } from 'react';
import { Gift, Award, Star, ArrowRight, Smartphone, Lock, Check, LogOut } from 'lucide-react';

const RewardsScreen: React.FC = () => {
  const [authStep, setAuthStep] = useState<'PHONE' | 'OTP' | 'DASHBOARD'>('PHONE');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleGetOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length === 10) {
      setAuthStep('OTP');
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 4) {
      setAuthStep('DASHBOARD');
    }
  };

  // Auth Layout (Phone & OTP)
  if (authStep !== 'DASHBOARD') {
    return (
      <div className="flex flex-col min-h-full bg-white px-6 pt-12 pb-6">
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-plum-light rounded-full flex items-center justify-center text-plum-primary mb-6 animate-fade-in shadow-inner">
            {authStep === 'PHONE' ? <Smartphone size={36} /> : <Lock size={36} />}
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {authStep === 'PHONE' ? 'Unlock Rewards' : 'Verify Identity'}
          </h1>
          <p className="text-gray-500 text-sm mb-8 px-4 leading-relaxed">
            {authStep === 'PHONE' 
              ? 'Enter your mobile number to view points, track history, and redeem exclusive goodies!' 
              : `Enter the 4-digit code sent to +91 ${mobileNumber}`}
          </p>

          {authStep === 'PHONE' ? (
            <form onSubmit={handleGetOtp} className="w-full space-y-4 max-w-xs mx-auto">
               <div className="relative">
                 <span className="absolute left-4 top-3.5 text-gray-400 font-bold text-base border-r border-gray-300 pr-3">+91</span>
                 <input 
                    type="tel" 
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-16 pr-4 font-bold text-lg text-gray-800 focus:outline-none focus:border-plum-primary focus:ring-2 focus:ring-plum-primary/20 transition-all placeholder-gray-400"
                    placeholder="99999 99999"
                    autoFocus
                    inputMode="numeric"
                    pattern="[0-9]*"
                 />
               </div>
               <button 
                  type="submit"
                  disabled={mobileNumber.length !== 10}
                  className="w-full bg-plum-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-plum-deep hover:shadow-xl transition-all disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2 transform active:scale-95 duration-200"
               >
                 Get OTP <ArrowRight size={18} />
               </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="w-full space-y-6 max-w-xs mx-auto">
               {/* OTP Input Container */}
               <div className="relative w-full mb-2">
                 {/* Visual Digit Boxes */}
                 <div className="flex justify-between gap-3 pointer-events-none">
                    {[0, 1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className={`w-14 h-16 bg-gray-50 border-2 rounded-xl flex items-center justify-center text-2xl font-bold transition-all duration-200 shadow-sm ${
                            otp.length === i 
                                ? 'border-plum-primary ring-4 ring-plum-primary/10 text-plum-primary scale-110' 
                                : otp.length > i 
                                    ? 'border-plum-primary bg-plum-light/30 text-gray-800' 
                                    : 'border-gray-200 text-gray-300'
                        }`}
                      >
                          {otp[i] || ''}
                      </div>
                    ))}
                 </div>
                 
                 {/* Invisible Actual Input Overlay */}
                 <input 
                    type="tel"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    autoFocus
                    maxLength={4}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoComplete="one-time-code"
                 />
               </div>

               <button 
                  type="submit"
                  disabled={otp.length !== 4}
                  className="w-full bg-plum-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-plum-deep hover:shadow-xl transition-all disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2 transform active:scale-95 duration-200"
               >
                 <Check size={20} /> Verify & Login
               </button>
               
               <button 
                  type="button" 
                  onClick={() => {
                      setOtp('');
                      setAuthStep('PHONE');
                  }}
                  className="text-xs text-gray-500 font-bold hover:text-plum-primary transition-colors py-2 active:scale-95"
                >
                  Change Number?
                </button>
            </form>
          )}
        </div>
        <div className="text-center pb-4">
             <p className="text-[10px] text-gray-300 font-medium tracking-wide uppercase">
                Secure Login via OCX Labs
            </p>
        </div>
      </div>
    );
  }

  // Dashboard Layout
  return (
    <div className="flex flex-col min-h-full animate-slide-up pb-24">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-plum-deep to-plum-primary pt-10 pb-16 px-6 rounded-b-[40px] shadow-xl text-white relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
        {/* Background Patterns & Texture */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: `url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop')`,
               backgroundSize: 'cover',
               mixBlendMode: 'overlay'
             }}>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2.5px)', backgroundSize: '24px 24px' }}>
        </div>
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -left-10 bottom-0 w-32 h-32 bg-peach/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-bold">Loyalty Rewards</h1>
                    <p className="text-plum-light text-sm font-medium opacity-90">Welcome back, Plumster!</p>
                </div>
                <button 
                    onClick={() => setAuthStep('PHONE')}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200 active:scale-90 backdrop-blur-sm"
                >
                    <LogOut size={16} />
                </button>
            </div>
            
            <div className="flex flex-col items-center justify-center mt-2 group">
                <div className="relative transition-transform duration-300 group-hover:scale-110">
                    <div className="text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">30</div>
                    <Star className="absolute -top-2 -right-6 text-yellow-300 fill-current animate-pulse-slow" size={24} />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 mt-2 bg-black/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    Plum Points
                </div>
            </div>
        </div>
      </div>

      <div className="px-6 -mt-10 relative z-20 space-y-6">
         {/* Membership Progress Card */}
         <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-50 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex justify-between text-xs font-bold text-gray-500 mb-3">
                <span className="text-plum-primary">Bronze Member</span>
                <span>Silver Member</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 mb-4 overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-peach to-plum-primary h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '40%' }}></div>
            </div>
            <p className="text-xs text-center text-gray-500 bg-gray-50 py-2 rounded-lg border border-gray-100">
                You are <span className="text-plum-primary font-bold">70 points</span> away from your next freebie!
            </p>
         </div>

         {/* Actions Grid */}
         <div className="grid grid-cols-2 gap-3">
             <button className="bg-plum-primary text-white p-4 rounded-xl shadow-md flex flex-col items-center justify-center gap-2 hover:bg-plum-deep hover:shadow-lg transition-all duration-200 active:scale-95 hover:-translate-y-0.5">
                 <Gift size={24} className="mb-1" />
                 <span className="text-xs font-bold">Redeem Now</span>
             </button>
             <button className="bg-white border border-gray-100 text-gray-700 p-4 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-gray-50 hover:shadow-md transition-all duration-200 active:scale-95 hover:-translate-y-0.5">
                 <Award size={24} className="mb-1 text-peach" />
                 <span className="text-xs font-bold">Badges</span>
             </button>
         </div>

         {/* Recent Activity List */}
         <div>
             <h3 className="font-bold text-gray-800 mb-4 px-1 flex items-center gap-2">
                 <Star size={14} className="text-plum-primary fill-current" /> Recent Activity
             </h3>
             <div className="space-y-3">
                {[
                    { title: 'Verified Scan', pts: '+20', date: 'Just now', icon: Star, color: 'text-yellow-600 bg-yellow-100' },
                    { title: 'Returning Bonus', pts: '+10', date: 'Today, 10:30 AM', icon: Award, color: 'text-purple-600 bg-purple-100' },
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all duration-200 active:bg-gray-50 cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-full ${item.color} transition-transform group-hover:scale-110`}>
                                <item.icon size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm mb-0.5">{item.title}</h4>
                                <p className="text-[10px] text-gray-400 font-medium">{item.date}</p>
                            </div>
                        </div>
                        <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs">{item.pts}</span>
                    </div>
                ))}
             </div>
         </div>

         {/* Promo Banner */}
         <div className="bg-gradient-to-r from-peach/20 to-plum-light/50 rounded-2xl p-5 flex items-center justify-between border border-peach/20 transition-all duration-300 hover:shadow-md">
            <div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Refer a friend</h4>
                <p className="text-xs text-gray-600">Get 50 points for every referral!</p>
            </div>
            <button className="bg-white text-peach border border-peach text-xs font-bold py-2 px-4 rounded-lg shadow-sm active:scale-95 transition-transform">
                Invite
            </button>
         </div>
      </div>
    </div>
  );
};

export default RewardsScreen;