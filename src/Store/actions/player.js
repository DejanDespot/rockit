const togglePlay = (index, playing) => dispatch => {
    dispatch({ type: "TOGGLE PLAY", index, playing});
};

const toggleRepeat = () => dispatch => {
    dispatch({ type: "TOGGLE REPEAT"});
};

const toggleShuffle = () => dispatch => {
    dispatch({ type: "TOGGLE SHUFFLE"});
};

const toggleOptions = () => dispatch => {
    dispatch({ type: "TOGGLE OPTIONS"});
};

const toggleDropdown = () => dispatch => {
    dispatch({ type: "TOGGLE DROPDOWN"});
};


export { togglePlay, toggleRepeat, toggleShuffle, toggleOptions, toggleDropdown };