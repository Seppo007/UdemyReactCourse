console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
    </div>
);

// Create a templateTwo var JSX expression
// div
//   h1 -> <Name>
//   p -> Age: <Age>
//   p -> Location: <Location>
// Render templateTwo instead of template

var templateTwo = (
    <div>
        <h1>Sebastian Schalow</h1>
        <p>Age: 29</p>
        <p>Location: Wolfsburg</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);