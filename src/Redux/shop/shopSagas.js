// export const fetchCollectionsStartAsync = () => (dispatch) => {
//     const collectionsRef = firestore.collection("collections");
//     dispatch(fetchCollectionsStart());
//     collectionsRef
//         .get()
//         .then((snapshot) => {
//             const collectionMap = convertCollectionsSnapshotToMap(snapshot);
//             dispatch(fetchCollectionsSuccess(collectionMap));
//         })
//         .catch((error) => {
//             dispatch(fetchCollectionsFailed(error));
//         });
// };
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";
import { takeEvery } from "redux-saga/effects";
import {
    FETCH_COLLECTION_START,
    FETCH_COLLECTION_SUCCESS,
    FETCH_COLLECTION_FAILED,
} from "./shopActionTypes";
import { fetchCollectionsSuccess, fetchCollectionsFailed } from "./shopActions";

export function* fetchCollectionsStartAsync() {
    yield console.log("I am Fired");
}
export function* fetchCollectionsStart() {
    yield takeEvery(FETCH_COLLECTION_START, fetchCollectionsStartAsync);
}
