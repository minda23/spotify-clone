"use client";
import React from "react";
import "./AddToAlbumModal.css"
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useState, useContext } from "react";
import DataContext from "./DataContext";

const AddToAlbumModal = (props) => {
    const [error, setError] = useState("")
    const { oneSong } = props;
    const [state, dispatch] = useContext(DataContext)
    const [pickedAlbumId, setPickedAlbumId] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const addAudio = () => {
        if (pickedAlbumId == null) {
        }
        else {

            fetch("http://localhost:8080/albums/add-audio", {
                method: "POST",
                body: JSON.stringify({
                    "albumid": parseInt(pickedAlbumId),
                    "audioid": state.modalSong.id
                }),
            }).then((response) => {
                if (response.ok === false) {
                    return Promise.reject(response)
                }
                return response.json()
            })
                .then((audio) => {
                    dispatch({ type: "OPEN_MODALS", value: audio })
                })
                .catch((error) => {
                    error.text().then(resolvedError => setError(resolvedError))
                    handleClick()
                })
        }
    }
    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <div className="modal_items">
                    <div className="modal_title">
                        <h1>Modal title</h1>
                    </div>
                    <div>
                        <p style={{ color: "white" }}>{state.modalSong.title}</p>
                    </div>
                    <div className="buttons1">
                        <Button variant="contained" onClick={() => dispatch({ type: "CLOSE_MODAL" })} className="CLOSE">CLOSE</Button>
                        <Button variant="contained" onClick={() => {
                            addAudio();
                            dispatch({
                                type: "ADD_SONG_TO_ALBUM",
                                value: parseInt(pickedAlbumId),
                                value1: state.modalSong
                            })
                        }} className="ADD">ADD</Button>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message={error}
                            color="error"
                        />
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
        </div>
    )

}

export default AddToAlbumModal