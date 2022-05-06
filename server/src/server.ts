import express, { json } from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json())

app.listen(3330, () => {
    console.log("Running Server");
});

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6a5d0a2ec830d8",
      pass: "8b129e99a73123"
    }
  });

app.post('/feedbacks', async (request, response) => {
    const {type, comment, screenshot} = request.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            Screenshot: screenshot
        }
    })

    await transport.sendMail({
        from: "Equipe feedget <oi@feedget.com>",
        to: "Felipe <felipeamaraldev15@gmail.com>",
        subject: "Assunto do email",
        html: [
            `<p> Tipo do feedback ${type}</p>`,
            `<p> Comentario ${comment}</p>`
        ].join('\n')
    })

    return response.status(201).json(feedback);
})