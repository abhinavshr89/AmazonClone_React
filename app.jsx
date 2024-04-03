
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

import { Categories, Carousal, Deals, Body, HomeFurnishing } from './src/pages/Body/body';




const App = () => {

  const [searchText, setSearchText] = useState('');
  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      {/* <Categories />
            <Carousal />
            <Body />
            <Deals />
            <HomeFurnishing /> */}
      <ProductSearch searchText={searchText} setSearchText={setSearchText} />

    </>

  )
}
// root.render(<App />);


const router = createBrowserRouter([
  {
    path: "/products",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





