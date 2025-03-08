import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy Me a Coffee',
  description: 'Support Erion Criscente\'s work by buying him a coffee! Your contribution helps to maintain and improve his projects and educational content.',
  keywords: ['Buy me a coffee', 'Support', 'Donate', 'Developer Support', 'Erion Criscente'],
  openGraph: {
    title: 'Support Erion Criscente - Buy Me a Coffee',
    description: 'Your support helps me create better content, improve my projects, and stay caffeinated! ☕',
    images: [
      {
        url: '/erion.jpeg',
        width: 800,
        height: 800,
        alt: 'Buy Erion a Coffee',
      }
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Support Erion Criscente - Buy Me a Coffee',
    description: 'Your support helps me create better content, improve my projects, and stay caffeinated! ☕',
    images: ['/erion.jpeg'],
  },
}