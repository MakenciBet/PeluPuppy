import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserContext.jsx";
import ProductProvider from "./context/ProductContext.jsx";
import FavoritoProvider from "./context/FavoritoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <FavoritoProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavoritoProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
);
