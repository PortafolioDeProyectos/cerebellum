import styled from "@emotion/styled";

export const Formulario = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 2rem auto 2rem auto;

  fieldset {
    margin: 2rem 0;
    border: 2px solid #e1e1e1;
    font-size: 2rem;
    padding: 2rem;
  }
`;

export const Campo = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
  }
  input,
  textarea {
    flex: 1;
    padding: 1rem;
  }
  textarea {
    height: 400px;
  }
`;

export const InputSubmit = styled.input`
  background-color: #7cb6f5;
  width: 100%;
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  font-family: "PT Sans", sans-serif;
  font-weight: 700;

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
