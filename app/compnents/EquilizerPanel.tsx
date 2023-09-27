import {useEffect} from 'react'
import { useGlobalContext } from '../hooks/useGlobalContext'
import Hint from './Hint'

export default function EquilizerPanel({handleVolume,isEffect,setIsEffect}:any) {
    const {equilizer,setEquilizer,volume} = useGlobalContext()
    
    const handleRange=(e:any,property:string)=>{
        setEquilizer((prev:any)=>({...prev,[property]:e.target.value}))
    }
    const handleBandRange=(e:any,property:string)=>{
        setEquilizer((prev:any)=>({...prev,frequency:{...prev.frequency,[property]:parseInt(e.target.value)}}))
    }

    // useEffect(() => {
    //   console.log(volume);
    // }, [volume])
    
    return (
        <div className='equilizer-panel h-96 w-96 p-4  bg-gradient-to-br relative overflow-hidden from-zinc-600 via-zinc-700 to-zinc-700 rounded-lg my-4 mx-auto'>
            {/* <Hint value={"Equilizer"}/> */}
            <div className="switch flex items-center  ">
                <input type="checkbox" name="equilizer" id="equilizer" onClick={()=>{setIsEffect(!isEffect)}} className='hidden peer/equilizer  ' />
                <span className="text-zinc-400 text-sm peer-checked/equilizer:text-zinc-300"> Equilizer</span>
                <label htmlFor="equilizer" className='flex overflow-hidden items-center shadow-inner shadow-zinc-700  bg-zinc-600 rounded w-8 peer-checked/equilizer:pl-4 peer-checked/equilizer:saturate-100 saturate-0  transition-all ease-out duration-100 m-2 relative '>
                    <div className="  rounded h-4 w-4 z-10 bg-violet-500"></div>
                    <div className="absolute z-9 text-xs left-0 select-none text-zinc-300">on</div>
                    <div className="absolute z-9 text-xs right-0 select-none text-zinc-400">off</div>
                </label>
            </div>
            <div className="equilizer-levels   ">

                <div className="input-wrapper flex items-end ml-5 ">
                    <input className='' type="range" name="31" id="" onChange={(e:any)=>{handleBandRange(e,"band31")}} />
                    { equilizer && <div className="freq-level " style={{height:equilizer.frequency.band31+"%"}}></div> }
                </div>
                <div className="input-wrapper flex items-end">
                    <input className='' type="range" name="31" id="" onChange={(e:any)=>{handleBandRange(e,"band62")}} />
                    { equilizer && <div className="freq-level " style={{height:equilizer.frequency.band62+"%"}}></div> }
                </div>
                <div className="input-wrapper flex items-end">
                    <input className='' type="range" name="31" id="" onChange={(e:any)=>{handleBandRange(e,"band125")}} />
                    { equilizer && <div className="freq-level " style={{height:equilizer.frequency.band125+"%"}}></div> }
                </div>
                <div className="input-wrapper flex items-end">
                    <input className='' type="range" name="31" id="" onChange={(e:any)=>{handleBandRange(e,"band250")}} />
                    { equilizer && <div className="freq-level " style={{height:equilizer.frequency.band250+"%"}}></div> }
                </div>
                <div className="input-wrapper flex items-end">
                    <input className='' type="range" name="31" id="" onChange={(e:any)=>{handleBandRange(e,"band500")}} />
                    { equilizer && <div className="freq-level " style={{height:equilizer.frequency.band500+"%"}}></div> }
                </div>
                <div className="input-wrapper flex items-end">
                    <input className='' type="range" name="31" id="" onChange={(e:any)=>{handleBandRange(e,"band1000")}} />
                    { equilizer && <div className="freq-level " style={{height:equilizer.frequency.band1000+"%"}}></div> }
                </div>
                <div className="input-wrapper flex items-end">
                    <input className='' type="range" name="31" id="" onChange={(e:any)=>{handleBandRange(e,"band2000")}} />
                    { equilizer && <div className="freq-level " style={{height:equilizer.frequency.band2000+"%"}}></div> }
                </div>
                <div className="input-wrapper flex items-end">
                    <input className='' type="range" name="31" id="" onChange={(e:any)=>{handleBandRange(e,"band4000")}} />
                    { equilizer && <div className="freq-level " style={{height:equilizer.frequency.band4000+"%"}}></div> }
                </div>
                <div className="input-wrapper flex items-end">
                    <input className='' type="range" name="31" id="" onChange={(e:any)=>{handleBandRange(e,"band8000")}} />
                    { equilizer && <div className="freq-level " style={{height:equilizer.frequency.band8000+"%"}}></div> }
                </div>
                <div className="input-wrapper flex items-end">
                    <input className='' type="range" name="31" id="" onChange={(e:any)=>{handleBandRange(e,"band16000")}} />
                    { equilizer && <div className="freq-level " style={{height:equilizer.frequency.band16000+"%"}}></div> }
                </div>
                
                
            </div>
            <div className=" flex justify-evenly">
                <div className="bass flex items-end justify-start relative bg-zinc-600 w-28 overflow-hidden h-12 rounded-lg m-2">
                    <div className="bass-level h-full flex items-center justify-start bg-purple-400 duration-100 transform-gpu" style={{width:equilizer.bass+"%"}}><span className='text-xs scale-75 -rotate-90 mix-blend-overlay select-none text-black'>{equilizer.bass+"%"}</span></div>
                    <input type="range" name="" id="" defaultValue={0} onChange={(e:any)=>{handleRange(e,"bass")}} className=" hidden-range"  />
                    <div className="overlay absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-extrabold text-lg transform select-none mix-blend-overlay text-white">Bass</div>
                </div>
                <div className="treble flex items-end justify-start relative bg-zinc-600 w-28 overflow-hidden h-12 rounded-lg m-2">
                    <div className="treble-level h-full flex items-center justify-start bg-blue-300 duration-100 transform-gpu" style={{width:equilizer.treble+"%"}}><span className='text-xs scale-75 -rotate-90 mix-blend-overlay select-none text-black'>{equilizer.treble+"%"}</span></div>
                    <input type="range" name="" id="" defaultValue={0} onChange={(e:any)=>{handleRange(e,"treble")}} className=" hidden-range"  />
                    <div className="overlay absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-extrabold text-lg transform select-none mix-blend-overlay text-white">Treble</div>
                </div>
                <div className="volume flex items-end justify-start relative bg-zinc-600 w-28 overflow-hidden h-12 rounded-lg m-2">
                    <div className="volume-level h-full flex items-center justify-start bg-lime-400 duration-100 transform-gpu" style={{width:volume+"%"}}><span className='text-xs scale-75 -rotate-90 mix-blend-overlay select-none text-black'>{volume+"%"}</span></div>
                    <input type="range" name="" id="" defaultValue={0} onChange={handleVolume} className=" hidden-range"  />
                    <div className="overlay absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-extrabold text-lg transform select-none mix-blend-overlay text-white">volume</div>
                </div>
            </div>
            
        </div>
    )
}
