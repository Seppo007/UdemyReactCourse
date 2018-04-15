import React from 'react';
import {NavLink} from "react-router-dom";

const PortfolioPage = (props) => {

  const id = props.match.params['id'];

  if (id) {
    return (
      <div>
        <h1>A Think I've Done</h1>
        <p>This page is for the item with id of {id}</p>
      </div>
    )
  } else {
    return (<div>
      <h1>My Work</h1>
      <p>Check out the following things I've done:</p>
      <NavLink to='/portfolio/1'>Item One</NavLink>
      <NavLink to='/portfolio/2'>Item Two</NavLink>
    </div>);
  }
};

export default PortfolioPage;