"use client"

import { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext"

interface Props{
    handlePlayPauseClick:any,
    rangeRef:any,
    handleRange:any,
}
export default function TrackControls({handlePlayPauseClick,rangeRef,handleRange}:Props) {
    const {isPlaying} = useGlobalContext();
    const [randomArray,setRandomArray] = useState<number[] | undefined> (undefined)
    useEffect(()=>{ 
        function generateRandomArray(){
            let randomArray= []
            for (let i=0 ;i<100; i++ ){
                let random =Math.random() * (40 - 10) + 10
                randomArray.push(random)
    
            }
            return randomArray
        }
        const ra = generateRandomArray()
        setRandomArray(ra)
    },[])
  return (
    <div className='track-controls fixed bottom-2 left-2 w-[calc(100%-16px)] rounded-lg bg-gradient-to-br from-zinc-700 via-zinc-700 to-zinc-600  overflow-hidden ' >
  
        <div className="buttons-panel flex items-center justify-center opacity-70 peer-hover:opacity-0 hover:opacity-100 hover:delay-0 delay-1000 duration-300 my-2 peer-hover:delay-0">
            <div className="seek-back mx-2 rounded-full p-2 bg-zinc-800 text-zinc-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-10 0 34 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                    <path strokeLinecap="round" style={{transform:"translateX(-10px)"}} strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                </svg>
            </div>
            <div className="previous mx-2 rounded-full p-2 bg-zinc-800 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                </svg>
            </div>
            <div className="play-button mx-2 rounded-full p-4 bg-zinc-800 text-zinc-300" onClick={handlePlayPauseClick}>{
                isPlaying
                ?
                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>)
                :
                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>)
            }</div>
            <div className="next mx-2 rounded-full p-2 bg-zinc-800 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
            </div>
            <div className="seek-forward mx-2 rounded-full p-2 bg-zinc-800 text-zinc-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    <path strokeLinecap="round" strokeLinejoin="round" style={{transform:"translatex(10px)"}} d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
            </div>
        </div>

        {/* <div className="progress-panel absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-20 overflow-x-hidden flex mx-auto w-96 ">
            {rangeRef.current && <div className="div grid grid-flow-col items-center h-full origin-left absolute left-1/2 overflow-hidden transform-cpu duration-100 " style={{transform:`translateX(${-(rangeRef.current.value/10)}%)`}}>
                {
                   randomArray?.map((val,index)=>{
                        return<div key={index} className="line bg-white rounded " style={{height:val+"px",width:"6px",marginLeft:2}}></div>
                    })
                }
            </div>}
        </div> 
        <div className="flex my-2 items-center justify-center peer cursor-grab active:cursor-grabbing">
            <input ref={rangeRef} type="range" name="" defaultValue='0' id="" min="0" max="1000" onChange={handleRange} onMouseUp={(e)=>{console.log(e)}} className="progress-range "></input>
            <div className="bg-zinc-600 h-6 rounded w-80 absolute"></div>
        </div> */}
        

    </div>

  )
}
