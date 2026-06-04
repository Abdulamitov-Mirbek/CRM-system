import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DAAMDA — Онлайн бронирование',
  description: 'Забронируйте столик и сделайте заказ онлайн',
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
