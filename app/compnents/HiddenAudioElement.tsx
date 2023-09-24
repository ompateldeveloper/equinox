"use client";
import {useEffect } from "react"
interface currentTrackType{
    src:string,
    artist:string,
    album:string
}
interface Props{
    currentTrack:currentTrackType,
    audioRef:any,
    handleAudioProgress:any

}

export default function HiddenAudioElement({ currentTrack,audioRef,handleAudioProgress}:any) {
    function init(){
        
    }
    useEffect(() => {
        init()
    
    }, [])
    
    return (
        <div>
            <audio id="hiddenAudioElement" ref={audioRef} onTimeUpdate={handleAudioProgress} src={"sound2.mp3"} controls={false}></audio>
        </div>
    )
}
