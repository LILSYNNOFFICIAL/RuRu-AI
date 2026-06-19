import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RuRu AI',
  description: 'Black & Gold AI Video Studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
