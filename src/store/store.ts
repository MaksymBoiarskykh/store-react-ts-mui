import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { basketProductsReducer } from "./reducers/basketProducts/basketProductsSlice";
import { sidebarReducer } from "./reducers/sidebar/sidebarSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { productsApi } from "./reducers/api/productsApi";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  basketProductsReducer,
  sidebarReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
