import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FirebaseContext } from "../../firebase";

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
  const { usuario } = useContext(FirebaseContext);
  return (
    <div>
      <Navegacion>
        <Link href="/">Inicio</Link>

        {usuario && (
          <>
            <Link href="/nuevo-producto">Nuevo Producto</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/ayuda">Ayuda (TypeScript)</Link>
          </>
        )}
      </Navegacion>
    </div>
  );
};

export default Nav;
