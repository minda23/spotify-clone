"use client";
import React from "react";
import DataContext from "./DataContext"
import { useState, useContext } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';



export const sortAlbumsAlphabetically = (albums) => {
    let AlbumsSortedAlphabetically = [...albums]
    AlbumsSortedAlphabetically.sort((a, b) => a.title.localeCompare(b.title))
    return AlbumsSortedAlphabetically
}

export const sortAlbumsReverse = (albums) => {
    let AlbumsSortedReversed = [...albums]
    AlbumsSortedReversed.reverse()

    return AlbumsSortedReversed
}


const sortingData = () => {
    const [state, dispatch] = useContext(DataContext);
    const AlbumSorting = sortAlbumsAlphabetically(state.albums);
    const AlbumReversed = sortAlbumsReverse(state.albums);

    const theme = createTheme({
        components: {
            MuiFormControl: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#1976D2",
                        width: "10rem",
                    }
                },
            },
            MuiBox: {
                styleOverrides: {
                    root: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxHeight: "1rem",
                        marginTop: "2rem"
                    }
                },
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box >
                <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"

                    >
                        <MenuItem onClick={() => dispatch({ type: "SORT_DATA", value: AlbumSorting })} >Alphabetical</MenuItem>
                        <MenuItem onClick={() => dispatch({ type: "SORT_DATA", value: AlbumReversed })} >Recently Added</MenuItem>

                    </Select>
                </FormControl>
            </Box >
        </ThemeProvider>
    )
}


export default sortingData