import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
// import { fetchCollectionsStart } from "../Redux/shop/shopSagas";
// import createSagaMiddleware from "redux-saga";
// const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run(fetchCollectionsStart);

const middlewares = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
