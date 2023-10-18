"use client";
import { createContext,useState, useEffect, useRef } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children})=>{
    // const audioRef = useRef<HTMLAudioElement>(null);
    // const rangeRef = useRef<HTMLInputElement>(null);
    const [progress,setProgress] = useState(0)
    const [volume,setVolume] = useState(10)
    const [navCollapse,setNavCollapse] = useState(false)
    const [isPlaying,setIsPlaying]= useState(false);
    const [isEffect,setIsEffect]= useState(false);


    const [equilizer,setEquilizer] = useState({
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
    })
    const [bass,setBass] = useState(50)
    const [treble,setTreble] = useState(50)


    

    return(
        <GlobalContext.Provider value={{progress,setProgress,equilizer,setEquilizer,bass,setBass,treble,setTreble,volume,setVolume,navCollapse,setNavCollapse,isPlaying,setIsPlaying,isEffect,setIsEffect}}>
            {children}
        </GlobalContext.Provider>
    )
}