console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
    </div>
);

// create app object title/subtitle
// use title/subtitle in the template
// render template

// Create a templateTwo var JSX expression
// div
//   h1 -> <Name>
//   p -> Age: <Age>
//   p -> Location: <Location>
// Render templateTwo instead of template

var user = {
    name: 'Sebastian',
    age: 29,
    location: 'Wolfsburg'
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);