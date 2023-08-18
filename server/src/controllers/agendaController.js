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
          "SELECT * FROM cliente WHERE service_id=($1)",
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
      const { telephone } = req.body;
    const {date}=req.body;
    const {time}=req.body;
    const {status}=req.body;
      try {
        await pool.query(
          "INSERT INTO cliente (nomecliente , telephone,date, time,status) VALUES ($1,$2,$3,$4,$5) RETURNING * ",
          [nomecliente , telephone,date, time,status]
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
    const { nomecliente , telephone,date, time,status } = req.body;

    try {
      await pool.query(
        "UPDATE cliente SET nomecliente=($1), telephone=($2),date=($3), time=($4),status=($5)  WHERE service_id=($6) RETURNING * ",
        [nomecliente , telephone,date, time,status, id]
      );
      return res.status(200).send({ msg: "Atulizado com sucesso " });
    } catch (err) {
      return res.status(400).send({ msg: "Error"  });
    }
  }),

  // deletando
  delete:
    ("/:id",
    async (req, res) => {
      const { id } = req.params;

      try {
        await pool.query("DELETE FROM cliente WHERE service_id=($1)", [id]);
        return res.status(200).send({ msg: "Cancelado com sucesso " });
      } catch (err) {
        return res.status(400).send(err);
      }
    }),
};

module.exports = agendaController;
