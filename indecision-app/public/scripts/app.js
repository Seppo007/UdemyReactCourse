'use strict';

var app = {
  title: 'Visibility Toggle',
  btnShow: 'Show details',
  btnHide: 'Hide details',
  showText: false,
  details: 'Hey. These are some details you can see now!'
};

// JSX - JavaScript XML
var appRoot = document.getElementById('app');

var onBtnClick = function onBtnClick(e) {
  app.showText = !app.showText;
  console.log(app.showText);
  render();
};

var renderDetails = function renderDetails() {
  if (app.showText) {
    return React.createElement(
      'p',
      null,
      app.details
    );
  }
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: onBtnClick },
      app.showText ? app.btnHide : app.btnShow
    ),
    renderDetails()
  );

  ReactDOM.render(template, appRoot);
};

render();
