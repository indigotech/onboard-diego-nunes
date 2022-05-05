import React from "react";
import "./App.css";
import Logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Bem-vindo à Taqtile</p>
        <img src={Logo} width="100px" height="100px" />
        <input placeholder="E-mail" />
        <input placeholder="Senha" />
        <button>Entrar</button>
      </header>
    </div>
  );
}

export default App;
