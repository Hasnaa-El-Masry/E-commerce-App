import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Root from "./Root";
import Product from "./components/Product";
import Cart from "./components/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path:'/products/:id',
        element:<Product/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  },

]);