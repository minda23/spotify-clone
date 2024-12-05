"use client";
import './audioCard.css';
import { useState, useEffect, useReducer, useContext } from "react";
import DataContext from "./DataContext"


const AudioCard = (props) => {
    const { oneSong, DeleteProp, AddProp } = props; // tuna si definujeme čo je to za prop či je to trojuholnik


    const [state, dispatch] = useContext(DataContext)




    const addAudio = () => {
        fetch("http://localhost:8080/albums/add-audio", { // cez tento fetch pridavame audio toto je post request
            method: "POST",
            body: JSON.stringify({
                "albumid": 8,
                "audioid": oneSong.id
            }),



        })






            //   const request = (album) => setData([...data, album]);
            .then((response) => response.json())
            .then((audio) => dispatch({ type: "ADD_SONG_TO_ALBUM", value: audio }))
            .catch((error) => console.error('Error adding audio:', error));




    };


    return (
        <div className='buttons'>
            <div>
                <p>{oneSong.title}</p>


            </div>


            <button className="delete-button" onClick={() => dispatch({ type: "REMOVE_AUDIO_FROM_ALBUMS", value: DeleteProp, })} >Delete</button>
            <button className="duplicate-btn" onClick={() => dispatch({
                type: "ADD_AUDIO_TO_SELECTED_ALBUM", value: AddProp,





            })}>Duplicate-audio</button>




            <button className="duplicate-btn" onClick={() => {
                addAudio();
                //  dispatch({ type: "ADD_SONG_TO_ALBUM", value: "Album One" });
            }}>ADD_SONG_TO_ALBUM</button>









            <button className="duplicate-btn" onClick={() => dispatch({
                type: "UPDATE_FILTERED_ALBUMS", value2: AddProp







            })}>UPDATE_ALBUM</button>

            <div>


                <select name="pets" id="pet-select">
                    <option value="">--Please choose an option--</option>

                </select>
            </div>


        </div>


    );
};






// Function to create a new album


// domáca uloha snažiť sa zvizualizovať tu stránku v css aby to bolo ako vo figme 

export default AudioCard;
