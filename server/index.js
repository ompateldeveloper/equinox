require("dotenv").config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require('body-parser');  
app.use(bodyParser.json());
//cors problem
const cors = require('cors');
app.use(cors({ origin: ['http://localhost:3000','https://equinox-pi.vercel.app'] }));


const requireAuth = require("./middleware/requireAuth")
// default routes
app.get("/",requireAuth, (req, res) => {
    res.send("hello from express")
});



// custom routes 
const userRoutes = require("./routes/UserRoutes")
app.use("/api/user",userRoutes);

const musicRoutes = require("./routes/musicRoutes")
app.use("/api/music",musicRoutes);



mongoose.connect(process.env.URI)
.then(()=>{
    app.listen("4000",()=>{
        console.log("listening on http://localhost:4000");
    })
})
.catch((err)=>{
    console.log("failed to connect",err);
})