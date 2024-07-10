import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";
import { NavigateFunction } from "react-router-dom";
import { TMessageResponse } from "../../@types/api/api.types";
import { TResType } from "../../@types/utils.types";

export const responseToast = (
  res: TResType,
  navigate: NavigateFunction | null,
  url: string
) => {
  if ("data" in res) {
    toast.success(res.data.message);
    if (navigate) navigate(url);
  } else {
    const error = res.error as FetchBaseQueryError;
    const messageResponse = error.data as TMessageResponse;
    toast.error(messageResponse.message);
  }
};
