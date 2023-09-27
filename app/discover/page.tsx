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
import AudioProcessor from '../../lib/AudioProcessor';

export default function Discover() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const rangeRef = useRef<HTMLInputElement>(null);
    const {setProgress,progress,setVolume,volume,equilizer} = useGlobalContext()
    const [isPlaying,setIsPlaying]= useState(false);
    const [isEffect,setIsEffect]= useState(false);

    const audioProcessorRef = useRef<AudioProcessor>()
    

    useEffect(() => {
        

        if(audioRef.current ){
            audioProcessorRef.current = new AudioProcessor(audioRef.current); 
        } 
        return()=>{
            
            if(audioProcessorRef.current){
                audioProcessorRef.current.dispose()
            }
        }

    }, [])

    useEffect(() => {
        if(audioProcessorRef.current ){
            audioProcessorRef.current.setBass((equilizer.bass/100)*12);
            audioProcessorRef.current.setTreble((equilizer.treble/100)*15);             
            audioProcessorRef.current.setPeakingFrequency(31,(parseInt(equilizer.frequency.band31)/100)*20);
            audioProcessorRef.current.setPeakingFrequency(62,(parseInt(equilizer.frequency.band62)/100)*20);
            audioProcessorRef.current.setPeakingFrequency(125,(parseInt(equilizer.frequency.band125)/100)*20);
            audioProcessorRef.current.setPeakingFrequency(250,(parseInt(equilizer.frequency.band250)/100)*20);
            audioProcessorRef.current.setPeakingFrequency(500,(parseInt(equilizer.frequency.band500)/100)*20);
            audioProcessorRef.current.setPeakingFrequency(1000,(parseInt(equilizer.frequency.band1000)/100)*20);
            audioProcessorRef.current.setPeakingFrequency(2000,(parseInt(equilizer.frequency.band2000)/100)*20);
            audioProcessorRef.current.setPeakingFrequency(4000,(parseInt(equilizer.frequency.band4000)/100)*20);
            audioProcessorRef.current.setPeakingFrequency(8000,(parseInt(equilizer.frequency.band8000)/100)*20);
            audioProcessorRef.current.setPeakingFrequency(16000,(parseInt(equilizer.frequency.band16000)/100)*20);

        }
    },[equilizer])



    useEffect(() => {
        if(audioProcessorRef.current) audioProcessorRef.current.resume()
    },[isPlaying])

    let currentTrack = {
        // src:"https://firebasestorage.googleapis.com/v0/b/equinox-abb58.appspot.com/o/music%2FNightcore%20-%20PLAY%20x%20Unity%20x%20Faded%20_%20Alan%20Walker%20(Mashup%20_%20Switching%20Vocals)%20L_256k.mp3?alt=media&token=9ca82c66-0cb4-4558-888e-a95e8794ab5b", //play-unity
        // src:"https://firebasestorage.googleapis.com/v0/b/equinox-abb58.appspot.com/o/music%2FYOASOBI%E3%80%8C%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E3%80%8D%20Official%20Music%20Video_256k.mp3?alt=media&token=3cfc4f8c-a040-493f-a0bd-2b70f4c470d1", // idol
        // src:"https://firebasestorage.googleapis.com/v0/b/equinox-abb58.appspot.com/o/music%2FOshi%20no%20Ko%20Ending%20(4K%2060FPS)%20Creditless_256k.mp3?alt=media&token=ba47c5fe-d827-48dd-a947-d08f4af62541", // oshinoko op
        // src:"https://firebasestorage.googleapis.com/v0/b/equinox-abb58.appspot.com/o/music%2FMoon%20Halo%20(feat.%20%E8%8C%B6%E7%90%86%E7%90%86%2C%20TetraCalyx%2C%20Hanser)%20(Honkai%20Impact%203Rd%20'Everlasting%20Fl.m4a?alt=media&token=24ef49ae-f056-474d-8663-a4519c3550ed", //moon halo
        // src:"sound2.mp3", // play-unity
        // src:"sound.m4a", // moon halo
        // src:"orange.m4a", // koruru
        src:"Kimi ni Todoke Season 2 Opening_256k.mp3", //given name
        // src:"Sawano Hiroyuki - aLIEz Aldnoah.Zero Full Lyrics.m4a", //given name
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
                rangeRef.current.value = progressPercentage.toString();
            }
            if(currentTime == audioDuration){
                setProgress(0)
            }
        }
    }

    const trackEnds= ()=>{
        if(audioRef.current?.paused){
            setIsPlaying(false)
            setProgress(0)
        }
    }

    const onVolumeChange = () => {
        if(audioRef.current){
            audioRef.current.volume = volume / 100

        }
    }

    const handleVolume = (e:any)=>{
        setVolume(e.target.value)
    }

    useEffect(() => {
        onVolumeChange()
    },[volume])
    useEffect(() => {
        trackEnds()
      return () => {
        
      }
    }, [progress])
    
    const handleRange = (e:any)=>{
        if(audioRef.current){
            console.log(e.target.onmousedown)
            let rangeValue = parseFloat(e.target.value);
            const audioDuration = audioRef.current.duration;
            const desiredTime = (rangeValue / 1000) * audioDuration;
            audioRef.current.currentTime = desiredTime;
            setProgress(desiredTime)
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
        <div className="discover flex mb-20 relative ">
            {/* <Sidebar/> */}
            {/* <div className="flex flex-wrap "> */}
            <div className="m-4">
                <Visualizer/>
                <TrackProgress rangeRef={rangeRef} handleRange={handleRange} />
            </div>
            <EquilizerPanel isEffect setIsEffect={setIsEffect} handleVolume={handleVolume} />
            <TrackControls isPlaying={isPlaying} handlePlayPauseClick={handlePlayPauseClick}  />
            <HiddenAudioElement currentTrack={currentTrack} audioRef={audioRef} handleAudioProgress={handleAudioProgress} />
            {/* </div>  */}
        </div>
    )
}
