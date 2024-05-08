import gift from "../media/video/gift.mp4"

function Gif(){
  return(
    <div className="bg-black">
      <div className="container mx-auto py-4 md:py-12">
        <div className="flex flex-col xl:flex-row justify-between items-center">
          <div className="flex flex-col">
            <a className="pt-2 md:pt-3 text-white text-lg md:text-2xl pl-[7px] pr-[7px]">ВРЕМЯ БЫТЬ ПЕРВЫМ</a>
            <a className="text-[70px] xl:text-[86px] pl-[7px] pr-[7px] pt-[20px] text-left leading-[90px] text-white font-Bold">Станьте владельцем электромобиля с максимальной выгодой</a>
          </div>
          <video src={gift} width="670" height="700" autoplay="autoplay" playsinline = "playsinline" loop = "loop" muted = "muted" type="video/mp4"/> 
        </div>
        <div className="pd-[20px]">
          <img className="" src="/media/Line/1.jpg"></img>
        </div>
      </div> 
    </div>
  )
}

export default Gif;
