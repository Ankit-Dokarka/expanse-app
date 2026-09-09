import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const user = localStorage.getItem("currentUser");
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
