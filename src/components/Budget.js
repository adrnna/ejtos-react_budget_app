import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,expenses } = useContext(AppContext);
    const upperLimit = 20000;
    const { remaining  } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    
    const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

        if(val>upperLimit) {
			alert("The value cannot exceed remaining funds  £"+remaining);
        }
		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}

    return (
		<div className='alert alert-secondary'>
            <label>
                    Budget: {currency}
			<input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
            </label>
        </div>
	);
};

   
export default Budget;
