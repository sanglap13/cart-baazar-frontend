import { Navigate, Outlet } from "react-router-dom";
import { IProtectedRoutesProps } from "../../../@types/props/protectedRoutes.types";

const ProtectedRoutes = ({
  isAuthenticated,
  children,
  adminOnly,
  admin,
  redirect = "/",
}: IProtectedRoutesProps) => {
  if (!isAuthenticated) return <Navigate to={redirect} />;

  if (adminOnly && !admin) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
