class IndecisionApp extends React.Component {
  render() {
    const options = ['One', 'Two', 'Three'];

    return (
      <div>
        <Header title="Indecision"
                subtitle="Put your life in the hands of a computer"/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
      </div>
    );
  }
}

// Setup options prop for Options component
// Render the length of the array

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
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
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
  render() {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));