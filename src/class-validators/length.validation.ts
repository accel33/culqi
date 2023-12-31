import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'

@ValidatorConstraint({ name: 'Length' })
export class LengthValidator implements ValidatorConstraintInterface {
  validate(value: number | string, args: ValidationArguments) {
    return (
      value &&
      String(value).length >= args.constraints[0] &&
      String(value).length <= args.constraints[1]
    )
  }

  defaultMessage(args: ValidationArguments) {
    const num1 = args.constraints[0]
    const num2 = args.constraints[1]
    return `${args.property} debe tener ${
      num1 === num2 ? num1 : 'entre ' + num1 + ' y ' + num2
    } caracteres`
  }
}
