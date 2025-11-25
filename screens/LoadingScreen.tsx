import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScanLine } from 'lucide-react';
import { AppRoute } from '../types';

const LoadingScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(AppRoute.HOME);
    }, 2800); // 2.8 seconds simulation

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-plum-bg relative overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-plum-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-peach/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Spinner Container */}
        <div className="relative w-32 h-32 mb-8">
          {/* Rotating Outer Ring */}
          <div className="absolute inset-0 border-4 border-plum-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-plum-primary border-t-transparent rounded-full animate-spin"></div>
          
          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center text-plum-primary">
            <ScanLine size={40} className="animate-pulse" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-plum-primary mb-2 animate-fade-in">
          Verifying Authenticity...
        </h2>
        <p className="text-gray-500 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Checking secure database
        </p>
      </div>

      <div className="absolute bottom-10 text-center w-full">
        <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
            Powered by Plum Smart QR
        </p>
        <p className="text-[10px] text-gray-300 mt-1">
            Technology Partner: OCX Labs
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;