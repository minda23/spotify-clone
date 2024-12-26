"use client";
import React from "react";
import { useState, useEffect, useReducer, } from "react";
import AlbumCard from "./AlbumCard";
import './Albums.css';
import AudioList from "./audioList";
import DataContext from "./DataContext"
import AddToAlbumModal from "./AddToAlbumModal";

// ked mam nejaky bug najdôležitejšie je pochopiť prečo je ten error na ktorom bode,tlačidku alebo na čom to vyskoči a kde
// presne sa nachádza a tak skôr vedieť ako to vyriešiť.


const initialState = {

    albums: [],
    selectedAlbum: null,
    isModalOpen: false, // toto je boolean
    modalSong: null, // ak incializujeme zakladny state kde je datova typ objekt davame null(prazdny objekt)

}



const myReducer = (state, dispatchedAction) => {
    switch (dispatchedAction.type) {
        case "UPDATE_ALBUMS":
            return {
                ...state,
                albums: [...dispatchedAction.value]
            }
        case "ADD_ALBUM":
            return {
                ...state,
                albums: [...state.albums, dispatchedAction.value]
            }
        case "SELECT_ALBUM":
            console.log("ahoj")
            return {
                ...state,
                selectedAlbum: dispatchedAction.value
            }
        case "REMOVE_AUDIO_FROM_ALBUMS":
            console.log(dispatchedAction.value.id) /
                console.log(state.selectedAlbum.title)
            return {
                ...state,
            }
        case "ADD_AUDIO_TO_SELECTED_ALBUM":
            const newAudio = dispatchedAction.value;
            console.log(...state.albums)
            return {
                ...state,
                selectedAlbum: { ...state.selectedAlbum, audio: [...state.selectedAlbum.audio, newAudio], },
            }
        case "ADD_SONG_TO_ALBUM":
            const newAudio1 = dispatchedAction.value1;
            const OneAlbumList = state.albums.filter((album) => album.id === dispatchedAction.value ? true : false)
            const OneAlbum = OneAlbumList[0] // tuna pridavame ten fifiltrovany album do premmenej 
            // potom uložiť  newAudio1 do toho OneAlbum
            const One_Album_With_New_Audio = {
                ...OneAlbum,    // vyberame všetky predošle hodnoty
                audio: [...OneAlbum.audio, newAudio1]
            }
            const albums1 = state.albums.map((album) => album.id === dispatchedAction.value ? One_Album_With_New_Audio : album)
            return {
                ...state,
                albums: albums1
            }
        case "UPDATE_FILTERED_ALBUMS":
            return {
                ...state,
                albums: dispatchedAction.value
            }

        case "OPEN_MODALS":
            const newAudio2 = dispatchedAction.value2;
            return {
                ...state,
                isModalOpen: true,
                modalSong: newAudio2
            }

        case "CLOSE_MODAL":

            return {
                ...state,
                isModalOpen: false,
                modalSong: null
            }


    }
}
const Albums = (props) => {

    const [name, setName] = useState("");
    const [state, dispatch] = useReducer(myReducer, initialState);

    useEffect(() => {
        fetch("http://localhost:8080/albums").then((response) => // dostavame list albumov ten prvy fetch
            response.json()).then((data) => dispatch({ type: "UPDATE_ALBUMS", value: data })) // dispatch musi tam pridať informaciu lebo priamo spušta akciu
        //Tuna musime o tieto data žiadať lebo použivame vlastne cyklus Map,  čiže to dáva správnu logiku.

    }, []);// useEffect ked tam nedáme ten prazdny list tak sa to bude spuštať donekonečna.

    const createAlbum = () => {
        fetch("http://localhost:8080/albums", { // cez tento fetch dostavame novy album
            method: "POST",
            body: JSON.stringify({
                title: name,
                artist: "Lucas",
            }),
        })
            .then((response) => response.json())
            .then((album) => dispatch({ type: "ADD_ALBUM", value: album }))
            .catch((error) => console.error('Error creating album:', error));
    };

    return (
        <DataContext.Provider value={[state, dispatch]} >
            {state.isModalOpen === true ? <AddToAlbumModal /> : null}

            <div className="wrapper-main">
                <div className="Albums-wrapper"> {/* čiže toto je koren komponentu album.js nemože to byť hned javascript */}
                    {!!state.albums && state.albums.map((album) => (
                        <div className="albums">
                            <AlbumCard AlbumProp={album} dispatch={dispatch} Image_path="images/images.jfif" image_height="50" image_width="50" />
                        </div>
                    ))}
                    <div>
                        <input type="text" onChange={event => setName(event.target.value)}></input>
                        <button className="btn" type="text" onClick={createAlbum}>ADD</button>
                    </div>
                    <div className="songs">
                        <AudioList state={state} dispatch={dispatch} />

                    </div>
                </div>
            </div>
        </DataContext.Provider>
    );

};

export default Albums;



