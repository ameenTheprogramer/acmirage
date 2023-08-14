import React from 'react'
import './Container.css'
import ac from '../../img_n_bgies/ac.png'
import mirage from '../../img_n_bgies/mirage.png'



    const clickfunction =()=>{

        var acimg = document.getElementById('ac')
        var mirageimg =document.getElementById('mirage')

        acimg.style.animation = 'fromleft 1s ease-out 1'
        mirageimg.style.animation = ' fromright 1s ease-out 1'

        acimg.addEventListener('animationend', pause)
        mirageimg.addEventListener('animationend', pause)

    }
    const pause =()=>{
        var acimg = document.getElementById('ac')
        var mirageimg =document.getElementById('mirage')

        acimg.style.animation = 'none'
        mirageimg.style.animation = 'none'
        // alert('pause')
        
    }

    window.addEventListener('load', clickfunction)
   





function Container() {
  return (
    <div>
        <img onClick={clickfunction} src={ac} alt="" className='ac' id='ac'/>
        <img onClick={clickfunction} src={mirage} alt="" className='mirage' id='mirage'/>
      
    </div>
  )
}

export default Container
