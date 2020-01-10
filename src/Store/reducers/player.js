const initialState = {
    playing: false,
    currentSong: null,
    optionsOpn: false,
    activeRepeat: false,
    activeShuffle: false,
    dropdown: false,
    volumeX: 0.5
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
        case "CHANGE":
            return {...state, dropdown: false, optionsOpn: false};
        case "CHANGE VOLUME":
            return {...state, volumeX: action.volume};
        default:
            return state;
    }
};

export default reducer;



