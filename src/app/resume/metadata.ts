import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Resume',
  description: 'Erion Criscente - Full Stack Developer specialized in Django, Next.js, Docker, Serverless and AWS. View my professional experience, skills, and education.',
  keywords: ['Resume', 'CV', 'Full Stack Developer', 'Django', 'Next.js', 'LLMOps', 'Machine Learning', 'Erion Criscente'],
  openGraph: {
    title: 'Erion Criscente - Professional Resume',
    description: 'Full Stack Developer with expertise in Django, Next.js, Docker, Serverless and AWS. View my skills, experience, and education.',
    images: [
      {
        url: '/erion.jpeg',
        width: 800,
        height: 800,
        alt: 'Erion Criscente - Professional Resume',
      }
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Erion Criscente - Professional Resume',
    description: 'Full Stack Developer with expertise in Django, Next.js, Docker, and AWS.',
    images: ['/erion.jpeg'],
  },
}