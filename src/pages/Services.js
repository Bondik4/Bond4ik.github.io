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
            <div className="text-[20px] pt-[25px] text-justify">
              <a>ElectroSales — автосалон, специализирующийся на продаже и обслуживанию 
                электрических и гибридных автомобилей премиум-класса. Наша миссия: предложить вам 
                широкий ассортимент современных автомобилей и сделать всё, чтобы сделка была по-настоящему 
                комфортной для вас.
              </a>
            </div>
            <div className="flex pt-12 gap-[70px]">
              <div className="relative">
                <img className="rounded-lg z-0" src="/media/Services/1.webp" />
                <div className="absolute text-white bottom-0 z-10 p-6">
                  <h1 className="text-[20px] font-Bold">Гарантия</h1>
                </div>
                <div className="absolute text-white bottom-0 right-0 z-10 p-2 border rounded-full mb-3 mr-3 stroke-[White] hover:bg-white hover:stroke-[#91036d] duration-[90ms]">
                  <svg className="" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <img className="rounded-lg z-0" src="/media/Services/2.webp" />
                <div className="absolute text-white bottom-0 z-10 p-6">
                  <h1 className="text-[20px] font-Bold">Сервисное обслуживание</h1>
                </div>
                <div className="absolute text-white bottom-0 right-0 z-10 p-2 border rounded-full mb-3 mr-3 stroke-[White] hover:bg-white hover:stroke-[#91036d] duration-[90ms]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <img className="rounded-lg z-0" src="/media/Services/3.webp" />
                <div className="absolute text-white bottom-0 z-10 p-6">
                  <h1 className="text-[20px] font-Bold">Тест-драй</h1>
                </div>
                <div className="absolute text-white bottom-0 right-0 z-10 p-2 border rounded-full mb-3 mr-3 stroke-[White] hover:bg-white hover:stroke-[#91036d] duration-[90ms]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                      <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
              </div>
            </div>
            <div>
              <div className="pt-[35px]"> 
                <h className="text-[40px] font-Bold">Услуги нашего автосалона</h>
              </div>
                <div className="flex">
                  <div className="flex flex-col pt-[80px] pb-[80px] pr-[80px]">
                    <h className="text-[28px]">Продажа новых автомобилей</h>
                      <a className="text-[20px] pt-[35px] ">В нашем шоуруме вы найдете модели брендов Voyah, Zeekr, Li Auto, BYD, NIO и других популярных производителей.
                        Менеджеры помогут разобраться в характеристиках и встроенных опциях комфорта, 
                        а также расскажут о доступных комплектациях.
                      </a>
                    <div className="pt-[60px] ">
                      <a className="font-Bold p-5 pr-[100px] pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</a>
                    </div>
                  </div>
                    <img className="rounded-lg w-[770px]" src="./media/Services/4.webp"></img>
                </div>
              <div className="flex pt-[70px]">
                <img className="rounded-lg w-[770px]" src="./media/Services/5.webp"></img>
                <div className="flex flex-col pt-[80px] pb-[80px] pl-[80px]">
                  <h className="text-[28px]">Тест-драйв автомобиля</h>
                  <a className="text-[20px] pt-[35px] ">Мы сотрудничаем с крупнейшими страховыми компаниями страны, поэтому предлагаем более пяти видов страхования, 
                  включая КАСКО, ОСАГО, GAP, страхование дополнительного оборудования и имущества. Вы можете застраховать автомобиль во время сделки, не покидая наш автосалон.
                  </a>
                  <div className="pt-[60px] ">
                    <a className="font-Bold p-5 pr-[100px] pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</a>
                  </div>
                </div>
              </div>
              <div className="flex pt-[70px]">
                  <div className="flex flex-col pt-[80px] pb-[80px] pr-[80px]">
                    <h className="text-[28px]">Установка зарядных станций</h>
                      <a className="text-[20px] pt-[35px] ">Если в вашем доме нет оборудования, чтобы заряжать электромобиль, мы можем его установить. 
                      Наши специалисты выполнят установку сертифицированного оборудования от производителя той марки автомобиля, который вы купите.
                      </a>
                    <div className="pt-[60px] ">
                      <a className="font-Bold p-5 pr-[100px] pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</a>
                    </div>
                  </div>
                    <img className="rounded-lg w-[770px]" src="./media/Services/6.webp"></img>
                </div>
                <div className="flex pt-[70px]">
                  <img className="rounded-lg w-[770px]" src="./media/Services/7.webp"></img>
                <div className="flex flex-col pt-[80px] pb-[80px] pl-[80px]">
                  <h className="text-[28px]">Выкуп автомобилей с пробегом</h>
                    <a className="text-[20px] pt-[35px] ">Если вы хотите продать свой текущий автомобиль, команда наших экспертов оценит его и предложит справедливую выкупную цену. 
                    Мы гарантируем быстрое и прозрачное оформление сделки.
                    </a>
                  <div className="pt-[60px] ">
                    <a className="font-Bold p-5 pr-[100px] pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</a>
                  </div>
                </div>
              </div>
              <div className="flex pt-[70px]">
                  <div className="flex flex-col pt-[80px] pb-[80px] pr-[80px]">
                    <h className="text-[28px]">Финансовые программы</h>
                      <a className="text-[20px] pt-[35px] ">Если в вашем доме нет оборудования, чтобы заряжать электромобиль, мы можем его установить. 
                      Наши специалисты выполнят установку сертифицированного оборудования от производителя той марки автомобиля, который вы купите.
                      </a>
                    <div className="pt-[60px] ">
                      <a className="font-Bold p-5 pr-[100px] pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</a>
                    </div>
                  </div>
                    <img className="rounded-lg w-[770px]" src="./media/Services/8.webp"></img>
                </div>
                <div className="flex pt-[70px]">
                  <img className="rounded-lg w-[770px]" src="./media/Services/9.webp"></img>
                <div className="flex flex-col pt-[80px] pb-[80px] pl-[80px]">
                  <h className="text-[28px]">Выкуп автомобилей с пробегом</h>
                    <a className="text-[20px] pt-[35px] ">Если вы хотите продать свой текущий автомобиль, команда наших экспертов оценит его и предложит справедливую выкупную цену. 
                    Мы гарантируем быстрое и прозрачное оформление сделки.
                    </a>
                  <div className="pt-[60px] ">
                    <a className="font-Bold p-5 pr-[100px] pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</a>
                  </div>
                </div>
              </div>
              <div className="py-[70px]">
                <a className="text-[20px] pt-[35px] ">
                Мы ценим каждого клиента, поэтому предлагаем первоклассный сервис, полное сопровождение сделки, 
                тест-драйв по специальному маршруту и профессиональное техническое обслуживание гибридных и электрических автомобилей. 
                Чтобы узнать больше информации об особенностях нашего автосалона, позвоните по телефону, указанному на сайте.
                </a>
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