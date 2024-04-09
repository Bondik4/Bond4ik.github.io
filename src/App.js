import './App.css';
import Home from './pages/Home';
import Map from './pages/Map';
import CarModel from './pages/CarModel';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Map",
    element: <Map />,
  },
  {
    path: "/CarModel",
    element: <CarModel />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;