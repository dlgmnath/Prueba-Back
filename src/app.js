import express from 'express'
import packJson from '../package.json'
import morgan from 'morgan'

const app = express()
app.set('packJson',packJson)

app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.json({
        name: app.get('packJson').name,
        descripcion: app.get('packJson').descripcion,
        version: app.get('packJson').version
    })
})

export default app;
