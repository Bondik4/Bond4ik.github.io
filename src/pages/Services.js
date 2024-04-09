import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; 


function Services(){
    return(
      <div>
        <div>
          <Header/>
        </div>
        <div className="container mx-auto">
            <div className="pt-[140px]">
              <Link className="text-slate-400 text-[14px] " to="/">Главная </Link>
              <a className="text-[14px]">— Услуги</a>
            </div>
            <div className="pt-[25px]">
              <h className="text-[50px] font-Bold">Покупателям</h>
            </div>
            <div className="text-[18px] pt-[25px] text-justify">
              <a>ElectroSales — автосалон, специализирующийся на продаже и обслуживанию 
                электрических и гибридных автомобилей премиум-класса. Наша миссия: предложить вам 
                широкий ассортимент современных автомобилей и сделать всё, чтобы сделка была по-настоящему 
                комфортной для вас.
              </a>
            </div>
            <div className="flex pt-12 gap-[70px]">
              <div className="relative">
                <img className="rounded-lg z-10" src="/media/Services/1.webp" />
                <div className="absolute text-white bottom-0 z-50 p-6">
                  <h1 className="text-[20px] font-Bold">Гарантия</h1>
                </div>
                <div className="absolute text-white bottom-0 right-0 z-50 p-2 border rounded-full mb-3 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <img className="rounded-lg z-10" src="/media/Services/2.webp" />
                <div className="absolute text-white bottom-0 z-50 p-6">
                  <h1 className="text-[20px] font-Bold">Сервисное обслуживание</h1>
                </div>
                <div className="absolute text-white bottom-0 right-0 z-50 p-2 border rounded-full mb-3 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <img className="rounded-lg z-10" src="/media/Services/3.webp" />
                <div className="absolute text-white bottom-0 z-50 p-6">
                  <h1 className="text-[20px] font-Bold">Тест-драй</h1>
                </div>
                <div className="absolute text-white bottom-0 right-0 z-50 p-2 border rounded-full mb-3 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                      <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
              </div>

            </div>

        </div>
          <div>
            <Footer/>
          </div>
      </div>
  )
}

export default Services