import React from 'react';
import { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [year, setYear] = useState(0);

  const selectYear = e => {
    e.preventDefault();
    setYear(e.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={e => props.onYearSelect(e.target.value)}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
