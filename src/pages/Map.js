import Header from "../components/Header";
import Maplockation from "../components/Maplockation";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';  

function Map(){
  return(
    <div>
      <Header/>
      <div className="container mx-auto">
        <div className="pt-[140px] pl-[5px] pr-[5px]">
          <Link className="text-slate-400 text-[14px] " to="/">Главная </Link>
          <a className="text-[14px]">— Зарядные станции</a>
        </div>
          <div className="flex flex-col justify-center my-10">
            <div className="pl-[5px] pr-[5px]">
              <a className="text-[40px] font-Bold">Карта зарядных станций</a>
            </div>
            <div className="pt-[20px] pl-[7px] pr-[7px]">
            <Maplockation />
            </div>
          </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Map;
