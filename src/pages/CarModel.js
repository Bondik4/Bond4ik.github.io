import Header from "../components/Header";
import CarMenu from "../components/CarMenu";
import CarTier from "../components/CarTier";
import Footer from "../components/Footer";


function Auto(){
  return (
    <div className="bg-[#F7F8F9] box-border">
    <Header />  
      <div className="container mx-auto pt-[120px] flex flex-col md:flex-row">
        <div className = "flex flex-col ">
          <div className = "pt-[10px] pr-[160px]  pl-[7px]">
            <CarMenu />
          </div>
        </div>
      <div className="xl:pl-[120px] pr-[7px] pl-[7px] sm:pl-[30px] md:pl-[30px] lg:pl-[30px]">
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