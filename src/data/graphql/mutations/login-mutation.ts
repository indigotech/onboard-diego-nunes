import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($data: LoginInputType!) {
    login(data: $data) {
      user {
        id
        role
        name
        phone
      }
      token
    }
  }
`;
