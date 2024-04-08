import { YMaps, Map, Placemark, ListBoxItem, ListBox, GeolocationControl, TrafficControl, TypeSelector, ZoomControl, } from '@pbe/react-yandex-maps';

function Maplockation() {
  return (
    <YMaps width="100%">
      <div className='w-full'>
        <Map height="700px" width="100%" 
        defaultState={{ center: [59.945376, 30.375293], zoom: 12 }}>
          <GeolocationControl options={{ float: "left" }} />
          <TrafficControl options={{ float: "right" }} />
          <TypeSelector options={{ float: "right" }} />
          <ZoomControl options={{ float: "right" }} />
          <Placemark geometry={[59.929074, 30.360021]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.950133, 30.384826]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.937732, 30.385856]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.921189, 30.372638]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.913777, 30.375728]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.912053, 30.332641]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.898343, 30.422591]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.928686, 30.452804]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.958915, 30.405769]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.952802, 30.476665]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.975611, 30.408000]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.879193, 30.352382]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.878934, 30.323714]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.959145, 30.319531]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.984959, 30.355579]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.991668, 30.253956]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.901075, 30.271122]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.907283, 30.306828]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[60.011707, 30.398074]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[60.012395, 30.380221]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.997351, 30.304690]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[60.003198, 30.270873]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[60.037481, 30.233451]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[60.026315, 30.251303]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[60.021074, 30.224181]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[60.026143, 30.323229]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[60.031812, 30.362712]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[60.030008, 30.435668]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.989698, 30.204096]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.977247, 30.315202]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.929894, 30.257867]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.988724, 30.174004]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.929997, 30.258166]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.943823, 30.227954]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.955705, 30.247266]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.953123, 30.259969]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.940982, 30.255264]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.971419, 30.308628]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.971462, 30.274296]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.974259, 30.248804]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.995677, 30.259876]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>    
          <Placemark geometry={[59.986647, 30.243997]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.835318, 30.429846]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>         
          <Placemark geometry={[59.834108, 30.403410]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.832207, 30.327879]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.821577, 30.323759]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.804976, 30.322386]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>    
          <Placemark geometry={[59.847844, 30.297323]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.869085, 30.354658]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.873055, 30.350710]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.878215, 30.446126]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.893011, 30.489900]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.894175, 30.514877]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.902929, 30.465696]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.908188, 30.517623]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.917369, 30.523202]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
          <Placemark geometry={[59.934215, 30.497625]} options={{iconLayout: 'default#image', iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png', iconImageSize: [30, 32]}}/>
        </Map>
      </div>
    </YMaps>
  );
}

export default  Maplockation;