const Music = require("../models/music")
const getAllMusic = async (req,res)=>{
    try {
        const music = Music.getAll({})
        if(music){
            res.send(music)
        }
    } catch (error) {
        console.log("err");
    }
}
const addOneMusic = async (req,res)=>{
    let {title,artist,album,filePath} = req.body
    try {
        const music = await Music.addOne({title,artist,album,filePath})
        res.send(music)
    } catch (error) {
        res.status(400).json({err:error.message})
    }
}

module.exports = {getAllMusic,addOneMusic};