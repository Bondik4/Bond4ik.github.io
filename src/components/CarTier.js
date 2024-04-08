
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
    image: "/media/car/Zeekr/1.webp"
  },
  {
    text: "Zeeker 009",
    image: "/media/car/Zeekr/2.webp"
  },
  {
    text: "Zeeker X",
    image: "/media/car/Zeekr/3.webp"
  },
  {
    text: "Zeeker 007",
    image: "/media/car/Zeekr/4.webp"
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


function CarTier(){
    return(
      <div className = "flex flex-col gap-10">
          <BlockOFCars name = "Модельный ряд NIO" image = "/media/images/NIO5.webp" start = {0} end = {5}/>
          <BlockOFCars name = "Модельный ряд Zeeker" image = "/media/images/Zeekr3.webp" start = {5} end = {9}/>
          <BlockOFCars name = "Модельный ряд Li" image = "/media/images/Lixiang2.webp" start = {9} end = {12}/>
          <BlockOFCars name = "Модельный ряд BYD" image = "/media/images/BYD1.webp" start = {12} end = {14}/>
          <BlockOFCars name = "Модельный ряд Voyah" image = "/media/images/Voyah4.webp" start = {14} end = {16}/>
      </div>
    )
  }

  function BlockOFCars({name, image, start, end}){
    let arr = cars;
    arr = arr.slice(start, end)
    return(
      <div className="bg-white rounded-lg shadow-2xl p-4">
        <div className="bg-[white] flex items-center gap-5 ">
          <img className=" w-[95px] rounded-lg shadow-2xl" src={image}/>
          <a className="font-bold text-[17px] ">{name}</a>
        </div>
        <div className = "grid grid-cols-4 grid-rows-2">
          { arr.slice({start, end}).map((elem, i) => { return <SingleCar text = {elem.text} carImage={elem.image} key = {i}/> }) }
        </div>
      </div>
    )
  }

  function SingleCar({text, carImage})
  {
    return(
      <div>
          <img className="" src={carImage}/>
          <a className="font-bold text-[14px] ">{text}</a>
      </div>
    );
  }
  
  export default CarTier;