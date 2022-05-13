import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users($offset: Int, $limit: Int) {
    users(pageInfo: { offset: $offset, limit: $limit }) {
      nodes {
        id
        name
        email
      }
      count
      pageInfo {
        offset
        limit
      }
    }
  }
`;
