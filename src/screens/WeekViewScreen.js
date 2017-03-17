import React, { Component } from 'react';
import moment from 'moment';

import { weekNumOfMonth } from '../utils';

import WeekView from '../components/WeekView';

import { NAV_STYLES } from '../config';

class WeekViewScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => {
      const monthName = moment(state.params.start).format('MMMM');
      const weekNum = weekNumOfMonth(state.params.start);
      return `${monthName} - Week ${weekNum}`;
    },
    header: {
      backTitle: 'Week View',
      ...NAV_STYLES,
    }
  }
  showMeal = (mealProps) => {
    this.props.navigation.navigate('Meal', mealProps);
  }
  render() {
    const { start } = this.props.navigation.state.params;
    return <WeekView start={start} editMeal={this.showMeal} />;
  }
}

export default WeekViewScreen;
