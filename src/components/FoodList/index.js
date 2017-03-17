import { connect } from 'react-redux';

import { foodListByCategory } from '../../reducers';

import FoodList from './component';

const mapStateToProps = (state, props) => ({
    foodList: foodListByCategory(state, props.category),
});

export default connect(mapStateToProps)(FoodList);
