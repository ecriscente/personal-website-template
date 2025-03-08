import type { Metadata } from 'next'

export type SiteConfig = {
  name: string
  title: string
  description: string
  /** URL of the deployed site */
  url: string
  /** OpenGraph default image */
  ogImage: string
  /** Your profile image URL */
  profileImage: string
  /** Links to be displayed in the navigation */
  links: {
    github: string
    linkedin: string
    coffee?: string
  }
  /** Theme configuration */
  theme: {
    /** Primary color used throughout the site */
    primary: string
    /** Secondary color used for accents */
    secondary: string
    /** Background color for the hero section */
    background: string
    /** Text color for dark sections */
    textDark: string
    /** Text color for light sections */
    textLight: string
  }
  /** Navigation configuration */
  nav: {
    /** Whether to show the coffee button in navigation */
    showCoffeeButton: boolean
    /** Custom navigation items beyond the defaults */
    customItems?: Array<{
      name: string
      href: string
    }>
  }
  /** Analytics configuration */
  analytics?: {
    googleAnalyticsId?: string
    plausibleDomain?: string
  }
  stripe?: {
    buyButtonId: string
    publishableKey: string
  }
  domain: string
  image: string
  social: {
    github: string
    linkedin: string
    twitter?: string
  }
}

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? 'Default Name',
  title: process.env.NEXT_PUBLIC_SITE_TITLE ?? 'Default Title',
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'Default Description',
  url: `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`,
  ogImage: process.env.NEXT_PUBLIC_SITE_IMAGE ?? '/og-image.png',
  profileImage: process.env.NEXT_PUBLIC_PROFILE_IMAGE ?? '/profile.jpg',
  links: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? 'https://github.com',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? 'https://linkedin.com',
    coffee: "/coffee"
  },
  theme: {
    primary: '#3B82F6',
    secondary: '#10B981',
    background: '#1F2937',
    textDark: '#111827',
    textLight: '#F9FAFB'
  },
  nav: {
    showCoffeeButton: true,
    customItems: [
      {
        name: "Blog",
        href: "/blog"
      }
    ]
  },
  stripe: process.env.NEXT_PUBLIC_STRIPE_BUY_BUTTON_ID && process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    ? {
        buyButtonId: process.env.NEXT_PUBLIC_STRIPE_BUY_BUTTON_ID,
        publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      }
    : undefined,
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN!,
  image: process.env.NEXT_PUBLIC_SITE_IMAGE ?? '/og-image.png',
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? 'https://github.com',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? 'https://linkedin.com',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL
  }
}

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.image,
  icons = "/favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  const metadataBase = process.env.NODE_ENV === 'development' 
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}`)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@yourusername"
    },
    icons,
    metadataBase,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
} 