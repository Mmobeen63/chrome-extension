import express from 'express';
import { getAllTexts, createText } from '../controller/selectedTextController.js';
const router= express.Router();

router.get('/', getAllTexts);
router.post('/', createText);

export default router;
