import  React, { useState } from 'react';

function podbor(){
  return(
    <div className="flex flex-col items-center xl:flex-row container mx-auto py-10 lg:py-20">
      <img className="w-full lg:w-1/2" src="./media/podbor/1.webp" alt="car"></img>
      <div className="lg:pl-8 lg:pt-0 lg:w-1/2">
        <div className="text-lg lg:text-4xl font-bold text-center lg:text-left mb-4">Нужна помощь в подборе автомобиля?</div>
        <div className="text-sm lg:text-lg text-center lg:text-left mb-4 mx-4 lg:mx-0 max-w-md">
          Оставьте нам свои данные и наш менеджер свяжется с вами в течение 15 минут.
        </div>
        <div className='flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start'>
          <div>
            <PhoneInput/>
          </div>
          <div>
            <button className='font-bold py-4 px-12 px-4 bg-[#02283b] text-white rounded-full hover:bg-[#91036d] duration-300'>Отправить</button>
          </div>
        </div>
        <div className='flex text-sm mt-4 text-center lg:text-left mx-4 lg:mx-0 max-w-md'>
          <Checkbox/>
          <span className='ml-2 flex text-justify'>
            Я ознакомился с Политикой обработки персональных данных клиентов и Пользовательским соглашением сервиса AutoSales,
            принимаю условия cоглашения и согласен с обработкой моих персональных данных AutoSales способами и целями указанными в Политике
          </span>
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
    <input className='p-4 xl:pl-[40px] xl:pr-[40px] border rounded-full border-black text-center'
      type="tel" 
      value={phoneNumber} 
      onChange={handleChange} 
      placeholder="+7 (___) ___ - __ - __"
      maxLength={16} 
    />
  );
};

export default podbor