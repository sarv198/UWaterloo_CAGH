import { Link, NavLink } from 'react-router-dom'

const navClass = ({ isActive }) =>
  `nav-link${isActive ? ' active' : ''}`

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light site-navbar sticky-top"
      aria-label="Primary"
    >
      <div className="container">
        <Link className="navbar-brand" to="/about">
          UW CAGH
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <NavLink className={navClass} to="/about" end>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navClass} to="/events">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navClass} to="/involvement">
                Get Involved
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navClass} to="/team">
                Meet the Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navClass} to="/global-health-news">
                News Sources
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
