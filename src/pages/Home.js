import React, { useEffect, useState } from 'react';
import video from "../media/video/car.mp4";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import Gif from "../components/Gif";
import Podbor from "../components/podbor";
import Star from '../components/star';
import Advantages from '../components/advantages';
import burgerIcon from '../media/images/burger-menu.svg'
import OnlineConsultantButton from '../components/OnlineConsultantButton';



function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

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

      const [burgerIsOpen, setBurgerIsOpen] = useState(false);

      function burgerClick() {
        setBurgerIsOpen(true);
        document.body.style.overflow = "hidden"; 
      }

      function closeBurgerClick(e) {
        if (e.target.id === "burger-modal") {
          setBurgerIsOpen(false);
          document.body.style.overflow = "scroll"; 
        }
      }
      
  return (
    <>
      <header className={`headlobby  ${isScrolled ? 'headlobby-scroll' : ''}`}>
      <OnlineConsultantButton />
        <div className="w-full container justify-around mx-auto" >
          <img src={burgerIcon} width="50px" className=' flex 2xl:hidden' onClick={burgerClick} />
          <Link to="/" className="headlobby-brand text-[26px]">
            ElectroSales
          </Link>
          <nav className="headlobby-wrap hidden 2xl:flex">
            <Link to="/CarModel">Авто в наличии</Link>
            <Link to="/CarModel">Модельный ряд</Link>
            <Link to="/Services">Сервис</Link>
            <Link to="/Services">Услуги</Link>
            <Link to="/AboutUs">О нас</Link>
          </nav>
          <div className='flex justify-center items-center gap-2 hidden sm:flex'>
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none"  xmlns="http://www.w3.org/2000/svg"><path d="M9.83333 10L11.5 7H7.5L9.16667 4M21 8V6M5.8 13H13.2C14.8802 13 15.7202 13 16.362 12.673C16.9265 12.3854 17.3854 11.9265 17.673 11.362C18 10.7202 18 9.88016 18 8.2V5.8C18 4.11984 18 3.27976 17.673 2.63803C17.3854 2.07354 16.9265 1.6146 16.362 1.32698C15.7202 1 14.8802 1 13.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V8.2C1 9.88016 1 10.7202 1.32698 11.362C1.6146 11.9265 2.07354 12.3854 2.63803 12.673C3.27976 13 4.11984 13 5.8 13Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <Link className="header__charging " to="/Map">Зарядные станции</Link>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.65073 11.7909C8.35078 12.0765 8.3392 12.5513 8.62486 12.8512C8.91053 13.1512 9.38526 13.1628 9.68521 12.8771L8.65073 11.7909ZM13.1852 9.54375C13.4852 9.25809 13.4967 8.78336 13.2111 8.48341C12.9254 8.18346 12.4507 8.17188 12.1507 8.45755L13.1852 9.54375ZM12.1507 9.54408C12.4507 9.82974 12.9254 9.81817 13.2111 9.51822C13.4967 9.21827 13.4852 8.74354 13.1852 8.45787L12.1507 9.54408ZM9.68521 5.12454C9.38526 4.83888 8.91053 4.85045 8.62486 5.1504C8.3392 5.45035 8.35078 5.92508 8.65073 6.21075L9.68521 5.12454ZM12.668 9.75065C13.0822 9.75065 13.418 9.41486 13.418 9.00065C13.418 8.58644 13.0822 8.25065 12.668 8.25065V9.75065ZM3.33463 8.25065C2.92042 8.25065 2.58463 8.58644 2.58463 9.00065C2.58463 9.41486 2.92042 9.75065 3.33463 9.75065V8.25065ZM9.68521 12.8771L13.1852 9.54375L12.1507 8.45755L8.65073 11.7909L9.68521 12.8771ZM13.1852 8.45787L9.68521 5.12454L8.65073 6.21075L12.1507 9.54408L13.1852 8.45787ZM12.668 8.25065H3.33463V9.75065L12.668 9.75065V8.25065Z" fill="white"></path></svg>
          </div>
          <div className="header__feedback ">
            <div className='hidden sm:flex'>
             <a id="modal" className='header__phone text-lg ' href="tel:+79119745843">+7 911 974-58-43</a> 
            </div>
            <div className='hidden sm:flex'>
              <Modal setisOpened={setIsOpened} isOpened={isOpened} changeModalState={changeModalState}/>
            </div>
          </div>
        </div>
      </header>

      {/* Bg-menu */}

      {burgerIsOpen && (
        <div id='burger-modal' onClick={closeBurgerClick} className='appear-animation flex justify-start items-start w-full h-full fixed top-0 left-0 z-20' style={{background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.6) 100%)'}}>
          <div className='relative flex flex-col text-white '>
            <div className='flex justify-between items-center mb-4'>
              <div className='flex items-center'>
                <Link to="/" className="headlobby-brand text-3xl pl-6 pt-3">ElectroSales</Link>
              </div>
            </div>
            <div className='w-screen h-[1px] bg-white mb-2'></div>
            <div className='flex flex-col pl-6 gap-4'>
              <Link href="#" className="text-2xl my-2 cursor-pointer">Авто в наличии</Link>
              <Link to="/CarModel" className="text-2xl my-2 cursor-pointer">Модельный ряд</Link>
              <Link href="#" className="text-2xl my-2 cursor-pointer">Сервис</Link>
              <Link to="/Services" className="text-2xl my-2 cursor-pointer">Услуги</Link>
              <Link to="/AboutUs" className="text-2xl my-2 cursor-pointer">О нас</Link>
            </div>
              <div className='fixed bottom-0 pt-2 '>
                <div className='w-screen h-[1px] bg-white mt-4'></div>
                <a id="modal" className='header__phone text-2xl pt-5 pb-5 text-white pl-3 flex items-center' href="tel:+79119745843">
                  +7 911 974-58-43
                </a>
            </div>
          </div>
        </div>
      )}

      {/* Main */}
      <main>
        <div className="vidio-and-text">
          <video src={video} className="main__video" autoPlay="autoplay" playsInline="playsInline" loop = "loop" muted = "muted" type="video/mp4"/>
          <div className="hero-block__wrap">
            <div className="container h1-block text-[40px] xl:text-[80px]">
              <h1 className=''>Электромобили в России</h1>
              <div className="sub-title">Продажа и обслуживание</div>
            </div>
            <div className="flex flex-col gap-3 xl:flex-row justify-between pb-[40px] container  ">
              <Link className="w-full hero-block__btn" to="/CarModel">Выбрать автомобиль</Link>
              <button onClick={openModal} className="w-full hero-block__btn">Оставить заявку</button>
            </div>
          </div>
        </div>
        <div>
          <Gif />
        </div>
        <div>
          <Podbor />
        </div>
        <div>
          <Star/>
        </div>
        <div>
          <Advantages />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}





{/* Скрипты */}
{/* Модальное окно */}

function Modal({isOpened, changeModalState}) {
  return (
    <>
      <a data-open-modal="modal" className="pl-1 text-white underline-offset-4 hover:text-[#91036d] duration-[90ms] cursor-pointer" onClick={changeModalState}>Обратный звонок</a>
      <div className={"modal" + (isOpened ? ' active' : '')} id="modal" onClick={changeModalState}>
        <div className="w-[450px] flex flex-col items-center justify-center px-[60px] py-[70px] relative z-10 bg-slate-50 shadow-[0_10px_15px_rgba(0,0,0, .4)] rounded-[30px]">
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

export default Home;