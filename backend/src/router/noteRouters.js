import { Router } from 'express';
import { getNotes, createNote, getNoteById, updateNote, deleteNote } from '../controllers/noteControllers.js';  
const router = Router();  
router.get('/', getNotes);
router.post('/', createNote);  
router.get('/:id', getNoteById);  
router.put('/:id', updateNote);  
router.delete('/:id', deleteNote);  
export default router;
