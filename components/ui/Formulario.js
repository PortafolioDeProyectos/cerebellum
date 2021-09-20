import styled from "@emotion/styled";

export const Formulario = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 0 auto;
`;

export const Campo = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
  }
  input {
    flex: 1;
    padding: 1rem;
  }
`;

export const InputSubmit = styled.input`
  background-color: var(--azul);
  width: 100%;
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const InputSubmitInc = styled.input`
  background-color: var(--azul);
  width: 100%;
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Error = styled.p`
  background-color: red;
  color: #fff;
  text-transform: uppercase;
  padding: 1rem;
  margin: 2rem 0;
  text-align: center;
  font-size: 1.4rem;
`;
