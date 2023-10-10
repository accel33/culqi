import { TarjetaDto } from '../src/dto/TarjetaDto'
import { validatorDto } from '../src/dto/ValidatorDto'

describe('Email', () => {
  it('Deberia validar el campo email vacio', async () => {
    const requestBody = {
      cvv: 145,
      card_number: 4485275742308327,
      expiration_month: '11',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('email es requerido')
  })

  it('Deberia validar el campo email invalido', async () => {
    const requestBody = {
      email: '123456',
      cvv: 145,
      card_number: 4485275742308327,
      expiration_month: '11',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('email no es un email valido')
  })

  it('Deberia validar que el campo email sea cadena de caracteres', async () => {
    const requestBody = {
      email: 123,
      cvv: 145,
      card_number: 4485275742308327,
      expiration_month: '11',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('email debe ingresar caracteres')
  })
})

describe('Numero de Tarjeta', () => {
  it('Deberia validar el campo card_number vacio', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      expiration_month: '11',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('card_number es requerido')
  })

  it('Deberia validar el que campo card_number es numerico', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      card_number: '4485275742308327',
      expiration_month: '11',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('card_number debe ingresar numeros')
  })

  it('Deberia validar que el tamaño del campo card_number', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      card_number: 4485275742308327777,
      expiration_month: '11',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('card_number debe tener entre 13 y 16 caracteres')
  })

  it('Deberia validar que el del campo card_number es una tarjeta valida', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      card_number: 4444444444444444,
      expiration_month: '11',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('card_number no es valido')
  })
})

describe('Numero de CVV', () => {
  it('Deberia validar el campo cvv vacio', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      card_number: 4485275742308327,
      expiration_month: '11',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('cvv es requerido')
  })

  it('Deberia validar el que campo cvv es numerico', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: '145',
      card_number: 4485275742308327,
      expiration_month: '11',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('cvv debe ingresar numeros')
  })

  it('Deberia validar el tamaño del campo cvv', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 14555,
      card_number: 4485275742308327,
      expiration_month: '11',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('cvv debe tener entre 3 y 4 caracteres')
  })
})

describe('Mes de Expiracion', () => {
  it('Deberia validar el campo expiration_month vacio', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      card_number: 4485275742308327,
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('expiration_month es requerido')
  })

  it('Deberia validar el que campo expiration_month es cadena de caracteres', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      card_number: 4485275742308327,
      expiration_month: 11,
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('expiration_month debe ingresar caracteres')
  })

  it('Deberia validar que el tamaño del campo expiration_month', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      card_number: 4485275742308327,
      expiration_month: '11333',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('expiration_month debe tener entre 1 y 2 caracteres')
  })

  it('Deberia validar el rango del campo expiration_month', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      card_number: 4485275742308327,
      expiration_month: '13',
      expiration_year: '2027',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('expiration_month debe estar entre 1 y 12')
  })
})

describe('Año de Expiracion', () => {
  it('Deberia validar el campo expiration_year vacio', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      card_number: 4485275742308327,
      expiration_month: '11',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('expiration_year es requerido')
  })

  it('Deberia validar el que campo expiration_year es cadena de caracteres', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      card_number: 4485275742308327,
      expiration_month: '11',
      expiration_year: 2027,
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('expiration_year debe ingresar caracteres')
  })

  it('Deberia validar que el tamaño del campo expiration_year', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      card_number: 4485275742308327,
      expiration_month: '11',
      expiration_year: '20277',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('expiration_year debe tener 4 caracteres')
  })

  it('Deberia validar el rango del campo expiration_year', async () => {
    const requestBody = {
      email: 'accel@gmail.com',
      cvv: 145,
      card_number: 4485275742308327,
      expiration_month: '11',
      expiration_year: '2040',
    }
    const err = await validatorDto(TarjetaDto, requestBody)
    expect(err).toContain('expiration_year no esta en el rango de años')
  })
})
