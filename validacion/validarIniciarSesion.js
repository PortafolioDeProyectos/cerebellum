export default function validarIniciarSesion(valores) {
  let errores = {};

  //validar email
  if (!valores.email) {
    errores.email = "El email es obligatorio";
  } else {
    if (
      !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        valores.email
      )
    ) {
      errores.email = "Email no valido";
    }
  }

  //validar password

  if (!valores.password) {
    errores.password = "El password es obligatorio";
  } else {
    if (valores.password.length < 6) {
      errores.password = "El password debe tener por lo menos 6 caracteres";
    }
  }
  return errores;
}
