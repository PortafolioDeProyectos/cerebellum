import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { FirebaseContext } from "../../firebase";
import Error404 from "../../components/layout/404";
import Layout from "../../components/layout/Layout";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import { Campo, InputSubmit } from "../../components/ui/Formulario";
import Boton from "../../components/ui/Boton";

const CreadorProducto = styled.p`
  padding: 0.5rem 2rem;
  background-color: #da552f;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;

const ContenedorProducto = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
`;
const Contnenedor = styled.div`
  max-width: 1200px;
  width: 95%;
  padding: 5rem 0;
  margin: 0 auto;
`;

const Producto = () => {
  //State del componente

  const [producto, setProducto] = useState({});
  const [error, setError] = useState(false);
  const [comentario, setComentario] = useState({});
  const [consultarBD, setConsultarBD] = useState(true);

  //Routing para obtener el  id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  //context de firebase
  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if (id) {
      const obtenerProducto = async () => {
        const productoQuery = await firebase.db.collection("productos").doc(id);
        const producto = await productoQuery.get();

        if (producto.exists) {
          setProducto(producto.data());
          // setConsultarBD(false);
        } else {
          setError(true);
          //setConsultarBD(false);
        }
      };
      obtenerProducto();
    }
  }, [id, producto]);
  if (Object.keys(producto).length === 0 && !error) return "Cargando...";
  const {
    comentarios,
    creado,
    descripcion,
    empresa,
    nombre,
    url,
    urlImagen,
    votos,
    creador,
    haVotado,
  } = producto;

  //administrar y validar votos

  const votarProducto = () => {
    if (!usuario) {
      Router.push("/");
    }
    //Obtener y sumar un nuevo voto
    const nuevoTotal = votos + 1;
    //Verificar si el usuario ha votado
    if (haVotado.includes(usuario.uid)) return;

    // guardar el id del usuario que ha votado
    const nuevoHaVotado = [...haVotado, usuario.uid];
    //Actualizar en la Bd
    firebase.db
      .collection("productos")
      .doc(id)
      .update({ votos: nuevoTotal, haVotado: nuevoHaVotado });
    //Actualizar en el state
    setProducto({ ...producto, votos: nuevoTotal });
    // setConsultarBD(true); //; hay un voto , por lo tanto consultar a la base de datos
  };

  //Funciones para crear comentario
  const comentarioChange = (e) => {
    setComentario({
      ...comentario,
      [e.target.name]: e.target.value,
    });
  };

  //Indentidica si el comentario es del creador del producto
  const esCreador = (id) => {
    if (creador.id === id) {
      return true;
    }
  };

  const agregarComentario = (e) => {
    e.preventDefault();
    if (!usuario) {
      Router.push("/login");
    }
    //Informaicon extra al comentario
    comentario.usuarioId = usuario.uid;
    comentario.nombre = usuario.displayName;

    //Tomar copia de comentario y agrearlo al arreglo
    const nuevosComentarios = [...comentarios, comentario];

    //Actualizar BD

    firebase.db.collection("productos").doc(id).update({
      comentarios: nuevosComentarios,
    });

    //Actualizar el state
    setProducto({ ...producto, comentarios: nuevosComentarios });
    //setConsultarBD(true); //; hay un comentario , por lo tanto consultar a la base de datos
  };

  return (
    <Layout>
      <>
        {error ? (
          <Error404 />
        ) : (
          <Contnenedor>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >
              {nombre}
            </h1>
            <ContenedorProducto>
              <div>
                <p>
                  Publicado hace :
                  {formatDistanceToNow(new Date(creado), { locale: es })}
                </p>
                <p>
                  Por: {creador.nombre} de {empresa}
                </p>
                <img src={urlImagen} />
                <p> {descripcion}</p>
                {usuario && (
                  <>
                    <h2>Agrega tu comentario</h2>
                    <form onSubmit={agregarComentario}>
                      <Campo>
                        <input
                          type="text"
                          name="mensaje"
                          onChange={comentarioChange}
                        ></input>
                      </Campo>
                      <InputSubmit type="submit" value="Agregar Comentario" />
                    </form>
                  </>
                )}
                <h2
                  css={css`
                    margin: 2rem 0;
                  `}
                >
                  Comentarios
                </h2>
                {comentarios.length === 0 ? (
                  "Aún no hay comentarios"
                ) : (
                  <ul>
                    {comentarios.map((comentario, i) => (
                      <li
                        key={`${comentario.usuarioId}-${i}`}
                        css={css`
                          border: 1px solid #e1e1e1;
                          padding: 2rem;
                        `}
                      >
                        <p>{comentario.mensaje}</p>
                        <p>
                          Escrito por:{" "}
                          <span
                            css={css`
                              font-weight: bold;
                            `}
                          >
                            {comentario.nombre}
                          </span>
                        </p>
                        {esCreador(comentario.usuarioId) && (
                          <CreadorProducto>Es Creador</CreadorProducto>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <aside>
                <Boton target="_Blank" bgColor="true" href={url}>
                  Visitar URL
                </Boton>

                <div
                  css={css`
                    margin-top: 5rem;
                  `}
                >
                  <p
                    css={css`
                      text-align: center;
                    `}
                  >
                    {votos} votos
                  </p>
                  {usuario && <Boton onClick={votarProducto}>Votar</Boton>}
                </div>
              </aside>
            </ContenedorProducto>
          </Contnenedor>
        )}
      </>
    </Layout>
  );
};

export default Producto;
