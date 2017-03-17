import React, { PropTypes } from 'react';

import { toTitleCase } from '../../../utils';
import { giType } from '../../../config';

import {
  LabelWrapper,
  Label,
} from './styled-components';

const GiLabel = ({ type, giValueDisplay, large }) => {
  const thisType = type || giType(giValueDisplay);
  let label = toTitleCase(thisType);
  // trim 'Medium' to 'Med'
  label = (label === 'Medium') ? 'Med' : label;
  return (
    <LabelWrapper type={thisType} large={large}>
      <Label>
        {label}
      </Label>
      <Label>
        {giValueDisplay}
      </Label>
    </LabelWrapper>
  );
};

GiLabel.propTypes = {
  type: PropTypes.string,
  giValueDisplay: PropTypes.number,
};

export default GiLabel;
