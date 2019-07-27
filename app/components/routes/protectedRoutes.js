import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object
};

export default ProtectedRoute;
