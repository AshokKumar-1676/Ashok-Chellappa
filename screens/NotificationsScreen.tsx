import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Bell, Calendar, Droplet, Star } from 'lucide-react';

const NotificationsScreen: React.FC = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: "It's Fri-yay!",
      message: "Time for your weekly hair mask routine. Your hair will thank you! 💆‍♀️",
      time: "2 hrs ago",
      icon: Calendar,
      color: "bg-purple-100 text-purple-600",
      unread: true,
    },
    {
      id: 2,
      title: "Running Low?",
      message: "Based on your usage, your serum might run out in 10 days. Order refill now!",
      time: "Yesterday",
      icon: Droplet,
      color: "bg-blue-100 text-blue-600",
      unread: false,
    },
    {
      id: 3,
      title: "You earned Points!",
      message: "+20 points credited for your product scan.",
      time: "2 days ago",
      icon: Star,
      color: "bg-yellow-100 text-yellow-600",
      unread: false,
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-100 flex items-center sticky top-0 bg-white z-10">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          Smart Alerts <Bell size={16} className="text-plum-primary" fill="currentColor" />
        </h1>
      </div>

      <div className="flex-1 px-6 py-4">
        <div className="space-y-4">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-4 rounded-2xl border flex gap-4 transition-all ${
                notif.unread 
                  ? 'bg-plum-light/30 border-plum-primary/20' 
                  : 'bg-white border-gray-100'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${notif.color}`}>
                <notif.icon size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                   <h3 className={`text-sm font-bold ${notif.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                     {notif.title}
                   </h3>
                   <span className="text-[10px] text-gray-400">{notif.time}</span>
                </div>
                <p className={`text-xs leading-relaxed ${notif.unread ? 'text-gray-700' : 'text-gray-500'}`}>
                  {notif.message}
                </p>
              </div>
              {notif.unread && (
                <div className="w-2 h-2 rounded-full bg-plum-primary mt-1.5"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsScreen;