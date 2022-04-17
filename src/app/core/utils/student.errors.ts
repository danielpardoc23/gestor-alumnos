export const STUDENT_ERRORS = {
    email: {
        invalid: 'Email inválido',
        notProvided: 'No se ha adjuntado un email para el usuario',
    },
    name: {
        notProvided: 'No se ha adjuntado un nombre para el usuario',
    },
    lastname1: {
        notProvided: 'No se ha adjuntado un nombre para el usuario',
    },
    password: {
        notProvided: 'No se ha adjuntado una contraseña para el usuario',
        minLength: `Debe contener al menos 6 caracteres`,
    },
    repeatPassword: {
        notProvided: 'No se ha adjuntado una contraseña para el usuario',
        minLength: `Debe contener al menos 6 caracteres`,
        invalid: 'Las contraseñas no coinciden'
    },
    dni: {
      notProvided: 'No se ha adjuntado un DNI para el estudiante',
      invalid: 'DNI inválido'
    },
    mobile: {
      notProvided: 'No se ha adjuntado un número de teléfono para el estudiante',
      invalid: 'Número de teléfono inválido',
      notSpanish: 'Número de teléfono no corresponde a España'
    },
    country: {
      notProvided: 'No se ha adjuntado un país para el estudiante'
    },
    province: {
      notProvided: 'No se ha adjuntado una provincia para el estudiante'
    },
    cp: {
      notProvided: 'No se ha adjuntado código postal para el estudiante',
      invalid: 'Código postal inválido',
      notSpanish: 'El código postal no corresponde a España'
    },
    location: {
      notProvided: 'No se ha adjuntado localidad para el estudiante',
    },
    nickname: {
      notProvided: 'No se ha adjuntado nickname para el estudiante',
    }
}
