import mongoose, {Schema} from "mongoose";

const musicSchema = new Schema({
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
    },
    user:String
}) ;



// musicSchema.statics.addOne = async function({title,artist,album,filePath}){
//     const exists = await this.findOne({title});
//     if(exists){
//         throw Error("already_exists");
//     }
//     console.log("addone");
//     const music = this.create({title,artist,album,filePath});
//     return music
// }
const Music = mongoose.models.Music || mongoose.model("Music", musicSchema);
export default Music