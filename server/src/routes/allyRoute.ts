import express from 'express';

import * as controller from '../controllers/allyController.js';

export const router = express.Router()

router.get('/ally/:tag', controller.getAllyByTag)
