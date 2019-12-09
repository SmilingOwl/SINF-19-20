import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import isLogged from '../common/isLogged';

/* eslint-disable */
const LoggedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isLogged() === null ?  <Redirect to="/login" /> : <Component {...props} />)}
  />
);

LoggedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default LoggedRoute;
