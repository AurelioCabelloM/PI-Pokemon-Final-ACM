// import { Link, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getDetail, clearDetail } from "../../redux/actions";

// const Detail = () => {
//   let { id } = useParams();

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getDetail(id));
//     return () => dispatch(clearDetail());
//     // eslint-disable-next-line
//   }, []);

//   const detailPokemons = useSelector((state) => state.detail);


//   return (
//     <div>
//       <Link to={"/home"}>
//         <button>
//           {/* Código del botón con el ícono */}
//           <span>Volver</span>
//         </button>
//       </Link>
//       {detailPokemons.length > 0 ? (
//         <div>
//           <div
//             style={{
//               backgroundColor: typesColors[detailPokemons[0]?.types[0]],
//             }}
//           >
//             <div>
//               <img
//                 src={detailPokemons[0]?.image}
//                 alt={detailPokemons[0].name}
//               />
//             </div>
//             <div>
//               <h1>{detailPokemons[0].name}</h1>
//               <h3
//                 style={{
//                   backgroundColor: typesColors[detailPokemons[0]?.types[0]],
//                 }}
//               >
//                 <p>Tipo: </p>
//                 {detailPokemons[0]?.types.join(" ")}
//               </h3>
//               <div>
//                 {/* Código relacionado con las estadísticas del Pokémon */}
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <p>cargando...</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Detail;