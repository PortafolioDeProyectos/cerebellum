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

    font-family: "PT Sans", sans-serif;
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
            <Link href="/populares">Populares</Link>
          </>
        )}
      </Navegacion>
    </div>
  );
};

export default Nav;
