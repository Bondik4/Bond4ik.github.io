import './App.css';
import  React, { useState } from 'react';
import video from "./media/video/car.mp4";


const buttons = [
  {
    text: (
      <h1 className="h1-button1">
        BYD – это китайская компания, специализирующаяся на производстве
        электрических автомобилей и аккумуляторов, а также разработке
        новаторских решений в области чистой энергетики. В последние годы
        эта марка привлекла внимание не только потребителей, но и весьма
        важных игроков в мировой автомобильной индустрии.
        <a href="https://byd-motor.ru/?ysclid=lu8h4gmqx3549084511">
            Оффициальный сайт диллера
        </a>
      </h1>
    ),
    btnClass: "image-button-1"
  },
  {
    text: (
      <h1>
                  Lixiang – это компания, основанная в 2015 году в Китае. История
                  компании началась с создания электрического автомобиля, который
                  был предназначен для конкуренции с Tesla.
                  <a href="https://lixiang.su/?ysclid=lu8hlrd6j2323318632">
                    Оффициальный сайт диллера
                  </a>
                </h1>
    ),
    btnClass: "image-button-2"
  },
  {
    text: (
      <h1>
                  Полностью электрический бренд Zeekr — дочерняя структура компании
                  Geely. Он основан в 2021 году с привлечением мировой команды
                  специалистов. Над дизайном моделей бренда работает легендарный
                  Штефан Зилафф, который сотрудничал с Audi, Bentley и
                  Mercedes-Benz. Ему помогает шведский дизайн-центр в Гётеборге.
                  <a href="https://zeekr-avto.ru/?ysclid=lu8hoixua7215649414">
                    Оффициальный сайт диллера
                  </a>
                </h1>
    ),
    btnClass: "image-button-3"
  },
  {
    text: (
      <h1>
                  Voyah - Марка создана в 2018 с фокусом на глобальные продажи.
                  Марка VOYAH изменила ситуацию в премиальном сегменте рынка
                  электромобилей. Инновационный дизайн, непревзойденное качество,
                  революционный уровень технологий – вот те столпы, на которые
                  опирается бренд VOYAH, созданный как ответ вызовам нового времени.
                  <a href="https://voyah-spb.promo-major.ru/?utm_source=yandex_primo&utm_medium=cpc&utm_campaign=108758981&utm_content=15964166970&utm_term=voyah&calltouch_tm=yd_c:108758981_gb:5421896156_ad:15964166970_ph:50940095455_st:search_pt:premium_p:1_s:none_dt:desktop_reg:2_ret:50940095455_apt:none&yclid=6503935461271273471">
                    Оффициальный сайт диллера
                  </a>
                </h1>
    ),
    btnClass: "image-button-4"
  },
  {
    text: (
      <h1>
                  NIO - китайский производитель электромобилей и аккумуляторов,
                  основанный в 2014 году. Компания была создана на основе опыта
                  других производителей электромобилей и имеет ряд инновационных
                  технологий в своих автомобилях.
                  <a href="https://zeekr-avto.ru/?ysclid=lu8hoixua7215649414">
                    Оффициальный сайт диллера
                  </a>
                </h1>
    ),
    btnClass: "image-button-5"
  },
]

function App() {

  const buttonsJsx = buttons.map((elem) => {
    return <Modal text={elem.text} btnClass={elem.btnClass} />
  });

  return (
    <>
      <header className="headlobby">
        <div className="container mx-auto" >
          <a href="#" className="headlobby-brand">
            ElectroSales
          </a>
          <nav className="headlobby-wrap">
            <a href="#">Авто в наличии</a>
            <a href="#">Модельный ряд</a>
            <a href="#">Сервис</a>
            <a href="#">Услуги</a>
            <a href="#">О нас</a>
          </nav>
          <div className='flex justify-center items-center gap-2'>
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none"  xmlns="http://www.w3.org/2000/svg"><path d="M9.83333 10L11.5 7H7.5L9.16667 4M21 8V6M5.8 13H13.2C14.8802 13 15.7202 13 16.362 12.673C16.9265 12.3854 17.3854 11.9265 17.673 11.362C18 10.7202 18 9.88016 18 8.2V5.8C18 4.11984 18 3.27976 17.673 2.63803C17.3854 2.07354 16.9265 1.6146 16.362 1.32698C15.7202 1 14.8802 1 13.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V8.2C1 9.88016 1 10.7202 1.32698 11.362C1.6146 11.9265 2.07354 12.3854 2.63803 12.673C3.27976 13 4.11984 13 5.8 13Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <a className="header__charging" href="#">Зарядные станции</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.65073 11.7909C8.35078 12.0765 8.3392 12.5513 8.62486 12.8512C8.91053 13.1512 9.38526 13.1628 9.68521 12.8771L8.65073 11.7909ZM13.1852 9.54375C13.4852 9.25809 13.4967 8.78336 13.2111 8.48341C12.9254 8.18346 12.4507 8.17188 12.1507 8.45755L13.1852 9.54375ZM12.1507 9.54408C12.4507 9.82974 12.9254 9.81817 13.2111 9.51822C13.4967 9.21827 13.4852 8.74354 13.1852 8.45787L12.1507 9.54408ZM9.68521 5.12454C9.38526 4.83888 8.91053 4.85045 8.62486 5.1504C8.3392 5.45035 8.35078 5.92508 8.65073 6.21075L9.68521 5.12454ZM12.668 9.75065C13.0822 9.75065 13.418 9.41486 13.418 9.00065C13.418 8.58644 13.0822 8.25065 12.668 8.25065V9.75065ZM3.33463 8.25065C2.92042 8.25065 2.58463 8.58644 2.58463 9.00065C2.58463 9.41486 2.92042 9.75065 3.33463 9.75065V8.25065ZM9.68521 12.8771L13.1852 9.54375L12.1507 8.45755L8.65073 11.7909L9.68521 12.8771ZM13.1852 8.45787L9.68521 5.12454L8.65073 6.21075L12.1507 9.54408L13.1852 8.45787ZM12.668 8.25065H3.33463V9.75065L12.668 9.75065V8.25065Z" fill="white"></path></svg>
          </div>
          <div className="header__feedback">
            <a className='header__phone' href="tel:+79119745843">+7 911 974-58-43</a>
            <a className='header__call' href="#">Обратный звонок</a>
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
              <a className="hero-block__btn" href="#">
                Оставить заявку
              </a>
            </div>
          </div>
          {/* Кнопки */}
          <div className="all-button">
            {buttonsJsx}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;


function Modal({ text, btnClass }) {
  const [isOpened, setIsOpened] = useState(false);

  function openModal() {
    setIsOpened(true);
  }

  function closeModal(e) {
    if (e.target.classList.contains('modal')) {
      setIsOpened(false);
    }
  }

  return (
    <>
      <button data-open-modal="modal" className={btnClass} onClick={openModal} />
      <div className={"modal" + (isOpened ? ' active' : '')} id="modal" onClick={closeModal}>
        <div className="modal-window">
          {text}
        </div>
        <div className="overlay" />
      </div>
    </>
  );
}