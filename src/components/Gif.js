import gift from "../media/video/gift.mp4"

function Gif() {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-4 md:py-12">
        <div className="flex flex-col xl:flex-row justify-between items-center">
          <div className="flex flex-col">
            <a className="pt-2 md:pt-3 text-white text-lg md:text-2xl pl-1 pr-2">ВРЕМЯ БЫТЬ ПЕРВЫМ</a>
            <a className="text-2xl xl:text-[86px] pl-[7px] pr-[7px] pt-[4%] text-left xl:leading-[5rem] text-white font-Bold">Станьте владельцем электромобиля с максимальной выгодой</a>
          </div>
          <video src={gift} className="w-full xl:w-1/2" autoplay loop muted playsinline type="video/mp4"/> 
        </div>
        <div className="px-5 md:px-20">
          <img className="w-full" src="/media/Line/1.jpg" alt="line"></img>
        </div>
      </div>
    </div>
  );
}

export default Gif;
