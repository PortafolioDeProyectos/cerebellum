export default function validarCrearProducto(valores) {
  let errores = {};

  //validar el nombre

  if (!valores.nombre) {
    errores.nombre = "El nombre es obligatorio";
  }
  // validar empresa
  if (!valores.empresa) {
    errores.empresa = "Nombre de empresa es obligatorio";
  }

  //validar url

  if (!valores.url) {
    errores.url = "La url es obligatoria";
  } else if (
    !/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
      valores.url
    )
  ) {
    errores.url = "Url mal formateada o no valida.";
  }

  //validar descripcion

  if (!valores.descripcion) {
    errores.descripcion = "Agrega la descripción de tu producto";
  }

  return errores;
}
