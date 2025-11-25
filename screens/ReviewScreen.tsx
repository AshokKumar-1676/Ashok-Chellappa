import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ChevronLeft, Camera, Send } from 'lucide-react';
import { AppRoute } from '../types';

const ReviewScreen: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate(AppRoute.HOME);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce-subtle">
          <Send size={40} />
        </div>
        <h2 className="text-2xl font-bold text-plum-primary mb-2">Review Submitted!</h2>
        <p className="text-gray-500">Thanks for sharing the love. You've earned 10 points!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full bg-white">
      <div className="px-6 py-6 border-b border-gray-100 sticky top-0 bg-white z-10 flex items-center">
        <button 
          onClick={() => navigate(-1)} 
          className="mr-4 text-gray-600 hover:bg-gray-50 p-1 rounded-full transition-all duration-200 active:scale-90"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-gray-800">Write a Review</h1>
      </div>

      <div className="px-6 py-6 flex-1 overflow-y-auto">
        <div className="flex items-center gap-4 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=150&auto=format&fit=crop" 
              className="w-16 h-16 rounded-lg object-cover bg-gray-50 shadow-sm"
              alt="Product"
            />
            <div>
                <h3 className="font-bold text-sm text-gray-800">Coconut Squalane Serum</h3>
                <p className="text-xs text-gray-500">Rate this product</p>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Star Rating */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`transition-all duration-200 hover:scale-125 focus:outline-none active:scale-90 ${
                    star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-200'
                  }`}
                >
                  <Star size={36} fill={star <= rating ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
            <span className={`text-sm font-bold text-plum-primary transition-opacity duration-300 ${rating > 0 ? 'opacity-100' : 'opacity-0'}`}>
              {rating === 0 ? 'Select a rating' : rating === 5 ? 'Loved it!' : rating >= 3 ? 'It was okay' : 'Not for me'}
            </span>
          </div>

          {/* Inputs */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Title</label>
            <input 
              type="text" 
              placeholder="Summary of your experience" 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-plum-primary focus:ring-1 focus:ring-plum-primary transition-shadow"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Review</label>
            <textarea 
              rows={4}
              placeholder="What did you like or dislike?" 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-plum-primary focus:ring-1 focus:ring-plum-primary resize-none transition-shadow"
            ></textarea>
          </div>

          {/* Photo Upload Placeholder */}
          <button 
            type="button" 
            className="w-full border-2 border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-gray-400 gap-2 hover:bg-gray-50 hover:border-plum-primary/30 transition-all duration-300 active:scale-[0.98]"
          >
            <Camera size={24} />
            <span className="text-xs font-bold">Add Photos (Optional)</span>
          </button>

          <button 
            type="submit"
            className="w-full bg-plum-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-plum-deep hover:shadow-xl transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:active:scale-100"
            disabled={rating === 0}
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewScreen;