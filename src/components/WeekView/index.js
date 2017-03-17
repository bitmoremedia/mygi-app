import { connect } from 'react-redux';

import { mealsForWeek } from '../../reducers';

import WeekView from './component';

const mapStateToProps = (state, props) => ({
    mealsForWeek: mealsForWeek(state, props.start),
});

export default connect(mapStateToProps)(WeekView);
