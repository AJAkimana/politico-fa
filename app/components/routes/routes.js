import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Home, UserDashBoard, ProtectedRoute } from '../';

const Routes = props => {
  const { isAuthenticated } = props.auth;
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <ProtectedRoute
        path='/home'
        exact
        component={UserDashBoard}
        isAuthenticated={isAuthenticated}
      />
    </Switch>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

Routes.propTypes = {
  auth: PropTypes.object
};

export default connect(mapStateToProps)(Routes);
