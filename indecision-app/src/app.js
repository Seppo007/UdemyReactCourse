console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two'],
};

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options && app.options.length > 0)
      ? 'Here are your options'
      : 'No options'}
    </p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

const minusOne = () => {
  console.log('minusOne');
  count--;
  renderCounterApp();
};

const reset = () => {
  console.log('reset');
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();