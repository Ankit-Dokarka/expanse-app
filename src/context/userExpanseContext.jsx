import { createContext, useContext, useState } from "react"

const userExpanseContext = createContext()

export const UserExpanseProvider =({children})=>{
    const [editingExpense, setEditingExpense] = useState(null)
    const [expanses,setExpanses] = useState(()=>{
        const savedExpanses = localStorage.getItem("users")        
        if(!savedExpanses){
            return []
        }else{
            return JSON.parse(savedExpanses)
        }
    })
    
    const handleExpanse = (expanse)=>{
       if(editingExpense){
         editingExpense.name = expanse.name
         editingExpense.gender = expanse.gender
         editingExpense.title = expanse.title   
         editingExpense.description = expanse.description
         editingExpense.amount = expanse.amount
         editingExpense.paidBy = expanse.paidBy
         editingExpense.splitRule = expanse.splitRule
         setEditingExpense(null)
         localStorage.setItem("users", JSON.stringify(expanses))
       }else{
        const newExpenseData = {
            id: crypto.randomUUID(),
            name: expanse.name,
            gender:  expanse.gender,
            title: expanse.title,
            description: expanse.description,
            amount: Number(expanse.amount),
            paidBy: expanse.paidBy,
            splitRule: expanse.splitRule,
        }
        setExpanses([...expanses,newExpenseData])
        localStorage.setItem("users", JSON.stringify([...expanses,newExpenseData]))
       }
        
    }
    const handleDelete = (id)=>{
        const newExpanses = expanses.filter((exp)=> exp.id !== id)
        setExpanses(newExpanses)
        localStorage.setItem("users", JSON.stringify(newExpanses))
    }

    return (
        <userExpanseContext.Provider value={{expanses,setExpanses,editingExpense,setEditingExpense,handleExpanse,handleDelete}}>
            {children}
        </userExpanseContext.Provider>
    )
}

export const useUserExpanse = () => {
    const context = useContext(userExpanseContext) 
    return context
}