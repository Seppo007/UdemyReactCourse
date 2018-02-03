class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['One', 'Two', 'Three'],
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {options: []};
    });
  }

  handlePick() {
    const optLength = this.state.options.length;
    alert(this.state.options[(Math.floor(Math.random() * optLength))]);
  }

  // handlePick - pass down to Action and setup onClick - bind here
  //   randomly pick an option and alert it

  render() {
    return (
      <div>
        <Header title="Indecision"
                subtitle="Put your life in the hands of a computer"/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}/>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption/>
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}


class Action extends React.Component {
  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions}
                onClick={this.props.handlePick}>What
          should I do?
        </button>
      </div>
    );
  }
}


class Options extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(
          (option) => <Option key={option} optionText={option}/>)}
      </div>
    );
  }
}


class Option extends React.Component {
  render() {
    return <div>Option: {this.props.optionText}</div>;
  }
}


class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert('AddOption');
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));