const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
{
    title: "stacks",
    
},
{
    title: "front end",
    message: "HTML, CSS, JS, React.Js, Vue.js"
},

{
    title: "back end",
    message: 'Node.js, MySql, Php'
},
    ];
    res.render("pages/index", {
        qualitys: items,
    });
});


app.get("/sobre", function(req, res){
    res.render("pages/about");
})


app.listen(8080);
console.log("Rodando...")