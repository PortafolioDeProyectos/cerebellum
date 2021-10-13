import React from "react";
import { Button, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
export const InputSubmit = ({ titulo }) => {
  return (
    <>
      <Button
        type="submit"
        width="100%"
        padding=" 1.5rem "
        marginTop="30px"
        colorScheme="blue"
        fontSize="1.2rem"
        _hover={{ bg: "blue.300" }}
      >
        {titulo}
      </Button>
    </>
  );
};

export const ErrorFormulario = ({ error }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{error}</AlertTitle>
    </Alert>
  );
};
