import mongoose from 'mongoose';
import BoardModel from '../models/board.js';

export const getBoard = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No board with that id!");

    try {
        const currentBoard = await BoardModel.findById(_id);
        res.status(200).json(currentBoard);
    } catch (error) {
        res.status(404).json(error);
    }
}; 

export const createBoard = async (req, res) => {
    
    const data = req.body;
    const newBoard = new BoardModel(data);
    try {
        await newBoard.save();  
        res.status(201).json(newBoard);
    } catch (error) {
        res.status(409).json(error);
    }
}; 

export const editBoard = async (req, res) => {
    const { id: _id } = req.params;
    const data = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No board with that id!");

    try {
        const updatedBoard = await BoardModel.findByIdAndUpdate(_id, data, { new: true });
        res.status(200).json(updatedBoard);
    } catch (error) {
        res.status(409).json(error);
    }
}; 