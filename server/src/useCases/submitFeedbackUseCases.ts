import { FeedbackRepository } from "../repositories/feedback-repository";

interface SubmitFeedbackRequest {
    type: string;
    comment: string;
    screenshot: string;
}

export class SubmitFeedbackUseCases{
    constructor(
        private feedbackRepository: FeedbackRepository

    ){}
    
    async execute(request: SubmitFeedbackRequest){
        const {comment, screenshot, type} = request;

        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        })
    };
}