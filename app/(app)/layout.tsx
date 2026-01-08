import { Navigation } from '@/widgets/navigation';

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-(--color-bg-base)">
      <Navigation />
      {children}
    </div>
  );
}
