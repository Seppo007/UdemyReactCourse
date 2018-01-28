'use strict';

console.log('App.js is running!');

// create app object title/subtitle
// use title/subtitle in the template
// render template

var app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
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
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);

var user = {
  name: 'Sebastian',
  age: 29,
  location: 'Wolfsburg'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  } else {
    return undefined;
  }
}

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

ReactDOM.render(templateTwo, appRoot);
