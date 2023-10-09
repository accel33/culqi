import { uid } from 'rand-token'
import { Tarjeta } from '../types/Tarjeta'
import { TarjetaDto } from 'src/dto/TarjetaDto'
import TarjetaModel from 'src/model/TarjetaModel'

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
    const storableCard = new TarjetaModel({
      ...retornoTarjeta,
    })
    const tarjetaGuardada = await storableCard.save()
    if (!tarjetaGuardada) {
      throw new Error('Error al guardar la tarjeta en la BD')
    }
    return retornoTarjeta
  }
  catch(error) {
    throw new Error(error.message ? error.message : 'No se pudo crear Token.')
  }
}
