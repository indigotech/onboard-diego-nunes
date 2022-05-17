import React, { useState } from "react";
import Logo from "./logo.png";
import { isValidEmail, isValidPassword } from "./utils/validate";

import { ApolloError, useMutation } from "@apollo/client";
import { LOGIN } from "./data/graphql/mutations/login-mutation";
import { useNavigate } from "react-router-dom";

import { Container } from "./App-styles";

function App() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const [login, { loading }] = useMutation(LOGIN, {
    onError: (error: ApolloError) => {
      alert(error.message);
    },
    onCompleted: ({ login }) => {
      localStorage.setItem("token", login.token);
      navigate("/admin");
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      setErrorEmail("");
    } else {
      setErrorEmail("E-mail Inválido");
    }
    if (isValidPassword(password)) {
      setErrorPassword("");
    } else {
      setErrorPassword(
        "Password Inválido Lembre-se: Mínimo 7 caracteres, deve conter, ao menos ,uma letra e um número."
      );
    }
    login({ variables: { data: { email, password } } });
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <header className="App-header">
        <p>Bem-vindo à Taqtile</p>
        <img src={Logo} width="100px" height="100px" />
        <form onSubmit={handleSubmit}>
          <label>E-mail</label>
          <input onChange={handleChangeEmail} required={true} />
          {<p>{errorEmail}</p>}
          <label>Password</label>
          <input onChange={handleChangePassword} required={true} />
          {<p>{errorPassword}</p>}
          <button type="submit" disabled={loading ? true : false}>
            {loading ? "carregando..." : "Entrar"}
          </button>
        </form>
      </header>
    </Container>
  );
}

export default App;
