export const AddSongToSelectedAlbum = (newState) => {

    const selectedAlbum = newState

    return selectedAlbum
}


case "ADD_AUDIO_TO_SELECTED_ALBUM":
const newAudio = dispatchedAction.value;
const newState = {
    ...state,
    selectedAlbum: {
        ...state.selectedAlbum,
        audio: [...state.selectedAlbum.audio, newAudio],
    },
};

return newState;