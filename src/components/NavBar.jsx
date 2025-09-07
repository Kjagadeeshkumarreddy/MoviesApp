import React from 'react'
import logo from '../MovieLogo.png'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div className='flex  space-x-8 items-center m-[1rem] text-2xl text-sky-600/100 dark:text-sky-400/100'>
        <img className='w-[50px]' src={logo} alt="movie-logo" />
        <Link to='/' className='hover:scale-110 hover:underline'>Movies</Link>
        <Link to='/watchlist' className='hover:scale-110 hover:underline'>WatchList</Link>
    </div>
  )
}

export default NavBar