import { useQuery } from "@apollo/client";
import { GET_USERS } from "../data/graphql/queries/get-users-query";

export const LIMIT = 10;
export const getUsers = (offset: number) => {
  const token = localStorage.getItem("token");
  const { data } = useQuery(GET_USERS, {
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
  return data;
};
