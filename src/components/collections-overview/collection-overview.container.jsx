import {connect} from 'react-redux';
import {compose} from 'redux'

import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selector";
import CollectionsOverview from "./collections-overview.component";
import SpinnerComponent from "../spinner/spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  SpinnerComponent
)(CollectionsOverview)

export default CollectionsOverviewContainer


