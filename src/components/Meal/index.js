import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { mealsForWeek } from '../../reducers';
import { updateWeeklyMealData } from '../../actions';
import Meal from './component';

const mapStateToProps = (state, props) => ({
  mealsForWeek: mealsForWeek(state, props.start),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateWeeklyMealData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Meal);
