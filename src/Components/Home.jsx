"use client";
import React from "react";
import DataContext from "./DataContext"
import "./Home.css";

import { useState, useContext } from "react";





const Home = (props) => {
    const { url } = props;
    const [state, dispatch] = useContext(DataContext)








    return (

        <>
            <div className="Home-data">
                <h1 className="text-album">Made for you</h1>
                {state.albums.map((album) => (
                    <div className="Album" key={album.id}>
                        <img className="Image-album" src={album.url} width="172" height="172"></img>
                        <h1 className="Album-artist">artist</h1>
                        <h1 className="Album-title">{album.title}</h1>



                    </div>

                ))}
                <div>


                </div>
                <h1 className="text-audio">Episodes for you</h1>
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
