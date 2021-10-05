import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import DetallesProducto from "../components/layout/DetallesProducto";
import useProductos from "../hooks/useProductos";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

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

const Buscar = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;

  //Todos los productos
  const { productos } = useProductos("creado");
  const [resultado, setResultado] = useState([]);
  console.log(q, productos);
  useEffect(() => {
    const busqueda = q.toLowerCase();
    const filtro = productos.filter((producto) => {
      return (
        producto.nombre.toLowerCase().includes(busqueda) ||
        producto.descripcion.toLowerCase().includes(busqueda)
      );
    });
    setResultado(filtro);
  }, [q, productos]);
  return (
    <>
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
              {resultado.map((producto) => (
                <DetallesProducto key={producto.id} producto={producto} />
              ))}
            </ListadoProd>
          </Contenedor>
        </ListadoProductos>
      </Layout>
    </>
  );
};

export default Buscar;
