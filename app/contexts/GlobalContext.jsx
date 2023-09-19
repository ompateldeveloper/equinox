"use client";
import { createContext,useState,useRef } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children})=>{

    const [progress,setProgress] = useState(40)
    const [volume,setVolume] = useState(100)


    const [equilizer,setEquilizer] = useState({
        "frequency":{
            31:50,
            62:50,
            125:50,
            250:50,
            500:50,
            1000:50,
            2000:50,
            4000:50,
            8000:50,
            16000:50
        },
        "bass":0,
        "treble":0,
    })



    return(
        <GlobalContext.Provider value={{progress,setProgress,equilizer,setEquilizer}}>
            {children}
        </GlobalContext.Provider>
    )
}