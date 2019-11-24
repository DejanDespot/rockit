const togglePlay = (index, playing) => dispatch => {
    dispatch({ type: "TOGGLE PLAY", index, playing});
};

export { togglePlay };