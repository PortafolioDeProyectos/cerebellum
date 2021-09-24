import React, { useState, useContext } from "react";
import Router, { useRouter } from "next/router";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";
import validarCrearProducto from "../validacion/validarCrearProducto";

//Validacion
import useValidacion from "../hooks/useValidacion";

import { FirebaseContext } from "../firebase";
const STATE_INICIAL = {
  nombre: "",
  empresa: "",
  // imagen: "",
  url: "",
  descripcion: "",
};
const NuevoProducto = () => {
  const [error, setError] = useState(false);
  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto);
  const { nombre, empresa, imagen, url, descripcion } = valores;

  //Hook de routing para redireccionar
  const router = useRouter();

  //context con las operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  function crearProducto() {
    const producto = {
      nombre,
      empresa,
      url,
      descripcion,
      votos: 0,
      comentarios: [],
      creado: Date.now(),
    };
    console.log(usuario, firebase);
  }

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Nuevo producto
          </h1>
          <Formulario onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>Informacion General</legend>

              <Campo>
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
              </Campo>
              {errores.nombre && <Error>{errores.nombre}</Error>}

              <Campo>
                <label htmlFor="empresa">Empresa</label>
                <input
                  type="text"
                  id="empresa"
                  placeholder="Nombre de la empresa"
                  name="empresa"
                  value={empresa}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
              </Campo>
              {errores.empresa && <Error>{errores.empresa}</Error>}

              {/*<Campo>
                <label htmlFor="nombre">Imagen</label>
                <input
                  type="file"
                  id="imagen"
                  name="imagen"
                  value={imagen}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
              </Campo>
              {errores.imagen && <Error>{errores.imagen}</Error>}
             */}
              <Campo>
                <label htmlFor="url">URL</label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={url}
                  placeholder="URL de tu producto"
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
              </Campo>
              {errores.url && <Error>{errores.url}</Error>}
            </fieldset>

            <fieldset>
              <legend>Sobre tu producto</legend>
              <Campo>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
              </Campo>
              {errores.descripcion && <Error>{errores.descripcion}</Error>}
            </fieldset>

            {error && <Error>{error}</Error>}
            <InputSubmit type="submit" value="Crear producto" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
};

export default NuevoProducto;
