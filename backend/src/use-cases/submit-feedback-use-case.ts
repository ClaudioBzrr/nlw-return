import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackCaseRequest{
    type:string;
    comment:string;
    screenshot ?:string;
}

export class SubmitFeedbackUseCase{



    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ){}

    async execute(request:SubmitFeedbackCaseRequest){
        const {type,comment, screenshot} = request;

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })
    }
}