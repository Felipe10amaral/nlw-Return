import express, { json } from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json())

app.listen(3330, () => {
    console.log("Running Server");
})

app.post('/feedbacks', async (request, response) => {
    const {type, comment, screenshot} = request.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            Screenshot: screenshot
        }
    })

    return response.status(201).json(feedback);
})