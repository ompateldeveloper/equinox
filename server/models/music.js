const mongoose = require('mongoose');

const musicSchema = mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    artist:String,
    album:String,
    filePath: {
        type: String,
        required: true,
    }
}) ;


musicSchema.statics.getAll = async function(title,artist,album,filePath){
    const music = await this.find()
    console.log("getAll");
    return music
}

musicSchema.statics.addOne = async function({title,artist,album,filePath}){
    const exists = await this.findOne({title});
    if(exists){
        throw Error("already_exists");
    }
    console.log("addone");
    const music = this.create({title,artist,album,filePath});
    return music
}
module.exports = mongoose.model("musics", musicSchema);