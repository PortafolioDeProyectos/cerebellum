import React from "react";
import Link from "next/link";
import { chakra } from "@chakra-ui/react";
export const BotonChakra = ({ titulo, ruta, color }) => {
  console.log("clockkk");
  return (
    <Link href={ruta}>
      <chakra.a
        px="3"
        py="2"
        width={60}
        textAlign="center"
        bgColor={color}
        color="white"
        ml={3}
        rounded="md"
        _hover={{ bg: "blue.300" }}
        cursor="pointer"
      >
        {titulo}
      </chakra.a>
    </Link>
  );
};
