import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-black relative overflow-hidden">
      {/* Starfield — 3 layers at different zoom speeds */}
      <div className="stars-layer stars-1"></div>
      <div className="stars-layer stars-2"></div>
      <div className="stars-layer stars-3"></div>

      <Navbar />
      <main className="flex-1 pt-[80px] relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
