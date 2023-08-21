// const { Pool } = require("pg");
// // conseção ao banco de dados
// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
// });

// const servicesController = {
//   // listando os pets
//   lista:
//     ("/",
//     async (req, res) => {
//       try {
//         const { rows } = await pool.query("SELECT * FROM services");
//         return res.status(200).send(rows);
//       } catch (err) {
//         return res.status(400).send(err);
//       }
//     }),

//   // listar um 
//   show:
//     ("/:id",
//     async (req, res) => {
//       const { id } = req.params;

//       try {
//         const { rows } = await pool.query(
//           "SELECT * FROM services WHERE service_id=($1)",
//           [id]
//         );
//         return res.status(200).send(rows);
//       } catch (err) {
//         return res.status(400).send(err);
//       }
//     }),

//   // criando um usuario 
//   create:
//     ("/",
//     async (req, res) => {
//         const { service_id } = req.body; 
//       const { name } = req.body;
//       const { description  } = req.body;
//     const {duration }=req.body;
//     const {price }=req.body;
//     const {professional }=req.body;
//     const {availability }=req.body;
   
     
//       try {
//         await pool.query(
//           "INSERT INTO services (service_id,name,description,duration,price, professional,availability) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * ",
//           [service_id,
//             name,
//             description,
//             duration,
//             price,
//             professional,
//             availability
//           ]
//         );
//         return res.status(200).send({ msg: "Cadastrado com sucesso " });
//       } catch (err) {
//         return res.status(400).send({ msg: "Error" });
//       }
//     }),
//   // deletando
//   delete:
//     ("/:id",
//     async (req, res) => {
//       const { id } = req.params;

//       try {
//         await pool.query("DELETE FROM services WHERE service_id=($1)", [id]);
//         return res.status(200).send({ msg: "Cancelado com sucesso " });
//       } catch (err) {
//         return res.status(400).send(err);
//       }
//     }),
// };

// module.exports = servicesController;
