import express from 'express';

import { getTest } from '../controllers/testController.js';

export const router = express.Router()

router.get('/test', getTest)
