import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TMessageResponse, TUserResponse } from "../../@types/api/api.types";
import { TUser } from "../../@types/interfaces/user.types";
import axios from "axios";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/user/`,
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    login: builder.mutation<TMessageResponse, TUser>({
      query: (user) => ({
        url: "new",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),

    //     deleteUser: builder.mutation<TMessageResponse, DeleteUserRequest>({
    //       query: ({ userId, adminUserId }) => ({
    //         url: `${userId}?id=${adminUserId}`,
    //         method: "DELETE",
    //       }),
    //       invalidatesTags: ["users"],
    //     }),

    //     allUsers: builder.query<AllUsersResponse, string>({
    //       query: (id) => `all?id=${id}`,
    //       providesTags: ["users"],
    //     }),
  }),
});

export const getUser = async (id: string) => {
  try {
    const { data }: { data: TUserResponse } = await axios.get(
      `${import.meta.env.VITE_SERVER}/api/v1/user/${id}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const { useLoginMutation } = userAPI;
