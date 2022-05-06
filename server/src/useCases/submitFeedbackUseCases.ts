import { MailAdapter } from "../adapters/MailAdapters";
import { FeedbackRepository } from "../repositories/feedback-repository";

interface SubmitFeedbackRequest {
    type: string;
    comment: string;
    screenshot: string;
}

export class SubmitFeedbackUseCases{
    constructor(
        private feedbackRepository: FeedbackRepository,
        private mailAdapter: MailAdapter,
    ){}
    
    async execute(request: SubmitFeedbackRequest){
        const {comment, screenshot, type} = request;

        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        }),

        this.mailAdapter.sendMail({
            subject: "Novo Feedback",
            body: [
                `<p> Tipo do feedback ${type}</p>`,
                `<p> Comentario ${comment}</p>`
            ].join('\n')
        })
    };
}