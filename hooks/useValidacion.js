import React, { useState, useEffect } from "react";
const useValidacion = (stateInicial, validar, fn) => {
  const [valores, setValores] = useState([]);
  const [errores, setErrores] = useState({});
  const [submitForm, setSubmitForm] = useState(false);
  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;
      if (noErrores) {
        fn(); //Funcion que va a pasar el usuario
      }
      setSubmitForm(false);
    }
  }, [errores]);

  //Funcion que se ejecuta cuando vamos escribiendo
  const handleChange = (e) => {
    setValores({ ...valores, [e.target.name]: e.target.value });
  };

  //funcion que se ejecuta cuando el usuario hace submit

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
    setSubmitForm(true);
  };

  //funcion cuando el usuario hace blur

  const handleBlur = (e) => {
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
  };
  return {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useValidacion;
