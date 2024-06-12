import React from 'react'
import './Navbar.css'
import Record from './button.png'
import cast from './cast.png'
function Navbar() {
  return (
    <>
      <div className='nav'>
        <div>
          <img className='record' src={Record} title='Stop recording' alt="" />
        </div>
        <div className='navbar-menu'>
          <img className='cast-nav' src={cast}  alt="" />
          <span className='text-nav'>Suraj Shende (Presenting)</span>
          <button className='nav-btn' title='Stop presenting?'>Stop Presenting</button>

        </div>

      </div>
    </>
  )
}

export default Navbar