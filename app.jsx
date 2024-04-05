
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/pages/Header/header';
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
import ProductSearch from './src/pages/products/product';
import { useState } from 'react';
const AmazonLogo = <div className="amazon-logo"></div>;
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Categories, Carousal, Deals, Body, HomeFurnishing, GridLayout2 } from './src/pages/Body/body';

import Slider from './src/pages/Body/slider';
import Footer from './src/pages/footer/footer';
import SignIn from './src/pages/signIn';
import CreateNewAccountComponent from './src/pages/signIn/createAccount/createAccount';


const App = () => {

  const [searchText, setSearchText] = useState('');
  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
       <Categories />
           
      <ProductSearch searchText={searchText} setSearchText={setSearchText} />

    </>

  )
}
// root.render(<App />);
const Home = ()=>{
  return (
    <>
    <Header/>
    <Categories/>
    <Slider/>
    <Body/>
    <GridLayout2/>
    <Deals />
    <HomeFurnishing />
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/products",
    element: <App />,
  },
  {
    path:"/",
    element:<Home/>
  },{
    path:"/signin",
    element:<SignIn/>
  },{
   path: "/create",
    element:<CreateNewAccountComponent/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




