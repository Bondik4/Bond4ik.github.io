import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; 
import React, { useState } from 'react';
import OnlineConsultantButton from '../components/OnlineConsultantButton';


function Services() {
    const [isOpened, setIsOpened] = useState(false);  
    function openModal() {
      document.body.style.overflow = "hidden";
      setIsOpened(true);
      }

      
      
      function closeModal(e) {
      if (e.target.classList.contains('modal')) {
      setIsOpened(false);
      document.body.style.overflow = "scroll";
      }
      }
      
      const changeModalState = (e) => {
      if (isOpened) {closeModal(e);} 
      else {openModal();}
      }

      return (
        <div className="flex flex-col min-h-screen">
          <div className="">
            <Header />
            <OnlineConsultantButton />
            <Modal setisOpened={setIsOpened} isOpened={isOpened} changeModalState={changeModalState}/>
          </div>
          <div className="container mx-auto">
            <div className="pt-[140px] sm:pt-20 pl-[7px] pr-[7px]">
              <Link className="text-slate-400 text-[14px] sm:text-base" to="/">Главная </Link>
              <a className="text-[14px] sm:text-base">— Услуги</a>
            </div>
            <div className="pt-[25px] text-center xl:text-left">
              <h className="text-[50px] font-Bold sm:text-4xl md:text-5xl ">Покупателям</h>
            </div>
            <div className="text-[20px] pt-[25px] text-justify pl-[7px] pr-[7px]">
              <a>ElectroSales — автосалон, специализирующийся на продаже и обслуживанию 
                электрических и гибридных автомобилей премиум-класса. Наша миссия: предложить вам 
                широкий ассортимент современных автомобилей и сделать всё, чтобы сделка была по-настоящему 
                комфортной для вас.
              </a>
            </div>
            <div className="flex flex-col md:flex-row pt-12 gap-[70px] pl-[7px] pr-[7px]">
              <div className="relative">
                <img className="rounded-lg z-0 w-full" src="/media/Services/1.webp" />
                <div className="absolute text-white bottom-0 z-0 p-6">
                  <h1 className="text-[20px] font-Bold ">Гарантия</h1>
                </div>
                <div onClick={openModal} className="absolute text-white bottom-0 right-0 z-0 p-2 md:p-0 lg:p-2 border rounded-full mb-3 mr-3 stroke-[White] hover:bg-white hover:stroke-[#91036d] duration-[90ms]">
                  <svg className="" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <img className="rounded-lg z-0 w-full" src="/media/Services/2.webp" />
                <div className="absolute text-white bottom-0 z-0 p-6">
                  <h1 className="text-[17px] lg:text-[20px] font-Bold">Сервисное обслуживание</h1>
                </div>
                <div onClick={openModal} className="absolute text-white bottom-0 right-0 z-0 p-2 md:p-0 lg:p-2 border rounded-full mb-3 mr-3 stroke-[White] hover:bg-white hover:stroke-[#91036d] duration-[90ms]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <img className="rounded-lg z-0 w-full" src="/media/Services/3.webp" />
                <div className="absolute text-white bottom-0 z-0 p-6">
                  <h1 className="text-[20px] font-Bold">Тест-драй</h1>
                </div>
                <div onClick={openModal} className="absolute text-white bottom-0 right-0 z-0 p-2 md:p-0 lg:p-2 border rounded-full mb-3 mr-3 stroke-[White] hover:bg-white hover:stroke-[#91036d] duration-[90ms]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                      <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
              </div>
            </div>
            <div>
              <div className="pt-[35px] text-center xl:text-left"> 
                <h className="text-[40px] font-Bold">Услуги нашего автосалона</h>
              </div>
                <div className="flex flex-col xl:flex-row">
                  <div className="flex flex-col lx:pr-[80px] pt-[20px] xl:pt-[80px] sm:pb-[80px]  text-center xl:text-left">
                    <h className="text-[28px]">Продажа новых автомобилей</h>
                      <a className="text-[20px] pt-[35px] ">В нашем шоуруме вы найдете модели брендов Voyah, Zeekr, Li Auto, BYD, NIO и других популярных производителей.
                        Менеджеры помогут разобраться в характеристиках и встроенных опциях комфорта, 
                        а также расскажут о доступных комплектациях.
                      </a>
                    <div className="pt-[60px] pb-10 sm:pb-0 ">
                      <button onClick={openModal} className="font-Bold зи p-5 sm:pr-[100px] sm:pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</button>
                    </div>
                  </div>
                    <img className="rounded-lg xl:w-[770px]" src="./media/Services/4.webp"></img>
                </div>
              <div className="flex flex flex-col xl:flex-row pt-[70px]">
                <img className="rounded-lg xl:w-[770px]" src="./media/Services/5.webp"></img>
                <div className="flex flex-col pt-[80px] xl:pb-[80px] xl:pl-[80px] text-center xl:text-left">
                  <h className="text-[28px]">Тест-драйв автомобиля</h>
                  <a className="text-[20px] pt-[35px] ">Мы сотрудничаем с крупнейшими страховыми компаниями страны, поэтому предлагаем более пяти видов страхования, 
                  включая КАСКО, ОСАГО, GAP, страхование дополнительного оборудования и имущества. Вы можете застраховать автомобиль во время сделки, не покидая наш автосалон.
                  </a>
                  <div className="pt-[60px] ">
                    <button onClick={openModal} className="font-Bold зи p-5 sm:pr-[100px] sm:pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</button>
                  </div>
                </div>
              </div>
              <div className="flex flex flex-col xl:flex-row pt-[70px]">
                  <div className="flex flex-col xl:pt-[80px] pb-[80px] xl:pr-[80px] text-center xl:text-left">
                    <h className="text-[28px]">Установка зарядных станций</h>
                      <a className="text-[20px] pt-[35px] ">Если в вашем доме нет оборудования, чтобы заряжать электромобиль, мы можем его установить. 
                      Наши специалисты выполнят установку сертифицированного оборудования от производителя той марки автомобиля, который вы купите.
                      </a>
                    <div className="pt-[60px] ">
                      <button onClick={openModal} className="font-Bold зи p-5 sm:pr-[100px] sm:pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</button>
                    </div>
                  </div>
                    <img className="rounded-lg xl:w-[770px]" src="./media/Services/6.webp"></img>
                </div>
                <div className="flex flex flex-col xl:flex-row pt-[70px]">
                  <img className="rounded-lg xl:w-[770px]" src="./media/Services/7.webp"></img>
                <div className="flex flex-col pt-[80px] xl:pb-[80px] xl:pl-[80px] text-center xl:text-left">
                  <h className="text-[28px]">Выкуп автомобилей с пробегом</h>
                    <a className="text-[20px] pt-[35px] ">Если вы хотите продать свой текущий автомобиль, команда наших экспертов оценит его и предложит справедливую выкупную цену. 
                    Мы гарантируем быстрое и прозрачное оформление сделки.
                    </a>
                  <div className="pt-[60px] ">
                    <button onClick={openModal} className="font-Bold зи p-5 sm:pr-[100px] sm:pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</button>
                  </div>
                </div>
              </div>
              <div className="flex flex flex-col xl:flex-row pt-[70px]">
                  <div className="flex flex-col xl:pt-[80px] pb-[80px] xl:pr-[80px] text-center xl:text-left">
                    <h className="text-[28px]">Финансовые программы</h>
                      <a className="text-[20px] pt-[35px] ">Если в вашем доме нет оборудования, чтобы заряжать электромобиль, мы можем его установить. 
                      Наши специалисты выполнят установку сертифицированного оборудования от производителя той марки автомобиля, который вы купите.
                      </a>
                    <div className="pt-[60px] ">
                      <button onClick={openModal} className="font-Bold зи p-5 sm:pr-[100px] sm:pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</button>
                    </div>
                  </div>
                    <img className="rounded-lg xl:w-[770px]" src="./media/Services/8.webp"></img>
                </div>
                <div className="flex flex flex-col xl:flex-row pt-[70px]">
                  <img className="rounded-lg xl:w-[770px]" src="./media/Services/9.webp"></img>
                <div className="flex flex-col pt-[80px] xl:pb-[80px] xl:pl-[80px] text-center xl:text-left">
                  <h className="text-[28px]">Страхование</h>
                    <a className="text-[20px] pt-[35px] ">Если вы хотите продать свой текущий автомобиль, команда наших экспертов оценит его и предложит справедливую выкупную цену. 
                    Мы гарантируем быстрое и прозрачное оформление сделки.
                    </a>
                  <div className="pt-[60px] ">
                    <button onClick={openModal} className="font-Bold p-5 sm:pr-[100px] sm:pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]">Узнать подробнее</button>
                  </div>
                </div>
              </div>
              <div className="py-[70px] pr-[7px] pl-[7px]">
                <a className="text-[20px] pt-[35px]">
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

{/* Скрипты */}
{/* Модальное окно */}

function Modal({isOpened, changeModalState}) {
  return (
    <>
      <a data-open-modal="modal" className="pl-1 text-white underline-offset-4 hover:text-[#91036d] duration-[90ms] cursor-pointer" onClick={changeModalState}>Обратный звонок</a>
      <div className={"modal" + (isOpened ? ' active' : '')} id="modal" onClick={changeModalState}>
        <div className="w-[450px] flex flex-col items-center justify-center px-[60px] py-[70px] relative z-30 bg-slate-50 shadow-[0_10px_15px_rgba(0,0,0, .4)] rounded-[30px]">
          <div className='flex flex-col place-items-center'>
            <h className="text-[28px] font-bold">Заказать звонок</h>
            <a className='pt-[20px] text-center text-slate-400 w-[300px]'>
              Оставить нам свой номер и наш менеджер свяжеться с вами в течении 15 минут.
              </a>
          </div>
          <div className='pt-[40px]'>
            <label>
              <div>
                <PhoneInput/>
              </div>
            </label>
          </div>
          <div className='pt-[20px]'>
            <button className='font-Bold p-5 pr-[100px] pl-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]'>Заказать звонок</button>
          </div>
          <div className='pt-[30px] text-justify w-[300px] flex gap-[10px] '>
            <Checkbox/>
            <a className='text-[10px] '>Я ознакомился с Политикой обработки персональных данных клиентов и Пользовательским соглашением сервиса AutoSales,
               принимаю условия Соглашения исогласен с обработкой моих персональных данных AutoSales способами и целей указанными 
               в Политике</a>
          </div>
        </div>
        <div className="overlay" />
      </div>
    </>
  );
}

{/* Кнопка галочки в модальном окне */}

function Checkbox() {
  const [checked, setChecked] = useState(false);

  function chengeCheckbox() {
     setChecked(!checked);
  }

  return <div>
     <input type="checkbox" checked={checked} onChange={chengeCheckbox} />
  </div>;
}

{/* Инпут окно в модальном окне */}

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
  
    if (value.length >= 1) {
      value = '+7(' + value.substring(1);
      if (value.length >= 6) {
        value = value.substring(0, 6) + ')' + value.substring(6);
        if (value.length >= 10) {
          value = value.substring(0, 10) + '-' + value.substring(10);
          if (value.length >= 13) {
            value = value.substring(0, 13) + '-' + value.substring(13);
          }
        }
      }
    }

    // проверяем, был ли символ удален
    if (e.target.value.length < phoneNumber.length) {
      setPhoneNumber(e.target.value); // обновляем состояние только если символ был удален
    } else {
      setPhoneNumber(value);
    }
  };

  return (
    <input className='p-4 pr-[70px] pl-[70px] border rounded-full border-black text-center'
      type="tel" 
      value={phoneNumber} 
      onChange={handleChange} 
      placeholder="+7 (___) ___ - __ - __"
      maxLength={16} 
    />
  );
};

export default Services