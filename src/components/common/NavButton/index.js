import React from 'react';

import { NAV_ICON_SIZE } from '../../../config';

import { Button, Text, StyledIcon } from './styled-components';

const NavButton = ({ title, onPress, icon }) => {
  let content = <Text>{title}</Text>;
  if (icon) {
    switch (icon) {
      case 'search':
        content = <StyledIcon name="ios-search" size={NAV_ICON_SIZE} />;
        break;
      case 'settings':
        content = <StyledIcon name="ios-settings" size={NAV_ICON_SIZE} />;
        break;
      case 'targets':
        content = <StyledIcon name="ios-options" size={NAV_ICON_SIZE} />;
        break;
      default:
        content = <StyledIcon name="ios-alert" size={NAV_ICON_SIZE} />;
    }
  }
  return (
    <Button onPress={onPress}>
      {content}
    </Button>
  );
};

export default NavButton;
