import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, } from 'react-native';

import moment from 'moment';

// TODO: limit to non future dates

import {
  Container,
  DayRow,
  Day,
  DayDisplay,
  DateDisplay,
  Meals,
  MealHeading,
  MealValue,
} from './styled-components';

const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

class WeekView extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onPress = (dayIndex, mealType) => {
    this.props.editMeal({ week: this.props.start, dayIndex, mealType });
  }

  renderDay = (day, index) => {
    const { mealsForWeek } = this.props;
    const mealsForDay = (mealsForWeek && mealsForWeek.giValues[index])
      ? mealsForWeek.giValues[index] : {};
    const thisDateMoment = moment(this.props.start).add(index, 'days');
    const dateDisplay = thisDateMoment.format('Do MMM');
    return (
      <DayRow key={day}>
        <Day>
          <DayDisplay>
            {day}
          </DayDisplay>
          <DateDisplay>
            {dateDisplay}
          </DateDisplay>
        </Day>
        <Meals>
          <TouchableOpacity onPress={() => { this.onPress(index, 'breakfast'); }}>
            <MealValue type="breakfast" value={mealsForDay.breakfast} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.onPress(index, 'lunch'); }}>
            <MealValue type="lunch" value={mealsForDay.lunch} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.onPress(index, 'dinner'); }}>
            <MealValue type="dinner" value={mealsForDay.dinner} />
          </TouchableOpacity>
        </Meals>
      </DayRow>
    );
  }

  render() {
    return (
      <Container>
        <DayRow>
          <Day />
          <Meals>
            <MealHeading>Breakfast</MealHeading>
            <MealHeading>Lunch</MealHeading>
            <MealHeading>Dinner</MealHeading>
          </Meals>
        </DayRow>
        {daysOfWeek.map((day, index) => this.renderDay(day, index))}
      </Container>
    );
  }
}

WeekView.propTypes = {
  start: PropTypes.string.isRequired,
  mealsForWeek: PropTypes.any,
  editMeal: PropTypes.func.isRequired,
};

export default WeekView;
