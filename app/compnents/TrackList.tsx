import Link from "next/link";

export default function TrackList() {
    return (
        <div className=" w-96 m-4 rounded-lg">
            <nav className="mt-2 flex">
                <div className="tabs flex overflow-x-auto w-80">
                    <Link href={"/allsongs"} className="tab mx-2 my-1  px-2 py-1 whitespace-nowrap text-zinc-300 rounded active">All Songs</Link>
                    <Link href={"/recent"} className="tab mx-2 my-1 px-2 py-1 whitespace-nowrap text-zinc-300 rounded">Recently Added</Link>
                    <Link href={"/playlists"} className="tab mx-2 my-1  px-2 py-1 whitespace-nowrap text-zinc-300 rounded">Playlists</Link>
                    <Link href={"/Queue"} className="tab mx-2 my-1  px-2 py-1 whitespace-nowrap text-zinc-300 rounded">Queue</Link>
                </div>
            </nav>    
            <div className="list overflow-y-auto">
            {
                [
                "play/unity",
                "YOASOBI idol",
                "Oshi no ko op",
                "moon halo",
                "orange koruru remix"
                ].map((item,index)=>(
                    <Link key={index} href={`/${ encodeURIComponent(item)}`} className="w-full flex h-10 items-center key={index} ">
                        <div className="num ml-3 text-zinc-100">{index+"."}</div>
                        <span className="ml-2 capitalize text-zinc-100 ">{item}</span>
                    </Link>
                ))
            }
            </div>        
        </div>
    )
}
