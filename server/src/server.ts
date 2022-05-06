import express, { json } from 'express';
import cors from 'cors';

import { router } from './routes';

const app = express();

app.use(cors());

app.use(express.json())

app.listen(3330, () => {
    console.log("Running Server");
});



app.use(router);