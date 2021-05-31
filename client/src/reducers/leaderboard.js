const reducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_BOARD":
            return action.payload;
        case "CREATE_BOARD":
            return action.payload;
        case "EDIT_BOARD":
            return action.payload;
        default:
            return state;
    }
};

export default reducer;