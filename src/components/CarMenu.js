import { HashLink as Link } from 'react-router-hash-link';

function CarMenu(){
  return(
    <div className=''>
      <a className='text-[20px] pt-[50px]'>Автомобили</a>
      <div className="flex flex-col gap-[20px] pt-[20px] flex text-[19px]">
        <Link to="/CarModel#=NIO" className='font-Bold hover:text-[#91036d] opacity-80'>NIO</Link>
        <Link to="/CarModel#Zeeker" className='font-Bold hover:text-[#91036d] opacity-80'>Zeekr</Link>
        <Link to="/CarModel#Lixiang" className='font-Bold hover:text-[#91036d] opacity-80'>Lixiang</Link>
        <Link to="/CarModel#BYD" className='font-Bold hover:text-[#91036d] opacity-80'>BYD</Link>
        <Link to="/CarModel#Voyah" className='font-Bold hover:text-[#91036d] opacity-80'>Voyah</Link>
      </div>
    </div>
  )
}

export default CarMenu;
