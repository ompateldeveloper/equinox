// import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/connectMongoDB"
import { NextResponse } from "next/server"
import Music from "@/models/music"
export async function GET(req,res){
    await connectMongoDB()
    const music = await Music.find()
    return NextResponse.json(music)
}
