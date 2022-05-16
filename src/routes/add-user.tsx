import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAddUsers } from "../domain/add-user";

export const AddUserPage: React.FC = () => {
  const name = "";
  const phone = "";
  const birthDate = "";
  const email = "";
  const role = "";

  const formValues = useRef({ name, phone, birthDate, email, role }).current;

  const navigate = useNavigate();

  const [errorBirth, setErrorBirth] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    formValues.name = e.target.value;
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    formValues.phone = e.target.value;
  };

  const handleBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    formValues.birthDate = e.target.value;
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    formValues.email = e.target.value;
  };

  const handleRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    formValues.role = e.target.value;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const year = formValues.birthDate?.slice(0, 4);
    if (Number(year) > 2022) {
      setErrorBirth("A pessoa não pode ser viajante do tempo");
    } else {
      setErrorBirth("");
      addUser({
        variables: { data: formValues },
      });
    }
  };
  const { addUser, loading } = useAddUsers();
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
        <button
          onClick={() => {
            navigate("/admin");
          }}
        >
          ⬅
        </button>
      </form>
    </>
  );
};
