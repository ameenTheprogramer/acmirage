import React from 'react'
import './Header.css'
import logo from '../../img_n_bgies/logo1.png'



function Header() {
  return (
    <div>
        <div className="header">
            <img src={logo} alt="" className='logo1' />
            <a href="https://www.ubisoft.com/en-gb/game/assassins-creed/mirage" className='notalink owbtn'>
                <span className='span1'>Official Website</span>
            </a>
        
        </div>
    </div>
  )
}

export default Header
