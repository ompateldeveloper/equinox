"use client";
import {useEffect,useState,useRef} from 'react'


import HiddenAudioElement from "../compnents/HiddenAudioElement";
import Sidebar from "../compnents/Sidebar";
import TrackControls from "../compnents/TrackControls";
import EquilizerPanel from "../compnents/EquilizerPanel";
import TrackProgress from "../compnents/TrackProgress";
import Visualizer from "../compnents/Visualizer";
import { useGlobalContext } from '../hooks/useGlobalContext';
import Loading from '../compnents/Loading';


export default function Discover() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const rangeRef = useRef<HTMLInputElement>(null);
    const {setProgress,progress,setVolume} = useGlobalContext()
    const [isPlaying,setIsPlaying]= useState(false);

    let currentTrack = {
        // src:"https://firebasestorage.googleapis.com/v0/b/equinox-abb58.appspot.com/o/music%2FNightcore%20-%20PLAY%20x%20Unity%20x%20Faded%20_%20Alan%20Walker%20(Mashup%20_%20Switching%20Vocals)%20L_256k.mp3?alt=media&token=9ca82c66-0cb4-4558-888e-a95e8794ab5b",
        // src:"https://firebasestorage.googleapis.com/v0/b/equinox-abb58.appspot.com/o/music%2FYOASOBI%E3%80%8C%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%80%8D%20Official%20Music%20Video_256k.mp3?alt=media&token=3cfc4f8c-a040-493f-a0bd-2b70f4c470d1",
        src:"https://firebasestorage.googleapis.com/v0/b/equinox-abb58.appspot.com/o/music%2FMoon%20Halo%20(feat.%20%E8%8C%B6%E7%90%86%E7%90%86%2C%20TetraCalyx%2C%20Hanser)%20(Honkai%20Impact%203Rd%20'Everlasting%20Fl.m4a?alt=media&token=24ef49ae-f056-474d-8663-a4519c3550ed",
        artist:"",
        album:""
    }

    const handleAudioProgress = ()=>{
        
        if(audioRef.current){
            
            const audioDuration = audioRef.current.duration;
            const currentTime = audioRef.current.currentTime;
            let progressPercentage = (currentTime / audioDuration) * 1000;
            setProgress(progressPercentage)
            if(rangeRef.current){
                console.log("working");
                rangeRef.current.value = progressPercentage.toString();
                console.log(rangeRef.current.value);
            }
        }
    }

    const trackEnds= ()=>{
        if(audioRef.current?.paused){
            setIsPlaying(false)
        }

    }
    const handleVolume = (e:any)=>{
        setVolume(e.target.value)
    }

    useEffect(() => {
        trackEnds()
      return () => {
        
      }
    }, [progress])
    
    const handleRange = (e:any)=>{
        if(audioRef.current){
            let rangeValue = parseFloat(e.target.value);
            const audioDuration = audioRef.current.duration;
            const desiredTime = (rangeValue / 1000) * audioDuration;
            audioRef.current.currentTime = desiredTime;
        }
    }

    const handlePlayPauseClick = () => {
        if (audioRef.current) {
          if (isPlaying ) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
    };


    return (
        <div className="discover flex flex-wrap px-5 relative ">
            {/* <Sidebar/> */}
            {/* <div className="flex flex-wrap "> */}
                <div className="edit absolute right-10 top-1 p-1 rounded  text-zinc-400 bg-gradient-to-br from-zinc-700 to-zinc-600 hover:text-zinc-300 hover:from-zinc-600  border-2 border-transparent hover:border-zinc-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>

                </div>
                <Visualizer/>
                <TrackProgress rangeRef={rangeRef} handleRange={handleRange} />
                <EquilizerPanel handleVolume={handleVolume} />
                {/* <Loading/> */}
                <TrackControls isPlaying={isPlaying} handlePlayPauseClick={handlePlayPauseClick}  />
                <HiddenAudioElement currentTrack={currentTrack} audioRef={audioRef} handleAudioProgress={handleAudioProgress} />
            {/* </div>  */}
        </div>
    )
}
