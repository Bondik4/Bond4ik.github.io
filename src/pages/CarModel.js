import Header from "../components/Header";
import CarMenu from "../components/CarMenu";
import CarTier from "../components/CarTier";
import Footer from "../components/Footer";

function Auto(){
  return (
    <div className="bg-[#F7F8F9] box-border">
    <Header /> 
    <div className="container mx-auto pt-[120px]">
      <div>
        <CarMenu />
      </div>
      <div className="">
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



