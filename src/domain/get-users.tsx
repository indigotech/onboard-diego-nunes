import { useQuery } from "@apollo/client";
import { GET_USERS } from "../data/graphql/queries/get-users-query";
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
export const LIMIT = 10;
export const useUsers = (offset: number) => {
  const token = localStorage.getItem("token");
  const { data, loading, error } = useQuery<
    UsersQueryResponse,
    UsersQueryVariables
  >(GET_USERS, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      offset: offset,
      limit: LIMIT,
    },
  });
  return {
    users: data?.users.nodes,
    loading,
    error,
  };
};
