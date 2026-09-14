import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const users = JSON.parse(localStorage.getItem("usersData")) || {};
  const [role, setRole] = useState(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      if (currentUser === "admin@gmail.com") {
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
      return { success: true, message: "Account is created." };
    }
  };
  const login = (data) => {
    if (users[data.email]) {
      if (users[data.email].password === data.password) {
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
    return { success: true, message: "Logout successfull." };
  };
  return (
    <AuthContext.Provider value={{ signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
