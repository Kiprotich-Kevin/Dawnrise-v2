import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main key={pathname} className="motion-safe:animate-page-fade-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
