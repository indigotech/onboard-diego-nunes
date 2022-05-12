import { ApolloError, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADDUSER } from "../data/graphql/mutations/create-user-mutation";

export const AddUserPage: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

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

  const handleRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const year = birthDate?.slice(0, 4);
    if (Number(year) > 2022) {
      setErrorBirth("A pessoa não pode ser viajante do tempo");
    } else {
      setErrorBirth("");
      addUser({
        variables: { data: { name, email, phone, birthDate, role } },
      });
    }
  };
  const token = localStorage.getItem("token");
  const [addUser, { loading }] = useMutation(ADDUSER, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    onError: (error: ApolloError) => {
      alert(error.message);
    },
    onCompleted: () => {
      alert("Cadastrado com sucesso");
    },
  });
  return (
    <>
      <h2>Criação de usuário</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ margin: 16, display: "flex" }}>
          Nome:
          <input
            onChange={handleName}
            pattern="(/^([a-zA-Z]{2,}\s[a-zA-Z]{0,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
            required
            title={"Mínimo 2 caracteres"}
          />
        </label>
        <label style={{ margin: 16, display: "flex" }}>
          Telefone:
          <input
            onChange={handlePhone}
            pattern="(^[0-9]*$)"
            required
            title={"telefone deve ter somente números"}
          />
        </label>
        <label style={{ margin: 16, display: "flex" }}>
          Nascimento:
          <input
            required
            onChange={handleBirth}
            pattern="(^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$)"
            title={"Formato AAAA-MM-DD"}
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
        <label>
          <select onChange={handleRole}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
        <button type="submit" disabled={loading ? true : false}>
          {loading ? "Enviando" : "Enviar"}
        </button>
      </form>
    </>
  );
};
