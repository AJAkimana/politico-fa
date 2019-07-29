import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import configureStore from './store';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/style.css';
import { Routes } from './components';
import { setCurrentUser } from './actions';

const store = configureStore();
if (localStorage.token) {
  const user = jwtDecode(localStorage.token);
  store.dispatch(setCurrentUser(user));
  const currentTime = Date.now() / 1000;
  if (user.exp < currentTime) {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
