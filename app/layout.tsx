import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ali Orhan — Data Science & Analytics',
  description: 'Ali Orhan explores data science, analytics, and technology through practical projects and thoughtful writing.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
