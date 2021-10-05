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

const Populares = () => {
  const { productos } = useProductos("votos");
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
          Productos con más votos
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
      </Layout>
    </div>
  );
};

export default Populares;
