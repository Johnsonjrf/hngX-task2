import React from 'react'
import Logo from '../assets/Play.svg'
import pic from '../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import pic1 from '../assets/PngItem_1381056 1.svg'

const HeroBox = () => {
  return (
    <div className='hero-box'>
        <h1 className='hero-box-title'>John Wick 3 : Parabellum</h1>
        <div className='row2'>
            <div><img src={pic} alt=''/> <span>86.0/100</span></div>
            <div><img src={pic1} alt=''/> <span>97%</span></div>
        </div>
        <div className='row3'>
            <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <a href='http'><img src={Logo} alt=''/> <span>WATCH TRAILER</span></a>
        </div>
    </div>
  )
}

export default HeroBox