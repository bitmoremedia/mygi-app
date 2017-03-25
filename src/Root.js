import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/App';

class RootComponent extends Component {
  constructor() {
      super();
      this.state = {
        store: configureStore(),
      };
  }

  render() {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
  }
}

export default RootComponent;
