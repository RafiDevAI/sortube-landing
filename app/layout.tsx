import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sortube — YouTube Playlist Categorizer',
  description: 'Open-source, locally hosted software that uses Gemini AI to organize saved YouTube playlist videos into focused topic playlists.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Sortube — YouTube Playlist Categorizer',
    description: 'Open-source, locally hosted software that uses Gemini AI to organize saved YouTube playlist videos into focused topic playlists.',
  },
  twitter: {
    card: 'summary',
    title: 'Sortube — YouTube Playlist Categorizer',
    description: 'Open-source, locally hosted software that uses Gemini AI to organize saved YouTube playlist videos into focused topic playlists.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
