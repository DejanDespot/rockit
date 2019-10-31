const initialState = {
    isOpen: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATING_SCREEN_SIZE":
            return {...state, width: action.width};
        default:
            return state;
    }
};

export default reducer;