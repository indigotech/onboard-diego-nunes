import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { FormInput } from "../components/form-component";
import { useAddUsers } from "../domain/add-user";
import { ButtonStyled } from "../styles/basic-components-styles";
import { Spacer } from "../styles/separator";
import {
  isValidBirth,
  isValidEmail,
  isValidName,
  isValidPhone,
} from "../utils/validate";
import {
  AddUserContainerStyled,
  AddUserGroupButton,
  InputFormStyled,
} from "./add-user-styles";

export const AddUserPage: React.FC = () => {
  const name = "";
  const phone = "";
  const birthDate = "";
  const email = "";
  const role = "";

  const formValues = useRef({ name, phone, birthDate, email, role }).current;

  const navigate = useNavigate();

  const [errorBirth, setErrorBirth] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

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

    if (isValidName(formValues.name)) {
      setErrorName("");
    } else {
      setErrorName("Nome Inválido");
    }

    if (isValidPhone(formValues.phone)) {
      setErrorPhone("");
    } else {
      setErrorPhone("Telefone Inválido: somente números");
    }

    if (isValidEmail(formValues.email)) {
      setErrorEmail("");
    } else {
      setErrorEmail("Email incorreto! formato esperado: aaaa@aaaa.com.aa  ");
    }
    const year = formValues.birthDate?.slice(0, 4);
    if (Number(year) > 2022 || !isValidBirth(formValues.birthDate)) {
      setErrorBirth(
        "Não pode ser viajante do tempo ou o formato desejado é AAAA-MM-DD"
      );
    } else {
      setErrorBirth("");
      addUser({
        variables: { data: formValues },
      });
    }
  };
  const { addUser, loading } = useAddUsers();
  return (
    <AddUserContainerStyled>
      <h2>Criação de usuário</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          name={"Nome"}
          handle={handleName}
          required
          error={errorName}
        />
        <FormInput
          name={"Telefone"}
          handle={handlePhone}
          required
          error={errorPhone}
        />
        <FormInput
          name={"Nascimento"}
          handle={handleBirth}
          required
          error={errorBirth}
        />
        <FormInput
          name={"E-mail"}
          handle={handleEmail}
          required
          error={errorEmail}
        />
        <InputFormStyled>
          <select onChange={handleRole}>
            <option value="">Selecione</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </InputFormStyled>
        <Spacer />
        <AddUserGroupButton>
          <ButtonStyled type="submit" disabled={loading ? true : false}>
            {loading ? "Enviando..." : "Enviar"}
          </ButtonStyled>
          <Spacer />
          <ButtonStyled
            onClick={() => {
              navigate("/admin");
            }}
          >
            ⬅
          </ButtonStyled>
        </AddUserGroupButton>
      </form>
    </AddUserContainerStyled>
  );
};
