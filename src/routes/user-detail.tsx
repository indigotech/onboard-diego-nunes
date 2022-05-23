import { useLocation, useNavigate } from "react-router";
import { useUserDetails } from "../domain/get-user-detail";
import { ButtonStyled, H2 } from "../styles/basic-components-styles";
import { Spacer } from "../styles/separator";
import {
  PositionButtonStyled,
  UserDetailContainerStyled,
  UserDetailTableStyled,
} from "./user-detail-styles";

export const UserDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = Number(location.state);
  const { user, loading, error } = useUserDetails(state);
  return (
    <UserDetailContainerStyled>
      <H2>Detalhes do Usuário </H2>
      <Spacer />
      {loading ? (
        <H2>Carregando...</H2>
      ) : error ? (
        <H2>Desculpe ocorreu um erro, tente novamente</H2>
      ) : (
        <>
          <UserDetailTableStyled>
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
          </UserDetailTableStyled>
          <Spacer />
          <PositionButtonStyled>
            <ButtonStyled
              onClick={() => {
                navigate("/admin");
              }}
            >
              ⬅
            </ButtonStyled>
          </PositionButtonStyled>
          <Spacer />
        </>
      )}
    </UserDetailContainerStyled>
  );
};
