import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { UserExpanseProvider } from "./context/userExpanseContext";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { Header } from "./components/Header";

const App = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route
          path="/"
          element={
            <UserExpanseProvider>
              <Header />
              <ExpenseForm />
              <ExpenseList />
            </UserExpanseProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
