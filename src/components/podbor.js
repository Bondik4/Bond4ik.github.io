import  React, { useState } from 'react';

function podbor(){
  return(
    <div className="flex flex-col lg:flex lg:flex-row container mx-auto py-[90px]" >
      <img className="" src="./media/podbor/1.webp"></img>
      <div className=" pl-[80px] flex flex-col lg:pt-[350px]">
        <a className="text-[52px] leading-[70px] font-Bold ">Нужна помощь в подборе автомобиля?</a>
        <a className="text-[20px] pt-[30px] max-w-[410px]">Оставьте нам свои данные и наш менеджер свяжется с вами в течение 15 минут.</a>
        <div className='flex gap-[10px] pt-[30px]'>
            <div className=''>
            <PhoneInput/>
          </div>
          <div className=''>
              <button className='font-Bold p-5 pl-[100px] pr-[100px] text-white bg-[#02283b] rounded-full hover:bg-[#91036d] duration-[90ms]'>Отправить</button>
          </div>
        </div>
          <div className='pt-[30px] text-justify w-[500px] flex gap-[10px] '>
            <Checkbox/>
            <a className='text-[13px] '>Я ознакомился с Политикой обработки персональных данных клиентов и Пользовательским соглашением сервиса AutoSales,
               принимаю условия cоглашения и согласен с обработкой моих персональных данных AutoSales способами и целей указанными 
               в Политике</a>
          </div>
      </div>
    </div>
  )
}

{/* Кнопка галочки*/}

function Checkbox() {
  const [checked, setChecked] = useState(false);

  function chengeCheckbox() {
     setChecked(!checked);
  }

  return <div>
     <input type="checkbox" checked={checked} onChange={chengeCheckbox} />
  </div>;
}

{/* Инпут окно */}

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
  
    if (value.length >= 1) {
      value = '+7(' + value.substring(1);
      if (value.length >= 6) {
        value = value.substring(0, 6) + ')' + value.substring(6);
        if (value.length >= 10) {
          value = value.substring(0, 10) + '-' + value.substring(10);
          if (value.length >= 13) {
            value = value.substring(0, 13) + '-' + value.substring(13);
          }
        }
      }
    }

    // проверяем, был ли символ удален
    if (e.target.value.length < phoneNumber.length) {
      setPhoneNumber(e.target.value); // обновляем состояние только если символ был удален
    } else {
      setPhoneNumber(value);
    }
  };

  return (
    <input className='p-4 pl-[40px] pr-[40px] border rounded-full border-black text-center'
      type="tel" 
      value={phoneNumber} 
      onChange={handleChange} 
      placeholder="+7 (___) ___ - __ - __"
      maxLength={16} 
    />
  );
};

export default podbor