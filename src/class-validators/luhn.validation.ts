import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'

const mayorQueNueve = (num: number): number => {
  return num > 9 ? Number(String(num)[0]) + Number(String(num)[1]) : num
}

const luhnCheck2 = (num: number): boolean => {
  const arreglo = String(num) // convierto a string
    .split('') // el numero a arreglo
    .reverse() // empezamos de la derecha
    .map((x) => parseInt(x)) // caracteres a numeros en el arreglo
  let sum = 0
  arreglo.forEach((item, index) => {
    if (index % 2 === 1) sum += mayorQueNueve(item * 2)
    else sum += item
  })
  return sum % 10 === 0
}

@ValidatorConstraint({ name: 'Luhn' })
export class LuhnValidator implements ValidatorConstraintInterface {
  validate(value: number) {
    return value && luhnCheck2(value)
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property}${args.value ? ': ' + args.value : ''} no es válido`
  }
}
