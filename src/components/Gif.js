import gift from "../media/video/gift.mp4"

function Gif(){
  return(
    <div className="bg-black">
      <div className="container mx-auto py-[90px]">
        <div className="flex justify-between ">
          <div className="flex flex-col">
            <a className="pt-[30px] text-white text-[20px]">ВРЕМЯ БЫТЬ ПЕРВЫМ</a>
            <a className="pt-[20px] text-left leading-[90px] text-[86px] text-white font-Bold">Станьте владельцем электромобиля с максимальной выгодой</a>
          </div>
          <video src={gift} width="670" height="700" autoplay="autoplay" playsinline = "playsinline" loop = "loop" muted = "muted" type="video/mp4"/> 
        </div>
        <div className="pd-[20px] ">
          <img className="" src="/media/Line/1.jpg"></img>
        </div>
      </div> 
    </div>
  )
}

export default Gif;