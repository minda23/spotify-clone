"use client";
import React from "react";
import { useState, useEffect, useReducer, useContext } from "react";
import AlbumCard from "./AlbumCard";
import './Albums.css';
import AudioList from "./audioList";

// use context rodič hľada a ide hore a hľada deti najbližšieho providera v strome a ten vypiše alebo urobi s tym niečo
/*const AudioContext = React.createContext()*/


// uloha bude najprv mať reducer action ADD_SONG_TO_SELECTED_ALBUM
// tato akcia prida do aktualneho albumu novu pesničku do jeho audios.
// budem musieť použivať spread operator aj na list aj na objekt.
// prepisovať selected album

// ked bude priliš tažke spraviť prvu action 
// tak namiesto toho možem pridať gombik s nazvom duplikuj do každej pesničky.
// ten gombik ma spusťať potom tu action ADD_SONG_TO_SELECTED_ALBUM.


// druha reducer action bude ADD_SONG_TO_ALBUM 
// bude prepisovať albums a budem tam mať v dispatched action bude album id aj song objekt
// cieľ bude sa snažiť pridať ten objekt do spravneho albumu.
// budem potrebovať aj funkciu filter


// toto budem v buducnosti robiť
// čiže budeme mať nejaky gombik na pesničke add_to_album 


/*const AudioContext = React.createContext();
*/
const initialState = {

    albums: [],
    audioID: '',
    selectedAlbum: null, // ked pridáme nejaky novy album vymažeme vybraty album



}





const myReducer = (state, dispatchedAction) => {
    switch (dispatchedAction.type) {
        case "UPDATE_ALBUMS":
            return {
                ...state,
                albums: [...dispatchedAction.value]
            }
        case "ADD_ALBUM":
            return {
                ...state,
                albums: [...state.albums, dispatchedAction.value]

            }

        case "SELECT_ALBUM":
            console.log("ahoj")
            return {
                ...state,
                selectedAlbum: dispatchedAction.value
            }

        case "REMOVE_AUDIO_FROM_ALBUMS":
            console.log(dispatchedAction.value.id) /
                console.log(state.selectedAlbum.title) // toto som spravil sam , tuna som prišiel na to tak že vykonzolujeme ten selectovany album prave v tej akcii
            // a vypiše sa mi album
            // toto som spravil sam , prišiel som nato tak že ked kliknem na delete v debuggeri 
            // button tak sa mi zobrazi prave to id v debuggeri pod dispatchedAction správne no a potom som kukal že skusim vykonzolvať len ten dispatchAction
            // a už to fungovalo a vypisalo mi do konzoly to id pesničky pri ktorej je delete.

            return {

                ...state,

                //albums: state.selectedAlbum.audio.filter((audios => audios.id !== dispatchedAction.value.id)),


                // to audios je len parameter lubovoľny nazov pre anonymnu funkciu vo funkcii filter




            }

        case "ADD_AUDIO_TO_SELECTED_ALBUM":
            const newAudio = dispatchedAction.value;
            console.log(...state.albums)


            return {
                //    const person = {firstName: "John", lastName: "Doe",};


                ...state,
                // vytvárame tu novy objekt od riadku 95 do 107  a ten objekt ma pole 
                // selectedAlbum ktory spreadujeme 
                selectedAlbum: { ...state.selectedAlbum, audio: [...state.selectedAlbum.audio, newAudio], },











            }

        case "ADD_SONG_TO_ALBUM":
            const newAudio1 = dispatchedAction.value1;


            //const count = 2 * 3
            //const count1 = count + 5;

            const pole = [1, 2, 3]

            const ahoj = pole[0]

            // čiže chcem najprv vyfiltrovať album ktory ma identicke meno ako dispatchedAction.value 
            const OneAlbumList = state.albums.filter((album) => album.title === dispatchedAction.value ? true : false)
            const OneAlbum = OneAlbumList[0] // tuna pridavame ten fifiltrovany album do premmenej 

            // potom uložiť  newAudio1 do toho OneAlbum

            const One_Album_With_New_Audio = {

                ...OneAlbum,    // vyberame všetky predošle hodnoty
                audio: [...OneAlbum.audio, newAudio1]





                // spread operator može spreadovať len objekty alebo listy lebo sa daju rozdeliť na menšie časti
                // idčko alebo string alebo čislo sa neda spreadovať.
                // najprv robime tu bodku vyberame .title[0] = AlbumOne,
                // 
            }
            // a potom chcem znovu uložiť ten filtrovany album do listu albumov


            const albums1 = state.albums.map((album) => album.title === dispatchedAction.value ? One_Album_With_New_Audio : album)



            //const pole2 = [5,6,7]

            //const pole3 = pole2.map((nasobenie) => nasobenie === 5 ? nasobenie * 2 : nasobenie / 2 ) // 


            // tuna prepisujeme tie albums s albumami a s tym jednym albumom s aktualizovanou hodnotou
            return {

                ...state,


                albums: albums1





                // 2 * 3 + 5 


            }









        case "UPDATE_FILTERED_ALBUMS":


            return {

                ...state,
                albums: dispatchedAction.value


            }




    }
    //

    // Takže v tom reducery musite rozdeliť čo chcete spraviť na 3 časti: 
    //vyfiltrovať ten album ktorý chcete, pridať doňho pesničku,
    //a uložiť ho potom naspäť do albums.

    //"Uložiť album do albumov znamená nahradiť pôvodný album v zozname albums jeho upravenou verziou, ktorá už obsahuje pridanú pesničku."
    // Kľudne to môžete urobiť aj na osobit riadkoch alebo v osobitných premennach.
    //Potom, v tom buttone chcete posielať aj pesničku aj meno do ktorého albumu ju chcete dať. Aktuálne posielate len meno.










    // Výsledkom akcie bude aktualizovaný stav, ktorý bude obsahovať:

    // Pôvodný zoznam albumov (so všetkými ich skladbami).
    // Aktualizovaný album, do ktorého sa pridá zvolená skladba (audio).



    // čo chcem posunuť ako parameter toho action budu dve parametre title - meno albumu
    // a druhy parameter bude cely objekt z listu audio
    // a konkretne podľa toho určime že ked klikneme na gombik duplicate , tak sa spusti action z touto pesničkou
    // ten parameter toho albumu bude AlbumOne. čiže zatiaľ do toho isteho.
    // dnu v reduceri bude viac krokov , prvy bude vyfiltrovať album z listu albumov podľa mena ktory dostanem z tej action čiže
    //AlbumOne
    //budeme mať tam podmienkovu funkciu
    // druhy krok bude pridať tu pesničku do toho albumu , ktory som vyfiltroval
    // returnovany objekt bude mať predošli state a novy updatovany list albumov.

    // bonus uloha na pomoc že si pridam duplikovany album s tou pesničkou keby niečo. 








    // teraz to pridavame do albumu ale nie do audia.
    // musim sa nejak dostať do audia






    // uloha bude najprv mať reducer action ADD_AUDIO_TO_SELECTED_ALBUM
    // tato akcia prida do aktualneho albumu novu pesničku do jeho audios.
    // budem musieť použivať spread operator aj na list aj na objekt.
    // prepisovať selected album

    //Dobré ráno, rozdiel medzi prvú a druhou úlohou mal byť len že
    // prvá úloha pridá pesničku do toho istého / aktuálne vybratého albumu, 
    //a druhá úloha ju umožní pridať do hocijakého albumu. 
    //Tie samotné gombíky sú ako keby časť úlohy 
    //1.5 ktorý bol dizajnovaný na to pomôcť splniť úlohu 1. keď si s ňou nebudte isty.

















}




