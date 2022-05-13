import { useQuery } from "@apollo/client";
import { useRef } from "react";
import { GET_USERS_QUERY } from "../data/graphql/queries/get-users-query";
interface UsersQueryVariables {
  offset: number;
  limit: number;
}
interface UsersQueryResponse {
  users: { nodes: User[] };
}
interface User {
  id: string;
  name: string;
  email: string;
}
export const GET_USERS_LIMIT = 10;

export const useUsers = (offset: number) => {
  const token = useRef(localStorage.getItem("token")).current;
  const { data, loading, error } = useQuery<
    UsersQueryResponse,
    UsersQueryVariables
  >(GET_USERS_QUERY, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      offset: offset,
      limit: GET_USERS_LIMIT,
    },
  });
  return {
    users: data?.users.nodes,
    loading,
    error,
  };
};
