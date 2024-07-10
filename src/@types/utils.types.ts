import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { TMessageResponse } from "./api/api.types";

export type TResType =
  | {
      data: TMessageResponse;
    }
  | {
      error: FetchBaseQueryError | SerializedError;
    };
