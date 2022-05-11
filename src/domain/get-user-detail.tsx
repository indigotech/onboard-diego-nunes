import { useQuery } from "@apollo/client";
import { GET_USER_DETAIL } from "../data/graphql/queries/get-user-detail-query";
interface UseUserResponse {
  id: string;
  role: string;
  name: string;
  email: string;
  birthDate: string;
  phone: string;
}
interface userResponse {
  user: UseUserResponse;
}
interface userVariables {
  id: number;
}
export const useUserDetails = (id: number) => {
  const token = localStorage.getItem("token");
  const { data, loading, error } = useQuery<userResponse, userVariables>(
    GET_USER_DETAIL,
    {
      context: {
        headers: {
          Authorization: token,
        },
      },
      variables: {
        id: id,
      },
    }
  );
  return {
    user: data?.user,
    loading,
    error,
  };
};
