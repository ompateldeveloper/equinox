"use client";
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
    
    return (
        <div>
            <audio ref={audioRef} onTimeUpdate={handleAudioProgress} src={currentTrack.src} controls={false}></audio>
        </div>
    )
}
