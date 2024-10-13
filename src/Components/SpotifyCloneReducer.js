const { useReducer } = require("react/cjs/react.production.min");

const [state, dispatch] = useReducer(myReducer, exampleState);// do reducera sa bude davať ako sa tie actions budu aplikovať na ten state

/*
?  state je vlastne nastaveny na default čiže vychodzia hodnota 
&  dispatch je funkcia ktoru zoberie action a spusti ju cez reducer 


*/

const exampleState = {
    albums: [{
        name: "Summer Hits",
        songs: ["zijeme len raz"]
    }],
    currentAlbum: null,
    playingSong: null,
    /*
    ? toto je defaultny state v našom prípade exampleState.
    */

    // v reduceri musime zmeniť stav a aka akcia sa ma stať čiže bud select album alebo create album
    //

}


const SELECT_ALBUM_ACTION = () => ({ type: "SELECT_ALBUM", value: "Summer hits" });
/*
* toto je vlastne akcia ktoru budeme mocť  dispatch spustiť cez reducer.
*/
const CREATE_ALBUM_ACTION = () => ({ type: "CREATE_ALBUM", value: "new Album" });



// dispatch je funkcia a do nej dame hodnoty našej action

<button onClick={() => dispatch(SELECT_ALBUM_ACTION)} />
/*
^ takže na kliknutie gombika funkcia dispatch zoberie akciu selectovania albumu
^ a spusti ju v reduceri.
*/

const myReducer = (currentState, dispatchedAction) => {
    /*
    & v reduceri mame aktualnu hodnotu a funkcia dispatchedaction.
    & vo switchi musime definovať aky typ akcie chceme.
    & potom tam definujeme premennu kde musime uviesť aj hodnotu ktoru chcem zmeniť za tu v aktualnom state
    
    & niektore actions maju take iste vysledky
    c
    


    */
    switch (dispatchedAction.type) {
        case "SELECT_ALBUM":

            const selectetAlbum = dispatchedAction.value;
            const selectedAlbum = currentState.filter(album => album.name == selectedAlbumName)[0];

            return {// tuna su vlastne funkcie ktore sa spustia na konci ked to prejde cez reducer
                currentState: selectedAlbum,
                playingSong: selectedAlbum[0],
                albums: currentState.albums,


            }

        case "CREATE_ALBUM":

            break;

        case "PLAY_SONG":

            break;
    }
}

/*
?   



*/