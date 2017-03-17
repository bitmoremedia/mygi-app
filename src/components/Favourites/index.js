import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { favouriteItems } from '../../reducers';
import { removeFavourite } from '../../actions';

import Favourites from './component';

const mapStateToProps = (state) => ({
    favouriteItems: favouriteItems(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ removeFavourite }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
