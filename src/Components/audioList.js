"use client";
import { useState, useEffect } from "react";
import AudioCard from './audioCard';



// ako domácu ulohu si môžem skusiť :) 
// chceme vytvoriť v reduceri novu funkciu REMOVE_AUDIO_FROM_ALBUMS, v tom reduceri sa spusti nejaky console.log a vytlači sa meno pesničky
// ktoru chcem vymazať a meno toho albumu z ktoreho chceme vymazať tu piesen
// a vytvoriť na každej pesničke ktora bude v albume , nejaky gombik , ktory ked bude kliknuty spusti action.
// ide o to si precvičiť reducer ako nan maps funkcie a props.
// čize pre každej pesničke bude delete button
// a potom sa do konzoly vypiše nazov albumu ku ktoremu patri a nazov tej piesne



const audioList = (props) => { // props definujeme v audioList.js priamo v krabici musime vystrihnuť to
    // jadro ktore chceme posunuť do toho audioList

    // najprv si definujeme ake ma otvory že či to je kocka alebo trojuholnik,kruh


    /*
        ?  - budem tam title a song list
        * song list bude držať všetky pesničky
        */

    const { state, deleteProp, dispatch, audio } = props;


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


                {state?.selectedAlbum?.audio?.map(oneAudio => { // to audio prve je list pesničiek


                    {/*vyberame zo statu najprv ten selectovany album a potom z toho albumu vyberame všetky pesničky
                    a potom použivam ten map aby sa to rozdelilo na list individualnu pesničku */}
                    return (
                        <div>

                            <div>
                                <div>


                                </div>



                                <AudioCard oneSong={oneAudio} /> {/* a tuna si definujeme ten trojuholnik a posuvame to
                                čiže ten prop oneSong posielame state to audioCard a vutri tej vlasntosti je pesnička*/}
                                <button className="delete-button" onClick={() => dispatch({ type: "REMOVE_AUDIO_FROM_ALBUMS", value: deleteProp })} >Delete</button>

                            </div>
                        </div>




                    )
                })}

                <div>





                </div>





            </div>
        </div>











    )
}


// okej uloha pre mna je že mam to rozdelene na audiolist.js a AudioCard.js a uloha je zobraziť audioCard.js 
// ten audioList bude zodpovedny za cely list
// a ten audioCard bude zodpovedny za jednu pesničku.
// možem isť podľa toho ako je Albums a AlbumCard :).
// prečitať dokumentaciu o provideri :). 
// 


export default audioList