import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useEffect, useState } from 'react';

let totalExpenses;
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const { currency } = useContext(AppContext);
   
    useEffect(() => {
        setTotalExpenses(expenses.reduce((total, item) => total += item.cost,0));
    }, [expenses]);
    

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
            
        </div>
    );
};

export {totalExpenses}
export default ExpenseTotal;

