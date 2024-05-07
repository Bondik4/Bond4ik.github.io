import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';  

function AboutUs() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container mx-auto ">
        <div className="pt-[140px]">
          <div>
            <Link className="pl-[5px] text-slate-400 text-[14px] " to="/">Главная </Link>
            <a className="text-[14px] ">— О нас</a>
          </div>
        </div>
        <div className="pt-[25px]">
          <h className="text-[50px] font-Bold pl-[3px]">О нас</h>
        </div>
       <div className="text-[19px] pt-[25px] text-justify pl-[7px] pr-[7px]">
          <a>CarSales — одна из крупнейших сетей автосалонов в России, которая начала свою историю 
            в 1992 году. Развиваясь с годами, мы стали официальным дилером более 20 популярных 
            автомобильных брендов, и не раз завоевывали почетные награды в рамках Российской 
            ежегодной национальной премии “АВТОДИЛЕР ГОДА”. В марте 2023 года мы представили 
            новый автосалон — ElectroSales, который специализируется на продаже прогрессивных 
            гибридных и электрических автомобилей.
          </a>
        </div>
        <div className="text-[19px] py-[50px] text-justify pl-[7px] pr-[7px]">
          <a>Цель нового проекта — не просто продажа 
            автомобилей на электрической тяге, но и популяризация этого инновационного транспорта 
            в России. Кроме того, CarSales вносит свой вклад в развитие зарядной инфраструктуры в 
            Питире, размещая новые зарядные станции на своих локациях.</a>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row"> 
          <img className="rounded-lg w-full sm:w-[700px]" src="./media/AboutUs/1.webp"></img>
          <div className="flex flex-col pt-[70px] pb-[70px] md:pl-0">
            <h className="text-[50px] font-Bold lg:pl-[80px] pl-[7px] pr-[7px]">Миссия компании</h>
            <a className="text-[19px] pt-[20px] text-justify pl-[7px] pr-[7px] lg:pl-[80px]">
              За десятилетия своей истории компания CarSales 
              зарекомендовала себя как надежный партнер и крупнейший 
              независимый дистрибьютор автомобилей в России. Наша основная миссия: 
              окружить клиентов комфортом на всех этапах сделки, предоставить большой 
              выбор автомобилей в разных комплектациях, а также обеспечить качественное 
              сервисное сопровождение.
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex lg:flex-row">
          <div className="flex flex-col pt-[100px] pb-[80px] pr-[80px] md:pr-0">
            <h className="text-[48px] font-Bold pl-[5px]">Преимущества ElectroSales</h>
            <div>
              <ul className="text-[21px] list-disc pl-[30px] pt-[20px] ">
                <li>широкий ассортимент электрических автомобилей от популярных производителей;</li>
                <li>команда квалифицированных мров;</li>
                <li>полное сопровождение сделки;</li>
                <li>разнообразие финансовых программ;</li>
                <li>гарантия на каждый автомобиль;</li>
                <li>возможность застраховать машину во время сделки;</li>
                <li>специальные условия для корпоративных клиентов;</li>
                <li>тест-драйв новинок.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:pt-[100px]">
            <img className="rounded-lg lg:w-[700px] " src="./media/AboutUs/2.webp"></img>
          </div>
        </div>
        <div className="text-[19px] py-[50px] pl-[7px] pr-[7px] ">
          <a>Мы стремимся к тому, чтобы каждый клиент был доволен сделкой в нашем автосалоне. 
            Предлагаем Вам лично оценить наше гостеприимство и профессиональный подход.</a>
        </div>
        <div className="pl-[7px] pr-[7px]">
          <h className="text-[50px] font-Bold ">Почему стоит выбрать ElectroSales</h>
          <div className="text-[19px] pt-[20px]">
            <a>Мы привозим электромобили из Китая разными путями, в зависимости от того, какой дешевле 
              для конкретного автомобиля. И мы не берем деньги за гарантию, тем более, что вероятность 
              ее необходимости стремится к нулю.</a>
          </div>
          <div className="text-[19px] pt-[50px]">
            <a>Внимательно следим за мировым рынком автомобилей и оперативно пополняем автосалон 
              свежими новинками. Стремимся разнообразить ассортимент моделей, поэтому уже сейчас 
              собрали большой склад электрокаров и гибридных моделей, доступных к покупке.</a>
          </div>
          <div className="text-[19px] pt-[50px]">
            <a>У нас свой собственный технический центр, где можно плановое ТО электромобилей 
              представленных брендов, выполнить ремонт или получить поддержку по гарантии.</a>
          </div>
          <div className="text-[19px] pt-[50px]">
            <a>Наши специалисты знают, как правильно работать с электрокарами и гибридными моделями.
              Они прошли специальную подготовку по обслуживанию электромобилей.</a>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-[50px] lg:flex lg:flex-row">
          <div className="flex flex-col" >
            <h className="text-[33px] font-Bold pl-[7px] pr-[7px]">Какие услуги мы оказываем:</h>
            <div>
              <ul className="text-[22px] list-disc pl-[30px] pt-[20px]">
                <li>продажа новых автомобилей;</li>
                <li>выкуп авто с пробегом;</li>
                <li>кредитование;</li>
                <li>страхование;</li>
                <li>дополнительное оборудование;</li>
                <li>установка зарядных станций;</li>
                <li>сервисное обслуживание.</li>
              </ul>
            </div>
          </div>
          <img className="rounded-lg " src="./media/AboutUs/3.webp"></img>
        </div>
        <div className="text-[19px] pt-[50px] pb-[25px] pl-[7px] pr-[7px]">
          <a>Откройте мир мощных, экологичных и роскошных автомобилей вместе с автосалоном 
            ElectroSales. Узнайте больше информации о моделях в наличии по телефону, 
              указанному на сайте.</a>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>  
  )
}

export default AboutUs;

