"use client";
import React from "react";
import { useState, useEffect, useReducer, useContext } from "react";
import AlbumCard from "./AlbumCard";
import './Albums.css';
import AudioList from "./audioList";

// use context rodič hľada a ide hore a hľada deti najbližšieho providera v strome a ten vypiše alebo urobi s tym niečo
/*const AudioContext = React.createContext()*/



/*const AudioContext = React.createContext();
*/
const initialState = {

    albums: [],
    selectedAlbum: null, // ked pridáme nejaky novy album vymažeme vybraty album

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
            return {
                ...state,
                selectedAlbum: dispatchedAction.value
            }

        case "REMOVE_AUDIO_FROM_ALBUMS":


            if (state === audio.id) {

                return state === dispatchedAction.id
            }





            const Albums = (props) => {

                const [name, setName] = useState("");

                const [state, dispatch] = useReducer(myReducer, initialState);






                useEffect(() => {
                    fetch("http://localhost:8080/albums").then((response) =>
                        response.json()).then((data) => dispatch({ type: "UPDATE_ALBUMS", value: data })) // dispatch musi tam pridať informaciu lebo priamo spušta akciu
                    //Tuna musime o tieto data žiadať lebo použivame vlastne cyklus Map,  čiže to dáva správnu logiku.

                },);
                // Function to create a new album
                const createAlbum = () => {
                    fetch("http://localhost:8080/albums", {
                        method: "POST",
                        body: JSON.stringify({
                            title: name,
                            artist: "Lucas",
                        }),

                    })






                        //   const request = (album) => setData([...data, album]);
                        .then((response) => response.json())
                        .then((album) => dispatch({ type: "ADD_ALBUM", value: album }))
                        .catch((error) => console.error('Error creating album:', error));




                };




                return (


                    <div className="Albums-wrapper"> {/* čiže toto je koren komponentu album.js nemože to byť hned javascript */}



                        {!!state.albums && state.albums.map((album) => (

                            <div className="albums">


                                <AlbumCard AlbumProp={album} dispatch={dispatch} Image_path="images/images.jfif" image_height="50" image_width="50" />





                            </div>





                        ))}

                        {/*Toto je koniec korena komponentu */}
                        <div>
                            <input type="text" onChange={event => setName(event.target.value)}></input>
                            <button className="btn" type="text" onClick={createAlbum}>Delete</button>

                        </div>

                        <div className="songs">


                            <AudioList state={state} dispatch={dispatch} deleteProp={state} />

                            {/* ? ten state je priamo z toho reducera to čo posuvame z albums do audioCard 
                 čiže ten state je vlastnosť toho audiolistu ako napriklad že je okurhly no a potom musime zadefinovať
                 že chceme poslať z Album.js do audioListu a to je ten state ,ktory máme v reduceri a potom aj v cykle map*/}


                        </div>



                    </div>





                );

            };

            export default Albums;

/*
?  const request = (album) => setData([...data, album]),
namiesto toho aby mutatoval 

* ak niaka funkcia meni svoje paramatre tak mutatuje
* const addToList = (myList) => {
    * myList.append(2)
   * }
   * 
   * // dont mutate
   * cosnt addToListWithoutMutation = (myList) => {
   * ... bodky su spread operator
   *  return [..myList, 2];
   * const myList2 = addToListWithouMutation(myList)
   * 
   * }
   * 
   * 
   * 
   &  const listOfNumbers = [0,1,6];
   &  const listOfNumbers2 = [...listOfNumbers];
   

*/