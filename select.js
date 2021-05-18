const express = require("express")
const app = express();
const db = require('./Database/database')
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/Home",(req,res)=>{
    res.render("index", {})
})

db.select().table("public.cidade").orderBy("nomedacidade").then((dados)=>{
    app.get("/infocidade", (req,res)=>{
        res.render("cidade", {dados})
    })
}).catch((err)=>{
    console.log(err)
})

db.select().table("public.programacao").then((pro)=>{
    app.get("/Programacao", (req,res)=>{
        res.render("programacao", {pro})
    })
})

db.select(
    "numos",
    "codigoassinante",
    "cidade",
    "codigocontrato",
    "equipe"
).where({
    cidade: 820741
}).table("public.ordemservico").limit(200).then((data)=>{
    app.get("/ordem", (req,res)=>{
        res.render("ordem", {data})
    })
}).catch((err)=>{
    console.log(err)
})



//Config Servidor
app.listen(8081, (req,res)=>[
    console.log("On!")
])