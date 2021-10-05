import React from "react";
import { Button } from "@chakra-ui/react";
import Router from "next/router";
export const BotonChakra = ({ titulo, ruta, colorbg }) => {
  return (
    <Button
      bg={colorbg}
      padding=" 1.5rem "
      margin="20px 10px"
      color="white"
      fontSize="1.2rem"
      _hover={{ bg: "orange.400" }}
      onClick={() => Router.push({ ruta })}
    >
      {titulo}
    </Button>
  );
};
