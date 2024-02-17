// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer,
});





// const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
//   Boolean
// );

// // const composeEnhancer =
// //   (process.env.NODE_ENV !== "production" &&
// //     window &&
// //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
// //   compose;

// // const persistConfig = {
// //   key: "root",
// //   storage,
// //   blacklist: ["user"],
// // };

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(middleWares),
// });

// // export const persistor = persistStore(store);
