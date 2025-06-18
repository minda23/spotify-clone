"use client";
import React from "react";
import { useState, useEffect, useReducer } from "react";
import "./App.css";
import AlbumCard from "./AlbumCard";
import AudioList from "./audioList";
import DataContext from "./DataContext";
import AddToAlbumModal from "./AddToAlbumModal";
import SearchBar from "./searchBar";
import SvgIcon from '@mui/material/SvgIcon';
import SortingData from "./sortingData";
import Home from "./Home";
import Dialog from "@mui/material/Dialog";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const initialState = {
    albums: [],
    audios: [],
    selectedAlbum: null,
    selectedAudio: null,
    isModalOpen: false,
    modalSong: null,
};

export const isAlbumDuplicate = (state, name) => {
    const firstAlbum = state.albums.find((album) =>
        album.title === name ? true : false
    );

    if (firstAlbum === undefined) {
        return false;
    } else {
        return true;
    }

};

export const AddSongToAlbum = (albums, dispatchedAction) => {
    const newAudio1 = dispatchedAction.value1;
    const OneAlbumList = albums.filter((album) =>
        album.id === dispatchedAction.value ? true : false
    );
    const OneAlbum = OneAlbumList[0];
    if (OneAlbum === undefined) {
        return albums
    } else {



        const One_Album_With_New_Audio = {
            ...OneAlbum,
            audio: [...OneAlbum.audio, newAudio1],
        };

        const albums1 = albums.map((album) =>
            album.id === dispatchedAction.value ? One_Album_With_New_Audio : album
        );
        return albums1
    }
}

export const AddSongToSelectedAlbum = (newState) => {
    const selectedAlbum = newState
    return selectedAlbum
}

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    paddingTop: "1rem",
                }
            }
        }
    }
});

