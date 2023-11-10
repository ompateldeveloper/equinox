import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({"message":"welcome to equinox api service"})
}