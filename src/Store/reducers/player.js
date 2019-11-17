const initialState = {
    playing: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE PLAY":
            return {...state, playing: !state.playing};
        default:
            return state;
    }
};

export default reducer;