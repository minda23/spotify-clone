"use client";
import { useState, useEffect, useReducer, useContext } from "react";

import AudioCard from './audioCard';
import AddToAlbumModal from './AddToAlbumModal';
import DataContext from "./DataContext"

const audioList = (props) => {

    const { state, dispatch, AddProp, oneSong } = props;


    return (
        <div>
            <div className="album-title-wrapper">

                <div className="Album-artist-image">
                    <img className="" src="images/beyonce.jfif" height="180" width="180"></img>

                </div>
                <div>
                    <p style={{ color: "white" }}>Album</p>
                    <h1 className="heading-album">Beyonce Homecoming</h1>
                    <p style={{ color: "white" }}>Beyonce</p>
                </div>
            </div>
            <div className="songs-list">
                {state?.selectedAlbum?.audio?.map(oneAudio => {

                    return (
                        <div>
                            <div>
                                <AudioCard oneSong={oneAudio} AddProp={oneAudio} />


                            </div>

                        </div>
                    )
                })}
            </div>
            <div>
            </div>
        </div >
    )
}

export default audioList