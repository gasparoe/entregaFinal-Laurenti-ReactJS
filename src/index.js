import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}></Route>
        <Route
          exact
          path="/category/:idCategoria"
          element={<ItemListContainer />}
        ></Route>
        <Route exact path="/item/:id" element={<ItemDetail />}></Route>
        <Route exact path="/search/:name" element={<SearchProduct />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter> */}
    <App/>
  </React.StrictMode>
);
