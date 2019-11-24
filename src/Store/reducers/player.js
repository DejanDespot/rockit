const initialState = {
    playing: false,
    currentSong: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE PLAY":
            return {...state, playing: action.playing? action.playing : !state.playing, currentSong: action.index};
        default:
            return state;
    }
};

export default reducer;