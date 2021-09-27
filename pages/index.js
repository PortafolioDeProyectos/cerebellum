import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import DetallesProducto from "../components/layout/DetallesProducto";

const Parrafo = styled.p`
  max-width: 1200px;
  width: 95%;
  margin: 2rem auto 0 auto;
`;
const ListadoProductos = styled.div`
  max-width: 1200px;
  width: 95%;
  padding: 5rem 0;
  margin: 0 auto;
`;
const Contenedor = styled.div`
  background-color: white;
`;

const ListadoProd = styled.ul`
  background-color: #fff;
`;

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db
        .collection("productos")
        .orderBy("creado", "desc")
        .onSnapshot(manejarSnapshot);
    };
    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setProductos(productos);
  }
  return (
    <div>
      <Layout>
        <ListadoProductos>
          <Contenedor>
            <ListadoProd>
              {productos.map((producto) => (
                <DetallesProducto key={producto.id} producto={producto} />
              ))}
            </ListadoProd>
          </Contenedor>
        </ListadoProductos>

        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
          `}
        >
          Sobre el proyecto
        </h1>
        <Parrafo>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este
          proyecto esta desarrollado en NextJS, esta conectado a una base de
          datos de Firebase. Se Utilizaron Hooks para realizar las validaciones
          Para la parte de diseño se usa styled-component , importacion de hojas
          de estilo, y css mas localizado usando las herramientas de @emotion.
        </Parrafo>
      </Layout>
    </div>
  );
};

export default Inicio;
