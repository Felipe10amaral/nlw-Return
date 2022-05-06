import express from 'express';
import { prisma } from './prisma';

import { SubmitFeedbackUseCases } from './useCases/submitFeedbackUseCases';
import { PrismaFeedbackRepository } from './repositories/prisma/PrismaFeedbackRepository';
import { NodemailerAdapter } from './adapters/nodemailer/NodemailerAdapter';

export const router = express.Router();

router.post('/feedbacks', async (request, response) => {
    const {type, comment, screenshot} = request.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodeMailerAdapter = new NodemailerAdapter();
    const submitFeedbackUseCases = new SubmitFeedbackUseCases(prismaFeedbackRepository, nodeMailerAdapter) 

    await submitFeedbackUseCases.execute({
        type,
        comment,
        screenshot
    }) 

    return response.status(201).send();
})