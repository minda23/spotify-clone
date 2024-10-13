"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import AlbumCard from "./AlbumCard";
import './Albums.css';

// za domacu sa naučiť useReducer


const Albums = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");


    useEffect(() => {
        fetch("http://localhost:8080/albums").then((response) => response.json()).then((data) => setData(data))
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
            .then((album) => setData([...data, album]))
            .catch((error) => console.error('Error creating album:', error));
    };



    return (
        <div className="Albums-wrapper"> {/* čiže toto je koren komponentu album.js nemože to byť hned javascript */}
            {!!data && data.map((album) => (
                <div>

                    <AlbumCard AlbumProp={album} Image_path="images/images.jfif" image_height="50" image_width="50" />





                </div>

            ))}
            {/*Toto je koniec korena komponentu */}
            <div>
                <input type="text" onChange={event => setName(event.target.value)}></input>
                <button type="text" onClick={createAlbum}>submit</button>

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