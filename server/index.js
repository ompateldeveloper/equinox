require("dotenv").config()
// import * as express from "express"
// const app = express()()
const app = require("express")();
const mongoose = require("mongoose");

const bodyParser = require('body-parser');  
app.use(bodyParser.json());
//cors problem
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));


const requireAuth = require("./middleware/requireAuth")
// default routes
app.get("/",requireAuth, (req, res) => {
    res.send("hello from express")
});



// custom routes 
const userRoutes = require("./routes/UserRoutes")
const musicRoutes = require("./routes/musicRoutes")
app.use("/api/user",userRoutes);
app.use("/api/library",musicRoutes);



mongoose.connect(process.env.URI)
.then(()=>{
    app.listen("4000",()=>{
        console.log("listening on http://localhost:4000");
    })
})
.catch((err)=>{
    console.log("err!",err);
})