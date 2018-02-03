// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false [initial]

class VisibilityToggle extends React.Component {

  constructor(props) {
    super();
    this.state = {
      title: 'Visibility Toggle',
      btnShowText: 'Show details',
      btnHideText: 'Hide details',
      showText: false,
      detailsText: 'Hey. These are some details you can see now!',
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility(e) {
    this.setState((prevState) => {
      return {showText: !prevState.showText};
    });
  }

  renderDetails() {
    if (this.state.showText) {
      return <p>{this.state.detailsText}</p>;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>{(this.state.showText)
          ? this.state.btnHideText
          : this.state.btnShowText}</button>
        {this.renderDetails()}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));