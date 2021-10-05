import React from "react";
import { Button, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
export const InputSubmit = ({ titulo }) => {
  return (
    <>
      <Button
        type="submit"
        bg="blue.500"
        width="100%"
        padding=" 1.5rem "
        margin="20px 0"
        color="white"
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
