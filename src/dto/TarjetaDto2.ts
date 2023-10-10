import { IsEmail, IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator'
import {
  LengthValidator,
  LuhnValidator,
  MinMaxValidator,
  MinMaxYearValidator,
} from '../class-validators'
import { Tarjeta } from 'src/types/Tarjeta'

export class TarjetaDto2 implements Tarjeta {
  @Validate(LuhnValidator)
  @Validate(LengthValidator, [13, 16])
  @IsNumber({}, { message: (args) => `${args.property} debe ingresar numeros` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  card_number: number

  @Validate(LengthValidator, [3, 4])
  @IsNumber({}, { message: (args) => `${args.property} debe ingresar numeros` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  cvv: number

  @Validate(MinMaxValidator, [1, 12])
  @Validate(LengthValidator, [1, 2])
  @IsString({ message: (args) => `${args.property} debe ingresar caracteres` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  expiration_month: string

  @Validate(MinMaxYearValidator)
  @Validate(LengthValidator, [4, 4])
  @IsString({ message: (args) => `${args.property} debe ingresar caracteres` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  expiration_year: string

  @IsEmail()
  @Validate(LengthValidator, [5, 100])
  @IsString({ message: (args) => `${args.property} debe ingresar caracteres` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  email: string
}
