import { connect } from 'react-redux';

import { meals, targets, firstWeek } from '../../reducers';

import TimeLine from './component';

const mapStateToProps = (state) => ({
    firstWeek: firstWeek(state),
    meals: meals(state),
    targets: targets(state),
});

export default connect(mapStateToProps)(TimeLine);
