import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const BookingPortal = dynamic(() => import('./BookingPortal'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="animate-spin text-crm-primary" size={48} />
    </div>
  ),
});

export default function BookPage() {
  return <BookingPortal />;
}
