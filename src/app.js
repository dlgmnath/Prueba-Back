import express from 'express'
import packJson from '../package.json'
import morgan from 'morgan'

import cuponesRoutes from './routes/cupones.routes' 
import authRoutes from './routes/auth.routes' 
import {crearRoles } from './libs/initialSetup'

const app = express()
crearRoles()

app.use(express.json())
app.set('packJson',packJson)

app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.json({
        name: app.get('packJson').name,
        descripcion: app.get('packJson').descripcion,
        version: app.get('packJson').version
    })
})

app.use('/api/cupones', cuponesRoutes)
app.use('/api/auth', authRoutes)
export default app;
