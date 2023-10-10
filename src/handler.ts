import { Tokenizador } from './services/Tokenizador'
import { validatorDto } from './dto/ValidatorDto'
import { TarjetaDto2 } from './dto/TarjetaDto2'

export const generarToken = async (event) => {
  try {
    const tokenizador = new Tokenizador()
    const requestBody = JSON.parse(event.body as string)
    const err = await validatorDto(TarjetaDto2, requestBody)
    console.log(err)

    if (err) {
      return {
        message: `Error de validacion: ${err[0].property} ${Object.values(err[0].constraints)[0]}`,
      }
    }
    const token = await tokenizador.crearToken(requestBody)
    console.log(token)

    if (!token) {
      return { message: 'Error al crear el Token' }
    }
    return token
  } catch (error) {
    console.log(error)
    return { message: 'Error general del servidor' }
  }
}

export const procesarCargo = async (event) => {
  const tokenizador = new Tokenizador()
  const authorization = event.headers['authorization']
  const token = authorization ? authorization.split('Bearer ')[1] : null

  if (token && token.startsWith('pk_test_')) {
    const arrToken = token.split('_')
    if (arrToken[0] === 'pk' && arrToken[1] === 'test' && arrToken[2]) {
      const tarjeta = await tokenizador.obtenerTarjetaConToken(arrToken[2])
      return tarjeta
    }
  }
}
