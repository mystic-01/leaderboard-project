import axios from 'axios';

const url = 'https://leaderbirds.herokuapp.com/board';

//GET a particular board.
export const fetchBoard = (id) => axios.get(`${url}/${id}`);

//POST a new board.
export const createBoard = (board) => axios.post(url, board);

//PATCH a existing board.
export const editBoard = (id, updatedBoard) => axios.patch(`${url}/patch/${id}`, updatedBoard);
