import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const Navegacion = styled.nav`
  padding-left: 2rem;
  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gris);
    &:last-of-type {
      margin-right: 0;
    }

    font-family: "Monda";
  }
`;
const Nav = () => {
  return (
    <div>
      <Navegacion>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">Nosotros</Link>
      </Navegacion>
    </div>
  );
};

export default Nav;
