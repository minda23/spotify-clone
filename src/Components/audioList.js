"use client";
import { useState, useEffect } from "react";
import './audioList.css';
import AudioCard from './audioCard';




const audioList = (props) => {

    const [state, setState] = useState("");

    /*
        ?  - budem tam title a song list
        * song list bude držať všetky pesničky
        */




    return (


        <div>
            <div>

                {!!state.selectedAlbum && !!state.selectedAlbum.audio && state.selectedAlbum.audio.map(audio =>
                    <p>{audio.title}</p>

                )
                }



            </div>

            <AudioCard state={audio} />




            <button className="select-button" onClick={() => dispatch({ type: "SELECT_ALBUM", value: state })} >Select</button>
        </div >





    )
}


// okej uloha pre mna je že mam to rozdelene na audiolist.js a AudioCard.js a uloha je zobraziť audioCard.js 
// ten audioList bude zodpovedny za cely list
// a ten audioCard bude zodpovedny za jednu pesničku.
// možem isť podľa toho ako je Albums a AlbumCard :).
// prečitať dokumentaciu o provideri :). 
// 


export default audioList