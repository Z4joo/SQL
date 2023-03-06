const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

app.use(cors())

const port = 3002

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "zaj_21"
})

con.connect(function(err){
    if(err){ 
    console.log(err)
    }
    else console.log("polaczono z baza danych")
})


app.get("/",(req, res)=>{
    res.send("ok")
})


app.get("/select", (req, res)=>{
    const sql = "SELECT * FROM test"
    con.query(sql, function(err, result, fileds){
        if(err)  console.log(err)
        
        else  res.send(result)
        
    })
}) 


app.listen(port, ()=>{
    console.log("aplikacja dziala na porcie " + port)
}) 