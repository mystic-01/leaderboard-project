export const createBoard = (board) => async (dispatch) => {

    const action = { type: "CREATE_BOARD", payload: board };  
    dispatch(action);
};