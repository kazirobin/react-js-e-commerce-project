import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Banner from "../pages/Home/Banner/Banner";
import Products from './../pages/Products/Products';
import ProductDetails from "../pages/Products/ProductDetails";

export const router = createBrowserRouter([
  {
    path:"home-1",
    element:<Banner/>
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:"products",
        element: <Products />
      },
      {
        path:"products/:id",
        element: <ProductDetails />
      },
      
     
    ]
  }
])
