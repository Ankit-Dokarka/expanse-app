import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  const user = localStorage.getItem("currentUser");
  if (!user) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};
