import express from 'express';
import {router as testRouter} from './testRoute.js';

export const router = express.Router()

router.use('/api', testRouter)