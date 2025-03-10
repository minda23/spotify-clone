"use client";
import { useState, useEffect, useReducer, useContext } from "react";
import AudioCard from './audioCard';
import "./audioList.css"

const audioList = (props) => {
    const { title, artist, songs, subtitle, url } = props;

    return (
        <>
            <div className="album-title-wrapper">
                <div className="Album-artist-image">
                    <img className="" src={url}></img>
                </div>
                <div className="text-album">
                    <p style={{
                        color: "white", textAlign: "center"
                    }}>{subtitle}</p>
                    <h1 className="heading-album">{title}</h1>
                    <p style={{ color: "white", textAlign: "center" }}>{artist}</p>

                </div>

            </div>
            <div className="songs-list">

                {!!songs && songs.map(oneAudio => { // najprv sa premeni ten list na true or false a potom ten and and že ked ta predošla vec je pravdiva tak
                    // idem cez funkciu map. ak je true prejde na map funkciu.


                    return (

                        <div>
                            <div>
                                <AudioCard oneSong={oneAudio} oneSong1={oneAudio} />

                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default audioList