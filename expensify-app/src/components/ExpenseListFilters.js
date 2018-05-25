import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <input type="text" value={filters.text} onChange={(event) => {
      dispatch(setTextFilter(event.target.value));
      console.log(event.target.value);
    }} />
    <select value={filters.sortBy} onChange={(e) => onSelectChange(e, dispatch)}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const onSelectChange = (event, dispatch) => {
  switch (event.target.value) {
    case 'date':
      dispatch(sortByDate());
      break;
    case 'amount':
      dispatch(sortByAmount());
      break;
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
