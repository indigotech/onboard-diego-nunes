import React, { useState } from "react";
import { getUsers, LIMIT } from "../domain/get-users";

export const AdminPage: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage(page + 1);
    setOffset(offset + LIMIT);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    if (page != 1) {
      setOffset(offset - LIMIT);
    } else {
      setPage(1);
    }
  };

  getUsers(0)?.users.nodes;
  return (
    <>
      <h2>Bem vindo ao painel do Admin</h2>
      <h2>Lista de usuários</h2>
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>E-mail</th>
          </tr>
        </thead>
        {getUsers(offset)?.users.nodes.map(
          (user: { name: string; id: string; email: string }) => {
            return (
              <tbody key={user.email}>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              </tbody>
            );
          }
        )}
      </table>
      <button type="button" onClick={handlePrevPage}>
        ⬅
      </button>
      <p>{page}</p>
      <button type="button" onClick={handleNextPage}>
        ⮕
      </button>
    </>
  );
};
