import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { routes } from './routes'


const app = express()
app.use(cors())
const port = process.env.SERVER_PORT

app.use(express.json())


app.use(routes)
app.listen(port,()=>{
    console.log(`HTTP server running on port ${port}`)
})


