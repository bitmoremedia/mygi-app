import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import _ from 'lodash';

import Button from '../common/Button';

export default class MyGi extends Component {

  constructor(props) {
      super(props);
      this.state = {
          clickCount: 0
      };
      this.throttledIncrementCounter = _.throttle(this.incrementCounter, 1000, { trailing: false });
  }

  incrementCounter = () => {
    const newCount = this.state.clickCount + 1;
    this.setState({
      clickCount: newCount
    });
  }

  button(mode) {
    const debug = () => {
      console.log(mode);

      switch (mode) {
        case 'All Keys':
          try {
            AsyncStorage.getAllKeys()
            .then((response) => {
              console.log(response);
            });
          } catch (error) {
            // Error retrieving data
            console.log('error', error);
          }
          break;
        case 'reduxPersist:favourites':
          try {
            AsyncStorage.getItem('reduxPersist:favourites')
            .then((response) => {
              console.log(response);
            });
          } catch (error) {
            // Error retrieving data
            console.log('error', error);
          }
          break;
        default:
      }
    };

    return (
      <Button onPress={debug}>
        <Text>{mode}</Text>
      </Button>
    );
  }

  render() {
    const { clickCount } = this.state;
    const { incrementCounter, throttledIncrementCounter } = this;
    return (
      <View>
        {this.button('All Keys')}
        {this.button('reduxPersist:favourites')}
        <Button onPress={incrementCounter}>
          <Text>Click Me</Text>
        </Button>
        <Button onPress={throttledIncrementCounter}>
          <Text>Click Me (throttled)</Text>
        </Button>
        <View style={{ marginLeft: 10 }}>
          <Text>Click Count: {clickCount}</Text>
        </View>
      </View>
    );
  }
}
