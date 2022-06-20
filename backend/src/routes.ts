import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';
import { PrismaFeedbacksRespository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
export const routes = express.Router()



routes.post('/feedbacks',async (req,res)=>{

    const {type,comment,screenshot} = req.body
    
    const prismaFeedbacksRespository = new PrismaFeedbacksRespository()
    const submitFeedbackUseCase =  new SubmitFeedbackUseCase(prismaFeedbacksRespository)


    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).send()
})
