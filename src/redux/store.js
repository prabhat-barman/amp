// import { createStore, applyMiddleware, compose } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import logger from "redux-logger";
// import storage from "redux-persist/lib/storage";
// import { thunk } from "redux-thunk";

// import rootReducer from "./rootReducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk)),
//   applyMiddleware(logger)
// );
// let persistor = persistStore(store);

// export { store, persistor };

// import { createStore, applyMiddleware, compose } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import logger from "redux-logger";
// import storage from "redux-persist/lib/storage";
// import { thunk } from "redux-thunk";

// import rootReducer from "./rootReducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk)),
//   applyMiddleware(logger)
// );
// let persistor = persistStore(store);

// export { store, persistor };


import {  applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import { legacy_createStore as createStore} from 'redux'

import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger),
  // other store enhancers if any
);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
