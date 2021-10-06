import React, { useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Nav from "../layout/Nav";
import Boton from "../ui/Boton";
import Buscar from "../ui/Buscar";
import { BotonChakra } from "../ui/ControlesChakra";
import { FirebaseContext } from "../../firebase";
import { chakra } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
const ContenedorHeader = styled.div`
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
  const { usuario, firebase } = useContext(FirebaseContext);
  return (
    <Box bgGradient="linear(to-r, blue.400, blue.200, blue.400)" py={4}>
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

          <Buscar />
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
              <Text fontSize="3xl">Hola: {usuario.displayName}</Text>
              <chakra.a
                px="3"
                py="2"
                bgColor="whatsapp.500"
                width={60}
                textAlign="center"
                color="white"
                ml={3}
                rounded="md"
                _hover={{ bg: "whatsapp.300" }}
                cursor="pointer"
                onClick={() => {
                  firebase.cerrarSesion(), Router.push("/");
                }}
              >
                Cerrar session
              </chakra.a>
            </>
          ) : (
            <>
              <BotonChakra
                titulo={"Login"}
                ruta={"/login"}
                color={"orange.500"}
              />
              <BotonChakra
                titulo={"Crear cuenta"}
                ruta={"/crear-cuenta"}
                color={"green.500"}
              />
            </>
          )}
        </div>
      </ContenedorHeader>
    </Box>
  );
};

export default Header;
