import { UnauthorizedError } from 'restify-errors'
import { Tokenizador } from './services/Tokenizador'

export const generarToken = async (event) => {
  const tokenizador = new Tokenizador()
  const requestBody = JSON.parse(event.body as string)
  const token = await tokenizador.crearToken(requestBody)
  return token
}

export const procesarCargo = async (event) => {
  const tokenizador = new Tokenizador()
  const authorization = event.headers['authorization']
  console.log(authorization)
  const token = authorization ? authorization.split('Bearer ')[1] : null
  if (token && token.startsWith('pk_test_')) {
    const arrToken = token.split('_')
    if (arrToken[0] === 'pk' && arrToken[1] === 'test' && arrToken[2]) {
      console.log(arrToken[2])
      const tarjeta = await tokenizador.obtenerTarjetaConToken(arrToken[2])
      return tarjeta
    } else {
      throw new UnauthorizedError('Token inválido')
    }
  }
}
