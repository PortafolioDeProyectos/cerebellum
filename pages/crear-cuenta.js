import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";
import { Formulario, Campo, Error } from "../components/ui/Formulario";
import validarCrearCuenta from "../validacion/validarCrearCuenta";
import firebase from "../firebase";

// componente sde chakra
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import {
  InputSubmit,
  ErrorFormulario,
} from "../components/ui/FormularioChakra";
//Validacion

import useValidacion from "../hooks/useValidacion";

const STATE_INICIAL = {
  nombre: "",
  email: "",
  password: "",
};

const Crear = () => {
  const [error, setError] = useState(false);
  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);
  const { nombre, email, password } = valores;
  async function crearCuenta() {
    try {
      const usuario = await firebase.registrar(nombre, email, password);
      Router.push("/");
    } catch (error) {
      console.error("hubo un error al crear el usuario", error.message);
      setError(error.message);
    }
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
            Crear cuenta
          </h1>
          <Formulario onSubmit={handleSubmit} noValidate>
            <FormControl id="nombre">
              <FormLabel htmlFor="nombre">Nombre</FormLabel>
              <Input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
            {errores.nombre && <ErrorFormulario error={errores.nombre} />}
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                placeholder="Tu email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
            {errores.email && <ErrorFormulario error={errores.email} />}
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Tu password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
            {errores.password && <ErrorFormulario error={errores.password} />}
            {error && <ErrorFormulario error={error} />}
            <InputSubmit titulo="Crear cuenta" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
};

export default Crear;
