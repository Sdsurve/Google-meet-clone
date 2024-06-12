import React from 'react'
import './Footer.css'
import MicOn from './img/mic.png'
import Cast from './img/cast.png'
import comment from './img/comment.png'
import end_call from './img/end-call.png'
import hand from './img/hand.png'
import happy from './img/happy.png'
import info from './img/info.png'
import lock from './img/lock.png'
import  more from './img/more.png'
import Novideo from './img/no-video.png'
import Stitle from './img/subtitles.png'
import user from './img/user.png'

function Footer() {
  return (
    <>
    <div className='flex'>
      <div>
        <span>18:59 | ICP-7.0</span>
      </div>
      <div className='mid-flex'>
        <img className='mic-footer' src={MicOn} title='Mic' alt="" />
        <img className='novideo' src={Novideo} title='Video' alt="" />
        <img className='mic-footer' src={Stitle} title='Subtitles' alt="" />
        <img className='mic-footer' src={happy} title='Emoji' alt="" />
        <img className='cast' src={Cast} title='Screen-share' alt="" />
        <img className='mic-footer' src={hand} title='Raise Hand' alt="" />
        <img className='mic-footer' src={more} title='more' alt="" />
        <img className='call_end' src={end_call} title='End Meeting ?' alt="" />
      </div>
      <div className='end-flex'>
        <img className='info' src={info} title='info' alt="" />
        <img className='info' src={user} title='participents' alt="" />
        <img className='info' src={comment} title='comment' alt="" />
        <img className='info' src={lock} title='private' alt="" />
      </div>

    </div>
    </>
  )
}

export default Footer