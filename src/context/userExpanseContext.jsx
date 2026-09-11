import { createContext, useContext, useState } from "react";

const userExpanseContext = createContext();

export const UserExpanseProvider = ({ children }) => {
  const users = JSON.parse(localStorage.getItem("usersData"));
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [editingExpense, setEditingExpense] = useState(null);
  const [expanses, setExpanses] = useState(() => {
    const savedExpanses = localStorage.getItem("usersData");
    if (!savedExpanses) {
      return [];
    } else {
      const data = JSON.parse(savedExpanses);
      return data[currentUser]?.expanses;
    }
  });

  const handleExpanse = (expanse) => {
    if (editingExpense) {
      editingExpense.name = expanse.name;
      editingExpense.gender = expanse.gender;
      editingExpense.title = expanse.title;
      editingExpense.description = expanse.description;
      editingExpense.amount = expanse.amount;
      editingExpense.paidBy = expanse.paidBy;
      editingExpense.splitRule = expanse.splitRule;

      users[currentUser].expanses.forEach((exp) => {
        if (exp.id === editingExpense.id) {
          exp.name = expanse.name;
          exp.gender = expanse.gender;
          exp.title = expanse.title;
          exp.description = expanse.description;
          exp.amount = expanse.amount;
          exp.paidBy = expanse.paidBy;
          exp.splitRule = expanse.splitRule;
        }
      });

      localStorage.setItem("usersData", JSON.stringify(users));
      setExpanses((prev) => {
        let update = prev.find((exp) => editingExpense.id === exp.id);
        update = expanse;
        return prev;
      });
      setEditingExpense(null);
    } else {
      const newExpenseData = {
        id: crypto.randomUUID(),
        name: expanse.name,
        gender: expanse.gender,
        title: expanse.title,
        description: expanse.description,
        amount: Number(expanse.amount),
        paidBy: expanse.paidBy,
        splitRule: expanse.splitRule,
      };
      setExpanses([...expanses, newExpenseData]);
      users[currentUser].expanses.push(newExpenseData);
      localStorage.setItem("usersData", JSON.stringify(users));
    }
  };
  const handleDelete = (id) => {
    const newExpanses = users[currentUser].expanses.filter(
      (exp) => exp.id !== id,
    );
    setExpanses(newExpanses);
    users[currentUser].expanses = newExpanses;
    localStorage.setItem("usersData", JSON.stringify(users));
  };

  return (
    <userExpanseContext.Provider
      value={{
        expanses,
        setExpanses,
        editingExpense,
        setEditingExpense,
        handleExpanse,
        handleDelete,
      }}
    >
      {children}
    </userExpanseContext.Provider>
  );
};

export const useUserExpanse = () => {
  const context = useContext(userExpanseContext);
  return context;
};
