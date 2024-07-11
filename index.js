
require('dotenv').config({path : 'config.env'})
const express = require('express')
const PORT = process.env.PORT
const Router = require('./routes/route.js')


const app = express()

// app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static("public"))
// app.use(express.urlencoded({extended:true}))

app.use('/', Router)

app.listen(PORT, () =>{
    console.log(`serveur démarré sur http://localhost:${PORT}`);
})

