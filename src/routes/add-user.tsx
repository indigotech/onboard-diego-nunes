import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAddUsers } from "../domain/add-user";
import { Spacer } from "../styles/constants";
import { Container } from "./add-user-styles";

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
    <Container>
      <h2>Criação de usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          onChange={handleName}
          pattern="(/^([a-zA-Z]{2,}\s[a-zA-Z]{0,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
          required
          title={"Mínimo 2 caracteres"}
        />
        <Spacer />
        <label>Telefone</label>
        <input
          onChange={handlePhone}
          pattern="(^[0-9]*$)"
          required
          title={"telefone deve ter somente números"}
        />
        <Spacer />
        <label>Nascimento</label>
        <input
          required
          onChange={handleBirth}
          pattern="(^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$)"
          title={"Formato AAAA-MM-DD"}
        />
        {<p>{errorBirth}</p>}
        <Spacer />
        <label>E-mail</label>
        <input
          type="text"
          onChange={handleEmail}
          pattern="(^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$)"
          title={"email incorreto! formato esperado: aaaa@aaaa.com.aa"}
          required
        />
        <Spacer />
        <select onChange={handleRole}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <Spacer />
        <div>
          <button type="submit" disabled={loading ? true : false}>
            {loading ? "Enviando" : "Enviar"}
          </button>
          <Spacer />
          <button
            onClick={() => {
              navigate("/admin");
            }}
          >
            ⬅
          </button>
        </div>
      </form>
    </Container>
  );
};
