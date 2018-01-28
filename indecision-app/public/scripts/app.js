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

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
