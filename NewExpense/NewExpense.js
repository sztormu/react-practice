import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [clicked, setClicked] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        //console.log(expenseData)
        props.onAddExpense(expenseData)
        setClicked(false)
    }

    const formHandler = () => {
        setClicked(true)
    }

    const closeFormHandler = () => {
        setClicked(false)
    }

    return (
        <div className='new-expense'>
            {!clicked && <button onClick={formHandler}>Add New Expense</button>}
            {clicked && <ExpenseForm closeFormHandler={closeFormHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense