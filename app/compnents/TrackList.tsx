import Link from "next/link";
import Sidebar from "./Sidebar";

export default function TrackList() {
    return (
        <div className="flex w-full">

        <Sidebar/>
        <div className="w-full p-4 rounded-lg ">
          
            <div className="list overflow-y-auto">
            {
                [
                "play/unity",
                "YOASOBI idol",
                "Oshi no ko op",
                "moon halo",
                "orange koruru remix"
                ].map((data,index)=>(
                    <TrackElement index={index} data={data}/>
                ))
            }
            </div>        
        </div>
    </div>

    )
}

function TrackElement({index,data}:any){
    return(
    <div className="border-zinc-700" style={{borderBottomWidth:'1px'}}>
        <Link key={index} href={`/${ encodeURIComponent(data)}`} className="w-full my-1 flex h-10 items-center key={index} rounded hover:bg-zinc-700 duration-100" >
            <div className="cover ml-3 text-sm text-zinc-100">{index+1+"."}</div>
            <span className="ml-2 text-sm capitalize text-zinc-100 ">{data}</span>
            <div className="runtime ml-auto mr-2 text-sm text-zinc-300">{"3:56"}</div>
        </Link>
        
    </div>
    )
}