import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
      <button
        onClick={handleLogout}
        className="bg-[#FD7D07] p-2 flex justify-center items-center rounded-md cursor-pointer text-white font-bold "
      >
        {loading ? (
          <div className="h-6 w-6  animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          "Logout"
        )}
      </button>
    </header>
  );
};
