import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Maplockation() {
  return (
    <YMaps width="100%">
      <div className='w-full'>
        <Map height="300px" width="100%" defaultState={{ center: [59.9386, 30.3141], zoom: 9 }}>
      
        </Map>
      </div>
    </YMaps>
  );
}
export default  Maplockation;