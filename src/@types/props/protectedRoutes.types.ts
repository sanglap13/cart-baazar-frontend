import { ReactElement } from "react";

export interface IProtectedRoutesProps {
  children?: ReactElement;
  isAuthenticated: boolean;
  adminOnly?: boolean;
  admin?: boolean;
  redirect?: string;
}
