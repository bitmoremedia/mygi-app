import React, { Component } from 'react';

import { NAV_STYLES } from '../config';
import NavButton from '../components/common/NavButton';
import DisplaySettings from '../components/DisplaySettings';

class DisplaySettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
    header: (props) => {
      const { goBack } = props;
      const right = (<NavButton
        title="done"
        onPress={() => {
          goBack();
        }}
      />);
        return {
          right,
          left: false,
          ...NAV_STYLES,
        };
    }
  };
  render() {
    return <DisplaySettings />;
  }
}

export default DisplaySettingsScreen;
