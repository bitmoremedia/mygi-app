import React, { Component } from 'react';
import _ from 'lodash';

import { NAV_STYLES } from '../config';

import TimeLine from '../components/TimeLine';

class TrackerScreen extends Component {
  static navigationOptions = {
    title: 'Meal Tracker',
    header: {
      backTitle: 'Tracker',
      ...NAV_STYLES,
    },
  }
  constructor(props) {
    super(props);
    this.throttledGoToWeek = _.throttle(this.goToWeek, 1000, { trailing: false });
  }
  goToWeek = (start) => {
    this.props.navigation.navigate('WeekView', { start });
  }
  render() {
    return <TimeLine showWeek={this.throttledGoToWeek} />;
  }
}

export default TrackerScreen;
