import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import SearchProduct from "./Components/SearchProduct/SearchProduct";
import Carrito from "./Components/Carrito/Carrito";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const App = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (item) => {
    setCarrito([...carrito, item]);
    Toastify({
      text: "Producto agregado al carrito",

      duration: 3000,
      style: {
        background: "linear-gradient(to right, #EE1A1A, #EE6E1A)",
      },
    }).showToast();
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <BrowserRouter>
      <Navbar cantidadCarrito={carrito.length} />
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
          element={<ItemDetail agregar={agregarCarrito} />}
        ></Route>
        <Route exact path="/search/:name" element={<SearchProduct />}></Route>
        <Route
          exact
          path="/carrito"
          element={<Carrito carrito={carrito} vaciar={vaciarCarrito} />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
