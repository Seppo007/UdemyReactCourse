console.log('App.js is running!');

// only render the subtitle (and p tag) if subtitle exists - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

var app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two'],
};

// JSX - JavaScript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {(app.options && app.options.length > 0)
      ? 'Here are your options'
      : 'No options'}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Sebastian',
  age: 29,
  location: 'Wolfsburg',
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age >= 18) && <p>Age: {user.age} </p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
