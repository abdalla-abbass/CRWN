import {
    FETCH_COLLECTION_START,
    FETCH_COLLECTION_SUCCESS,
    FETCH_COLLECTION_FAILED,
} from "./shopActionTypes";
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";

export const fetchCollectionsStart = () => {
    return {
        type: FETCH_COLLECTION_START,
    };
};

export const fetchCollectionsSuccess = (collectionMap) => {
    return {
        type: FETCH_COLLECTION_SUCCESS,
        payload: collectionMap,
    };
};

export const fetchCollectionsFailed = (errorMessage) => {
    return {
        type: FETCH_COLLECTION_FAILED,
        payload: errorMessage,
    };
};

export const fetchCollectionsStartAsync = () => (dispatch) => {
    const collectionsRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionsRef
        .get()
        .then((snapshot) => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        })
        .catch((error) => {
            dispatch(fetchCollectionsFailed(error));
        });
};
