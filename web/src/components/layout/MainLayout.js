import React from 'react'
import './MainLayout.css' 
import Navbar from '../navbar/Navbar'

function MainLayout({children}) {
  return (
    <div className='page-layout'>
      <div className='navbar-container bg-info'>
        <Navbar />
      </div>
      <div className='data-container'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout