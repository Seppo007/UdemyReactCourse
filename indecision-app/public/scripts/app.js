'use strict';

console.log('App.js is running!');

// only render the subtitle (and p tag) if subtitle exists - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

var app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two']
};

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Sebastian',
  age: 29,
  location: 'Wolfsburg'
};

var getLocation = function getLocation(loc) {
  return loc ? React.createElement(
    'p',
    null,
    'Location: ',
    loc
  ) : undefined;
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age,
    ' '
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
