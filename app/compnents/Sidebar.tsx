"use client";
import Link from "next/link"
export default function Sidebar() {
    return (
        <div className="div" style={{height:"calc(100vh - 80px)"}}>
            <div className='sidebar  w-56 mt-4 overflow-hidden border-r-px border-zinc-700 '  >
                <div className="sidebar-options active h-10 text-white flex place-items-center justify-start pl-3 hover:bg-zinc-700 m-3 rounded-md"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                    </svg>
                    Discover
                </div>
                <div className="sidebar-options h-10 text-white flex place-items-center justify-start pl-3 hover:bg-zinc-700 m-3 rounded-md"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                    </svg>
                    Equilizer
                </div>
                <div className="sidebar-options h-10 text-white flex place-items-center justify-start pl-3 hover:bg-zinc-700 m-3 rounded-md"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                    undefined
                </div>
                <div className="sidebar-options h-10 text-white flex place-items-center justify-start pl-3 hover:bg-zinc-700 m-3 rounded-md"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                    undefined
                </div>
            </div>
            <div className="line w-11/12 mx-auto border-zinc-700" style={{borderBottomWidth:"1px"}}></div>
            <nav className="mt-2">
                <div className="tabs w-full overflow-x-auto">
                    <Link href={"/allsongs"} className="tab mx-2 my-1  px-2 py-1 whitespace-nowrap text-zinc-300 rounded block active">All Songs</Link>
                    <Link href={"/recent"} className="tab mx-2 my-1 px-2 py-1 whitespace-nowrap text-zinc-300 rounded block">Recently Added</Link>
                    <Link href={"/playlists"} className="tab mx-2 my-1  px-2 py-1 whitespace-nowrap text-zinc-300 rounded block">Playlists</Link>
                    <Link href={"/Queue"} className="tab mx-2 my-1  px-2 py-1 whitespace-nowrap text-zinc-300 rounded block">Queue</Link>
                </div>
            </nav>
        </div>

    )
}