const myReducer = (state, dispatchedAction) => {
    switch (dispatchedAction.type) {
        case "UPDATE_ALBUMS":
            return {
                ...state,
                albums: [...dispatchedAction.value],
            };
        case "ADD_ALBUM":
            return {
                ...state,
                albums: [...state.albums, dispatchedAction.value],
            };
        case "SELECT_ALBUM":
            console.log(state.selectedAlbum);
            return {
                ...state,
                selectedAlbum: dispatchedAction.value,
                selectedAudio: null,
                selectedAudio: dispatchedAction.value,

            };
        case "REMOVE_AUDIO_FROM_ALBUMS":
            return {
                ...state,
            };
        case "ADD_AUDIO_TO_SELECTED_ALBUM":
            const newAudio = dispatchedAction.value;
            const newState = {
                ...state,
                selectedAlbum: {
                    ...state.selectedAlbum,
                    audio: [...state.selectedAlbum.audio, newAudio],
                },
            };

            return newState;

        case "ADD_SONG_TO_ALBUM":
            const album1 = AddSongToAlbum(state.albums, dispatchedAction)
            return {
                ...state,
                albums: album1

            }

        case "UPDATE_FILTERED_ALBUMS":
            return {
                ...state,
                albums: dispatchedAction.value,
            };

        case "OPEN_MODALS":
            const newAudio2 = dispatchedAction.value2;
            return {
                ...state,
                isModalOpen: true,
                modalSong: newAudio2,
            };

        case "CLOSE_MODAL":
            return {
                ...state,
                isModalOpen: false,
                modalSong: null,
            };

        case "GET_SONGS":
            return {
                ...state,
                audios: dispatchedAction.value,
            };

        case "SELECT_SONG":
            return {
                ...state,
                selectedAudio: dispatchedAction.value,
                selectedAlbum: null,
            };

        case "SORT_DATA":
            return {
                ...state,
                albums: dispatchedAction.value,


            }

        case "CLEAR_ALBUM_AND_SONG":
            return {
                ...state,
                selectedAlbum: null,
                selectedAudio: null
            }

        case "OPEN_MODAL_PREMIUM":
            return {
                ...state,
                isModalOpen: true,
            };

        case "CLOSE_MODAL_PREMIUM":
            return {
                ...state,
                isModalOpen: false,
                modalSong: null,
            };
    }
};
const Albums = (props) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState();
    const [open, setOpen] = useState(false);
    const [openSnack, setOpensnack] = useState(false);
    const [error, setError] = useState("");
    const [state, dispatch] = useReducer(myReducer, initialState);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value) => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpensnack(true);
    };

    const handleCloseSnack = (reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpensnack(false);
    };

    useEffect(() => {
        fetch("http://localhost:8080/albums")
            .then(
                (
                    response
                ) => response.json()
            )
            .then((data) => dispatch({ type: "UPDATE_ALBUMS", value: data }));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/audios")
            .then(
                (
                    response
                ) => response.json()
            )
            .then((data) => dispatch({ type: "GET_SONGS", value: data }));
    }, []);


    const createAlbum = () => {
        if (isAlbumDuplicate(state, name) === true) {
            setError(`Album "${name}" already exists!`);
            handleClick();
            return;
        }

        const formData = new FormData();
        formData.append('title', name);
        formData.append('artist', "Lucas");
        formData.append('image', image);
        formData.append('fileName', image.name);

        fetch("http://localhost:8080/albums-v2", {
            method: "POST",
            body: formData
        })
            .then((response) => {
                if (response.ok === false) {
                    return Promise.reject(response);
                }
                return response.json();
            })
            .then((album) => dispatch({ type: "ADD_ALBUM", value: album }))
            .catch((error) => {
                error.text().then((resolvedError) => setError(resolvedError));
            });
    };

    let audioListTitle = "";
    let audioListArtist = "";
    let audioListAudios = null;
    let audioListImage = "";

    if (state.selectedAlbum !== null) {
        audioListTitle = state.selectedAlbum.title;
        audioListArtist = state.selectedAlbum.artist;
        audioListAudios = state.selectedAlbum.album;
        audioListImage = state.selectedAlbum.url;

    }

    if (state.selectedAudio !== null) {
        audioListTitle = state.selectedAudio.title;
        audioListArtist = state.selectedAudio.artist;
        audioListAudios = state.selectedAudio.audio;


    }
    return (
        <ThemeProvider theme={theme}>
            <DataContext.Provider value={[state, dispatch]}>

                {state.isModalOpen === true ? <AddToAlbumModal /> : null}



                <SearchBar />

                <div className="wrapper-main">

                    <div className="Albums-wrapper">
                        {" "}
                        <SortingData />
                        {/* čiže toto je koren komponentu album.js nemože to byť hned javascript */}
                        {!!state.albums &&
                            state.albums.map((album) => (
                                <div className="albums">
                                    <AlbumCard
                                        AlbumProp={album}
                                        dispatch={dispatch}
                                        image_height="50"
                                        image_width="50"
                                    />
                                </div>
                            ))}
                        <div>
                            <Button
                                style={{ marginTop: "1rem" }}
                                variant="outlined"
                                onClick={handleClickOpen}>
                                createAlbum
                            </Button>
                        </div>
                        <div>
                            <Dialog
                                style={{}}
                                onClose={handleClose}
                                open={open}
                                sameAlbum={openSnack}>
                                <DialogTitle>Create Album</DialogTitle>
                                <DialogContent>
                                    <TextField
                                        id="filled-basic"
                                        label="Album Name"
                                        variant="filled"
                                        type="text"
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Album Image"
                                        variant="filled"
                                        type="file"
                                        onChange={(event) => setImage(event.target.files[0])}
                                    />
                                </DialogContent>

                                <DialogActions>
                                    <Button className="btn" type="text" onClick={handleClose}>
                                        close
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className="btn"
                                        type="text"
                                        onClick={createAlbum}>
                                        add
                                    </Button>

                                </DialogActions>
                            </Dialog>

                            <Snackbar
                                open={openSnack}
                                autoHideDuration={6000}
                                onClose={handleCloseSnack}
                                message={error}
                                color="error"
                            />
                        </div>
                    </div>
                    {state.selectedAlbum === null && state.selectedAudio === null ? <Home /> : <div className="Audio-wrapper"><AudioList
                        title={audioListTitle}
                        artist={audioListArtist}
                        songs={audioListAudios}
                        url={audioListImage}



                    /></div>}
                </div>
            </DataContext.Provider >
        </ThemeProvider>
    );
};

export default Albums;
