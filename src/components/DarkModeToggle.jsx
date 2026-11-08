import React from 'react'

const DarkModeToggle = ({darkMode, toggleDarkMode}) => {
  return (
  <button onClick={darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}>
  </button>
  )
  
}

export default DarkModeToggle
