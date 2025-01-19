"use client";
import React from "react";
import DataContext from "./DataContext"
import { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
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
                        marginTop: "2rem"

                    },
                },

            },
        }

    });



    return (
        <div>



            <ThemeProvider theme={theme}>
                <Stack spacing={2}
                    direction="row"

                >

                    <Autocomplete


                        id="free-solo-demo"
                        freeSolo
                        options={state.audios.map((option) => option.title)}


                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search for audio"
                                onClick={() => {
                                    dispatch({
                                        type: "GET_SONGS",
                                        value: state.audios


                                    });
                                }}
                            />
                        )}
                    ></Autocomplete>


                </Stack>
            </ThemeProvider>

        </div >

    )


}


export default searchBar;