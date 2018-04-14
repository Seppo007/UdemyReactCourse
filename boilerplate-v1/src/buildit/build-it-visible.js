const app = {
  title: 'Visibility Toggle',
  btnShow: 'Show details',
  btnHide: 'Hide details',
  showText: false,
  details: 'Hey. These are some details you can see now!',
};

// JSX - JavaScript XML
const appRoot = document.getElementById('app');

const onBtnClick = (e) => {
  app.showText = !app.showText;
  console.log(app.showText);
  render();
};

const renderDetails = () => {
  if (app.showText) {
    return <p>{app.details}</p>;
  }
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onBtnClick}>{(app.showText)
        ? app.btnHide
        : app.btnShow}</button>
      {renderDetails()}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();