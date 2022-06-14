import express from 'express';
import bodyParser from 'body-parser';
const app = express()
import {router} from './routes/index.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req:any, res:any) => res.send('App is working'))

app.use('/', router)

app.listen(5000, () => console.log(''))
