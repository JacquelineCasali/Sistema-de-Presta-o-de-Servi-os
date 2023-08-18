require('dotenv').config();
const exprees = require("express");
const cors = require("cors");
const db = require("./src/config/db");
const PORT = process.env.PORT || 5430;
const bodyParser = require('body-parser')
// consulta no banco de dados
const routes = require("./src/routes/routes");
const app = exprees();
app.use(cors());
app.use(exprees.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

// // listando os pets
app.listen(PORT, () => {
  console.log("Estamos rodando em: http://127.0.0.1:" + PORT);
});
