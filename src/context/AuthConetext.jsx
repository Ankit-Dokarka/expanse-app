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
      setTimeout(() => {
        return { success: false, message: "This email already exist." };
      }, 2000);
    } else {
      data.expanses = [];
      users[data.email] = data;
      localStorage.setItem("usersData", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(data.email));
      setTimeout(() => {
        return { success: true, message: "Account is created." };
      }, 2000);
    }
  };
  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
