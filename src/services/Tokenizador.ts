import { uid } from 'rand-token'
import { Tarjeta } from '../types/Tarjeta'
import { Token } from 'src/types/Token'

export class Tokenizador {
  async crearToken(tarjeta: Tarjeta): Promise<Token> {
    const token = uid(16)
    const creadoEn = new Date()
    const expiraEn = new Date(creadoEn.getTime() + 15 * 60 * 1000)
    data = {}

    return { token: '1', expires: 1, issued: 1 }
  }
}
