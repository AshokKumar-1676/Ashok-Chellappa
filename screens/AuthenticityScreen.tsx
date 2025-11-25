import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, MapPin, Hash, RefreshCcw, Building2, ChevronLeft } from 'lucide-react';
import { PRODUCT_DETAILS } from '../constants';
import { useNavigate } from 'react-router-dom';

const AuthenticityScreen: React.FC = () => {
  const [isSuspicious, setIsSuspicious] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Header */}
      <div className="px-6 pt-8 pb-6 bg-white sticky top-0 z-10">
        <div className="flex items-center mb-4">
            <button onClick={() => navigate(-1)} className="mr-3 text-gray-500 hover:text-plum-primary">
                <ChevronLeft size={24} />
            </button>
            <h1 className="text-2xl font-black text-gray-900">Authenticity Check</h1>
        </div>
        <p className="text-gray-500 text-sm font-medium">Verified Product Scan Results</p>
      </div>

      <div className="px-6 mb-6">
        {/* Status Card */}
        <div className={`rounded-[32px] p-8 shadow-xl shadow-gray-100 mb-8 text-center relative overflow-hidden transition-all duration-500 border ${isSuspicious ? 'bg-red-50 border-red-100' : 'bg-green-50 border-green-100'}`}>
          
          {/* Suspicious Mode Background Pattern (Diagonal Warning Stripes) */}
          {isSuspicious && (
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #dc2626 0, #dc2626 1px, transparent 0, transparent 12px)',
                opacity: 0.05
              }}
            ></div>
          )}

          <div className="relative z-10 flex flex-col items-center">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-5 transition-colors duration-500 border-4 border-white shadow-md ${isSuspicious ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
              {isSuspicious ? (
                <AlertTriangle size={48} className="animate-bounce" />
              ) : (
                <CheckCircle size={48} className="animate-pulse" />
              )}
            </div>
            
            <h2 className={`text-2xl font-black mb-2 transition-colors duration-500 ${isSuspicious ? 'text-red-700' : 'text-green-700'}`}>
              {isSuspicious ? 'Suspicious Scan!' : '100% Authentic'}
            </h2>
            <p className={`text-sm transition-colors duration-500 ${isSuspicious ? 'text-red-500/80 font-bold' : 'text-gray-500 font-bold'}`}>
              {isSuspicious 
                ? 'This code has been scanned multiple times in different locations.' 
                : 'Verified genuine Plum product.'}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="bg-white rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Product Batch Details</h3>
          </div>
          <div className="p-2">
            {PRODUCT_DETAILS.map((detail, index) => (
              <div key={index} className="flex items-center justify-between py-4 px-4 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="p-2 bg-gray-50 rounded-lg"><detail.icon size={18} /></div>
                  <span className="text-sm font-bold">{detail.label}</span>
                </div>
                <span className="font-black text-gray-900 text-sm">{detail.value}</span>
              </div>
            ))}
             <div className="flex items-center justify-between py-4 px-4 border-b border-gray-50">
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="p-2 bg-gray-50 rounded-lg"><MapPin size={18} /></div>
                  <span className="text-sm font-bold">Scan Location</span>
                </div>
                <span className="font-black text-gray-900 text-sm">New York, USA</span>
              </div>
              <div className="flex items-center justify-between py-4 px-4 border-b border-gray-50">
                <div className="flex items-center gap-3 text-gray-500">
                  <div className="p-2 bg-gray-50 rounded-lg"><Hash size={18} /></div>
                  <span className="text-sm font-bold">Total Scans</span>
                </div>
                <span className={`font-black text-sm px-2 py-1 rounded-md ${isSuspicious ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'}`}>
                    {isSuspicious ? '14 (High)' : '1 (Valid)'}
                </span>
              </div>
              
              {/* Manufacturer Info */}
              <div className="bg-plum-primary/5 m-2 rounded-xl p-4 mt-2">
                 <div className="flex items-center gap-2 text-plum-primary mb-2">
                    <Building2 size={16} />
                    <span className="text-xs font-black uppercase tracking-wider">Marketed By</span>
                 </div>
                 <p className="text-xs font-bold text-gray-800 leading-relaxed pl-6">
                    Pureplay Skin Sciences (India) Private Limited
                 </p>
              </div>
          </div>
        </div>

        {/* Toggle Simulation Button (For Demo) */}
        <button 
          onClick={() => setIsSuspicious(!isSuspicious)}
          className="w-full py-4 rounded-xl border-2 border-dashed border-gray-200 text-gray-400 text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-gray-300 transition-all uppercase tracking-wide"
        >
          <RefreshCcw size={14} />
          Demo: Toggle Suspicious State
        </button>

        {isSuspicious && (
            <button className="w-full mt-4 bg-red-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-red-200 hover:bg-red-700 transition-all active:scale-95">
                Report an Issue
            </button>
        )}
      </div>
    </div>
  );
};

export default AuthenticityScreen;