async function connect(){
    
    if(global.connect)
    return global.connection.connect();
    const { Pool } = require("pg");
    // conseção ao banco de dados
    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL,
    });
 
    // conectando o banco 
    const client =await pool.connect()
    console.log("Criou o pool conexão");

    const res =await client.query("select now()");
    console.log(res.rows[0]);
    client.release();
    return pool.connect();
  }
  connect();

 