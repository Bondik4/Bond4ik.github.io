function OnlineConsultantButton() {
  // Функция для обработки клика по кнопке
  const handleConsultantClick = () => {
    // Здесь может быть логика для открытия модального окна или чата
    console.log('Консультант онлайн');
  };

  return (
    <div className="fixed bottom-8 right-8 z-0">
      <button
        onClick={handleConsultantClick}
        className="bg-white p-3 rounded-full text-blue-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]"
        aria-label="Онлайн-консультант"
      >
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M736 5100 c-148 -38 -199 -73 -420 -290 -109 -107 -211 -214 -227
-237 -16 -23 -43 -83 -60 -135 l-32 -93 7 -177 c45 -1274 624 -2433 1611
-3225 135 -108 411 -297 550 -375 620 -351 1290 -539 2010 -565 l170 -6 93 32
c52 17 112 44 135 60 57 40 407 395 444 451 97 146 126 347 74 516 -38 125
-80 193 -181 295 -136 137 -162 148 -607 272 l-368 102 -115 0 c-92 0 -130 -5
-190 -23 -129 -40 -192 -83 -350 -238 l-145 -142 -130 43 c-781 259 -1378 856
-1640 1639 l-43 130 148 152 c166 170 202 228 241 384 37 145 27 215 -85 620
-52 190 -100 361 -107 380 -26 74 -96 174 -174 249 -96 92 -144 121 -267 162
-122 41 -230 47 -342 19z"/>
</g>
</svg>
      </button>
    </div>
  );
}

export default OnlineConsultantButton;