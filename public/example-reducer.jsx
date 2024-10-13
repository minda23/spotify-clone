const { useReducer } = require("react/cjs/react.production.min");

const [state, dispatch] = useReducer(myReducer, exampleState);// do reducera sa bude davať ako sa tie actions budu aplikovať na ten state


const exampleState = {
    albums: [{
        name: "Summer Hits",
        songs: ["zijeme len raz"]
    }],
    currentAlbum: null,
    playingSong: null,

}


const SELECT_ALBUM_ACTION = () => ({ type: "SELECT_ALBUM", value: "Summer hits" }); // toto je vlastne dispatch - odoslanie action
const CREATE_ALBUM_ACTION = () => ({ type: "CREATE_ALBUM", value: "new Album" });

// dispatch je funkcia a do nej dame hodnoty našej action

<button onClick={() => dispatch(SELECT_ALBUM_ACTION)} />

const myReducer = (currentState, dispatchedAction) => { // tuna budeme pisať skrze tie actions
    // v reduceri sa vačšinou použiva veľky switch. :). 
    // zakladna forma by bola že v returne je current state
    // a ked tam máme return nepotrebujeme break na tu možnost vo switchi.
    // v action máme vždy nejaku hodnotu 
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