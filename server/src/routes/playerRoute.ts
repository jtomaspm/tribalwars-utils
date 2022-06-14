import express from 'express';

import * as controller from '../controllers/playerController.js';

export const router = express.Router()

router.get('/player/:name', controller.getPlayerByName)
