import React from "react";
import ReactDom, {render} from 'react-dom'
import App from "./components/App";
import'./index.css'
import ShopContextProvider from "./components/Context/ShopContext";

ReactDom.render(
  <ShopContextProvider>
    <App/>
  </ShopContextProvider>
  
  
  , document.getElementById('root'))