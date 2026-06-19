import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RuRu AI — Black & Gold Studio',
  description: 'Declarative AI Video Generation',
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
