import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator'

@ValidatorConstraint({ name: 'Email' })
export class EmailValidator implements ValidatorConstraintInterface {
  private emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, 'gm')
  validate(value: string) {
    return value && typeof value === 'string' && this.emailRegex.test(value)
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property}${args.value ? ': ' + args.value : ''} no es un email valido. `
  }
}
