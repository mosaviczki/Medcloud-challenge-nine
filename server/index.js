const express = require('express');
const app = express();
//const mysql = require('mysql');

/* const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "crudmedcloud"
}); */

app.listen(3001, () =>{
    console.log("rodando servidor");
});