import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'

@ValidatorConstraint({ name: 'MinMax' })
export class MinMaxValidator implements ValidatorConstraintInterface {
  validate(value: number | string, args: ValidationArguments) {
    return (
      value &&
      !!Number(value) &&
      Number(value) >= args.constraints[0] &&
      Number(value) <= args.constraints[1]
    )
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} debe estar entre ${args.constraints[0]} y ${args.constraints[1]}`
  }
}
