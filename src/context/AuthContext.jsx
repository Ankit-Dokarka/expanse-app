import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const users = JSON.parse(localStorage.getItem("usersData")) || {};
  const admin = JSON.parse(localStorage.getItem("admin")) || "";
  const [role, setRole] = useState(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      if (currentUser === admin.email) {
        return "admin";
      } else {
        return "user";
      }
    }
    return "";
  });

  const signUp = (data) => {
    if (users[data.email]) {
      return { success: false, message: "This email already exist." };
    } else {
      data.expanses = [];
      users[data.email] = data;
      localStorage.setItem("usersData", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(data.email));
      setRole("user");
      return { success: true, message: "Account is created." };
    }
  };

  const login = (data) => {
    if (data.email === admin.email) {
      if (data.password === admin.password) {
        setRole("admin");
        localStorage.setItem("currentUser", JSON.stringify(data.email));
        return { success: true, message: "Login successfull." };
      } else {
        return { success: false, message: "Invalid credenatils" };
      }
    }
    if (users[data.email]) {
      if (users[data.email].password === data.password) {
        setRole("user");
        localStorage.setItem("currentUser", JSON.stringify(data.email));
        return { success: true, message: "Login successfull." };
      } else {
        return { success: false, message: "Invalid credenatils" };
      }
    } else {
      return { success: false, message: "Please sign-up" };
    }
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setRole("");
    return { success: true, message: "Logout successfull." };
  };

  return (
    <AuthContext.Provider value={{ signUp, login, logout, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
