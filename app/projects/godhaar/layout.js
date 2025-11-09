import GodhaarNavbar from './components/GodhaarNavbar'
import Footer from '../../../components/Footer'

export const metadata = {
  title: 'Godhaar - AI-Powered Cattle Management | AviaraAI',
  description: 'Revolutionary muzzle recognition technology for precise cattle identification and comprehensive herd management.',
  keywords: 'Cattle Management, Muzzle Recognition, AI, Livestock, Farm Technology, Godhaar',
}

export default function GodhaarLayout({ children }) {
  return (
    <div className="dark">
      <GodhaarNavbar />
      <main>{children}</main>
    </div>
  )
}