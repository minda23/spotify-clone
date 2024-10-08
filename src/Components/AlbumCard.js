"use client"
import { useState, useEffect } from "react";
import './AlbumCard.css';


const AlbumCard = (props) => {



    const { Image_path, image_height, image_width, AlbumProp } = props;


    return (

        // pre každu vec cyklus map zobrazi jeden album to dole pod tym je vlastne jeden album
        <div className="background">
            <div className="wrapper">
                <div className="Image">
                    <img className="" src={Image_path} height={image_height} width={image_width}></img>

                </div>

                <div className="Information">
                    <div className="Information-title">
                        {AlbumProp.title}

                    </div>
                    <div className="playlist-songs">
                        {!!AlbumProp.audio && AlbumProp.audio.length}
                    </div>
                </div>
            </div>
        </div>

    )
}




// cely tento komponent sa vypisuje len ked mame data zo servera


export default AlbumCard