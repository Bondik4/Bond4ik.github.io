function Advantages() {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-10 flex flex-col items-center">
        <img className="max-h-full" src="/media/Line/1.jpg" alt="" />
        <div className="pt-5">
          <a className="text-white text-2xl sm:text-3xl pr-7 pl-7 flex justify-center xl:justify-start">ПРЕИМУЩЕСТВА</a>
          <div className="pt-2 leading-7 xl:leading-[90px] pr-7 pl-7 text-3xl sm:text-4xl xl:text-[76px] text-white font-bold flex text-right text-justify">Почему клиенты выбирают и покупают электромобили в ElectroSales</div>
        </div>
        <div className="flex flex-col items-center xl:flex xl:flex-row justify-around text-white pt-5 pr-7 pl-7 ">
          <div className="flex flex-col gap-5 w-full sm:w-11/12 lg:w-2/5 pl-2 pr-2">
            <a className="text-3xl">01</a>
            <a className="font-bold text-2xl">Доступные цены</a>
            <p className="text-justify">
              Мы доставляем электромобили из Китая различными способами, выбирая самый выгодный для каждого автомобиля. И мы не берем деньги за мнимую гарантию, тем более, что вероятность ее необходимости стремится к нулю.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-full sm:w-11/12 lg:w-2/5 pt-5 xl:pt-0 pl-2 pr-2">
            <a className="text-3xl">02</a>
            <a className="font-bold text-2xl">Склад в наличии</a>
            <p className="text-justify">
              В нашем наличии всегда есть электромобили в Москве, а также возможность заказа новых или подержанных моделей. Мы держим в наличии модели, которые мы сами испытали, и можем предложить большее разнообразие под заказ.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-full sm:w-11/12 lg:w-2/5 pt-5 xl:pt-0 pl-2 pr-2 pb-[20px]">
            <a className="text-3xl">03</a>
            <a className="font-bold text-2xl">Все в белую</a>
            <p className="text-justify">
              Вы работаете с российской компанией, с которой заключаете агентский договор или договор купли-продажи, без скрытых схем.
            </p>
          </div>
        </div>
        <div className="pt-5">
          <img className="max-h-full" src="/media/Line/1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Advantages;