import React, { useState, useEffect } from 'react'
import '../styles/navbar.scss'
import { useTranslation } from 'react-i18next'
import '../i18n.jsx'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const changeLanguage = (lng) => i18n.changeLanguage(lng)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className='navbar'>
      <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <div className="nav-logo">
            <img src="logo.png" alt="logo" />
          </div>
        </div>

        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => { setMenuOpen(false); toggleMenu(); }}>Home</Link></li>
            <li><Link to="/fresh-fish" onClick={() => { setMenuOpen(false); toggleMenu(); }}>Fresh Fish</Link></li>
            <li><Link to="/seafood" onClick={() => { setMenuOpen(false); toggleMenu(); }}>Sea Food</Link></li>
            <li><Link to="/small-fish" onClick={() => { setMenuOpen(false); toggleMenu(); }}>Small Fish</Link></li>
          </ul>
          <div className="lan">
            <select onChange={(e) => changeLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
        </div>

        
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
