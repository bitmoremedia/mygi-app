import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSortOrder, setTypesToDisplay, setGiRange } from '../../actions';
import DisplaySettings from './component';

const mapStateToProps = (state) => ({
  sortOrder: state.displaySettings.sortOrder,
  typesToDisplay: state.displaySettings.typesToDisplay,
  giRange: state.displaySettings.giRange,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setSortOrder, setTypesToDisplay, setGiRange }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySettings);
