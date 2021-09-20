import * as React from "react";
import {Contador} from "../components/Incrementador";
import Layout from "../components/layout/Layout";
import {css} from "@emotion/react";
import styled from "@emotion/styled"
const Titulo = styled.h3`
color:red;
text-align: center;
margin-top: 5rem;
text-transform: uppercase;
`

const Ayuda = () => {
  return (
    <div>
      <Layout>  
        <>
        <Titulo>
          Ejemplo usando TypeScript
        </Titulo>       
        <Contador />
      </>
      </Layout>
    </div>
  );
};

export default Ayuda;
