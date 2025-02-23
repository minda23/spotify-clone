"use client";
import './audioCard.css';
import { useState, useEffect, useReducer, useContext } from "react";
import Button from '@mui/material/Button';
import DataContext from "./DataContext"




const AudioCard = (props) => {
    const { oneSong, } = props;
    // tuna si definujeme čo je to za prop či je to trojuholnik
    const [state, dispatch] = useContext(DataContext)
    return (

        <div className='buttons' >
            <div>
                <p className='song-title'>{oneSong.title}</p>
            </div>
            <button className="delete-button" onClick={() => dispatch({ type: "REMOVE_AUDIO_FROM_ALBUMS", value: DeleteProp, })} ><img className="" src="images/delete.png" height="20" width="20"></img></button>
            <button className="duplicate-btn" onClick={() => {
                return dispatch({
                    type: "ADD_AUDIO_TO_SELECTED_ALBUM", value: oneSong
                });
            }}><img className="" src="images/duplicate.png" height="20" width="20"></img></button>




            <Button variant="contained" onClick={() => dispatch({ type: "OPEN_MODALS", value2: oneSong })} className="OPEN">OPEN</Button>


        </div >
    );

}

export default AudioCard;
