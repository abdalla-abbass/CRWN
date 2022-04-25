import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB-g0CfgCVsUXCkjRKv_btPVUjgKV73m98",
    authDomain: "crwn-db-25a7f.firebaseapp.com",
    databaseURL: "https://crwn-db-25a7f-default-rtdb.firebaseio.com",
    projectId: "crwn-db-25a7f",
    storageBucket: "crwn-db-25a7f.appspot.com",
    messagingSenderId: "1017435971529",
    appId: "1:1017435971529:web:512e18625399e99beb1218",
    measurementId: "G-PLRRGZD05V",
};
firebase.initializeApp(config);

/*   Authentication   */
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

/*   FireStore   */

/* store user auth */
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    const ReferenceObj = await firestore.doc(`users/${userAuth.uid}`);

    const snapShotObj = await ReferenceObj.get();

    if (!snapShotObj.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await ReferenceObj.set({
                displayName,
                email,
                createAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error createing user", error.message);
        }
    }
    return ReferenceObj;
};

/* Add Collection and document to user */
// export const addCollectionAndDocuments = async (
//     collectionKey,
//     objectsToAdd
// ) => {
//     console.log("hello");
//     const collectionRef = firestore.collection(collectionKey);
//     const batch = firestore.batch();
//     objectsToAdd.forEach((obj) => {
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef, obj);
//     });
//     return await batch.commit();
// };

/* Testing */
// const collectionRef = firestore.collection("users");
// console.log(collectionRef);

// const test = async () => {
//     const collectionSnapshot = await collectionRef.get();
//     console.log(collectionSnapshot);
//     const docsData = await collectionSnapshot.docs.map((doc) =>
//         console.log(doc.data())
//     );
// };
// test();
/* Testing */
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export default firebase;
