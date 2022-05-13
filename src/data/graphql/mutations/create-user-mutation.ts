import { gql } from "@apollo/client";

export const ADD_USER_MUTATION = gql`
  mutation CreateUser($data: UserInputType!) {
    createUser(data: $data) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;
