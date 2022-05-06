import React, { useState } from "react";
import "./App.css";
import Logo from "./logo.png";
import { ValidateEmail, ValidatePassword } from "./utils/validate";

function App() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    ValidateEmail(email) ? setErrorEmail("E-mail Inválido") : setErrorEmail("");

    ValidatePassword(password)
      ? setErrorPassword(
          "Password Inválido Lembre-se: Mínimo 7 caracteres, deve conter, ao menos ,uma letra e um número."
        )
      : setErrorPassword("");
    e.preventDefault();
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Bem-vindo à Taqtile</p>
        <img src={Logo} width="100px" height="100px" />
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            placeholder="E-mail"
            onChange={handleChangeEmail}
            required={true}
          />
          {<p>{errorEmail}</p>}

          <input
            placeholder="Senha"
            onChange={handleChangePassword}
            required={true}
          />
          {<p>{errorPassword}</p>}
          <button type="submit">Entrar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
