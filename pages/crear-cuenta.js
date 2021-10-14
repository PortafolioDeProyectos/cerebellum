import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";
import { Formulario, Campo, Error } from "../components/ui/Formulario";
import validarCrearCuenta from "../validacion/validarCrearCuenta";
import firebase from "../firebase";

// componente sde chakra
import { FormControl, FormLabel, Input, Flex, Heading } from "@chakra-ui/react";
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
          <Flex height="100vh" justifyContent="center">
            <form onSubmit={handleSubmit} noValidate>
              <Flex
                direction="column"
                p={12}
                rounded={6}
                width="400px"
                mt="150px"
                bgGradient="linear(to-r, blue.400, blue.300)"
              >
                <Heading mb={6} color="white">
                  Crear cuenta
                </Heading>
                <Input
                  size="lg"
                  mb={3}
                  variant="filled"
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errores.nombre && <ErrorFormulario error={errores.nombre} />}
                <Input
                  size="lg"
                  mb={3}
                  variant="filled"
                  type="email"
                  id="email"
                  placeholder="Tu email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errores.email && <ErrorFormulario error={errores.email} />}
                <Input
                  size="lg"
                  mb={3}
                  variant="filled"
                  type="password"
                  id="password"
                  placeholder="Tu password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errores.password && (
                  <ErrorFormulario error={errores.password} />
                )}
                {error && <ErrorFormulario error={error} />}
                <InputSubmit titulo="Crear cuenta" />
              </Flex>
            </form>
          </Flex>
        </>
      </Layout>
    </div>
  );
};

export default Crear;
