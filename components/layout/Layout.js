import React from "react";
import Header from "./Header";
import { Global, css } from "@emotion/react";
import Head from "next/head";
const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --gris: #252525;
            --azul: #1d51dd;
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: "Monda";
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
            font-family: "Monda";
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            font-family: "Monda";
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <Head>
        <html lang="es" />
        <title>Cerebellum</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"
          integrity="sha512-Ojqt7YpXqYM6//AdMhErV3ot38rYgGF5QLJEwx7zhesjL9VqfhWiRz/dWK22hsn96RNz0CLl85+pg1P0BmfgVQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link href="/static/css/app.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Monda:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
