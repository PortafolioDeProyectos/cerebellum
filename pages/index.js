import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";

const Parrafo = styled.p`
  max-width: 1200px;
  width: 95%;
  margin: 2rem auto 0 auto;
`;
const Inicio = () => {
  return (
    <div>
      <Layout>
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
