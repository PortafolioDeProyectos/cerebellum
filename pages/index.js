import React from "react";
import Layout from "../components/layout/Layout";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import DetallesProducto from "../components/layout/DetallesProducto";
import useProductos from "../hooks/useProductos";

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
  const { productos } = useProductos("creado");

  return (
    <div>
      <Layout>
        <h1
          css={css`
            text-align: center;
            margin-top: 2rem;
            margin-bottom: 0;
          `}
        >
          Ultimos productos
        </h1>
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
