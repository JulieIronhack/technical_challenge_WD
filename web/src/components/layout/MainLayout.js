import React from 'react'
import './MainLayout.css' 

function MainLayout({children}) {
  return (
    <div className='page-layout'>
      <div className='navbar-container'>
        navbar
      </div>
      <div className='data-container'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout