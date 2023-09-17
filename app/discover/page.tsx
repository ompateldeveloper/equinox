"use client";
import {useState,useRef} from 'react'


import HiddenAudioElement from "../compnents/HiddenAudioElement";
import Sidebar from "../compnents/Sidebar";
import TrackControls from "../compnents/TrackControls";
import TrackProgress from "../compnents/TrackProgress";
import Visualizer from "../compnents/Visualizer";
import { useGlobalContext } from '../hooks/useGlobalContext';


export default function Discover() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const rangeRef = useRef<HTMLInputElement>(null);
    const {setProgress,progress} = useGlobalContext()

    let currentTrack = {src:"https://firebasestorage.googleapis.com/v0/b/equinox-abb58.appspot.com/o/music%2F%5BDrumstep%5D%20-%20Tristam%20%26%20Braken%20-%20Flight%20%5BMonstercat%20Release%5D.m4a?alt=media&token=eb3e6514-989c-425e-816a-c841f512fde1",artist:"",album:""}

    const handleAudioProgress = ()=>{
        
        if(audioRef.current){
            
            const audioDuration = audioRef.current.duration;
            const currentTime = audioRef.current.currentTime;
            let progressPercentage = (currentTime / audioDuration) * 1000;
            
            if(rangeRef.current){
                console.log("working");
                rangeRef.current.value = progressPercentage.toString();
                console.log(rangeRef.current.value);
            }
        }
    }
    const handleRange = (e:any)=>{
        if(audioRef.current){
            let rangeValue = parseFloat(e.target.value);
            const audioDuration = audioRef.current.duration;
            const desiredTime = (rangeValue / 1000) * audioDuration;
            audioRef.current.currentTime = desiredTime;
        }
    }



    return (
        <div className="discover flex">
            <Sidebar/>
            <div className="flex">
                <Visualizer/>
                <TrackProgress handleRange={handleRange} />
                <HiddenAudioElement currentTrack={currentTrack} audioRef={audioRef} handleAudioProgress={handleAudioProgress} />
                <TrackControls />
            </div>
        </div>
    )
}
