import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import {
  View,
  ListView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Section,
  SectionText,
  Row,
  WeekDates,
  WeekDate,
  GiValues,
  GiValue,
  GiValueText,
  SuccessWarnIconContainer,
} from './styled-components';

import { giType } from '../../config';
import SuccessWarnIcon from '../common/SuccessWarnIcon';

const monthsToLoadAtATime = 10;

const getWeeksInMonth = (sectionNum) => {
  const thisMonth = moment().startOf('month').subtract(sectionNum, 'months');
  const firstMondayOfMonth = moment().startOf('month').subtract(sectionNum, 'months').day('Monday');
  const weeksInMonth = [];
  if (firstMondayOfMonth.format('MM') === thisMonth.format('MM')) {
    weeksInMonth.push(firstMondayOfMonth.format());
  }
  // loop through the next Mondays of this month
  let nextWeek = firstMondayOfMonth.add(7, 'days');
  while (nextWeek.format('MM') === thisMonth.format('MM')) {
    // do not show future weeks (only relevant to first month/section)
    if (sectionNum === 0) {
      if (!nextWeek.isAfter()) {
        weeksInMonth.unshift(nextWeek.format());
      }
    } else {
      weeksInMonth.unshift(nextWeek.format());
    }
    nextWeek = nextWeek.add(7, 'days');
  }
  return weeksInMonth;
};

const sectionTitle = (sectionNum) => {
  return moment().startOf('month').subtract(sectionNum, 'months').format('MMMM YYYY');
};

const getGiValuesForWeek = (meals) => {
  let weekHasAtLeastOneValue = false;
  const giValues = {
    high: 0,
    medium: 0,
    low: 0,
  };
  meals.giValues.forEach((day) => {
    if (day && Object.prototype.hasOwnProperty.call(day, 'breakfast')) {
      giValues[giType(day.breakfast)] += 1;
      weekHasAtLeastOneValue = true;
    }
    if (day && Object.prototype.hasOwnProperty.call(day, 'lunch')) {
      giValues[giType(day.lunch)] += 1;
      weekHasAtLeastOneValue = true;
    }
    if (day && Object.prototype.hasOwnProperty.call(day, 'dinner')) {
      giValues[giType(day.dinner)] += 1;
      weekHasAtLeastOneValue = true;
    }
  });
  if (!weekHasAtLeastOneValue) {
    return null;
  }
  return giValues;
};

const getSuccessForWeek = (giValues, targets) => {
  if (giValues.high + giValues.medium + giValues.low !== 21) {
    return null;
  }
  // success if high and medium do not exceed the target
  if (giValues.high <= targets.high &&
    ((giValues.high + giValues.medium) <= (targets.high + targets.medium))) {
    return 'success';
  }
  return 'warning';
};

class TimeLine extends Component {

  constructor(props) {
    super(props);
    // set history limit based on firstWeek of app installation to avoid pointless
    // infinite backwards time travel to before the app was available
    const firstWeek = props.firstWeek;
    const firstYear = moment(firstWeek).year();
    const firstMonth = moment(firstWeek).month();
    const historyLimit = moment().diff(moment([firstYear, firstMonth - 1]), 'months');
    this.state = {
      dataSource: undefined,
      monthsToShow: 0,
      historyLimit,
    };
    this.listView = undefined;
  }

  componentWillMount() {
    this.createDataSource();
  }

  componentWillReceiveProps() {
    this.createDataSource();
  }

  endReached = () => {
    this.createDataSource();
  }

  createDataSource = () => {
    const getSectionHeaderData = (data, sectionName) => {
      return data[sectionName];
    };
    const getRowData = (data, sectionName, rowID) => {
      return data[rowID];
    };

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    const data = {};
    const sections = [];
    const rowIDs = [];

    let monthsToShow = this.state.monthsToShow;
    // limit how far back in time we go
    if (monthsToShow + monthsToLoadAtATime < this.state.historyLimit) {
      monthsToShow = this.state.monthsToShow + monthsToLoadAtATime;
    }
    if (monthsToShow < this.state.historyLimit) {
      monthsToShow = this.state.historyLimit;
    }

    let sectionCount = 0;
    let rowCount = 0;
    let sectionId;
    let rowId;
    let sectionRows;
    let weeksInMonth;

    // add each month as a section
    while (sectionCount < monthsToShow) {
      sectionId = `SECTION-${sectionCount}`;
      sections.push(sectionId);
      data[sectionId] = sectionTitle(sectionCount);
      rowIDs[sectionId] = [];
      sectionRows = [];
      // add the weeks of this month
      weeksInMonth = getWeeksInMonth(sectionCount);
      while (rowCount < weeksInMonth.length) {
        rowId = `SECTION-${sectionCount}-ROW-${rowCount}`;
        sectionRows.push(rowId);
        data[rowId] = {
          id: rowId,
          start: weeksInMonth[rowCount],
          rowCount,
          weekNum: weeksInMonth.length - rowCount,
        };
        rowCount += 1;
      }
      rowIDs.push(sectionRows);
      rowCount = 0;
      sectionCount += 1;
    }

    this.setState({
      dataSource: dataSource.cloneWithRowsAndSections(data, sections, rowIDs),
      monthsToShow,
    });
  }

  renderRow = ({ id, start, weekNum }) => {
    const onPress = () => {
      this.props.showWeek(start);
    };
    const thisWeeksMeals = this.props.meals[start];

    let giValues = null;
    let successWarnType = null;
    if (thisWeeksMeals && thisWeeksMeals.giValues.length > 0) {
      giValues = getGiValuesForWeek(thisWeeksMeals);
      if (giValues) {
        successWarnType = getSuccessForWeek(giValues, this.props.targets);
      }
    }
    const isSuccess = (successWarnType === 'success');

    const NoGi = (
      <GiValue type="none">
        <Ionicons
          name="md-add"
          size={24}
          color="white"
        />
      </GiValue>
    );

    return (
      <Row key={id} onPress={onPress}>
        <WeekDates>
          <WeekDate>Week {weekNum}</WeekDate>
        </WeekDates>
        {
          !giValues &&
          <GiValues>
            {NoGi}
            {NoGi}
            {NoGi}
          </GiValues>
        }
        {
          giValues &&
          <GiValues>
            <GiValue type="high">
              <GiValueText>{giValues.high}</GiValueText>
            </GiValue>
            <GiValue type="medium">
              <GiValueText>{giValues.medium}</GiValueText>
            </GiValue>
            <GiValue type="low">
              <GiValueText>{giValues.low}</GiValueText>
            </GiValue>
          </GiValues>
        }
        <SuccessWarnIconContainer>
          { isSuccess && <SuccessWarnIcon type="success" />}
        </SuccessWarnIconContainer>
      </Row>
    );
  }

  renderSectionHeader = (data) => {
    return (
      <Section>
          <SectionText>{data}</SectionText>
      </Section>
    );
  }

  render() {
    const { dataSource } = this.state;
    if (!dataSource) {
      return <View />;
    }
    return (
      <Container>
        <ListView
          ref={(listView) => { this.listView = listView; }}
          dataSource={dataSource}
          renderSectionHeader={this.renderSectionHeader}
          renderRow={this.renderRow}
          onEndReached={this.endReached}
          initialListSize={35}
        />
      </Container>
    );
  }
}

TimeLine.propTypes = {
  showWeek: PropTypes.func.isRequired,
  meals: PropTypes.any.isRequired,
  firstWeek: PropTypes.string.isRequired,
};

export default TimeLine;
