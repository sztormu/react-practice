import React from 'react'

import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {

    if (props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenes.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map(el =>
                <ExpenseItem
                    key={el.id}
                    title={el.title}
                    amount={el.amount}
                    date={el.date}>
                </ExpenseItem>)}
        </ul>
    )

}

export default ExpensesList