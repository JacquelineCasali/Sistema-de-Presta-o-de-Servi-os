// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Header from "../components/header/Header";
// import Footer from "../components/footer/Footer";
// import { Helmet, HelmetProvider } from "react-helmet-async";

// import "../styles/reset.css";
// import "../styles/App.css";

// function Pet() {
//   const { id } = useParams();
//   // banco de dados ler
//   useEffect(() => {
//     axios
//       .get("https://petshop-proqsel.onrender.com/" + id)

//       .then((res) => {
//         console.log(res);
//         setValues(res.data[0]);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const [values, setValues] = useState({
//     nameanimal: "",
//     idade: "",
//     animal: "",
//     raca: "",
//     namedono: "",
//     telefone: "",
//   });

//   // mudar de pagina
//   const navigate = useNavigate();
//   // editar
//   const handleUpdate = (e) => {
//     e.preventDefault();
//     axios
//       .put("https://petshop-proqsel.onrender.com/" + id, values)
//       .then((res) => {
//         console.log(res);
//         navigate("/");
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="App">
//       <Header />

//       <HelmetProvider>
//         <Helmet title="Editar Pet" />
//       </HelmetProvider>

//       <section className="editar">
//         <h1 className="titulo">Editar Pet</h1>

//         <form className="login-fomr" onSubmit={handleUpdate}>
//           <label htmlFor="">Nome do Animal:</label>

//           <input
//             className="input-padrao"
//             type="text"
//             value={values.nameanimal}
//             onChange={(e) => {
//               setValues({ ...values, nameanimal: e.target.value });
//             }}
//           />
//           <label htmlFor="idade">Idade:</label>
//           <input
//             className="input-padrao"
//             type="text"
//             value={values.idade}
//             onChange={(e) => {
//               setValues({ ...values, idade: e.target.value });
//             }}
//           />
//           <div className="coluna-animal">
//             <div className="coluna-animal1">
//               <label htmlFor="nameanimal">Animal : </label>
//               <input
//                 className="input-padrao"
//                 name="animal"
//                 type="text"
//                 value={values.animal}
//                 onChange={(e) => {
//                   setValues({ ...values, animal: e.target.value });
//                 }}
//               />
//             </div>

//             <div className="coluna-animal1">
//               <label htmlFor="raca">
//                 Raça:
//                 <input
//                   className="input-animal1"
//                   type="text"
//                   name="raca"
//                   value={values.raca}
//                   onChange={(e) => {
//                     setValues({ ...values, raca: e.target.value });
//                   }}
//                 />
//               </label>
//             </div>
//           </div>
//           <div className="coluna-animal">
//             <div className="coluna-animal1">
//               <label htmlFor="namedono">
//                 Nome do Dono:
//                 <input
//                   className="input-animal1"
//                   type="text"
//                   value={values.namedono}
//                   onChange={(e) => {
//                     setValues({ ...values, namedono: e.target.value });
//                   }}
//                 />
//               </label>
//             </div>
//             <div className="coluna-animal1">
//               <label htmlFor="telefone">Telefone:</label>
//               <input
//                 className="input-padrao"
//                 type="text"
//                 name="telefone"
//                 value={values.telefone}
//                 onChange={(e) => {
//                   setValues({ ...values, telefone: e.target.value });
//                 }}
//               />
//             </div>
//           </div>
//           <button className="button-senha">Editar</button>
//         </form>
//       </section>
//       <Footer />
//     </div>
//   );
// }
// export default Pet;
