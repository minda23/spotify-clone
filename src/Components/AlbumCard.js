"use client";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import './AlbumCard.css';

const AlbumCard = (props) => {
    const { Image_path, image_height, image_width, AlbumProp, dispatch } = props;
    return (
        <div className="background">
            <div className="wrapper">
                <div className="Image">
                    <img src={Image_path} height={image_height} width={image_width}></img>
                </div>
                <div className="Information">
                    <div className="Information-title">{AlbumProp.title}</div>
                    <div>{AlbumProp.id}</div>
                    <div className="playlist-songs">{!!AlbumProp.audio && AlbumProp.audio.length}</div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="contained" onClick={() => dispatch({ type: "SELECT_ALBUM", value: AlbumProp })}>Select</Button>
            </div>
        </div>
    );
}

export default AlbumCard;
