import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({ description }
    );
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState({ note }
    );
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  onDateChange = (createdAt) => {
    this.setState({ createdAt })
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused })
  };

  constructor() {
    super();
    this.state = {
      description: '',
      note: '',
      amount: '',
      createdAt: now,
      calendarFocused: false,
    };
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange} />
          <input
            type="text"
            value={this.state.amount}
            placeholder="Amount"
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense (optional)">
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
