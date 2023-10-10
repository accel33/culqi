import { IsEmail, IsNumber, IsString } from 'class-validator'
import { Tarjeta } from 'src/types/Tarjeta'

export class TarjetaDto implements Tarjeta {
  // @Length(13, 16, { message: desc('debe tener 14 caracteres') })
  // @IsNumber({}, { message: desc('debe ingresar numeros') })
  // @IsNotEmpty({ message: desc('es requerido') })
  @IsNumber()
  card_number: number
  @IsNumber()
  cvv: number
  @IsEmail()
  email: string
  @IsString()
  expiration_month: string
  @IsString()
  expiration_year: string
}
