import { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import StoreProvider from './StoreProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'PietraMarmara - Premium Marble & Natural Resources Supplier',
  description:
    'PietraMarmara specializes in premium marble, natural stone, and high-quality agricultural products. Your trusted B2B partner for sustainable resources.',
  keywords:
    'premium marble, natural stone, agricultural products, food crops, plantation crops, interior design, sustainable farming, B2B supplier',
  openGraph: {
    title: 'PietraMarmara - Premium Marble & Natural Resources',
    description:
      'Your trusted partner for premium marble and sustainable agricultural products.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PietraMarmara - Premium Marble & Natural Resources',
    description: 'Premium quality marble and agricultural products for your business.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
