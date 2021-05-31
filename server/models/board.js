import mongoose from 'mongoose';

const boardSchema = mongoose.Schema({
    boardName: String,
    boardDescription: String,
    participants: [Object]
});

const Board = mongoose.model('Board', boardSchema);

export default Board;