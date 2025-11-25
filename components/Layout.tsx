import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-50">
      <div className={`w-full max-w-[430px] bg-[#FDFBFF] min-h-screen relative shadow-2xl overflow-y-auto overflow-x-hidden no-scrollbar pb-24 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;