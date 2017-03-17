import React, { Component } from 'react';

import { NAV_STYLES } from '../config';
import GiTargets from '../components/GiTargets';

class TargetsScreen extends Component {
  static navigationOptions = {
    title: 'GI Target',
    header: {
      ...NAV_STYLES
    }
  }
  render() {
    return <GiTargets />;
  }
}

export default TargetsScreen;
