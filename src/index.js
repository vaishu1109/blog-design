
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from "./View/Home"
const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter(
  [{
    path:"/",
    element:<Home />

  }]
)
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

