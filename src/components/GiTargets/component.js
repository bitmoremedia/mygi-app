import React, { Component, PropTypes } from 'react';

import Slider from '../common/Slider';
import GiLabel from '../common/GiLabel';
import SuccessWarnIcon from '../common/SuccessWarnIcon';

import {
  Container,
  Grid,
  Row,
  Col,
  GiCol,
  SliderCol,
  TextSection,
  Intro,
  SubIntro,
  SuccessWarnIconContainer,
} from './styled-components';

class GiTargets extends Component {

  state = {
    slider: undefined,
    value: undefined,
  };

  onValueChange = ({ type, value }) => {
    this.setState({
      slider: type,
      value,
    });
  }

  onSlidingComplete = ({ type, value }) => {
    this.props.setGiTarget({ type, value });
  }

  renderTarget = (type) => {
    const { targets } = this.props;
    const giValue = targets[type];

    // ensure that the updated slider value is displayed while slide is in progress
    let giValueDisplay = giValue;
    const { slider, value } = this.state;
    if (slider === type && value !== giValue) {
      giValueDisplay = value;
    }

    // do not show slider for 'low' range
    if (type === 'low') {
      return (
        <GiCol>
          <GiLabel type={type} giValueDisplay={giValueDisplay} />
        </GiCol>
      );
    }

    return (
      <Row>
        <GiCol>
          <GiLabel type={type} giValueDisplay={giValueDisplay} />
        </GiCol>
        <SliderCol>
          <Slider
            value={giValue}
            minimumValue={0}
            maximumValue={21}
            step={1}
            onSlidingComplete={(value) => this.onSlidingComplete({ type, value })}
            onValueChange={(value) => this.onValueChange({ type, value })}
          />
        </SliderCol>
      </Row>
    );
  }

  render() {
    return (
      <Container>
        <Grid>
          <Row>
            <Col>
              <Intro>
                Weekly Meal Target
              </Intro>
              <SuccessWarnIconContainer>
                <TextSection>
                  Earn a star in the Meal Tracker if you record all 21 meals for the
                  week with less than the targeted number of High and Medium GI Value meals
                </TextSection>
                <SuccessWarnIcon type="success" />
              </SuccessWarnIconContainer>
              <SubIntro>
                3 meals per day x 7 days a week = 21 meals
              </SubIntro>
            </Col>
          </Row>
          {this.renderTarget('high')}
          {this.renderTarget('medium')}
          {this.renderTarget('low')}
        </Grid>
      </Container>
    );
  }
}

GiTargets.propTypes = {
  targets: PropTypes.shape({
    high: PropTypes.number.isRequired,
    medium: PropTypes.number.isRequired,
    low: PropTypes.number.isRequired,
  }),
  setGiTarget: PropTypes.func.isRequired,
};

export default GiTargets;
