import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { routes } from './routes'


const app = express()
const port = process.env.SERVER_PORT


app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(port,()=>{
    console.log(`HTTP server running on port ${port}`)
})


