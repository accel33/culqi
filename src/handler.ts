import { Tokenizador } from './services/Tokenizador'

export const generarToken = async (event) => {
  const tokenizador = new Tokenizador()
  const requestBody = JSON.parse(event.body as string)
  const token = await tokenizador.crearToken(requestBody)
  return token
}

export const procesarCargo = async (event) => {
  const tokenizador = new Tokenizador()
  const requestBody = JSON.parse(event.body as string)
  const tarjeta = await tokenizador.obtenerTarjetaConToken(requestBody)
  return tarjeta
}
