"use client";
import React from "react";
import DataContext from "./DataContext"
import { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const searchBar = () => {

    const [state, dispatch] = useContext(DataContext)
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

                    }
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
                        src="images/Spotify_logo.png"
                        height="45"
                        width="45"
                        className="spotify-logo"
                    />
                    <SvgIcon style={{ marginTop: "0.2rem", display: "flex", flexWrap: "wrap" }}>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SvgIcon>
                    <Autocomplete
                        style={{ display: "flex", flexWrap: "wrap" }}
                        id="free-solo-demo"
                        freeSolo
                        options={state.audios.map((option) => option.title)}
                        renderInput={(params) => ( // ked sa zavola render input funkcia tak sa pridá parameter
                            <TextField
                                {...params}
                                label="Search for audio"
                            />
                        )}
                    />
                    <Button variant="contained" className="btn" type="text">Explore premium</Button>
                    <Button className="btn" type="text">Install app</Button>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                </Stack>
            </ThemeProvider>

        </div>
    );
}




export default searchBar;