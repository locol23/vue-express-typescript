import express from 'express'
import path from 'path'
import cors from 'cors'
import { loginRouter } from './routes/login'

const app = express()
const port = 3000

app.use(cors())
app.use('/', express.static(path.join(__dirname, '../../dist')))
app.use('/api', loginRouter)

app.listen(port, () => console.log(`listening on port ${port}!`))
