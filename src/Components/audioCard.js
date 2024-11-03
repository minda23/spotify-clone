"use client";
import './audioCard.css';


const AudioCard = (props) => {
    const { oneSong } = props; // tuna si definujeme čo je to za prop či je to trojuholnik
    return (
        <div>

            <div>
                <p>{oneSong.title}</p>

            </div>
        </div>

    );
};

// domáca uloha snažiť sa zvizualizovať tu stránku v css aby to bolo ako vo figme 

export default AudioCard;
