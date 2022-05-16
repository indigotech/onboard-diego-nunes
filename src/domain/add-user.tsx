import { ApolloError, useMutation } from "@apollo/client";
import { useRef } from "react";
import { ADD_USER_MUTATION } from "../data/graphql/mutations/create-user-mutation";

export const GET_USERS_LIMIT = 10;

export const useAddUsers = () => {
  const token = useRef(localStorage.getItem("token")).current;
  const [addUser, { loading }] = useMutation(ADD_USER_MUTATION, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    onError: (error: ApolloError) => {
      alert(error.message);
    },
    onCompleted: () => {
      alert("Cadastrado com sucesso");
    },
  });
  return {
    loading,
    addUser,
  };
};
