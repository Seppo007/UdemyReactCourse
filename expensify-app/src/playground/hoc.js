// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({ info }) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The Info is: {info}</p>
    </div>
  )
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return ({ isAuthenticated, info }) => (
    <div>
      {isAuthenticated ? <WrappedComponent info={info}/> : <p>Please login to view the info</p>}
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details"/>, document.getElementById('app'));
