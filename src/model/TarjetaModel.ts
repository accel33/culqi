import { Schema, model } from 'mongoose'
import { Tarjeta } from 'src/types/Tarjeta'

const TarjetaSchema = new Schema<Tarjeta>({
  email: {
    type: String,
  },
  card_number: {
    type: Number,
  },
  expiration_year: {
    type: String,
  },
  expiration_month: {
    type: String,
  },
  token: { type: String },
})

export default model('TarjetaModel', TarjetaSchema)
