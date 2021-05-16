import React, { useState } from 'react'

import ExpensesFilter from './ExpensesFilter'
import './ExpenseItemList.css'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const ExpenseItemList = (props) => {

    const [newYearFilter, setNewYearFilter] = useState('2020')

    const sendYearFilterHandler = year => {
        setNewYearFilter(year)
    }

    const filteredExpenses = props.expenses.filter(el => {
        return el.date.getFullYear().toString() === newYearFilter
    })




    return (
        <Card className="expenses">

            <ExpensesFilter
                onSendYearFilter={sendYearFilterHandler}
                currentYear={newYearFilter}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />

        </Card>
    )
}

export default ExpenseItemList