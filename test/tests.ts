constraints: {
  isNotEmpty: 'email es requerido',
  isString: 'email debe ingresar caracteres',
  Length: 'email debe tener entre 5 y 100 caracteres',
  isEmail: 'email must be an email'
}

constraints: {
  isNotEmpty: 'cvv es requerido',
  isNumber: 'cvv debe ingresar numeros',
  Length: 'cvv debe tener entre 3 y 4 caracteres'
}

constraints: {
  isNotEmpty: 'card_number es requerido',
  isNumber: 'card_number debe ingresar numeros',
  Length: 'card_number debe tener entre 13 y 16 caracteres',
  Luhn: 'card_number no es válido'
}

constraints: {
  isNotEmpty: 'expiration_month es requerido',
  isString: 'expiration_month debe ingresar caracteres',
  Length: 'expiration_month debe tener entre 1 y 2 caracteres',
  MinMax: 'expiration_month debe estar entre 1 y 12.'
}

constraints: {
  isNotEmpty: 'expiration_year es requerido',
  isString: 'expiration_year debe ingresar caracteres',
  Length: 'expiration_year debe tener 4 caracteres',
  MinMaxYear: 'expiration_year no esta en el rango de años'
}