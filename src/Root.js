import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/App';

function loadingState(isLoading) {
  return {
    isLoading
  };
}

class RootComponent extends Component {
  constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState(loadingState(false))),
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
