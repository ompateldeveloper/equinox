import {useEffect} from 'react'
import { useGlobalContext } from '../hooks/useGlobalContext'

export default function EquilizerPanel() {
    const {equilizer,setEquilizer} = useGlobalContext()
    
    const handleRange=(e:any,property:string)=>{
        setEquilizer((prev:any)=>({...prev,[property]:e.target.value}))
    }
    useEffect(() => {
    //   console.log(equilizer);
      
    

    }, [equilizer])
    
    return (
        <div className='h-64 w-96 p-1 bg-zinc-700 rounded-lg m-4'>
            <div className="switch">
                <input type="checkbox" name="equilizer" id="equilizer" className='hidden peer/equilizer  ' />
                <label htmlFor="equilizer" className='flex overflow-hidden items-center  bg-zinc-600 rounded w-8 peer-checked/equilizer:pl-4 peer-checked/equilizer:saturate-100 saturate-0  transition-all ease-out duration-100 m-2 '>
                    <div className="  rounded h-4 w-4  bg-violet-500"></div>
                </label>
            </div>
            <div className="equilizer-levels h-36  items-center gap-1 overflow-x-auto flex ">
                <div className="input-wrapper flex items-center justify-center w-10 ml-5">
                    <input className='origin-center w-28 -rotate-90' type="range" name="31" id="" />
                </div>
                <div className="input-wrapper flex items-center justify-center w-10">
                    <input className='origin-center w-28 -rotate-90' type="range" name="62" id="" />
                </div>
                <div className="input-wrapper flex items-center justify-center w-10">
                    <input className='origin-center w-28 -rotate-90' type="range" name="62" id="" />
                </div>
                <div className="input-wrapper flex items-center justify-center w-10">
                    <input className='origin-center w-28 -rotate-90' type="range" name="62" id="" />
                </div>
                <div className="input-wrapper flex items-center justify-center w-10">
                    <input className='origin-center w-28 -rotate-90' type="range" name="62" id="" />
                </div>
                <div className="input-wrapper flex items-center justify-center w-10">
                    <input className='origin-center w-28 -rotate-90' type="range" name="62" id="" />
                </div>
                <div className="input-wrapper flex items-center justify-center w-10">
                    <input className='origin-center w-28 -rotate-90' type="range" name="62" id="" />
                </div>
                <div className="input-wrapper flex items-center justify-center w-10">
                    <input className='origin-center w-28 -rotate-90' type="range" name="62" id="" />
                </div>
                <div className="input-wrapper flex items-center justify-center w-10">
                    <input className='origin-center w-28 -rotate-90' type="range" name="62" id="" />
                </div>
                <div className="input-wrapper flex items-center justify-center w-10">
                    <input className='origin-center w-28 -rotate-90' type="range" name="62" id="" />
                </div>
            </div>
            <div className=" flex justify-evenly">
                <div className="bass flex items-end justify-start relative bg-zinc-600 w-28 overflow-hidden h-12 rounded-lg m-2">
                    <div className="bass-level h-full flex items-center justify-start bg-purple-400 duration-100" style={{width:equilizer.bass+"%"}}><span className='text-xs scale-75 -rotate-90 mix-blend-overlay select-none text-black'>{equilizer.bass+"%"}</span></div>
                    <input type="range" name="" id="" defaultValue={0} onChange={(e:any)=>{handleRange(e,"bass")}} className=" hidden-range"  />
                    <div className="overlay absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-extrabold text-lg transform select-none mix-blend-overlay text-white">Bass</div>
                </div>
                <div className="treble flex items-end justify-start relative bg-zinc-600 w-28 overflow-hidden h-12 rounded-lg m-2">
                    <div className="treble-level h-full flex items-center justify-start bg-blue-300 duration-100" style={{width:equilizer.treble+"%"}}><span className='text-xs scale-75 -rotate-90 mix-blend-overlay select-none text-black'>{equilizer.treble+"%"}</span></div>
                    <input type="range" name="" id="" defaultValue={0} onChange={(e:any)=>{handleRange(e,"treble")}} className=" hidden-range"  />
                    <div className="overlay absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-extrabold text-lg transform select-none mix-blend-overlay text-white">Treble</div>
                </div>
            </div>
            
        </div>
    )
}
