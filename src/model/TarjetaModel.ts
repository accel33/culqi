import { Schema, model } from 'mongoose'
import { TarjetaRetornada } from 'src/types/TarjetaRetornada'

const TarjetaSchema = new Schema<TarjetaRetornada>({
  email: String,
  card_number: Number,
  expiration_year: String,
  expiration_month: String,
  token: String,
  created_at: Date,
  expired_at: Date,
})

export default model('TarjetaModel', TarjetaSchema)
