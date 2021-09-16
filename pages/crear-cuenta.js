import React from "react";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/react";
import { Formulario, Campo, InputSubmit } from "../components/ui/Formulario";
const Crear = () => (
  <div>
    <Layout>
      <>
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
          `}
        >
          Crear cuenta
        </h1>
        <Formulario>
          <Campo>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu nombre"
              name="nombre"
            ></input>
          </Campo>
          <Campo>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Tu email"
              name="email"
            ></input>
          </Campo>
          <Campo>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Tu password"
              name="password"
            ></input>
          </Campo>
          <InputSubmit type="submit" value="Crear cuenta" />
        </Formulario>
      </>
    </Layout>
  </div>
);

export default Crear;
