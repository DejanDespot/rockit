const togglePlay = () => dispatch => {
    dispatch({ type: "TOGGLE PLAY"});
};

const nextSong = (index) => dispatch => {
    dispatch({ type: "NEXT SONG", index: index})
}

export { togglePlay, nextSong };