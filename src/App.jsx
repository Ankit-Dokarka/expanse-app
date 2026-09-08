import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { UserExpanseProvider } from "./context/userExpanseContext";

const App = () => {
  return (
    <UserExpanseProvider>
      <ExpenseForm/>
      <ExpenseList />
    </UserExpanseProvider>
  );
};

export default App;
