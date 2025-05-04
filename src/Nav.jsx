import React from 'react'
import { useTheme } from './assets/Contexts/themeContext'
import NavCss from './Nav.module.css'
function Nav({children}) {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={`${NavCss.navBar} ${theme === 'Light' ? NavCss.light : NavCss.dark}`}>
      <h1 className={NavCss.navheading}>Book review</h1>
      <div className={NavCss.navlinks}>
        <button onClick={toggleTheme} className={`${NavCss.button} ${theme === 'Light' ? NavCss.light : NavCss.dark}`}>
          {theme === 'Dark' ? 'Light' : 'Dark'}
        </button>
        {children}
      </div>
    </div>
  )
}

export default Nav

