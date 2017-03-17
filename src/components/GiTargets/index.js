import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { targets } from '../../reducers';
import { setGiTarget } from '../../actions';
import GiTargets from './component';

const mapStateToProps = (state) => ({
  targets: targets(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setGiTarget }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GiTargets);
