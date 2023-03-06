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

app.listen(port, ()=>{
    console.log("aplikacja dziala na porcie " + port)
}) 