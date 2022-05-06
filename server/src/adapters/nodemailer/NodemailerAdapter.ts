import { MailAdapter, SendMailData } from "../MailAdapters";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6a5d0a2ec830d8",
      pass: "8b129e99a73123"
    }
  });

export class NodemailerAdapter implements MailAdapter{
    async sendMail ({body, subject}: SendMailData) {
        await transport.sendMail({
            from: "Equipe feedget <oi@feedget.com>",
            to: "Felipe <felipeamaraldev15@gmail.com>",
            subject,
            html: body
        })
    }

}