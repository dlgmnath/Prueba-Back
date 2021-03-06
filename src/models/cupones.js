import { Schema, model } from 'mongoose'

const cuponSchema = new Schema (
    {
        id: Number, 
        name: String,
        description: String,
        product_id: Number,
        valid_since: Date,
        valid_until: Date,
    }
)

export default model('cupon', cuponSchema);