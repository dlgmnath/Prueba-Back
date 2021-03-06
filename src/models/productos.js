{
    id: 1, // number
    'name': 'prod name' //  string
}

import { Schema, model } from 'mongoose'

const ProductoSchema = new Schema (
    {
        id: Number,
        name: String
    }
)

export default model('Producto', ProductoSchema);