import "../styles/globals.css";
import App from "next/app";
import firebase, { FirebaseContext } from "../firebase";
import useAutenticacion from "../hooks/useAutenticacion";
import useValidacion from "../hooks/useValidacion";
import {ChakraProvider} from "@chakra-ui/react"
const MyApp = (props) => {
  const usuario = useAutenticacion();
  const { Component, pageProps } = props;
  return (
    <FirebaseContext.Provider value={{ firebase, usuario }}>
      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
    </FirebaseContext.Provider>
  );
};

export default MyApp;
