import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as colors from '../../config/colors';
import { LOW_GI_BOUNDARY, MEDIUM_GI_BOUNDARY } from '../../config';
import { hexToRgba } from '../../utils';

class DisplaySettings extends Component {

  singleOptionSelected() {
    return (
      <Ionicons
        style={styles.singleOptionSelected}
        name="ios-checkmark" size={40} color={colors.main}
      />
    );
  }

  sortByOptions() {
    const underlayColor = hexToRgba(colors.main, 0.3);
    return (
      <View>
        <TouchableOpacity
          underlayColor={underlayColor}
          onPress={() => {
            this.props.setSortOrder('Alphabetical');
          }}
        >
          <View>
            <Text style={styles.option}>
              Alphabetical
            </Text>
            {this.props.sortOrder === 'Alphabetical' && this.singleOptionSelected()}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          underlayColor={underlayColor}
          onPress={() => {
            this.props.setSortOrder('Gi Value');
          }}
        >
          <View>
            <Text style={styles.option}>
              Gi Value
            </Text>
            {this.props.sortOrder === 'Gi Value' && this.singleOptionSelected()}
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  filterByTypeOptions() {
    const underlayColor = hexToRgba(colors.main, 0.3);

    const toggleType = (type) => {
      // add or remove this type from current array
      const typesToDisplay = this.props.typesToDisplay.slice();
      const thisIndex = typesToDisplay.indexOf(type);
      if (thisIndex > -1) {
        // this item is currently selected so remove it
        typesToDisplay.splice(thisIndex, 1);
      } else {
        typesToDisplay.push(type);
      }
      this.props.setTypesToDisplay(typesToDisplay);
    };

    const isActive = (type) => {
      if (this.props.typesToDisplay.indexOf(type) > -1) {
        return true;
      }
      return false;
    };

    return (
      <View>

        <TouchableOpacity
          underlayColor={underlayColor}
          onPress={() => {
            toggleType('low');
          }}
        >
          <View>
            <Text style={styles.giValueOption}>
              Low  ( less than {LOW_GI_BOUNDARY} )
            </Text>
            {isActive('low') && this.singleOptionSelected()}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          underlayColor={underlayColor}
          onPress={() => {
            toggleType('medium');
          }}
        >
          <View>
            <Text style={styles.giValueOption}>
              Medium ( between {LOW_GI_BOUNDARY} and {MEDIUM_GI_BOUNDARY} )
            </Text>
            {isActive('medium') && this.singleOptionSelected()}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          underlayColor={underlayColor}
          onPress={() => {
            toggleType('high');
          }}
        >
          <View>
            <Text style={styles.giValueOption}>
              High ( greater than {MEDIUM_GI_BOUNDARY} )
            </Text>
            {isActive('high') && this.singleOptionSelected()}
          </View>
        </TouchableOpacity>

      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.optionsContainer}>
          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>Sort Order</Text>
            {this.sortByOptions()}
          </View>
          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>Filter by GI Value</Text>
              {this.filterByTypeOptions()}
          </View>
        </View>
      </View>
    );
  }
}

DisplaySettings.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  typesToDisplay: PropTypes.array.isRequired,
  giRange: PropTypes.array.isRequired,
  setSortOrder: PropTypes.func.isRequired,
  setTypesToDisplay: PropTypes.func.isRequired,
  setGiRange: PropTypes.func.isRequired,
};

export default DisplaySettings;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  optionsContainer: {
    alignSelf: 'stretch',
  },
  optionContainer: {
    alignSelf: 'stretch',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  optionTitle: {
    alignSelf: 'stretch',
    backgroundColor: colors.secondary,
    color: colors.textOnSecondary,
    padding: 10,
  },
  option: {
    padding: 15,
  },
  giValueOption: {
    padding: 15,
  },
  singleOptionSelected: {
    color: colors.main,
    position: 'absolute',
    right: 10,
    top: 2,
  }
});
