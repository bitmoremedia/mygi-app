import React, { PropTypes } from 'react';

import {
  Container,
  InnerContainer,
  ButtonText,
} from './styled-components';

const Button = ({ children, onPress, center, mode, style }) => {
  return (
    <Container onPress={onPress} style={style}>
      <InnerContainer mode={mode}>
        <ButtonText center={center}>
          {children}
        </ButtonText>
      </InnerContainer>
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  center: PropTypes.bool,
  mode: PropTypes.oneOf(['main', 'negative', 'neutral', 'positive']),
  style: PropTypes.any,
};

Button.defaultProps = {
  center: true,
  mode: 'main',
};

export default Button;
