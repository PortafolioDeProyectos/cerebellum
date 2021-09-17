import * as React from "react";
import {Contador} from "../components/Incrementador"
import Layout from "../components/layout/Layout";
import {css} from "@emotion/react"
import styled from "@emotion/styled";
 const Typo = styled.div(`
 color:red;
 `)

const Ayuda = () => {
  return (
    <>
      <Layout>
          <Typo>
        <h3
          css={css`
            text-align: center;
            margin-top: 2rem;
          `}
        >
          Ejemplo usando TypeScript
        </h3>
        </Typo>
        <Contador />
      </Layout>
    </>
  );
};

export default Ayuda;
