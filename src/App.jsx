import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { UserExpanseProvider } from "./context/userExpanseContext";
import { Register } from "./pages/Register";

const App = () => {
  return (
    <UserExpanseProvider>
      {/* <ExpenseForm/>
      <ExpenseList /> */}
      <Register/>
    </UserExpanseProvider>
  );
};

export default App;
