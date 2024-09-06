import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'// import World from './World';
import Home from './pages/Home.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import World from './World.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/World",
    element: <World />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
