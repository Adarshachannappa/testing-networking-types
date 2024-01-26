const express = require("express");

const app = express();
const PORT  = process.env.PORT | 5050;

const user = {
    name:"Adarsha",
    age:31,
    city:"Bangalore"
}

app.get("/", (req, res)=>{
    res.json(user);
})

app.listen(PORT, ()=> {
    console.log("Server Is Up");
})


