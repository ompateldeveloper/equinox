"use client"

import { useGlobalContext } from "../hooks/useGlobalContext"
import Hint from "./Hint"

export default function TrackProgress({handleRange,rangeRef}:any) {
    const {setProgress,progress} = useGlobalContext()


    return (
        <div className='track-progress2 px-4 py-8 w-96 m-auto bg-zinc-700 flex items-center h-min justify-center rounded-lg relative overflow-hidden '>
            <Hint value={"Progress"}/>
            <div className="track-progress w-full rounded overflow-hidden h-10 z-9 bg-zinc-600   ">
                {/* <div className="progress-inner w-full absolute bg-white h-full origin-center translate-x-1/2 " style={{}}></div> */}
                { rangeRef.current && <div className="bg-white h-full duration-100 peer/progress " style={{width:rangeRef?.current?.value/10+"%"}}></div>}
            </div>
            
            {/* <div className="progress-pointer w-2 h-12 bg-blue-400 absolute translate-x-1/2 origin-center "></div> */}
            <input type="range" ref={rangeRef} name="" defaultValue='0' id="" min="0" max="1000" onChange={handleRange} onMouseUp={(e)=>{console.log(e)}} className="progress-range "></input>
        </div>
            
    )
}
