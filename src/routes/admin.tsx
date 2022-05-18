import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonSeparator,
  AdminContainerStyled,
  GroupButton,
  PageNumberStyled,
  AdminTableStyled,
} from "../routes/admin-styles";
import { GET_USERS_LIMIT, useUsers } from "../domain/get-users";
import { Spacer } from "../styles/separator";
import { Button, H2 } from "../styles/basic-components-styles";

export const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);

  const { users, loading, error } = useUsers(offset);
  const numberPage = 1 + offset / 10;

  const handleNextPage = () => {
    setOffset(offset + GET_USERS_LIMIT);
  };

  const handlePrevPage = () => {
    if (numberPage !== 1) {
      setOffset(offset - GET_USERS_LIMIT);
    }
  };

  const handleClick = () => {
    navigate("/add-user");
  };

  return (
    <AdminContainerStyled>
      <H2>Bem vindo ao painel do Admin</H2>
      <H2>Lista de usuários</H2>
      {loading ? (
        <H2>Carregando...</H2>
      ) : error ? (
        <H2>Algo errado ocorreu, tente novamente</H2>
      ) : (
        <>
          <AdminTableStyled>
            <thead>
              <tr>
                <th>índice</th>
                <th>Usuário</th>
                <th>E-mail</th>
              </tr>
            </thead>
            {users?.map((user: { name: string; id: string; email: string }) => {
              return (
                <tbody key={user.email}>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate("/user-detail", { state: user.id });
                        }}
                      >
                        🕵🏻‍♀️
                        <ButtonSeparator />
                        Info
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </AdminTableStyled>
        </>
      )}
      <Spacer />
      <GroupButton>
        <Button type="button" onClick={handlePrevPage}>
          ⬅
        </Button>
        <Spacer />
        <PageNumberStyled>{numberPage}</PageNumberStyled>
        <Spacer />
        <Button type="button" onClick={handleNextPage}>
          ⮕
        </Button>
        <Spacer />
        <Button onClick={handleClick}>Add User ✍🏼</Button>
      </GroupButton>
    </AdminContainerStyled>
  );
};
