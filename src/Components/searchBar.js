"use client";
import React from "react";
import DataContext from "./DataContext"
import { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#242424',
    color: '#F3F3F3',
    border: '2px solid #000',
    borderRadius: '0.5rem',
    boxShadow: 24,
    minHeight: '35vh',
    p: 4,
};
const searchBar = () => {
    const [state, dispatch] = useContext(DataContext)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function HomeIcon(props) {
        return (
            <SvgIcon onClick={() => dispatch({ type: "CLEAR_ALBUM_AND_SONG" })} {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }
    // dvojite a trojite rovna sa použiva v podmienke == maju slabšiu silu ako === 

    const [value, setValue] = useState("");
    const theme = createTheme({
        components: {
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#1DB954',
                        width: '15rem',

                    },

                }
            },
            MuiStack: {
                styleOverrides: {
                    root: {
                        width: "500",
                        justifyContent: "center",
                        alignContent: "center",
                        marginTop: "3.5rem",
                        marginleft: "-2rem",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1rem",

                    },


                },

            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        backgroundColor: "	#FFFFFF",
                        borderRadius: "2rem",
                        fontSize: "3rem",
                    },
                },
            },

            MuiAvatar: {
                styleOverrides: {
                    root: {
                        position: "relative",
                        top: "0.5rem"
                    }
                }
            },

            MuiTextField: {
                styleOverrides: {
                    root: {
                        fontSize: "1rem"
                    }
                }
            },

            MuiButton: {
                styleOverrides: {
                    root: {
                        marginTop: '1rem',
                        color: 'white'

                    }
                }
            }




        }

    });


    return (
        <div>
            <ThemeProvider theme={theme}>
                <Stack spacing={2} direction="row">
                    <img
                        style={{
                            position: "absolute",
                            left: "3rem",
                            top: "0.6rem",
                            display: "flex",
                            flexWrap: "1rem"
                        }}
                        src="images/spotify-logo.png"
                        height="65"
                        width="65"
                        className="spotify-logo"
                    />
                    <Autocomplete
                        style={{ display: "flex", flexWrap: "wrap", fontSize: "0.2rem" }}
                        id="free-solo-demo"
                        options={state.audios.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search for audio"
                            />
                        )}
                        onChange={(event, newValue) => {
                            const filteredAudios = state.audios.filter((audio) => audio.title === newValue)
                            if (filteredAudios.length === 0) {
                                return;
                            } else {
                                dispatch({ type: "SELECT_SONG", value: filteredAudios[0] })
                                setValue(newValue);
                            }
                        }}
                    />
                    <HomeIcon fontSize="large" />
                    <Button onClick={setOpen} variant="contained" className="btn" type="text">Explore premium</Button>
                    <Button className="btn" type="text">Install app</Button>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                </Stack>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography marginLeft="2rem" id="modal-modal-title" variant="h6" component="h2">
                            <img
                                style={{
                                    position: "absolute",
                                    top: "1.7rem",
                                    left: "1.2rem"
                                }}
                                src="images/spotify-logo.png"
                                height="45"
                                width="45"
                                className="spotify-logo"
                            />
                            Premium
                        </Typography>
                        <Typography color="#FFD2D7" id="modal-modal-description" variant="h4" sx={{ mt: 2 }}>
                            Individual
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
                        <Typography id="modal-modal-description" variant="p" sx={{ mt: 2 }}>
                            €6.49 / month
                        </Typography>
                        <Typography id="modal-modal-description" variant="ul" sx={{ mt: 2 }}>
                            1 Premium account
                            Cancel anytime
                        </Typography>
                        <Button padding='1.5rem' variant="contained">Get premium Individual</Button>
                        <Typography borderBottom="1px solid" width="fit-content" id="modal-modal-description" variant="p" sx={{
                            mt: 2,
                            display: "block",
                            mx: "auto",
                            textAlign: "center",
                        }}>
                            terms apply
                        </Typography>
                    </Box>
                </Modal>
            </ThemeProvider>
        </div>
    );
}




export default searchBar;