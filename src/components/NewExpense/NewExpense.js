import React, { useState } from "react";

import './NewExpense.css';

import ExpenseForm from "./ExpenseFrom";

const NewExpense = (props) => {
    const[isEditing, setEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }

        //console.log(expenseData)
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    const stopEditingHanlder = () => {
        setEditing(false)
    }

    const startEditingHandler = () => {
        setEditing(true);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHanlder}/>}
        </div>
    )
}


export default NewExpense;