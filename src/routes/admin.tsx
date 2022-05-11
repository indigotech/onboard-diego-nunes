import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LIMIT, useUsers } from "../domain/get-users";

export const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);

  const { users, loading, error } = useUsers(offset);
  const numberPage = 1 + offset / 10;

  const handleNextPage = () => {
    setOffset(offset + LIMIT);
  };

  const handlePrevPage = () => {
    if (numberPage !== 1) {
      setOffset(offset - LIMIT);
    }
  };

  const handleClick = () => {
    navigate("/add-user");
  };

  return (
    <>
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
                <th>Usuário</th>
                <th>E-mail</th>
              </tr>
            </thead>
            {users?.map((user: { name: string; id: string; email: string }) => {
              return (
                <tbody key={user.email}>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <button type="button" onClick={handlePrevPage}>
            ⬅
          </button>
          <p>{numberPage}</p>
          <button type="button" onClick={handleNextPage}>
            ⮕
          </button>
        </>
      )}
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>E-mail</th>
          </tr>
        </thead>
      </table>
      <button type="button" onClick={handlePrevPage}>
        ⬅
      </button>
      <p>{numberPage}</p>
      <button type="button" onClick={handleNextPage}>
        ⮕
      </button>
      <button onClick={handleClick}>Add User</button>
    </>
  );
};
