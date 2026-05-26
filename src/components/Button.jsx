import React from 'react'
import cartIcon from '../assets/images/icon-cart.svg'

const Button = () => {
  return (
    <div className='m-auto mt-1.5 h-[50px] w-[286px] md:w-[236px] bg-green-500 text-white text-center rounded-[8px] flex justify-center items-center hover:bg-green-700 hover:cursor-pointer'>
        <img src={cartIcon} alt="Cart icon" className='w-[15.75px] h-[15.75px]' />
        <p className='mx-[8px] text_preset_2'>Add to Cart</p>
    </div>
  )
}

export default Button