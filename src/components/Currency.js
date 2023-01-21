import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

let currency
const Currency = () => {
  const {dispatch } = useContext(AppContext);

	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}
	

  return (
		<div className='btn btn-success'> Currency ({
      <select name="currency" id="currency" style={{background:'green',color:'white'}} onChange={(event)=>changeCurrency(event.target.value)}>
        <option value="£">£ Pounds</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>	
      })	
    </div>
	);
};

export {currency}
export default Currency;