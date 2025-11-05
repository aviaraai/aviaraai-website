import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AviaraAI - AI Solutions That Transform Real-World Challenges',
  description: 'AviaraAI creates practical AI solutions across multiple industries, from cattle management to smart surveillance.',
  keywords: 'AI, Artificial Intelligence, Cattle Management, Godhaar, Computer Vision, Machine Learning, India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-primary-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}