import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";

const Heading = styled.h1`
  color: #36b66d;
  font-family: "Times New Roman", Times, serif;
`;

const Inicio = () => {
  return (
    <div>
      <Layout>
        <Heading>Inicio</Heading>
      </Layout>
    </div>
  );
};

export default Inicio;
