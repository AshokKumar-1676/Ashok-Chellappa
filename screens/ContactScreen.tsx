import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Mail, MessageSquare, Phone, Send, MapPin } from 'lucide-react';

const ContactScreen: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
       // Reset or redirect
    }, 2000);
  };

  if (submitted) {
     return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center animate-fade-in bg-white">
           <div className="w-20 h-20 bg-plum-light rounded-full flex items-center justify-center text-plum-primary mb-6 animate-bounce-subtle">
              <Mail size={36} />
           </div>
           <h2 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h2>
           <p className="text-gray-500 text-sm max-w-[80%]">
             Thank you for reaching out. Our support team will get back to you within 24 hours.
           </p>
           <button 
             onClick={() => navigate(-1)}
             className="mt-8 text-plum-primary font-bold text-sm uppercase tracking-wide hover:underline"
           >
             Go Back
           </button>
        </div>
     );
  }

  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-100 flex items-center sticky top-0 bg-white z-10">
        <button 
          onClick={() => navigate(-1)} 
          className="mr-4 text-gray-600 hover:bg-gray-50 p-1 rounded-full transition-all duration-200 active:scale-90"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-gray-800">Contact Us</h1>
      </div>

      <div className="px-6 py-8 flex-1 pb-24">
         <p className="text-gray-500 text-sm mb-8 leading-relaxed font-medium">
            Have a question about your product or order? We'd love to hear from you. Fill out the form below or reach us directly.
         </p>

         {/* Quick Contact Links */}
         <div className="grid grid-cols-2 gap-4 mb-10">
            <a href="mailto:hello@plumgoodness.com" className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center justify-center gap-2 hover:bg-plum-light/20 hover:border-plum-primary/20 transition-all active:scale-95 group">
                <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-plum-primary group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700">Email Us</span>
            </a>
            <a href="tel:+917506496604" className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center justify-center gap-2 hover:bg-green-50 hover:border-green-200 transition-all active:scale-95 group">
                <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700">Call Us</span>
            </a>
         </div>

         <form onSubmit={handleSubmit} className="space-y-5">
            <div>
               <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
               <input 
                  type="text" 
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-bold text-gray-800 focus:outline-none focus:border-plum-primary focus:ring-1 focus:ring-plum-primary transition-shadow placeholder-gray-400"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
               />
            </div>
            <div>
               <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
               <input 
                  type="email" 
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-bold text-gray-800 focus:outline-none focus:border-plum-primary focus:ring-1 focus:ring-plum-primary transition-shadow placeholder-gray-400"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
               />
            </div>
            <div>
               <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Subject</label>
               <select 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-bold text-gray-800 focus:outline-none focus:border-plum-primary focus:ring-1 focus:ring-plum-primary transition-shadow"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
               >
                  <option value="" disabled selected>Select a topic</option>
                  <option value="product">Product Query</option>
                  <option value="order">Order Issue</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
               </select>
            </div>
            <div>
               <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Message</label>
               <textarea 
                  required
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-bold text-gray-800 focus:outline-none focus:border-plum-primary focus:ring-1 focus:ring-plum-primary resize-none transition-shadow placeholder-gray-400"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
               ></textarea>
            </div>

            <button 
                type="submit"
                className="w-full bg-plum-primary text-white font-extrabold py-4 rounded-xl shadow-lg hover:bg-plum-deep hover:shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 mt-4"
            >
                Send Message <Send size={18} />
            </button>
         </form>

         {/* Office Address */}
         <div className="mt-12 text-center border-t border-gray-100 pt-8">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                <MapPin size={12} /> Office
            </h4>
            <p className="text-xs text-gray-600 font-bold leading-relaxed max-w-[200px] mx-auto">
                Pureplay Skin Sciences (India) Pvt. Ltd.<br/>
                Thane, Maharashtra, India - 400604
            </p>
         </div>
      </div>
    </div>
  );
};

export default ContactScreen;