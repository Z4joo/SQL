const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

app.use(cors())

 const port = 3005

var con = mysql.createConnection({
    host: "localhost" ,
    user: "root" ,
    password: "" ,
    database: "zaj_21"
})

con.connect(function (err){
    if(err) console.log(err)

    else console.log("Polaczono z baza danych")
})

app.get("/", (req, res)=>{
    res.send("OK")
})

app.get("/select", (req, res)=>{
    const sql = "SELECT * FROM test"
    con.query(sql, function(err, result, fileds){
        if(err)  console.log(err)
        
        else  res.send(result)
        
    })
}) 

app.get("/add/:imie/:nazwisko/:klasa", (req, res)=>{ 
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    const klasa = req.params.klasa


    const sql = `INSERT INTO test (Imie,Nazwisko,Klasa) VALUES ('${imie}' , '${nazwisko}' , '${klasa}')` 
    con.query(sql, function(err, result, fileds){
        if(err) console.log(err)

        else res.send("dodano rekord")
    })
})
app.listen(port, ()=>{
    console.log("aplikacja dziala na porcie" + port)
})