const initialState = {
    playing: false,
    currentSong: null,
    activeBtn: false,
    activeRepeat: false,
    activeShuffle: false,
    dropdown: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE PLAY":
            return {...state, playing: action.playing ? action.playing : !state.playing, currentSong: action.index};
        case "TOGGLE REPEAT":
            return {...state, activeRepeat: !state.activeRepeat, activeShuffle: state.activeRepeat ? state.activeShuffle === false : null};
        case "TOGGLE SHUFFLE":
            return {...state, activeShuffle: !state.activeShuffle, activeRepeat: state.activeShuffle ? state.activeRepeat === false : null};
        case "TOGGLE OPTIONS":
            return {...state, optionsOpn: !state.optionsOpn};
        case "TOGGLE DROPDOWN":
            return {...state, dropdown: !state.dropdown};
        default:
            return state;
    }
};

export default reducer;



