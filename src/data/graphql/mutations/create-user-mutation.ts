import { gql } from "@apollo/client";

export const ADDUSER = gql`
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
