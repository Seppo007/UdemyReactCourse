'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    )
);

// Create a templateTwo var JSX expression
// div
//   h1 -> <Name>
//   p -> Age: <Age>
//   p -> Location: <Location>
// Render templateTwo instead of template

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Sebastian Schalow'
    ),
    React.createElement(
        'p',
        null,
        'Age: 29'
    ),
    React.createElement(
        'p',
        null,
        'Location: Wolfsburg'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
