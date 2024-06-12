import React from 'react'
import './Cards.css'
import MinOn from './img/micon.png'
import MicOff from './img/micoff.png'

function Cards({StudentName, StudentImg ,Micstate}) {
  return (
    
    <div className='Cards'>
       <img src={Micstate ? MinOn:MicOff} className='mic' />
        <img className='Image' src={StudentImg}/>
        <span className='Name'>{StudentName}</span>
    </div>
  )
}

export default Cards