import express from 'express'
import authRoutes from './routes/auth.routes.js'
import paisesRoutes from './routes/paises.routes.js'
import { autenticarToken } from './middlewares/auth.middleware.js'

const app = express()
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/paises', autenticarToken, paisesRoutes)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})