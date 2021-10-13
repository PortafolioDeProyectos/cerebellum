import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";
import { Formulario } from "../components/ui/Formulario";
import validarIniciarSesion from "../validacion/validarIniciarSesion";
import firebase from "../firebase";
//Validacion
import useValidacion from "../hooks/useValidacion";
import { FormControl, FormLabel, Input, Flex, Heading } from "@chakra-ui/react";
import {
  InputSubmit,
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
          <Flex height="100vh" justifyContent="center">
            <form onSubmit={handleSubmit} noValidate>
              <Flex
                direction="column"
                // background="gray.200"
                p={12}
                rounded={6}
                width="400px"
                mt="150px"
                bgGradient="linear(to-r, blue.400, blue.300)"
              >
                <Heading mb={6} color="white">
                  Inicio de sesion
                </Heading>
                <Input
                  size="lg"
                  mb={3}
                  type="email"
                  id="email"
                  placeholder="Tu email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="filled"
                />
                {errores.email && <ErrorFormulario error={errores.email} />}

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
                  variant="filled"
                ></Input>
                {errores.password && (
                  <ErrorFormulario error={errores.password} />
                )}

                {error && <ErrorFormulario error={error} />}
                <InputSubmit titulo="Iniciar sesion" />
              </Flex>
            </form>
          </Flex>
        </>
      </Layout>
    </div>
  );
};

export default Login;
