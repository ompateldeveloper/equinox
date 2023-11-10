import Users from  "@/models/user"
import { NextResponse } from "next/server";
export async function GET(request){
    return NextResponse.json({"everything":"200"})
}
export async function POST(request){
    const {email,password} = request.body
    try{
        const user = await Users.login(email,password);
        const username = await user.name;
        console.log("log from login:",user);
        const token = craeteToken(user.id);
        return NextResponse.json({name:username,email,token})
    }catch(err){
        return NextResponse.json({err:err.message})
    }
}