import { HashLink as Link } from 'react-router-hash-link';
import React, { useState } from 'react';

function CarMenu(){
  return(
    <div className='fixed '>
      <a className='text-[20px]'>Автомобили:</a>
      <div className="flex flex-col gap-[20px] pt-[20px] flex text-[19px]">
        <Link to="/CarModel#NIO" className='font-Bold hover:text-[#91036d] duration-[90ms]'>NIO</Link>
        <Link to="/CarModel#Zeeker" className='font-Bold hover:text-[#91036d] duration-[90ms]'>Zeekr</Link>
        <Link to="/CarModel#Lixiang" className='font-Bold hover:text-[#91036d] duration-[90ms]'>Lixiang</Link>
        <Link to="/CarModel#BYD" className='font-Bold hover:text-[#91036d] duration-[90ms]'>BYD</Link>
        <Link to="/CarModel#Voyah" className='font-Bold hover:text-[#91036d] duration-[90ms]'>Voyah</Link>
      </div>
    </div>
  )
}

export default CarMenu;



