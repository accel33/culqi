import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'

@ValidatorConstraint({ name: 'MinMaxYear' })
export class MinMaxYearValidator implements ValidatorConstraintInterface {
  validate(value: number | string, args: ValidationArguments) {
    const dateNow = new Date()
    const year = dateNow.getFullYear()
    args.constraints = [year]
    return value && !!Number(value) && Number(value) >= year && Number(value) < year + 5
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} no esta en el rango de años`
  }
}
