import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import * as colors from '../config/colors';

import { favouriteItems } from '../reducers';
import { NAV_STYLES } from '../config';

import TextDisplay from '../components/common/TextDisplay';
import CustomButton from '../components/common/Button';
import NavButton from '../components/common/NavButton';
import Favourites from '../components/Favourites';

class FavouritesScreen extends Component {
  static navigationOptions = {
    title: 'Favourites',
    header: ({ state, setParams }) => {
      let right = <NavButton title="edit" onPress={() => setParams({ mode: 'edit-favs' })} />;
      if (state.params && state.params.mode === 'edit-favs') {
        right = <NavButton title="done" onPress={() => setParams({ mode: '' })} />;
      }
      return {
        right,
        ...NAV_STYLES
      };
    },
  }

  noFavourites() {
    return (
      <View style={styles.noFavscontainer}>
        <View>
          <TextDisplay center main>You have no favourites!</TextDisplay>
          <TextDisplay center>Pick some from the food list</TextDisplay>
          <CustomButton
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('FoodList');
            }}
          >Go To Food List</CustomButton>
        </View>
      </View>
    );
  }

  render() {
    const { state } = this.props.navigation;
    const isEditing = !!(state.params && state.params.mode === 'edit-favs');
    if (!this.props.favouriteItems.length) {
      return (
        this.noFavourites()
      );
    }
    return <Favourites editing={isEditing} />;
  }
}

const mapStateToProps = (state) => ({
    favouriteItems: favouriteItems(state),
});

export default connect(mapStateToProps)(FavouritesScreen);

const styles = StyleSheet.create({
  noFavscontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.appBackground,
  },
  button: {
    marginTop: 20,
  }
});
