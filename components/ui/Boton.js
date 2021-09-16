import styled from "@emotion/styled";

const Boton = styled.a`
  font-family: "Monda";
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 2rem;
  margin-right: 1rem;
  background-color: ${(props) => (props.bgColor ? "#96C8F7 " : "white")};
  color: ${(props) => (props.bgColor ? "white" : "#000")};
  &::last-of-type {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;
export default Boton;
