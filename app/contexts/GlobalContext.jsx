"use client";
import { createContext,useState,useRef } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children})=>{

    const [progress,setProgress] = useState(40)



    return(
        <GlobalContext.Provider value={{progress,setProgress}}>
            {children}
        </GlobalContext.Provider>
    )
}