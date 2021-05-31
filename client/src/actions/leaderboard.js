import * as api from '../api/index';

export const fetchBoard = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchBoard(id);
        dispatch({ type: "FETCH_BOARD", payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const createBoard = (board, history) => async (dispatch) => {
    try {
        const { data } = await api.createBoard(board);
        console.log(data);
        dispatch({ type: "CREATE_BOARD", payload: data });
        history.push(`/view/${data._id}`);
    } catch (error) {
        console.log(error);
    }
};
export const editBoard = (id, updatedBoard, history) => async (dispatch) => {
    try {
        const { data } = await api.editBoard(id, updatedBoard);
        console.log(data);
        dispatch({ type: "EDIT_BOARD", payload: data });
        history.push(`/view/${data._id}`);
    } catch (error) {
        console.log(error);
    }
};