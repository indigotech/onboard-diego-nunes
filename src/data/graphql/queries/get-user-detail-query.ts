import { gql } from "@apollo/client";

export const GET_USER_DETAIL = gql`
  query UserDetail($id: ID!) {
    user(id: $id) {
      id
      role
      name
      email
      phone
      birthDate
    }
  }
`;
