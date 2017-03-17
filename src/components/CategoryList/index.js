import { connect } from 'react-redux';

import { categoryList } from '../../reducers';

import FoodList from './component';

const mapStateToProps = (state) => ({
    categoryList: categoryList(state),
});

export default connect(mapStateToProps)(FoodList);
