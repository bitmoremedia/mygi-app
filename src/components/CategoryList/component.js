import React, { Component, PropTypes } from 'react';
import { Dimensions, Platform, } from 'react-native';

import { CATEGORY_IMAGES } from '../../config';

import {
  Container,
  Grid,
  Row,
  Col,
  ItemContainer,
  Item,
  ItemImage,
  ItemTitle,
} from './styled-components';

export default class CategoryList extends Component {

  renderTile(item, goToFoodCategory, imageDimensions) {
    const imagePath = CATEGORY_IMAGES[item.category];
    const onPress = () => {
      goToFoodCategory(item.category);
    };
    return (
      <ItemContainer
        key={item.category}
        onPress={onPress}
        underlayColor="#FFFFFF"
      >
        <Item>
          <ItemTitle>
              {item.category.toUpperCase()}
          </ItemTitle>
          <ItemImage source={imagePath} style={imageDimensions} />
        </Item>
      </ItemContainer>
    );
  }

  render() {
    const { categoryList, goToFoodList } = this.props;
    const { height, width } = Dimensions.get('window');

    const heightOffset = Platform.OS === 'ios' ? 104 : 120;
    const containerPadding = 5;
    const containerDimensions = {
      height: height - heightOffset,
      width,
      padding: containerPadding,
    };

    const rowDimensions = {
      height: (containerDimensions.height / 4) - (containerPadding * 1.2)
    };
    const columnDimensions = {
      width: (width / 2) - (containerPadding * 1.5)
    };
    const imageDimensions = {
      width: columnDimensions.width
    };

    const gridItems = [];
    categoryList.forEach((item, index) => {
      const oddRow = !(index % 2);
      const lastItem = !(categoryList[index + 1]);
      // split items in to rows and columns (2 columns per row)
      if (oddRow && !lastItem) {
        gridItems.push(
          <Row key={`row-${index + 1}`} style={rowDimensions}>
            <Col key={item.category} style={columnDimensions}>
              {this.renderTile(item, goToFoodList, imageDimensions)}
            </Col>
            <Col key={categoryList[index + 1].category} style={columnDimensions}>
              {this.renderTile(categoryList[index + 1], goToFoodList, imageDimensions)}
            </Col>
          </Row>
        );
      }
    });

    return (
      <Container>
        <Grid style={containerDimensions}>
          {gridItems}
        </Grid>
      </Container>
    );
  }
}

CategoryList.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
  })),
  goToFoodList: PropTypes.func.isRequired
};
