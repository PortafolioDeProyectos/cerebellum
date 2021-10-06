import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FirebaseContext } from "../../firebase";
import { Stack, Box, chakra } from "@chakra-ui/react";

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
    <Box>
      <Stack
        direction="row"
        spacing={4}
        marginLeft={6}
        fontSize="2xl"
        color="gray.600"
        fontWeight="bold"
      >
        <Link href="/">
          <chakra.a
            cursor="pointer"
            // _hover={{  }}
            rounded={10}
            padding={2}
            textAlign="center"
            alignItems="center"
          >
            Inicio
          </chakra.a>
        </Link>

        {usuario && (
          <>
            <Link href="/nuevo-producto">Nuevo Producto</Link>
            <Link href="/populares">Populares</Link>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Nav;
