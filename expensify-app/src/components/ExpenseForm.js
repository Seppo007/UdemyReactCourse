import React from 'react';

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

  constructor() {
    super();
    this.state = {
      description: '',
      note: '',
      amount: '',
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
