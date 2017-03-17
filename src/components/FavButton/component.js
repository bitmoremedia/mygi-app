import React, { Component, PropTypes } from 'react';

import { Container, Button, StyledIcon } from './styled-components';

class FavButton extends Component {

  constructor(props) {
    super(props);
    this.toggleFav = this.toggleFav.bind(this);
  }

  icon() {
    const { isFav } = this.props;
    if (isFav) {
      return (
        <StyledIcon name="ios-heart" size={30} />
      );
    }
    return (
      <StyledIcon name="ios-heart-outline" size={30} />
    );
  }

  toggleFav() {
    if (this.props.isFav) {
      this.props.removeFavourite(this.props.id);
    } else {
      this.props.addFavourite(this.props.id);
    }
  }

  render() {
    return (
      <Container>
        <Button
          onPress={this.toggleFav}
        >
          {this.icon()}
        </Button>
      </Container>
    );
  }
}

FavButton.propTypes = {
  id: PropTypes.string.isRequired,
  isFav: PropTypes.bool.isRequired,
  addFavourite: PropTypes.func.isRequired,
  removeFavourite: PropTypes.func.isRequired,
};

export default FavButton;
