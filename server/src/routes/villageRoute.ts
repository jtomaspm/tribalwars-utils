import express from 'express';

import * as controller from '../controllers/villageController.js';

export const router = express.Router()

router.get('/village/:coord', controller.getVillageByCoord)
