"use client";
import './audioCard.css';
import { useState, useEffect, useReducer, useContext } from "react";
import DataContext from "./DataContext"




const AudioCard = (props) => {
    const { oneSong, AddProp, } = props;
    // tuna si definujeme čo je to za prop či je to trojuholnik
    const [state, dispatch] = useContext(DataContext)
    return (

        <div className='buttons' >
            <div>
                <p>{oneSong.title}</p>
            </div>
            <button className="delete-button" onClick={() => dispatch({ type: "REMOVE_AUDIO_FROM_ALBUMS", value: DeleteProp, })} ><img className="" src="images/delete.png" height="20" width="20"></img></button>
            <button className="duplicate-btn" onClick={() => dispatch({
                type: "ADD_AUDIO_TO_SELECTED_ALBUM", value: AddProp,
            })}><img className="" src="images/duplicate.png" height="20" width="20"></img></button>




            <button onClick={() => dispatch({ type: "OPEN_MODALS", value2: oneSong })} className="OPEN">OPEN</button>

        </div >
    );

}

export default AudioCard;
