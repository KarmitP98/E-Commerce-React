import {call, put, takeEvery} from "redux-saga/effects";
import ShopActionType from "./shop.types";
import {convertCollectionsSnapShotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shop.actions";

/*
 Yields are basically breakpoints in the generator functions.
 It stops executing when it reaches each yield statement
 Thus allows more control over how the SAGA is executed
 */

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    
    const snapshot = yield collectionRef.get()
    // Use Effect 'call': Use yield to give control to saga
    // call(method_name, parameters)
    const collectionsMap = yield call(convertCollectionsSnapShotToMap, snapshot)
    // 'put' is like dispatch for generator functions
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
  // collectionRef
  //   .get()
  //   .then(async snapshot => {
  //     const collectionMap = convertCollectionsSnapShotToMap(snapshot);
  //     // updateCollections(collectionMap);
  //     dispatch(fetchCollectionsSuccess(collectionMap))
  //     this.setState({loading: false})
  //   })
  //   .catch(error => dispatch(fetchCollectionsFailure(error.message)))
}


export function* fetchCollectionsStart() {
  yield takeEvery(ShopActionType.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
