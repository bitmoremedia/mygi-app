import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ListView,
  TextInput,
  StyleSheet,
  Keyboard,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '../../config/colors';
import FoodItem from './FoodItem';

// TD: [blurOnSubmit] the blurOnSubmit property of TextInput doesn't seem to work on Andoroid
// so some platform specific code has been added to manually call dismiss keyboard when
// the keyboardDidHide event is triggered

function clearTextState(state) {
    return {
      text: '',
      dataSource: state.dataSource.cloneWithRows([]),
    };
}

function filterTextState(filterText, itemsDatasource) {
  return function (state) {
    return {
      text: filterText,
      dataSource: state.dataSource.cloneWithRows(itemsDatasource),
    };
  };
}

function textInFocusState(newState) {
  return { textInFocus: newState };
}

class FoodFinder extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      text: '',
      dataSource: ds.cloneWithRows([]),
      textInFocus: this.props.autoFocus || false,
    };
    this.filterTextChange = this.filterTextChange.bind(this);
    this.filterTextFocus = this.filterTextFocus.bind(this);
    this.filterTextBlur = this.filterTextBlur.bind(this);

    this.clearText = this.clearText.bind(this);
    this.acceptText = this.acceptText.bind(this);
  }

  componentWillMount() {
    // TD: [blurOnSubmit]
    // add keyboardDidHide listener
    if (Platform.OS === 'android') {
      this.keyboardDidHideListener =
      Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }
  }

  componentWillUnmount() {
    // TD: [blurOnSubmit]
    // remove keyboardDidHide listener
    if (Platform.OS === 'android') {
      this.keyboardDidHideListener.remove();
    }
  }

  keyboardDidHide() {
    // TD: [blurOnSubmit]
    // ensure that keyboard is dismissed when a keyboard hide event is issued
    // to remove focus from the text input
    Keyboard.dismiss();
  }

  clearText() {
    this.setState(clearTextState);
  }

  acceptText() {
    Keyboard.dismiss();
  }

  filterTextChange(filterText) {
    let itemsDatasource;
    if (!filterText) {
      itemsDatasource = [];
    } else {
      itemsDatasource = this.props.foodList.filter((foodItem) => {
        return (foodItem.name.toUpperCase().indexOf(filterText.toUpperCase()) > -1);
      });
    }
    this.setState(filterTextState(filterText, itemsDatasource));
  }

  filterTextFocus() {
    this.setState(textInFocusState(true));
  }

  filterTextBlur() {
    this.setState(textInFocusState(false));
  }

  searchInput() {
    let searchButtons;
    let clearButton;
    let acceptButton;

    const autoFocus = this.props.autoFocus || false;
    const autoCorrect = this.props.autoCorrect || false;

    // only show clear button if we have some text in the input
    // and the text input is currently in focus
    if (this.state.text.length && this.state.textInFocus) {
      clearButton = (
        <TouchableOpacity onPress={this.clearText}>
          <Icon style={styles.iconStyle} name="md-close" size={32} color="white" />
        </TouchableOpacity>
      );
    }

    // only show accept button when we have some search results
    // and the text input is currently in focus
    /*
    if (this.state.dataSource.getRowCount() > 0 && this.state.textInFocus) {
      acceptButton = (
        <TouchableOpacity onPress={this.acceptText}>
          <Icon style={styles.iconStyle} name="md-checkmark" size={32} color="green" />
        </TouchableOpacity>
      );
    }
    */

    // only show the button container if we have a clear or accept button to display
    // no longer showing accept button as it is superfluous (the user can just hit return
    // on the keyboard or click the screen)
    if (clearButton || acceptButton) {
      searchButtons = (
        <View style={styles.clearContainer}>
          {clearButton}
        </View>);
    }

    return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='Food Name'
          placeholderTextColor='white'
          placeholderStyle={styles.searchInputPlaceholder}
          onChangeText={this.filterTextChange}
          onFocus={this.filterTextFocus}
          onBlur={this.filterTextBlur}
          value={this.state.text}
          blurOnSubmit
          autoFocus={autoFocus}
          autoCorrect={autoCorrect}
          underlineColorAndroid='transparent'
        />
      {searchButtons}
      </View>
    );
  }

  noMatches() {
    if (this.state.text.length && this.state.dataSource.getRowCount() < 1) {
        return (
          <View style={styles.noMatchesContainer}>
            <Text>No Matches found</Text>
          </View>);
    }
  }

  renderRow(foodItem) {
    if (this.props.onSelect) {
      return <FoodItem foodItem={foodItem} onSelect={() => this.props.onSelect(foodItem)} />;
    }
    return <FoodItem foodItem={foodItem} />;
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.searchInput()}
        {this.noMatches()}
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={foodItem => this.renderRow(foodItem)}
          keyboardShouldPersistTaps="always"
        />
      </View>
    );
  }
}

FoodFinder.propTypes = {
  foodList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    gi: PropTypes.number.isRequired
  })),
  searchHasFocus: PropTypes.bool,
  autoFocus: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default FoodFinder;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  searchContainer: {
    backgroundColor: colors.light,
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 5
  },
  iconStyle: {
    marginLeft: 10,
    marginRight: 15,
  },
  clearContainer: {
    flexDirection: 'row',
  },
  searchInput: {
    height: 60,
    paddingLeft: 10,
    fontSize: 18,
    flex: 20,
  },
  noMatchesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
