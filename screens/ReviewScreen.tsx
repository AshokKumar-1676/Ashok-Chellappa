import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ChevronLeft, Camera, Send, ThumbsUp } from 'lucide-react';
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

  const reviews = [
      {
          name: "Ananya S.",
          stars: 5,
          title: "Magical Shine! ✨",
          desc: "Absolutely love how this serum makes my hair feel. It's so light and smells heavenly!",
          time: "2 days ago",
          verified: true
      },
      {
          name: "Riya M.",
          stars: 4,
          title: "Good for frizz",
          desc: "Controls frizz really well in this humidity. Wish the bottle was bigger!",
          time: "1 week ago",
          verified: true
      }
  ];

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

      <div className="px-6 py-6 flex-1 overflow-y-auto pb-24">
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

        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
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

        {/* Customer Reviews Section */}
        <div className="border-t border-gray-100 pt-8">
            <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                Customer Love <span className="text-red-500">❤️</span>
            </h3>
            <div className="space-y-4">
                {reviews.map((review, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-gray-800">{review.name}</span>
                                {review.verified && <span className="text-[10px] text-green-600 bg-green-100 px-1.5 py-0.5 rounded font-bold">Verified Buyer</span>}
                            </div>
                            <span className="text-[10px] text-gray-400 font-bold">{review.time}</span>
                        </div>
                        <div className="flex text-yellow-400 mb-2 gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={12} fill={i < review.stars ? "currentColor" : "none"} className={i < review.stars ? "" : "text-gray-300"} />
                            ))}
                        </div>
                        <h4 className="font-bold text-xs text-gray-900 mb-1">{review.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{review.desc}</p>
                        <div className="mt-3 flex gap-4 text-gray-400">
                            <button className="flex items-center gap-1 text-[10px] font-bold hover:text-gray-600 transition-colors">
                                <ThumbsUp size={12} /> Helpful
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full text-center mt-6 text-plum-primary text-xs font-extrabold uppercase tracking-wide hover:underline">
                View All 1,248 Reviews
            </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewScreen;