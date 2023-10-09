import { uid } from 'rand-token'
import { Tarjeta } from '../types/Tarjeta'
import { TarjetaDto } from '../dto/TarjetaDto'
import TarjetaModel from '../model/TarjetaModel'
import { BadRequestError, NotFoundError } from 'restify-errors'
import { TarjetaRetornada } from '../types/TarjetaRetornada'
import { MongoDbService } from '../db/MongoDbService'

const mongodb = new MongoDbService()
mongodb.connect()

export class Tokenizador {
  async crearToken(tarjeta: TarjetaDto): Promise<Tarjeta> {
    const token = uid(16)
    const creadoEn = new Date()
    const expiraEn = new Date(creadoEn.getTime() + 15 * 60 * 1000)
    const data = {
      ...tarjeta,
      token,
      created_at: creadoEn.toISOString(),
      expired_at: expiraEn.toISOString(),
    }
    const { cvv, ...retornoTarjeta } = data
    const modeloTarjeta = new TarjetaModel({
      ...retornoTarjeta,
    })
    const tarjetaGuardada = await modeloTarjeta.save()
    if (!tarjetaGuardada) {
      throw new Error('Error al guardar la tarjeta en la BD')
    }
    return retornoTarjeta
  }
  catch(error) {
    throw new BadRequestError(error.message ? error.message : 'No se pudo crear Token.')
  }

  async obtenerTarjetaConToken(token: string): Promise<TarjetaRetornada> {
    try {
      const now = new Date()
      const data = await TarjetaModel.findOne({ token }).exec()
      if (!data) {
        throw new NotFoundError('Error al buscar la tarjeta en la base de datos.')
      }

      const expiraEn = new Date(data.expired_at)
      if (now > expiraEn) {
        await TarjetaModel.deleteOne({ token })
        throw new NotFoundError('La tarjeta ha expirado.')
      }
      return <TarjetaRetornada>{
        token,
        card_number: data.card_number,
        email: data.email,
        expiration_month: data.expiration_month,
        expiration_year: data.expiration_year,
        created_at: data.created_at,
        expired_at: data.expired_at,
      }
    } catch (e) {
      throw new BadRequestError(
        e.message ? e.message : 'No se pudo recuperar la informacion de la base de datos.',
      )
    }
  }
}
