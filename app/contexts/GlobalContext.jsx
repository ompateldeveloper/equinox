"use client";
import { createContext,useState, useEffect } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children})=>{

    const [progress,setProgress] = useState(0)
    const [volume,setVolume] = useState(10)
    const [navCollapse,setNavCollapse] = useState(false)


    const [equilizer,setEquilizer] = useState({
        "frequency":{
            "band31":90,
            "band62":85,
            "band125":70,
            "band250":55,
            "band500":45,
            "band1000":35,
            "band2000":40,
            "band4000":50,
            "band8000":53,
            "band16000":70
        },
        "bass":50,
        "treble":50,
    })



    return(
        <GlobalContext.Provider value={{progress,setProgress,equilizer,setEquilizer,volume,setVolume,navCollapse,setNavCollapse}}>
            {children}
        </GlobalContext.Provider>
    )
}