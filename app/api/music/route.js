// import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/connectMongoDB"
import { NextResponse } from "next/server"
import Music from "@/models/music"
export async function GET(req,res){
    await connectMongoDB()
    const music = await Music.find()
    return NextResponse.json(music)
}
export async function POST(req){
    await connectMongoDB()
    let {title,artist,album,filePath,user} = req.body
    try {
        const exists = await Music.findOne({title});
        if(exists){
            throw Error("already_exists");
        }
        console.log("addone");
        const music = Music.create({title,artist,album,filePath,user});
        return NextResponse.json(music)
    } catch (error) {
        return NextResponse.json({error:error.message,})
    }
}