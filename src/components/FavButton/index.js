import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFavourite, removeFavourite } from '../../actions';
import { isFavourite } from '../../reducers';
import FavButton from './component';

const mapStateToProps = (state, thisProps) => ({
  isFav: isFavourite(state, thisProps.id)
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addFavourite, removeFavourite }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FavButton);
