import express from 'express';
import { router as testRouter } from './testRoute.js';
import { router as villageRouter } from './villageRoute.js';
import { router as playerRouter } from './playerRoute.js';
import { router as allyRouter } from './allyRoute.js';

export const router = express.Router()
const ENDPOINT = '/:server/:world'


router.use(ENDPOINT, testRouter)
router.use(ENDPOINT, villageRouter)
router.use(ENDPOINT, playerRouter)
router.use(ENDPOINT, allyRouter)