const Albums = (props) => {
    const { } = props;

    const [name, setName] = useState("");

    const [state, dispatch] = useReducer(myReducer, initialState);


    // uloha bude : 
    // toto je novy url :  /albums/add-audio
    // cez tento url ako pridavame na front end audio do toho albumu 
    // tak to iste chceme poslať tomu backendu
    // čiže pošleme len to ID


    // naštudovať si ako funguje Get Post A ako sa tam menia parametre body 




    useEffect(() => {
        fetch("http://localhost:8080/albums").then((response) => // dostavame list albumov ten prvy fetch
            response.json()).then((data) => dispatch({ type: "UPDATE_ALBUMS", value: data })) // dispatch musi tam pridať informaciu lebo priamo spušta akciu
        //Tuna musime o tieto data žiadať lebo použivame vlastne cyklus Map,  čiže to dáva správnu logiku.

    },);


    // Function to create a new album
    const createAlbum = () => {
        fetch("http://localhost:8080/albums", { // cez tento fetch dostavame novy album
            method: "POST",
            body: JSON.stringify({
                title: name,
                artist: "Lucas",
            }),



        })






            //   const request = (album) => setData([...data, album]);
            .then((response) => response.json())
            .then((album) => dispatch({ type: "ADD_ALBUM", value: album }))
            .catch((error) => console.error('Error creating album:', error));




    };

















    return (


        <div className="wrapper-main">
            <div className="Albums-wrapper"> {/* čiže toto je koren komponentu album.js nemože to byť hned javascript */}



                {!!state.albums && state.albums.map((album) => (

                    <div className="albums">


                        <AlbumCard AlbumProp={album} dispatch={dispatch} Image_path="images/images.jfif" image_height="50" image_width="50" />





                    </div>





                ))}

                {/*Toto je koniec korena komponentu */}
                <div>
                    <input type="text" onChange={event => setName(event.target.value)}></input>
                    <button className="btn" type="text" onClick={createAlbum}>ADD</button>

                </div>






                <div className="songs">


                    <AudioList state={state} dispatch={dispatch} />

                    {/* ? ten state je priamo z toho reducera to čo posuvame z albums do audioCard 
                 čiže ten state je vlastnosť toho audiolistu ako napriklad že je okurhly no a potom musime zadefinovať
                 že chceme poslať z Album.js do audioListu a to je ten state ,ktory máme v reduceri a potom aj v cykle map*/}


                </div>



            </div>

        </div>





    );

};

export default Albums;

/*
?  const request = (album) => setData([...data, album]),
namiesto toho aby mutatoval 

* ak niaka funkcia meni svoje paramatre tak mutatuje
* const addToList = (myList) => {
    * myList.append(2)
   * }
   * 
   * // dont mutate
   * cosnt addToListWithoutMutation = (myList) => {
   * ... bodky su spread operator
   *  return [..myList, 2];
   * const myList2 = addToListWithouMutation(myList)
   * 
   * }
   * 
   * 
   * 
   &  const listOfNumbers = [0,1,6];
   &  const listOfNumbers2 = [...listOfNumbers];
   

*/