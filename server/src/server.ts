import express, { json } from 'express';


import { router } from './routes';

const app = express();

app.use(express.json())

app.listen(3330, () => {
    console.log("Running Server");
});



app.use(router);