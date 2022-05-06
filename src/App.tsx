import React, { useState } from "react";
import "./App.css";
import Logo from "./logo.png";
import { isValidEmail, isValidPassword } from "./utils/validate";

function App() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

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
        <form onSubmit={handleSubmit}>
          <label>
            E-mail:
            <input onChange={handleChangeEmail} required={true} />
          </label>
          {<p>{errorEmail}</p>}
          <label>
            Password:
            <input onChange={handleChangePassword} required={true} />
          </label>
          {<p>{errorPassword}</p>}
          <button type="submit">Entrar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
