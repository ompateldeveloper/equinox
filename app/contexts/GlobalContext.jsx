"use client";
import { createContext,useState,useRef } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children})=>{

    const [progress,setProgress] = useState(40)
    const [volume,setVolume] = useState(100)


    const [equilizer,setEquilizer] = useState({
        "frequency":{
            "band31":50,
            "band62":50,
            "band125":50,
            "band250":50,
            "band500":50,
            "band1000":50,
            "band2000":50,
            "band4000":50,
            "band8000":50,
            "band16000":50
        },
        "bass":0,
        "treble":0,
    })



    return(
        <GlobalContext.Provider value={{progress,setProgress,equilizer,setEquilizer,volume,setVolume}}>
            {children}
        </GlobalContext.Provider>
    )
}