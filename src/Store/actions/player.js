const togglePlay = (index, playing) => dispatch => {
    dispatch({ type: "TOGGLE PLAY", index, playing});
};

const toggleRepeat = () => dispatch => {
    dispatch({ type: "TOGGLE REPEAT" });
};

const toggleShuffle = () => dispatch => {
    dispatch({ type: "TOGGLE SHUFFLE" });
};

const toggleOptions = () => dispatch => {
    dispatch({ type: "TOGGLE OPTIONS" });
};

const toggleDropdown = () => dispatch => {
    dispatch({ type: "TOGGLE DROPDOWN" });
};

const changeVolume = (volume) => dispatch => {
    dispatch({ type: "CHANGE VOLUME", volume });
const change = () => dispatch => {
    dispatch({ type: "CHANGE" });
};

const changeVolume = () => dispatch => {
    dispatch({ type: "CHANGE_VOLUME" });
};


export { togglePlay, toggleRepeat, toggleShuffle, toggleOptions, toggleDropdown, change, changeVolume };
