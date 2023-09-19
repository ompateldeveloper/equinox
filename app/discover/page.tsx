"use client";
import {useEffect,useState,useRef} from 'react'


import HiddenAudioElement from "../compnents/HiddenAudioElement";
import Sidebar from "../compnents/Sidebar";
import TrackControls from "../compnents/TrackControls";
import EquilizerPanel from "../compnents/EquilizerPanel";
import TrackProgress from "../compnents/TrackProgress";
import Visualizer from "../compnents/Visualizer";
import { useGlobalContext } from '../hooks/useGlobalContext';


export default function Discover() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const rangeRef = useRef<HTMLInputElement>(null);
    const {setProgress,progress} = useGlobalContext()
    const [isPlaying,setIsPlaying]= useState(false);

    let currentTrack = {
        src:"https://firebasestorage.googleapis.com/v0/b/equinox-abb58.appspot.com/o/music%2FFate-strange%20Fake%20%E4%B8%BB%E9%A1%8C%E6%9B%B2%E3%80%8CFAKEit%E3%80%8DSawanoHiroyuki%5BnZk%5D%20feat.Laco%E3%80%90%E4%B8%AD%E6%97%A5%E7%BF%BB%E8%AD%AF%E3%80%91.m4a?alt=media&token=0e4c1d5d-b799-47c6-a9cc-67419eb9e7c8",
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

    const pauseAfterEnds= ()=>{
        if(audioRef.current?.paused){
            setIsPlaying(false)
        }

    }

    useEffect(() => {
        pauseAfterEnds()
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
        <div className="discover flex px-5">
            {/* <Sidebar/> */}
            <div className="flex flex-wrap">
                <Visualizer/>
                <EquilizerPanel/>
                <TrackProgress rangeRef={rangeRef} handleRange={handleRange} />
                <HiddenAudioElement currentTrack={currentTrack} audioRef={audioRef} handleAudioProgress={handleAudioProgress} />
                <TrackControls isPlaying={isPlaying} handlePlayPauseClick={handlePlayPauseClick}  />
            </div>
        </div>
    )
}
