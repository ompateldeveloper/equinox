"use client"

import { useEffect, useState } from "react"
import { useGlobalContext } from "../hooks/useGlobalContext"
import Hint from "./Hint"

export default function TrackProgress({handleRange,rangeRef,}:any) {
    const {setProgress,progress} = useGlobalContext()
    const [randomArray,setRandomArray] = useState<number[] | undefined> (undefined)
    useEffect(()=>{ 
        function generateRandomArray(){
            let randomArray= []
            for (let i=0 ;i<40; i++ ){
                let random =Math.random() * (40 - 10) + 10
                randomArray.push(random)
    
            }
            return randomArray
        }
        const ra = generateRandomArray()
        setRandomArray(ra)
    },[])

    return (
        <div className='track-progress px-4 py-8 w-96 m-auto bg-zinc-700 flex items-center h-min justify-center rounded-lg relative overflow-hiden '>
            {rangeRef.current && <div className="track-progress-inner w-80 rounded overflow-hidden h-10 z-9 relative  ">
                <div className=" flex items-center h-full duration-100  peer/progress overflow-hidden absolute" style={{width:rangeRef?.current?.value/10+"%"}}>
                {
                   randomArray?.map((val:any,index)=>{
                        return<div key={index} className="line shrink-0 self-center bg-zinc-500 rounded " style={{height:val+"px",width:"6px",marginLeft:2}}></div>
                    })
                }
                </div>
                <div className="div flex items-center h-full overflow-hidden">
                {
                   randomArray?.map((val,index)=>{
                        return<div key={index} className="line bg-white rounded" style={{height:val+"px",width:"6px",marginLeft:2}}></div>
                    })
                }
                </div>
            </div>}
            
            {/* <Hint value={"Progress"}/> */}
            <input type="range" ref={rangeRef} name="" defaultValue='0' id="" min="0" max="1000" onChange={handleRange} onMouseUp={(e)=>{console.log(e)}} className="progress-range "></input>
        </div>
            
    )
}
