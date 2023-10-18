const express = require("express");
const  musicRouter = express.Router();

const { getAllMusic,addOneMusic } = require("../controllers/musicController");

musicRouter.get("/getall",getAllMusic)
musicRouter.post("/addone",addOneMusic)

module.exports = musicRouter;