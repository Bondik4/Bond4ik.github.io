import  React, { useState } from 'react';
import video from "../media/video/car.mp4";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";




function Home() {
  return (
    <>
      <header className="headlobby">
        <div className="container mx-auto" >
          <Link to="/" className="headlobby-brand">
            ElectroSales
          </Link>
          <nav className="headlobby-wrap">
            <a href="#">Авто в наличии</a>
            <Link to="/CarModel">Модельный ряд</Link>
            <a href="#">Сервис</a>
            <Link to="/Services">Услуги</Link>
            <Link to="/AboutUs">О нас</Link>
          </nav>
          <div className='flex justify-center items-center gap-2'>
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none"  xmlns="http://www.w3.org/2000/svg"><path d="M9.83333 10L11.5 7H7.5L9.16667 4M21 8V6M5.8 13H13.2C14.8802 13 15.7202 13 16.362 12.673C16.9265 12.3854 17.3854 11.9265 17.673 11.362C18 10.7202 18 9.88016 18 8.2V5.8C18 4.11984 18 3.27976 17.673 2.63803C17.3854 2.07354 16.9265 1.6146 16.362 1.32698C15.7202 1 14.8802 1 13.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V8.2C1 9.88016 1 10.7202 1.32698 11.362C1.6146 11.9265 2.07354 12.3854 2.63803 12.673C3.27976 13 4.11984 13 5.8 13Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <Link className="header__charging" to="/Map">Зарядные станции</Link>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.65073 11.7909C8.35078 12.0765 8.3392 12.5513 8.62486 12.8512C8.91053 13.1512 9.38526 13.1628 9.68521 12.8771L8.65073 11.7909ZM13.1852 9.54375C13.4852 9.25809 13.4967 8.78336 13.2111 8.48341C12.9254 8.18346 12.4507 8.17188 12.1507 8.45755L13.1852 9.54375ZM12.1507 9.54408C12.4507 9.82974 12.9254 9.81817 13.2111 9.51822C13.4967 9.21827 13.4852 8.74354 13.1852 8.45787L12.1507 9.54408ZM9.68521 5.12454C9.38526 4.83888 8.91053 4.85045 8.62486 5.1504C8.3392 5.45035 8.35078 5.92508 8.65073 6.21075L9.68521 5.12454ZM12.668 9.75065C13.0822 9.75065 13.418 9.41486 13.418 9.00065C13.418 8.58644 13.0822 8.25065 12.668 8.25065V9.75065ZM3.33463 8.25065C2.92042 8.25065 2.58463 8.58644 2.58463 9.00065C2.58463 9.41486 2.92042 9.75065 3.33463 9.75065V8.25065ZM9.68521 12.8771L13.1852 9.54375L12.1507 8.45755L8.65073 11.7909L9.68521 12.8771ZM13.1852 8.45787L9.68521 5.12454L8.65073 6.21075L12.1507 9.54408L13.1852 8.45787ZM12.668 8.25065H3.33463V9.75065L12.668 9.75065V8.25065Z" fill="white"></path></svg>
          </div>
          <div className="header__feedback">
            <a className='header__phone' href="tel:+79119745843">+7 911 974-58-43</a>
            <Modal/>
          </div>
        </div>
      </header>
      {/* Main */}
      <main>
        <div className="vidio-and-text">
          <video src={video} className="main__video" autoplay="autoplay" playsinline = "playsinline" loop = "loop" muted = "muted" type="video/mp4"/>
          <div className="hero-block__wrap">
            <div className="container h1-block">
              <h1>Электромобили в России</h1>
              <div className="sub-title">Продажа и обслуживание</div>
            </div>
            <div className="hero-block__conteiner container">
              <a className="hero-block__btn" href="#">
                Выбрать автомобиль
              </a>
              <a className="hero-block__btn" href="#">Оставить заявку</a>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}

function Modal() {
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



  return (
    <>
      <a data-open-modal="modal" className=" text-white underline-offset-4 hover:text-[#91036d] duration-[90ms] " onClick={openModal}>Обратный звонок</a>
      <div className={"modal" + (isOpened ? ' active' : '')} id="modal" onClick={closeModal}>
        <div className="w-[450px] flex flex-col items-center justify-center px-[60px] py-[70px] relative z-10 bg-slate-50 shadow-[0_10px_15px_rgba(0,0,0, .4)] rounded-[30px]">
          <div className='flex flex-col place-items-center'>
            <h className="text-[28px] font-bold">Заказать звонок</h>
            <a className='pt-[20px] text-center text-slate-400 w-[300px]'>
              Оставить нам свой номер и наш менеджер свяжеться с вами в течении 15 минут.
              </a>
          </div>
          <div className='pt-[40px]'>
            <label>
              <PhoneInput/>
              <input className='p-4 pr-[70px] pl-[70px] border rounded-full border-black'  placeholder="+7 (___) ___ - __ - __" required/>
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

function Checkbox() {
  const [checked, setChecked] = useState(true);

  function chengeCheckbox() {
     setChecked(!checked);
  }

  return <div>
     <input type="checkbox" checked={checked} onChange={chengeCheckbox} />
  </div>;
}

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value.length > 11) {
      value = value.substring(0, 11);
    }

    let formattedValue = '+7';
    if (value.length >= 1) {
      formattedValue += '(' + value.substring(1);
      if (value.length >= 5) {
        formattedValue = formattedValue.substring(0, 5) + ')' + value.substring(5);
        if (value.length >= 9) {
          formattedValue = formattedValue.substring(0, 9) + '-' + value.substring(9);
          if (value.length >= 11) {
            formattedValue = formattedValue.substring(0, 12) + '-' + value.substring(11);
          }
        }
      }
    }
    setPhoneNumber(formattedValue);
  };

  return (
    <input 
      type="tel" 
      value={phoneNumber} 
      onChange={handleChange} 
      placeholder="+7(XXX)-XXX-XX-XX" 
      maxLength={17} 
    />
  );
};



export default Home;