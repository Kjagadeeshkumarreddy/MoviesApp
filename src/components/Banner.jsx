import React from 'react'

function Banner() {
  return (
    <div 
    className='h-[45vh] md:h-[100vh] bg-cover bg-no-repeat bg-center flex justify-center text-white text-2xl items-end ' 
    style={{backgroundImage:'url(https://wallpapers.com/images/featured/kgf-pictures-uvwzff0j1u9i4otf.jpg)'}}>
        <div className='w-full text-center rounded-4xl bg-gray-900/60 p-4' 
        // style={{backgroundColor:'#2a292dff'}}
        >KGF chapter 2</div>
    </div>

  )
}

export default Banner