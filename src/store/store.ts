import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./reducers/products/productsSlice";
import { basketProductsReducer } from "./reducers/basketProducts/basketProductsSlice";
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

const persistConfig = {
  key: "root",
  storage,
  blackList: [productsReducer.name, basketProductsReducer.name],
};

const rootReducer = combineReducers({ productsReducer, basketProductsReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// типы для кастомных useDispatch, useSelector
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
