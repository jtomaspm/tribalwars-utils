import express from 'express';
import { router as testRouter } from './testRoute.js';
import { router as villageRouter } from './villageRoute.js';
import { router as playerRouter } from './playerRoute.js';

export const router = express.Router()

router.use('/api', testRouter)
router.use('/api', villageRouter)
router.use('/api', playerRouter)