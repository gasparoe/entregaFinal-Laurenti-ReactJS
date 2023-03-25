import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import SearchProduct from "./Components/SearchProduct/SearchProduct";
import Carrito from "./Components/Carrito/Carrito";
import "toastify-js/src/toastify.css";
import CompraRealizada from "./Components/CompraRealizada/CompraRealizada";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}></Route>
        <Route
          exact
          path="/category/:idCategoria"
          element={<ItemListContainer />}
        ></Route>
        <Route
          exact
          path="/item/:id"
          element={<ItemDetail/>}
        ></Route>
        <Route exact path="/search/:name" element={<SearchProduct />}></Route>
        <Route
          exact
          path="/carrito"
          element={<Carrito/>}
        ></Route>
        <Route
          exact
          path="/compraRealizada/:idCompra"
          element={<CompraRealizada/>}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
