"use client"

import { useGlobalContext } from "../hooks/useGlobalContext"
import Hint from "./Hint"

export default function TrackProgress({handleRange,rangeRef}:any) {
    const {setProgress,progress} = useGlobalContext()


    return (
        <div className='track-progress2 p-8 w-96 mx-auto my-4 bg-zinc-700 flex items-center h-min justify-center rounded-lg relative overflow-hidden '>
            <Hint value={"Progress"}/>
            <div className="track-progress w-full rounded overflow-hidden h-10 z-9 bg-zinc-600">
                { rangeRef.current && <div className="bg-white h-full duration-100 peer/progress " style={{width:rangeRef?.current?.value/10+"% "}}></div>}
                <div className="hover-selector absolute left-0 h-full w-5 bg-black z-11 hidden peer-hover/progress:visible">heyo</div>
            </div>
            <input type="range" ref={rangeRef} name="" defaultValue='0' id="" min="0" max="1000" onChange={handleRange} className="progress-range "></input>
        </div>
            
    )
}
