import { connect } from 'react-redux';

import FoodFinder from './component';

const mapStateToProps = (state) => ({
  foodList: state.foodList.allItems,
});

export default connect(mapStateToProps)(FoodFinder);
