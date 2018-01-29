class IndecisionApp extends React.Component {
  render() {
    const options = ['One', 'Two', 'Three'];

    return (
      <div>
        <Header title="Indecision"
                subtitle="Put your life in the hands of a computer"/>
        <Action/>
        <Options/>
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
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <Option/>
        <Option/>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>Option component here</div>;
  }
}

// Option -> Option component here

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