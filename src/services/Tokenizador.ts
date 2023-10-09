import { encode, TAlgorithm } from 'jwt-simple'
import { Tarjeta } from '../types/Tarjeta'
import { Token } from 'src/types/Token'

export class Tokenizador {
  async crearToken(tarjeta: Tarjeta): Promise<Token> {
    const algoritmo = 'HS512'

    return { token: '1', expires: 1, issued: 1 }
  }
}
