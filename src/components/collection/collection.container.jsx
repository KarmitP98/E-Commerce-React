import {connect} from 'react-redux';
import {compose} from 'redux'

import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";
import SpinnerComponent from "../spinner/spinner.component";
import Collection from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  SpinnerComponent
)(Collection)

export default CollectionContainer
