import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "@mantine/core";

export const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    const res = logout();
    if (res.success) {
      navigate("/login");
    }
  };
  return (
    <header className="h-18 fixed top-0  right-0 left-0 z-30 border-2 border-b-[#228BE6] border-t-transparent border-r-transparent border-l-transparent shadow-lg flex justify-end items-center pr-12">
      <Button onClick={handleLogout}>Logout</Button>
    </header>
  );
};
