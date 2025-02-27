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
    // parametre su ako správy, // state je správa ktora je na riadku 27 a
    //  posielame tej funkcii správu a ta funkcia ten state správu potom može použivať ako chce
    let AlbumsSortedAlphabetically = [...albums]
    AlbumsSortedAlphabetically.sort((a, b) => a.title.localeCompare(b.title))
    // let AlbumsSortedReversed = [...state.albums]
    //AlbumsSortedReversed.reverse()

    return AlbumsSortedAlphabetically



}

export const sortAlbumsReverse = (albums) => { // parameter sa posiela do funkcie najprv 
    // a return nam vracia tam kde to volame , čiže na riadku 41

    let AlbumsSortedReversed = [...albums]
    AlbumsSortedReversed.reverse()

    return AlbumsSortedReversed
}


const sortingData = () => { // stale ked sa refreshne komponent tak sa vola len kod vo vnutri komponentu
    const [state, dispatch] = useContext(DataContext);
    const AlbumSorting = sortAlbumsAlphabetically(state.albums);// cely kod 
    // sortAlbumAlphabeticaly sa spusti až ked sa zavola funkcia() keby som to return vymazal tak aj ked zavolame funkciu tak 
    // vysledok by bol undefined.
    const AlbumReversed = sortAlbumsReverse(state.albums);
    // dávame ho sem a nie mimo lebo chceme aby sa spuštal viackrat a nie len raz 
    // ked ho dame mimo koponent tak to nebude fungovať ako chceme.

    const theme = createTheme({
        components: {
            MuiFormControl: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#1976D2",
                        width: "10rem",
                        position: "absolute",
                        left: "45rem",
                        top: "0rem",


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