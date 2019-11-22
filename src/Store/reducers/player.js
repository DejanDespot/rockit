const initialState = {
    playing: false,
    currentSong: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE PLAY":
            return {...state, playing: !state.playing};
        case "NEXT SONG":
            return {...state, currentSong: action.index}
        default:
            return state;
    }
};

export default reducer;