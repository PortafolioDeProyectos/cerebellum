import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";
import { Formulario } from "../components/ui/Formulario";
import validarIniciarSesion from "../validacion/validarIniciarSesion";
import firebase from "../firebase";
//Validacion
import useValidacion from "../hooks/useValidacion";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import {
  InputSubmit,
  CampoFormulario,
  ErrorFormulario,
} from "../components/ui/FormularioChakra";

const STATE_INICIAL = {
  email: "",
  password: "",
};
const Login = () => {
  const [error, setError] = useState(false);
  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);
  const { email, password } = valores;
  async function iniciarSesion() {
    try {
      const usuario = await firebase.login(email, password);
      console.log(usuario);
      Router.push("/");
    } catch (error) {
      console.error("Hubo un error en el logon", error.message);
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
            Iniciar sesion
          </h1>
          <Formulario onSubmit={handleSubmit} noValidate>
            <FormControl id="email">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                size="lg"
                mb="2"
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
                size="lg"
                mb="2"
                type="password"
                id="password"
                placeholder="Tu password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              ></Input>
            </FormControl>

            {errores.password && <ErrorFormulario error={errores.password} />}

            {error && <ErrorFormulario error={error} />}

            <InputSubmit titulo="Iniciar sesion" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
};

export default Login;
