"use client";
import React from "react";
import "./AddToAlbumModal.css"
import { useState, useEffect, useReducer, useContext } from "react";
import DataContext from "./DataContext"

const AddToAlbumModal = (props) => {
    const { oneSong } = props;

    const [state, dispatch] = useContext(DataContext)

    const [pickedAlbumId, setPickedAlbumId] = useState(null);



    const addAudio = () => {



        if (pickedAlbumId == null) {
            console.log("you have to choose some album")
        }

        else {
            fetch("http://localhost:8080/albums/add-audio", { // cez tento fetch pridavame audio toto je post request
                method: "POST",
                body: JSON.stringify({
                    "albumid": parseInt(pickedAlbumId),
                    "audioid": state.modalSong.id
                }),
            }).then((response) => response.json())
                .then((audio) => dispatch({ type: "OPEN_MODALS", value: audio }))
                .catch((error) => console.error('Error adding audio:', error));
        }
    }

    return (
        <div className="modal-overlay">


            <div className="modal-box">
                <div className="modal_title">
                    <h1>Select which album</h1>
                </div>
                <div>
                    <p>{state.modalSong.title}</p>
                </div>
                <div className="buttons">
                    <button onClick={() => dispatch({ type: "CLOSE_MODAL" })} className="CLOSE">CLOSE</button>
                    <button onClick={() => {
                        addAudio();
                        dispatch({
                            type: "ADD_SONG_TO_ALBUM",
                            value: parseInt(pickedAlbumId),
                            value1: state.modalSong
                        })
                    }} className="ADD">ADD</button>
                </div>

                <div className="select-box">
                    <select
                        onChange={(e) => {
                            setPickedAlbumId(e.target.value);
                        }}>
                        <option value="state.id" />
                        {state.albums.map((album) => <option key={album.id} value={album.id}>{album.title}</option>)}
                    </select>
                </div>
            </div>
        </div>
    )

}








export default AddToAlbumModal