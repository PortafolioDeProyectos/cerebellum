import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";
import validarIniciarSesion from "../validacion/validarIniciarSesion";

import firebase from "../firebase";

//Validacion

import useValidacion from "../hooks/useValidacion";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
  
} from "@chakra-ui/react"


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
            <FormLabel htmlFor="email" >Email address</FormLabel>
            <Input size="lg" mb="2" type="email"
                id="email"
                placeholder="Tu email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur} />
            </FormControl>

            {errores.email && ( <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>{errores.email}</AlertTitle>             
            </Alert> )}
         
          <FormControl >
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input size="lg" mb="2" type="password"
                id="password"
                placeholder="Tu password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}></Input>
          </FormControl>

            {errores.password &&  ( <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>{errores.password}</AlertTitle>             
            </Alert>)}

            {error && (<Alert status="error" mt="10">
              <AlertIcon />
              <AlertTitle mr={2}>{error}</AlertTitle>             
            </Alert>)}
            <Button colorScheme="blue" type="submit" width="100%" size="lg" mt="5" >Iniciar Sesion</Button>

            
          </Formulario>
        </>
      </Layout>
    </div>
  );
};

export default Login;
