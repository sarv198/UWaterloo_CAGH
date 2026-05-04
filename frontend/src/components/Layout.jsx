import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="site-root d-flex flex-column">
      <Navbar />
      <main className="container site-main flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
