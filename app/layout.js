import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: 'AviaraAI',
  description: 'AviaraAI creates practical AI solutions across multiple industries, from cattle management to smart surveillance.',
  keywords: 'AI, Artificial Intelligence, Cattle Management, Godhaar, Computer Vision, Machine Learning, India',
  icons: {
    icon: "/logo_think.png",  sizes: "192x192", type: "image/png"
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} dark`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}