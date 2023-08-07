import React from 'react'
import './Expense.css'
const Expense = (props) => {
    const data = props.keyData[0];
  return (
    <div className='expenseWrapper'>
        <h2 className='title'>{data.title}</h2>
        <div className='date'>{data.date}</div>
        <span className='price'>{data.price}</span>
        </div>
  )
}

export default Expense