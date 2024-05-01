import Header from "../components/Header";
import CarMenu from "../components/CarMenu";
import CarTier from "../components/CarTier";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; 

function Auto(){
  return (
    <div className="bg-[#F7F8F9] box-border">
    <Header />  
      <div className="container mx-auto pt-[120px] flex">
        <div className = "flex flex-col">
          <div className = "pt-[10px] pr-[160px]">
            <CarMenu />
          </div>
        </div>
      <div className="pl-[120px]">
        <CarTier />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
  )
}

export default Auto;