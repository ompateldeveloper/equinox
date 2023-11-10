const Music = require("../models/music.js")

const getAllMusic = async (req,res)=>{
    try {
        const music = await Music.getAll()
        res.status(200).json(music)
    } catch (error) {
        console.log("err");
    }
}
const addOneMusic = async (req,res)=>{
    console.log(req.body);
    let {title,artist,album,filePath} = req.body
    try {
        const music = await Music.addOne({title,artist,album,filePath})
        res.json(music)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
}

module.exports = {getAllMusic,addOneMusic};