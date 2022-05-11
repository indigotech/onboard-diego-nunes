import React, { useState } from "react";

export const AddUserPage: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");

  const [errorBirth, setErrorBirth] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const year = birth?.slice(6, 10);
    if (Number(year) > 2022) {
      setErrorBirth("A pessoa não pode ser viajante do tempo");
    } else {
      setErrorBirth("");
      console.log("Nome:", name);
      console.log("Telefone:", phone);
      console.log("Data de Nascimento:", birth);
      console.log("Email:", email);
    }
  };
  return (
    <>
      <h2>Criação de usuário</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ margin: 16, display: "flex" }}>
          Nome:
          <input
            onChange={handleName}
            pattern="(\w{2,})"
            required
            title={"Mínimo 2 caracteres"}
          />
        </label>
        <label style={{ margin: 16, display: "flex" }}>
          Telefone:
          <input
            onChange={handlePhone}
            pattern="(^\([\d_]{2}\)[\d_]{5}-[\d_]{4}$)"
            required
            title={"telefone deve ter o formato (xx)xxxxx-xxxx"}
          />
        </label>
        <label style={{ margin: 16, display: "flex" }}>
          Nascimento:
          <input
            required
            onChange={handleBirth}
            pattern="^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$"
            title={"Formato DD/MM/AAAA"}
          />
        </label>
        {<p>{errorBirth}</p>}
        <label style={{ margin: 16, display: "flex" }}>
          E-mail:
          <input
            type="text"
            onChange={handleEmail}
            pattern="(^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$)"
            title={"email incorreto! formato esperado: aaaa@aaaa.com.aa"}
            required
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </>
  );
};
