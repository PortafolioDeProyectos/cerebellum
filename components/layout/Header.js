import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Nav from "../layout/Nav";
import Boton from "../ui/Boton";
const ContenedorHeader = styled.dev`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  color: var(--azul);
  font-size: 3.5rem;
  line-height: 0;
  margin-right: 2rem;

  &:hover {
    cursor: pointer;
  }
`;
const Header = () => {
  const usuario = false;
  return (
    <header
      css={css`
        border-bottom: 2px solid #e1e1e1;
        padding: 1rem 0;
        background-color: #d8e8f8;
      `}
    >
      <ContenedorHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href="/">
            <Logo>Cerebellum</Logo>
          </Link>
          <Nav />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {usuario ? (
            <>
              {" "}
              <p
                css={css`
                  margin-right: 1rem;
                `}
              >
                Hola: Joaquin
              </p>
              <Boton bgColor="true">Cerrar session</Boton>
            </>
          ) : (
            <>
              {" "}
              <Link href="/login">
                <Boton bgColor="true">Login</Boton>
              </Link>
              <Link href="/crear-cuenta">
                <Boton>Crear cuenta</Boton>
              </Link>{" "}
            </>
          )}
        </div>
      </ContenedorHeader>
    </header>
  );
};

export default Header;
