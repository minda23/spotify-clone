"use client";
import './audioCard.css';


const AudioCard = (props) => {
    const { oneSong, dispatch, DeleteProp, } = props; // tuna si definujeme čo je to za prop či je to trojuholnik
    return (
        <div>
            <div>
                <p>{oneSong.title}</p>


            </div>
            <button className="delete-button" onClick={() => dispatch({ type: "REMOVE_AUDIO_FROM_ALBUMS", value: DeleteProp, })} >Delete</button>
        </div>
    );
};

// domáca uloha snažiť sa zvizualizovať tu stránku v css aby to bolo ako vo figme 

export default AudioCard;
