const { Pool } = require("pg");
// conseção ao banco de dados
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

const agendaController = {
  // listando os pets
  lista:
    ("/",
    async (req, res) => {
      try {
        const { rows } = await pool.query("SELECT * FROM cliente");
        return res.status(200).send(rows);
      } catch (err) {
        return res.status(400).send(err);
      }
    }),

  // listar um 
  show:
    ("/:id",
    async (req, res) => {
      const { id } = req.params;

      try {
        const { rows } = await pool.query(
          "SELECT * FROM cliente WHERE id_cliente=($1)",
          [id]
        );
        return res.status(200).send(rows);
      } catch (err) {
        return res.status(400).send(err);
      }
    }),

  // criando um usuario 
  create:
    ("/",
    async (req, res) => {
      const { nomecliente } = req.body;
      const { telefone } = req.body;
      const { cpf  } = req.body;
     

      try {
        await pool.query(
          "INSERT INTO cliente(nomecliente , telefone, cpf) VALUES ($1,$2,$3) RETURNING * ",
          [nomecliente ,telefone, cpf]
        );
        return res.status(200).send({ msg: "Cliente cadastrado com sucesso " });
      } catch (err) {
        return res.status(400).send({ msg: "Cliente já cadastrado " });
      }
    }),

  //   // atualizando 
  update:
    ("/:id",
    async (req, res) => {
      const { id } = req.params;
      const { nomecliente ,telefone, cpf} = req.body;

      try {
        await pool.query(
          "UPDATE cliente SET nomecliente=($1), telefone=($2), cpf=($3) WHERE id_cliente=($4) RETURNING * ",
          [nomecliente ,telefone, cpf, id]
        );
        return res.status(200).send({ msg: "Cliente Atulizado com sucesso " });
      } catch (err) {
        return res.status(400).send({ msg: "Cliente já cadastrado " });
      }
    }),

  // deletando
  delete:
    ("/:id",
    async (req, res) => {
      const { id } = req.params;

      try {
        await pool.query("DELETE FROM cliente WHERE id_cliente=($1)", [id]);
        return res.status(200).send({ msg: "Deletado com sucesso " });
      } catch (err) {
        return res.status(400).send(err);
      }
    }),
};

module.exports = agendaController;
