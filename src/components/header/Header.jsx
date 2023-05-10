import React, { useEffect, useRef } from 'react'

import './header.scss'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'

const headerNav = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Movies',
    path: './movie',
  },
  {
    name: 'TV Series',
    path: './tv',
  },
]

const Header = () => {
  const { pathname } = useLocation()
  const headerRef = useRef(null)

  const active = headerNav.findIndex((e) => e.path === pathname)

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add('shrink')
      } else {
        headerRef.current.classList.remove('shrink')
      }
    }

    window.addEventListener('scroll', shrinkHeader)

    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    }
  }, [])

  return (
    <header ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to="/">Screen-Spot</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((item, i) => (
            <li key={i} className={`${i === active ? 'active' : ''}`}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
