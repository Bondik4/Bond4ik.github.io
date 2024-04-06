import './App.css';
import Home from './pages/Home';
import Map from './pages/Map';
import CarModel from './pages/CarModel';

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
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;