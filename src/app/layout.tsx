import type { Metadata } from 'next';
import { inter } from '@/config/fonts';

import './globals.css';
import { Provider } from '@/components';

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
