import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';
import { SubmitFeedbackUseCases } from './useCases/submitFeedbackUseCases';
import { PrismaFeedbackRepository } from './repositories/prisma/PrismaFeedbackRepository';

export const router = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6a5d0a2ec830d8",
      pass: "8b129e99a73123"
    }
  });

router.post('/feedbacks', async (request, response) => {
    const {type, comment, screenshot} = request.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const submitFeedbackUseCases = new SubmitFeedbackUseCases(prismaFeedbackRepository);

    await submitFeedbackUseCases.execute({
        type,
        comment,
        screenshot
    })

   /* await transport.sendMail({
        from: "Equipe feedget <oi@feedget.com>",
        to: "Felipe <felipeamaraldev15@gmail.com>",
        subject: "Assunto do email",
        html: [
            `<p> Tipo do feedback ${type}</p>`,
            `<p> Comentario ${comment}</p>`
        ].join('\n')
    }) */

    return response.status(201).send();
})