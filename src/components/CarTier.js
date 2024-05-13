import { useState } from "react";

const cars = [
  {
    text: "NIO EC7",
    image: "/media/car/NIO/1.webp"
  },
  {
    text: "NIO ES7",
    image: "/media/car/NIO/2.webp"
  },
  {
    text: "NIO ES6, II",
    image: "/media/car/NIO/3.webp"
  },
  {
    text: "NIO EC6",
    image: "/media/car/NIO/4.webp"
  },
  {
    text: "NIO ES8, II",
    image: "/media/car/NIO/5.webp"
  },
  {
    text: "Zeeker 001",
    image: "/media/car/ZEEKR/1.webp"
  },
  {
    text: "Zeeker 009",
    image: "/media/car/ZEEKR/2.webp"
  },
  {
    text: "Zeeker X",
    image: "/media/car/ZEEKR/3.webp"
  },
  {
    text: "Zeeker 007",
    image: "/media/car/ZEEKR/4.webp"
  },
  {
    text: "Li Auto L8",
    image: "/media/car/Li/1.webp"
  },
  {
    text: "Li Auto L7",
    image: "/media/car/Li/2.webp"
  },
  {
    text: "Li Auto L9",
    image: "/media/car/Li/3.webp"
  },
  {
    text: "BYD Yangwang U8",
    image: "/media/car/BYD/1.webp"
  },
  {
    text: "BYD Tang",
    image: "/media/car/BYD/2.webp"
  },
  {
    text: "EVR",
    image: "/media/car/Voyah/1.webp"
  },
  {
    text: "PASSION EV",
    image:"/media/car/Voyah/2.webp"
  },
]

const buttons = [
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
      <h1 className="h1-button1 ">
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
]


function CarTier(){
    return(
      <div className = "flex flex-col gap-10 py-8">
        <div className="relative">
          <span id="NIO" className="absolute -top-[120px]" />
          <BlockOFCars name = "Модельный ряд NIO" image = {0} start = {0} end = {5}/>
        </div>

        <div className="relative">
          <span id="Zeeker" className="absolute -top-[120px]" />
          <BlockOFCars name = "Модельный ряд Zeeker" image = {1} start = {5} end = {9}/>
        </div>

        <div className="relative">
          <span id="Lixiang" className="absolute -top-[120px]" />
          <BlockOFCars name = "Модельный ряд Lixiang" image = {2} start = {9} end = {12}/>
        </div>

        <div className="relative">
          <span id="BYD" className="absolute -top-[120px]" />
          <BlockOFCars name = "Модельный ряд BYD" image = {3} start = {12} end = {14}/>
        </div>
        
        <div className="relative">
          <span id="Voyah" className="absolute -top-[120px]" />
          <BlockOFCars name = "Модельный ряд Voyah" image = {4} start = {14} end = {16}/>
        </div>
      </div>
    )
  }

  function BlockOFCars({name, image, start, end}){
    let arr = cars;
    arr = arr.slice(start, end)
    let gridRows = "1"
  

    if (arr.length > 4)
    {
        gridRows = "2"
    }
    return(
      <div className="bg-white rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] px-[30px] py-[20px]">
        <div className=" bg-[white] flex items-center gap-5">
          <Modal text = {buttons[image].text} btnClass={buttons[image].btnClass}/>
          <a className="font-bold text-[17px] ">{name}</a>
        </div>
        <div className = {"grid-cols-2 grid md:grid-cols-4 gap-8 grid-rows-" + gridRows}>
          { arr.map((elem, i) => { return <SingleCar text = {elem.text} carImage={elem.image} key = {i}/> }) }
        </div>
      </div>
    )
  }

  function SingleCar({text, carImage})
  {
    return(
      <div className = "flex flex-col items-center my-6 gap-4 ">
          <img className="md:w-[227px]" src={carImage}/>
          <a className="font-bold text-[14px]">{text}</a>
      </div>
    );
  }

  function Modal({ text, btnClass }) {
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
        <button data-open-modal="modal" className={" pr-[100px] rounded-lg shadow-[0_10px_40px_-0px_rgba(0,0,0,0.3)] " + btnClass} onClick={openModal} />
        <div className={"modal" + (isOpened ? ' active' : '')} id="modal" onClick={closeModal}>
          <div className="modal-window">
            {text}
          </div>
          <div className="overlay" />
        </div>
      </>
    );
  }
  
  
  export default CarTier;