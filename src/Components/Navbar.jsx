// eslint-disable-next-line
import React from 'react'
import Logo from '../assets/tv.svg'
import menu from '../assets/Menu.svg'
import search from '../assets/Search.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-nav'>
            <img src={Logo} alt='' className='icon'/>
            <a href='http://localost:3000'>MovieBox</a>
        </div>
        <div className='middle-nav'>
            <input type='text'className='search-input' placeholder='What do you want to watch?'/>
            <img src={search} alt=''/>
        </div>
        <div className='right-nav'>
            <a href='http://localost:3000'>Sign in</a>
            <img src={menu} alt='' className='icon'/>
        </div>
    </div>
  )
}

export default Navbar