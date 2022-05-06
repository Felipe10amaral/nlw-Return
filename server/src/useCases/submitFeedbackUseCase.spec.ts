import { SubmitFeedbackUseCases } from "./submitFeedbackUseCases"

describe('Submit feedback', () => {
    it('shold be able to submit a feedback ', async () =>{
        const submitFeedback = new SubmitFeedbackUseCases(
            { create: async () => {} },
            { sendMail: async () => {} },
        )

        await expect(submitFeedback.execute({
            comment: "bugado",
            type: "BUG",
            screenshot: "test.jpg"
        })).resolves.not.toThrow();
    })
})