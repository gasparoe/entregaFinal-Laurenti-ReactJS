import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, docs, getDocs, } from 'firebase/firestore'

export const dataContext = createContext();

export function DataProvider({ children }) {

  const [data, setData] = useState([]);
  const [obtainData, setObtainData] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
        getDocs(collection(db,'items')).then((snapshot) => {
          if(snapshot !== null){
            let productos = []
            snapshot.docs.map((doc) => {
              console.log(doc.data())
              productos.push(doc.data())
            })
            setData(productos)
            setObtainData(false);
          }
        })
  };

  return (
    <dataContext.Provider value={{ data, obtainData }}>
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
