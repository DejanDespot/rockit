const togglePlay = (index, playing, song) => dispatch => {
  dispatch({ type: "TOGGLE PLAY", index, playing, song });
};

const toggleRepeat = () => dispatch => {
  dispatch({ type: "TOGGLE REPEAT" });
};

const toggleShuffle = () => dispatch => {
  dispatch({ type: "TOGGLE SHUFFLE" });
};

const toggleMute = () => dispatch => {
  dispatch({ type: "TOGGLE MUTE" });
};

const toggleOptions = () => dispatch => {
  dispatch({ type: "TOGGLE OPTIONS" });
};

const toggleDropdown = () => dispatch => {
  dispatch({ type: "TOGGLE DROPDOWN" });
};

const changeVolume = volume => dispatch => {
  dispatch({ type: "CHANGE VOLUME", volume });
};

const change = () => dispatch => {
  dispatch({ type: "CHANGE" });
};

export {
  togglePlay,
  toggleRepeat,
  toggleShuffle,
  toggleMute,
  toggleOptions,
  toggleDropdown,
  change,
  changeVolume
};
