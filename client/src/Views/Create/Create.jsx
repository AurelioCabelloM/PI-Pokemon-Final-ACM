// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createPokemons, getTypes } from "../../redux/actions";
// import { useEffect } from "react";
// import validate from "../../Components/Validate/Validate";
// import { Link } from "react-router-dom";

// const Create = () => {
//   const dispatch = useDispatch();
//   const types = useSelector((state) => state.types);

//   const [input, setInput] = useState({
//     name: "",
//     image: "",
//     hp: "",
//     attack: "",
//     defense: "",
//     speed: "",
//     types: [],
//   });

//   useEffect(() => {
//     dispatch(getTypes());
//     // eslint-disable-next-line
//   }, []);

//   const [errors, setErrors] = useState({});

//   const disable = () => {
//     let disabled = true;
//     for (let error in errors) {
//       if (errors[error] === "" || errors[error].length === 0) disabled = false;
//       else {
//         disabled = true;
//         break;
//       }
//     }
//     return disabled;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createPokemons(input));
//     setInput({
//       name: "",
//       image: "",
//       hp: "",
//       attack: "",
//       defense: "",
//       speed: "",
//       types: [],
//     });
//   };

//   const handleChange = (e) => {
//     e.preventDefault();
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//     setErrors(
//       validate({
//         ...input,
//         [e.target.name]: e.target.value,
//       })
//     );
//   };

//   const handleSelect = (e) => {
//     e.preventDefault();
//     setInput({
//       ...input,
//       types: [...input.types, e.target.value],
//     });
//     setErrors(
//       validate({
//         ...input,
//         [e.target.name]: e.target.value,
//       })
//     );
//   };

//   const handleDelete = (e) => {
//     setInput({
//       ...input,
//       types: input.types.filter((t) => t !== e),
//     });
//   };

//   return (
//     <div>
//       <Link to={"/home"}>
//         <button>
//           Volver
//         </button>
//       </Link>
//       <div>
//         <div>
//           <h3>Necesitás imágenes para crear tu pokemon?</h3>
//           <h4>
//             Podés buscar aquí:{" "}
//             <a
//               href="https://custom-doodle.com/collection/pokemon/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Link
//             </a>
//           </h4>
//         </div>
//         <div>
//           <h4>Guia:</h4>
//           <p>1- Elige el pokemon deseado</p>
//           <p>2- Haz click derecho sobre el mismo </p>
//           <p>3- Selecciona "Copiar dirección de la imagen" </p>
//           <p>4- Pega la dirección en el formulario </p>
//           <p>5- Sigue creando tu pokemon! </p>
//         </div>
//       </div>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <h3>Crea un pokemon</h3>
//         <div>
//           <div>
//             <input
//               placeholder="Nombre"
//               name="name"
//               type="text"
//               value={input.name}
//               onChange={handleChange}
//             />
//             <div>
//               {errors.name && (
//                 <span style={{ color: "#e74c3c" }}>{errors.name}</span>
//               )}
//             </div>
//           </div>
//           <div>
//             <input
//               placeholder="Imagen  .jpg .jpeg .png .gif"
//               name="image"
//               type="text"
//               value={input.image}
//               onChange={handleChange}
//             />
//             <div>
//               {errors.image && (
//                 <span style={{ color: "#e74c3c" }}>{errors.image}</span>
//               )}
//             </div>
//           </div>
//           {/* Resto de los campos... */}
//           <div>
//             <label>Tipo:</label>
//             <select onChange={(e) => handleSelect(e)}>
//               {types.map((t, index) => (
//                 <option key={index} value={t.name}>
//                   {t.name}
//                 </option>
//               ))}
//             </select>
//             <div>
//               {errors.types && (
//                 <span style={{ color: "#e74c3c" }}>{errors.types}</span>
//               )}
//             </div>
//           </div>
//           <div>
//             <button type="submit" name="submit" disabled={disable()}>
//               Crear
//             </button>
//           </div>
//         </div>
//       </form>
//       <div>
//         {input.types.map((e, index) => (
//           <div key={index}>
//             <p>{e}</p>
//             <button onClick={() => handleDelete(e)}>X</button>
//           </div>
//         ))}
//       </div>
//       <div>
//         <img src={snorlax} alt="Snorlax esperando" />
//       </div>
//     </div>
//   );
// };

// export default Create;