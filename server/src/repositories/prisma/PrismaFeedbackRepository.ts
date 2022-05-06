import { prisma } from "../../prisma";
import { FeedbackData, FeedbackRepository } from "../feedback-repository";

export class PrismaFeedbackRepository implements FeedbackRepository{
    async create ( {type, comment, screenshot}: FeedbackData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                Screenshot: screenshot
            }
        })
    }
}