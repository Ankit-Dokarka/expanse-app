import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "@mantine/core";

export const Header = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    setLoading(true);
    const res = logout();
    if (res.success) {
      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 2000);
    }
  };
  return (
    <header className="h-18 fixed top-0  right-0 left-0 z-30 border-2 border-b-[#FD7D07] border-t-transparent border-r-transparent border-l-transparent shadow-lg flex justify-end items-center pr-12">
      <Button onClick={handleLogout} loading={loading}>
        Logout
      </Button>
    </header>
  );
};
