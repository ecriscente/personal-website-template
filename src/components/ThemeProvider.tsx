'use client'

import { createContext, useContext, useEffect } from 'react'
import { siteConfig } from '@/config/site'

type ThemeContextType = {
  theme: typeof siteConfig.theme
}

const ThemeContext = createContext<ThemeContextType>({
  theme: siteConfig.theme
})

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function ThemeProvider({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Apply theme CSS variables to :root
    const root = document.documentElement
    Object.entries(siteConfig.theme).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value)
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: siteConfig.theme }}>
      {children}
    </ThemeContext.Provider>
  )
} 