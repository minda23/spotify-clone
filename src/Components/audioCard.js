"use client"
import { useState, useEffect } from "react";


const AudioCard = (props) => {


    const { show_audios } = props;


    return (
        <div className="audio-songs">
            <p>{show_audios.audio}</p>
        </div>
    )

}




export default AudioCard
