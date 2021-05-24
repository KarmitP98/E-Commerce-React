import ShopActionType from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActionType.FETCH_COLLECTIONS_START
});

// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart())
//     collectionRef.get()
//       .then(async snapshot => {
//         const collectionMap = convertCollectionsSnapShotToMap(snapshot);
//         // updateCollections(collectionMap);
//         dispatch(fetchCollectionsSuccess(collectionMap))
//         this.setState({loading: false})
//       })
//       .catch(error => dispatch(fetchCollectionsFailure(error.message)))
//   }
// }


export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})


export const fetchCollectionsFailure = (message) => ({
  type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
  payload: message
})
