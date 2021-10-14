import React, { useState, useContext } from "react";
import Router, { useRouter } from "next/router";
import FileUploader from "react-firebase-file-uploader";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";

import validarCrearProducto from "../validacion/validarCrearProducto";

//Validacion
import useValidacion from "../hooks/useValidacion";

import { FirebaseContext } from "../firebase";

import Error404 from "../components/layout/404";
//Chakra ui
import {
  ErrorFormulario,
  InputSubmit,
} from "../components/ui/FormularioChakra";
import {
  Flex,
  Input,
  Heading,
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const STATE_INICIAL = {
  nombre: "",
  empresa: "",
  // imagen: "",
  url: "",
  descripcion: "",
};
const NuevoProducto = () => {
  //state de la imagenes
  const [nombreImagen, setNombreImagen] = useState("");
  const [subiendo, setSubiendo] = useState(false);
  const [progreso, setProgreso] = useState(0);
  const [urlImagen, setUrlImagen] = useState("");

  const [error, setError] = useState(false);
  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto);
  const { nombre, empresa, imagen, url, descripcion } = valores;

  //Hook de routing para redireccionar
  const router = useRouter();

  //context con las operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  async function crearProducto() {
    //Si el usuario no esta logeado lo llevamos al login
    if (!usuario) {
      router.push("/login");
    }
    //creamos el objeto producto
    const producto = {
      nombre,
      empresa,
      url,
      urlImagen,
      descripcion,
      votos: 0,
      comentarios: [],
      creado: Date.now(),
      creador: {
        id: usuario.uid,
        nombre: usuario.displayName,
      },
      haVotado: [],
    };
    //lo insertamos en la base de datos
    await firebase.db.collection("productos").add(producto);
    return Router.push("/");
  }

  const handleUploadStart = () => {
    setProgreso(0);
    setSubiendo(true);
  };
  const handleProgress = (progreso) => setProgreso({ progreso });

  const handleUploadError = (error) => {
    setSubiendo(error);
    console.error(error);
  };

  const handleUploadSuccess = (nombre) => {
    setProgreso(100);
    setSubiendo(false);
    setNombreImagen(nombreImagen);
    firebase.storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        setUrlImagen(url);
      });
  };

  return (
    <div>
      <Layout>
        {!usuario ? (
          <Error404 />
        ) : (
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
                  bgGradient="linear(to-r, blue.400, blue.200)"
                  border="1px"
                  borderColor="blue.500"
                >
                  <Heading mb={6} color="white">
                    Nuevo producto
                  </Heading>
                  <FormControl>
                    <FormLabel>Nombre del producto</FormLabel>
                    <Input
                      size="lg"
                      mb={3}
                      variant="filled"
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                  {errores.nombre && <ErrorFormulario error={errores.nombre} />}
                  <FormControl>
                    <FormLabel>Nombre de la empresa</FormLabel>
                    <Input
                      size="lg"
                      mb={3}
                      variant="filled"
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={empresa}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></Input>
                  </FormControl>
                  {errores.empresa && (
                    <ErrorFormulario error={errores.empresa} />
                  )}
                  <FormControl>
                    <FormLabel>Imagen</FormLabel>
                    <FileUploader
                      acept="image/*"
                      id="imagen"
                      name="imagen"
                      randomizeFilename
                      storageRef={firebase.storage.ref("productos")}
                      onUploadStart={handleUploadStart}
                      onUploadError={handleUploadError}
                      onUploadSuccess={handleUploadSuccess}
                      onProgress={handleProgress}
                    ></FileUploader>
                  </FormControl>
                  <FormControl>
                    <FormLabel>URL</FormLabel>
                    <Input
                      size="lg"
                      mb={3}
                      variant="filled"
                      type="url"
                      id="url"
                      name="url"
                      value={url}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></Input>
                  </FormControl>
                  {errores.url && <ErrorFormulario error={errores.url} />}

                  <FormControl>
                    <FormLabel>Sobre tu producto</FormLabel>
                  </FormControl>
                  <Textarea
                    size="lg"
                    mb={3}
                    variant="filled"
                    id="descripcion"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Textarea>
                  {errores.descripcion && (
                    <ErrorFormulario error={errores.descripcion} />
                  )}
                  {error && <ErrorFormulario error={error} />}
                  <InputSubmit titulo="Agregar producto" />
                </Flex>
              </form>
            </Flex>
          </>
        )}
      </Layout>
    </div>
  );
};

export default NuevoProducto;
