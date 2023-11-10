import connectMongoDB from "@/lib/connectMongoDB"
import { NextResponse } from "next/server"
import Music from "@/models/music"

export async function POST(req){
    await connectMongoDB()
    let {title,artist,album,path,user} = req.body
    try {
        const exists = await Music.findOne({title});
        if(exists){
            throw Error("already_exists");
        }
        const music = Music.create({title,artist,album,path,user});
        return NextResponse.json(music)
    } catch (error) {
        return NextResponse.json({error:error.message,})
    }
}