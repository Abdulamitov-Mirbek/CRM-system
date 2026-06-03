'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  MessageSquare, 
  Reply, 
  User, 
  Calendar,
  Filter,
  CheckCircle2,
  TrendingUp,
  Loader2
} from 'lucide-react';
import { marketingService } from '@/services/api';
import { Review } from '@/types/marketing';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isResponding, setIsResponding] = useState<string | null>(null);
  const [responseText, setResponseText] = useState('');
  const { data: session } = useSession();

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const data = await marketingService.getReviews();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleRespond = async (reviewId: string) => {
    if (!responseText.trim() || !session?.user) return;
    try {
      await marketingService.respondToReview(reviewId, responseText, (session.user as any).id);
      setReviews(reviews.map(r => 
        r.id === reviewId ? { ...r, response: responseText, responderName: session.user?.name || 'Manager' } : r
      ));
      setIsResponding(null);
      setResponseText('');
    } catch (error) {
      alert('Ошибка при отправке ответа');
    }
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Отзывы клиентов</h1>
          <p className="text-white/40 mt-1">Аналитика удовлетворенности и обратная связь</p>
        </div>
        <div className="flex gap-4">
          <div className="glass-panel px-6 py-3 rounded-2xl flex items-center gap-3">
            <TrendingUp className="text-emerald-400" size={20} />
            <div>
              <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Средний рейтинг</p>
              <p className="text-xl font-bold text-white">{averageRating} / 5.0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {reviews.map((review) => (
          <motion.div 
            layout
            key={review.id}
            className="glass-panel p-8 rounded-3xl group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <User className="text-velocity-cyan" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{review.contactName}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star 
                          key={s} 
                          size={14} 
                          className={cn(s <= review.rating ? "text-amber-400 fill-current" : "text-white/10")} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-white/20 flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-6">
              <p className="text-white/80 leading-relaxed italic">"{review.comment}"</p>
            </div>

            {review.response ? (
              <div className="ml-8 border-l-2 border-velocity-purple/30 pl-6 space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-velocity-purple">
                  <Reply size={12} />
                  Ответ от {review.responderName}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{review.response}</p>
              </div>
            ) : (
              <div className="flex justify-end">
                {isResponding === review.id ? (
                  <div className="w-full space-y-4">
                    <textarea 
                      value={responseText}
                      onChange={e => setResponseText(e.target.value)}
                      placeholder="Ваш ответ клиенту..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-velocity-purple/50 min-h-[100px] resize-none"
                    />
                    <div className="flex justify-end gap-3">
                      <button onClick={() => setIsResponding(null)} className="px-4 py-2 text-white/40 text-sm font-bold">Отмена</button>
                      <button onClick={() => handleRespond(review.id)} className="px-6 py-2 bg-velocity-purple text-white rounded-xl font-bold text-sm shadow-neon-purple">Отправить</button>
                    </div>
                  </div>
                ) : (
                  <button 
                    onClick={() => setIsResponding(review.id)}
                    className="flex items-center gap-2 px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm font-bold hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Reply size={16} />
                    Ответить
                  </button>
                )}
              </div>
            )}
          </motion.div>
        ))}

        {reviews.length === 0 && !loading && (
          <div className="glass-panel p-20 rounded-3xl text-center">
            <MessageSquare className="mx-auto text-white/10 mb-4" size={48} />
            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Отзывов пока нет</p>
          </div>
        )}
      </div>
    </div>
  );
}
