"use client";
// interface currentTrackType{
//     src:string,
//     artist:string,
//     album:string
// }
// interface Props{
//     currentTrack:currentTrackType,
//     audioRef:any,
//     handleAudioProgress:any

// }

export default function HiddenAudioElement({ currentTrack,audioRef,handleAudioProgress}:any) {

    
    return (
        <div>
            <audio id="hiddenAudioElement" ref={audioRef} onTimeUpdate={handleAudioProgress}  controls={false}>
                <source src={currentTrack.src} type="audio/mpeg"  />
                <source src={currentTrack.src} type="audio/x-m4a"  />
            </audio>
        </div>
    )
}
