import { useLocation, useNavigate } from "react-router";
import { useUserDetails } from "../domain/get-user-detail";
import { Spacer } from "../styles/constants";
import { Container } from "./user-detail-styles";

export const UserDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = Number(location.state);
  const { user, loading, error } = useUserDetails(state);
  return (
    <Container>
      <h2>Detalhes do Usuário </h2>
      <Spacer />
      {loading ? (
        <h2>Carregando...</h2>
      ) : error ? (
        <h2>Desculpe ocorreu um erro, tente novamente</h2>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Label</th>
                <th>Dado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Índice</th>
                <td>{user?.id}</td>
              </tr>
              <tr>
                <th>Tipo</th>
                <td>{user?.role}</td>
              </tr>
              <tr>
                <th>Nome</th>
                <td>{user?.name}</td>
              </tr>
              <tr>
                <th>E-mail</th>
                <td>{user?.email}</td>
              </tr>
              <tr>
                <th>Telefone</th>
                <td>{user?.phone}</td>
              </tr>
              <tr>
                <th>Data de nascimento</th>
                <td>{user?.birthDate}</td>
              </tr>
            </tbody>
          </table>
          <Spacer />
          <div>
            <button
              onClick={() => {
                navigate("/admin");
              }}
            >
              ⬅
            </button>
          </div>
          <Spacer />
        </>
      )}
    </Container>
  );
};
