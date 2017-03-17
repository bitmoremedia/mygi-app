import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

import * as colors from '../../config/colors';
import GiValue from '../common/GiValue';

export default class Favourites extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: undefined,
    };
  }

  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource = ({ favouriteItems }) => {
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
    let sectionIndex = -1;

    // sort data by category name
    const sortedFavouriteItems = _.sortBy(favouriteItems, 'category');

    sortedFavouriteItems.forEach((foodItem) => {
      // CREATE SECTIONS
      if (sections.indexOf(foodItem.category) < 0) {
        sections.push(foodItem.category);
        data[foodItem.category] = foodItem.category;
        sectionIndex += 1;
        rowIDs[sectionIndex] = [];
      }
      // ADD ROWS WITHIN SECTIONS
      data[foodItem.name] = foodItem;
      rowIDs[sectionIndex].push(foodItem.name);
    });

    this.setState({
      dataSource: dataSource.cloneWithRowsAndSections(data, sections, rowIDs),
    });
  }

  renderRow = (foodItem) => {
    const { editing, removeFavourite } = this.props;

    const removeButton = (
      <TouchableOpacity
        style={styles.removeFoodContainer}
        onPress={() => {
          removeFavourite(foodItem.id);
        }}
      >
        <Ionicons
          style={styles.removeFoodIcon}
          name="ios-remove-circle"
          size={25}
          color={colors.negative}
        />
      </TouchableOpacity>);

    return (
      <View style={styles.sectionItemContainer}>
          {editing && removeButton}
          <Text style={styles.foodName}>{foodItem.name}</Text>
          <View style={styles.giValue}>
            <GiValue gi={foodItem.gi} />
          </View>
      </View>
    );
  }

  renderSectionHeader = (foodCategory) => {
    return (
      <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>{foodCategory}</Text>
      </View>
    );
  }

  render() {
    const { dataSource } = this.state;
    if (!dataSource) {
      return <View style={styles.container} />;
    }
    return (
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
          renderSectionHeader={this.renderSectionHeader}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

Favourites.propTypes = {
  favouriteItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      gi: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  editing: PropTypes.bool.isRequired,
  removeFavourite: PropTypes.func.isRequired,
};

const ITEM_HEIGHT = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  sectionHeaderContainer: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    backgroundColor: colors.secondaryTransparent,
  },
  sectionHeader: {
    color: colors.textOnSecondaryTransparent,
  },
  sectionItemContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    height: ITEM_HEIGHT,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  foodName: {
    flex: 6,
  },
  removeFoodContainer: {
    flex: 1,
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeFoodIcon: {
    flex: 1,
    paddingLeft: 10,
  },
  giValue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});
