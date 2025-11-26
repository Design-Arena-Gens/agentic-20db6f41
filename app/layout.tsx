import type { Metadata } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Jeshua David - Video Editor & Visual Storyteller',
  description: 'Award-winning video editor crafting cinematic narratives',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
