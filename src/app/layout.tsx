import { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@/components/Analytics'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { siteConfig, constructMetadata } from '@/config/site'
import '@/app/globals.css'

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <script async
          src="https://js.stripe.com/v3/buy-button.js">
        </script>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="py-6 md:py-8 bg-gray-100">
              <div className="container mx-auto px-4">
                <div className="text-center text-gray-600">
                  <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                  <p className="mt-2 text-sm">
                    Built with Next.js and{' '}
                    <a
                      href="https://jsonresume.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      JSON Resume
                    </a>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
        {siteConfig.analytics && <Analytics {...siteConfig.analytics} />}
      </body>
    </html>
  )
}