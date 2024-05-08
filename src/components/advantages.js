

function Advantages(){
  return(
    <div className="bg-black">
      <div className="container  mx-auto py-[90px]">
      <img className="max-h-full" src="/media/Line/1.jpg"></img>
        <div className="pt-[50px]">
          <a className="pt-[30px] text-white text-[15px] sm:text-[20px] pr-[7px] pl-[7px flex justify-center xl:justify-start">ПРЕИМУЩЕСТВА</a>
          <div className="pt-[20px]">
          <div className=" xl:pl-[492px] leading-[] xl:leading-[80px] pr-[7px] pl-[7px] text-[20px] sm:text-[30px] xl:text-[70px] text-white font-Bold flex text-right text-justify">Почему клиенты выбирают и покупают электромобили в ElectroSales</div>
          </div>
        </div>
        <div className="flex flex-col items-center xl:flex xl:flex-row justify-around text-white pt-[50px]">
          <div className="flex flex-col gap-[25px] w-[450px]">
            <a className="text-[30px]">01</a>
            <a className="font-Bold text-[24px] ">Доступные цены</a>
            <a className="text-justify">
              Мы доставляем электромобили из Китая различными способами, выбирая самый выгодный для каждого автомобиля. 
              И мы не берем деньги за мнимую гарантию, тем более, что вероятность ее необходимости стремится к нулю.
            </a>
          </div>
          <div className="flex flex-col gap-[25px] w-[450px] pt-[20px] xl:pt-0 ">
            <a className="text-[30px]">02</a>
            <a className="font-Bold text-[24px]">Склад в наличии</a>
            <a className="text-justify">
            В нашем наличии всегда есть электромобили в Москве, а также возможность заказа новых или подержанных моделей. 
            Мы держим в наличии модели, которые мы сами испытали, и можем предложить большее разнообразие под заказ.
            </a>
          </div>
          <div className="flex flex-col gap-[25px] w-[450px] pt-[20px] xl:pt-0">
            <a className="text-[30px]">03</a>
            <a className="font-Bold text-[24px]">Все в белую</a>
            <a className="text-justify">
            Вы работаете с российской компанией, с которой заключаете агентский 
            договор или договор купли-продажи, без скрытых схем.
            </a>
          </div>
        </div>
        <div className="pt-[50px]">
          <img className="max-h-full" src="/media/Line/1.jpg"></img>
        </div>
      </div> 
    </div>
  )
}

export default Advantages;