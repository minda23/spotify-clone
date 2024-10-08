"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import AlbumCard from "./AlbumCard";


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
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error creating album:', error));
    };



    return (
        <div> {/* čiže toto je koren komponentu album.js nemože to byť hned javascript */}
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
