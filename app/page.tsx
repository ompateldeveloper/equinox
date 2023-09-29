"use client";
import {useEffect} from "react"
import Link from "next/link";
import Navbar from "./compnents/Navbar";

export default function Home() {
    return (
        <div className="main">
          <Navbar/>
            <div className="hero relative w-full pt-1 " style={{height:"100dvh"}}>
                    <div className="text-8xl  m-16 text-transparent bg-clip-text bg-gradient-to-br from-teal-200 via-teal-100 to-teal-100 ">Enhance Your Music Experience</div>
                    <Link href={'/discover'} className=" block w-min discover px-8 py-4 mx-auto font-extrabold  rounded-full border-2 border-teal-500 ">
                        <span className="opacity-90  text-white ">Discover</span>
                    </Link>
                    <div className="backdrop absolute top-0 left-0 overflow-hidden flex place-items-center justify-center -z-10 inset-0">
                        <div className="bg-blue-500 absolute -translate-x-64 -translate-y-8 opacity-10 blur-3xl w-64 h-64 "></div>
                        <div className="bg-teal-500 absolute translate-x-40 -translate-y-4 opacity-10 blur-3xl w-64 h-64 "></div>
                        <div className="bg-blue-300 absolute translate-x-0 translate-y-16 opacity-10 blur-3xl w-64 h-64 "></div>
                    </div>
            </div>
            <div className="section1">
            
            </div>
        </div>
    )
}
