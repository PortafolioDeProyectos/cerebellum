import React, { useState } from "react";
import { Formulario, InputSubmitInc } from "../components/ui/Formulario";
import styled from "@emotion/styled";

const Valor = styled.h1`
  color: green;
  text-align: center;
`;

export const Contador = () => {
  const [valor, setValor] = useState(0);
  const incrementar = (numero: number = 1): void => {
    setValor(valor + numero);
  };

  return (
    <>
      <Formulario>
        <Valor>Valor:{valor}</Valor>
        <InputSubmitInc
          defaultValue="Incremetar en 1"
          onClick={() => incrementar()}
        ></InputSubmitInc>
        <InputSubmitInc
          defaultValue="Incrementar en 2"
          onClick={() => incrementar(2)}
        ></InputSubmitInc>
        <InputSubmitInc
          defaultValue="Resetear"
          onClick={() => setValor(0)}
        ></InputSubmitInc>
      </Formulario>
    </>
  );
};
