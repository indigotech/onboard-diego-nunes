import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonSeparator, Container } from "../routes/admin-styles";
import { GET_USERS_LIMIT, useUsers } from "../domain/get-users";
import { Spacer } from "../styles/constants";

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
    <Container>
      <h2>Bem vindo ao painel do Admin</h2>
      <h2>Lista de usuários</h2>
      {loading ? (
        <h2>Carregando...</h2>
      ) : error ? (
        <h2>Algo errado ocorreu, tente novamente</h2>
      ) : (
        <>
          <table>
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
          </table>
        </>
      )}
      <Spacer />
      <div>
        <button type="button" onClick={handlePrevPage}>
          ⬅
        </button>
        <Spacer />
        <p>{numberPage}</p>
        <Spacer />
        <button type="button" onClick={handleNextPage}>
          ⮕
        </button>
        <Spacer />
        <button onClick={handleClick}>Add User ✍🏼</button>
      </div>
    </Container>
  );
};
