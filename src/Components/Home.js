"use client";
import React from "react";
import DataContext from "./DataContext"
import "./Home.css";

import { useState, useContext } from "react";





const Home = () => {
    const [state, dispatch] = useContext(DataContext)








    return (

        <>
            <div className="Home-data">

                {state.albums.map((album) => (
                    <div className="Album" key={album.id}>
                        <img className="Image-album" src="images/camilla.jpeg" width="172" height="172"></img>
                        <h1 className="Album-artist">artist</h1>
                        <h1 className="Album-title">{album.title}</h1>



                    </div>

                ))}
                <div>


                </div>

                {state.audios.map((audio) => (
                    <div className="Audio" key={audio.id}>
                        <img className="Image-audio" src="images/camilla.jpeg" width="172" height="172"></img>
                        <h1 className="Audio-title">{audio.title}</h1>
                        <h1 className="Audio-artist">{audio.artist}</h1>

                    </div>
                ))}
            </div >

        </>

    )


}




export default Home
