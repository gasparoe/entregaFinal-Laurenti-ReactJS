import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, docs, getDocs } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const dataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [obtainData, setObtainData] = useState(true);
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (item, cantidad) => {
    console.log(item);

    const productoEnCarrito = carrito.find(
      (producto) => producto.id === item.id
    );
    if (productoEnCarrito) {
      console.log("ya existo agrego cantidad");
      productoEnCarrito.cantidad = productoEnCarrito.cantidad + cantidad;
    } else {
      item.cantidad = cantidad;
      setCarrito([...carrito, item]);
    }

    // setCarrito([...carrito, item]);
    Toastify({
      position: "right",
      gravity: "bottom",
      text: "Producto agregado al carrito",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #EE1A1A, #EE6E1A)",
      },
    }).showToast();
  };

  const eliminarProducto = (id) => {
    let carritoAux = [...carrito];
    const producto = carritoAux.find((producto) => producto.id === id);
    const indice = carritoAux.indexOf(producto);
    carritoAux.splice(indice, 1);
    setCarrito([...carritoAux]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    getDocs(collection(db, "items")).then((snapshot) => {
      if (snapshot !== null) {
        let productos = [];
        snapshot.docs.map((doc) => {
          let objeto = doc.data();
          objeto.id = doc.id;
          productos.push(objeto);
        });
        setData(productos);
        setObtainData(false);
      }
    });
  };

  return (
    <dataContext.Provider
      value={{
        data,
        obtainData,
        carrito,
        agregarCarrito,
        vaciarCarrito,
        eliminarProducto
      }}
    >
      {children}
    </dataContext.Provider>
  );
}

// import { createContext, useEffect, useState } from "react";
// import { useAuth } from "./AuthContext";
// import { db } from "../firebase";

// export const dataContext = createContext();

// export function DataProvider({ children }) {
//   const { user } = useAuth();

//   const uid = user.uid;

//   const [data, setData] = useState([]);
//   const [obtainData, setObtainData] = useState(true);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     let arregloUltimos = [];
//     db.ref()
//       .child("usuarios")
//       .child(uid)
//       .child("FERMENTADORES")
//       .on("value", (snapshot) => {
//         arregloUltimos = [];
//         snapshot.forEach((value) => {
//           const arregloFermentador = [];
//           value.forEach((valores) => {
//             if (
//               valores.key !== "actualizacion" &&
//               valores.key !== "planillas"
//             ) {
//               arregloFermentador.push(valores.val());
//             }
//           });

//           arregloFermentador.sort(function (a, b) {
//             return new Date(a.fechaFormato) - new Date(b.fechaFormato);
//           });

//           arregloFermentador[arregloFermentador.length - 1].of = value.key; //AGREGO LA OF AL ULTIMO OBJETO
//           arregloFermentador[arregloFermentador.length - 1].chart =
//             arregloFermentador;
//           arregloUltimos.push(
//             arregloFermentador[arregloFermentador.length - 1]
//           );
//         });

//         setData(arregloUltimos);
//         setObtainData(false);
//       });
//   };

//   return (
//     <dataContext.Provider value={{ data, obtainData }}>
//       {children}
//     </dataContext.Provider>
//   );
// }
