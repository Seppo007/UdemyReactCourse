class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
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

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This is option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }

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
        <AddOption
          handleAddOption={this.handleAddOption}/>
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


const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions}
              onClick={props.handlePick}>What should I do?
      </button>
    </div>
  );
};


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
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {error};
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));