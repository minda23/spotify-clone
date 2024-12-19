"use client";
import './audioCard.css';
import { useState, useEffect, useReducer, useContext } from "react";
import DataContext from "./DataContext"


const AudioCard = (props) => {
    const { oneSong, DeleteProp, AddProp } = props; // tuna si definujeme čo je to za prop či je to trojuholnik


    const [state, dispatch] = useContext(DataContext)

    const [pickedAlbum, setPickedAlbum] = useState(null);



    const addAudio = () => {
        if (pickedAlbum == null) {
            console.log("you have to choose some album")
        }
        else {
            fetch("http://localhost:8080/albums/add-audio", { // cez tento fetch pridavame audio toto je post request
                method: "POST",
                body: JSON.stringify({
                    "albumid": pickedAlbum.id,
                    "audioid": oneSong.id
                }),



            })








                //   const request = (album) => setData([...data, album]);
                .then((response) => response.json())
                .then((audio) => dispatch({ type: "ADD_SONG_TO_ALBUM", value: audio }))
                .catch((error) => console.error('Error adding audio:', error));


        }

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




                <select
                    onChange={(e) => {
                        const filteredAlbums = state.albums.filter((album) => album.title === e.target.value)
                        setPickedAlbum(filteredAlbums[0]); // to znamená že je to prvy prvok z albumov , čiže ked sa zhoduje prave s tym čo sme klikli 
                        // potom tam možeme pridať cez funkciu add_audio piesen.


                    }

                    }>
                    <option value="state.id">

                    </option>

                    {state.albums.map((album) => <option key={album.title} value={album.title}>{album.title}</option>)


                    }


                </select>



            </div>


        </div >


    );
};






// Function to create a new album


// domáca uloha snažiť sa zvizualizovať tu stránku v css aby to bolo ako vo figme 

export default AudioCard;
