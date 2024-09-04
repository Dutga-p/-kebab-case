import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import World from './World';
import Login from './pages/login/login.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
