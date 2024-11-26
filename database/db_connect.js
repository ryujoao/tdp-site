const mysql = require('mysql2')



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'saasdb',
    port: 3306,
})

db.connect((error)=>{

    if (error) {
        console.log(error);
    }else{
        console.log("Conexão com DB efetuada com sucesso!");
    }
})

module.exports = db