"use client";
import './audioCard.css';


const AudioCard = (props) => {
    const { oneSong, dispatch, DeleteProp, AddProp } = props; // tuna si definujeme čo je to za prop či je to trojuholnik
    return (
        <div className='buttons'>
            <div>
                <p>{oneSong.title}</p>


            </div>


            <button className="delete-button" onClick={() => dispatch({ type: "REMOVE_AUDIO_FROM_ALBUMS", value: DeleteProp, })} >Delete</button>
            <button className="duplicate-btn" onClick={() => dispatch({
                type: "ADD_AUDIO_TO_SELECTED_ALBUM", value: AddProp,





            })}>Duplicate-audio</button>




            <button className="duplicate-btn" onClick={() => dispatch({
                type: "ADD_SONG_TO_ALBUM", value:
                    "Album One",
                value1: AddProp

            })}>ADD_SONG_TO_ALBUM</button>









            <button className="duplicate-btn" onClick={() => dispatch({
                type: "UPDATE_FILTERED_ALBUMS", value2: AddProp







            })}>UPDATE_ALBUM</button>
        </div>


    );
};

// domáca uloha snažiť sa zvizualizovať tu stránku v css aby to bolo ako vo figme 

export default AudioCard;
