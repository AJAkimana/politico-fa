import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/style.css';
import { Home } from './components';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
