import express from 'express';
import { getBoard, createBoard, editBoard } from '../controllers/board.js';

const router = express.Router();

router.get('/:id', getBoard);
router.post('/', createBoard);
router.patch('/patch/:id', editBoard);

export default router;