import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { UserExpanseProvider } from "./context/userExpanseContext";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <UserExpanseProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
         <Routes>
          <Route path="/" element={
            <>
              <ExpenseForm/>
              <ExpenseList/>
            </>
            }/> 
        </Routes>
      </Router>
      
      
    </UserExpanseProvider>
  );
};

export default App;
