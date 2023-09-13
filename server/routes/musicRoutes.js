const express = require("express");
musicRouter = express.Router();

const { getAllMusic,addOneMusic } = require("../controllers/musicController");

musicRouter.get("/getall",getAllMusic)
musicRouter.post("/addone",addOneMusic)

module.exports = musicRouter;