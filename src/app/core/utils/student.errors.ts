export const STUDENT_ERRORS = {
    email: {
        invalid: 'Email inválido',
        notProvided: 'No se ha introducido un email para el usuario',
    },
    name: {
        notProvided: 'No se ha introducido un nombre para el usuario',
    },
    lastname1: {
        notProvided: 'No se ha introducido un apellido para el usuario',
    },
    password: {
        notProvided: 'No se ha introducido una contraseña para el usuario',
        minLength: `Debe contener al menos 6 caracteres`,
    },
    repeatPassword: {
        notProvided: 'No se ha introducido una contraseña para el usuario',
        minLength: `Debe contener al menos 6 caracteres`,
        invalid: 'Las contraseñas no coinciden'
    },
    dni: {
      notProvided: 'No se ha introducido un DNI para el estudiante',
      invalid: 'DNI inválido',
      notSpanish: 'No coincide con ningún DNI español'
    },
    mobile: {
      notProvided: 'No se ha introducido un número de teléfono para el estudiante',
      invalid: 'Número de teléfono inválido',
      notSpanish: 'Número de teléfono no corresponde a España'
    },
    country: {
      notProvided: 'No se ha introducido un país para el estudiante'
    },
    province: {
      notProvided: 'No se ha introducido una provincia para el estudiante'
    },
    cp: {
      notProvided: 'No se ha introducido código postal para el estudiante',
      invalid: 'Código postal inválido',
      notSpanish: 'El código postal no corresponde a España'
    },
    location: {
      notProvided: 'No se ha introducido localidad para el estudiante',
    },
    nickname: {
      notProvided: 'No se ha introducido nickname para el estudiante',
    },
    oldPass: {
      notProvided: 'No se ha introducido la antigua contraseña para el usuario',
        minLength: `Debe contener al menos 6 caracteres`,
    },
    newPass: {
      notProvided: 'No se ha introducido la nueva contraseña para el usuario',
        minLength: `Debe contener al menos 6 caracteres`,
    },
    repeatNewPass: {
      notProvided: 'No se ha repetido la nueva contraseña para el usuario',
        minLength: `Debe contener al menos 6 caracteres`,
        invalid: 'Las contraseñas no coinciden'
    }
}
