import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlice.js";
import boardsReducer from "./features/boards/boardsSlice.js";
// import createBoardModalReducer from "./features/modals/createBoardModalSlice.js";
// import createCardModalReducer from "./features/modals/createCardModalSlice.js";
import needHelpModalReducer from "./features/modals/needHelpModal/slice";
// import createColumnModalReducer from "./features/modals/createColumnModalSlice.js";
import themeReducer from "./features/theme/themeSlice.js";
import userReducer from "./features/user/userSlice.js";
import { boardReducer } from "./features/boardss/slice.js";

const authPersistConfig = {
  key: "authSlice",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  board: boardReducer,
  auth: persistedAuthReducer,
  boards: boardsReducer,
  needHelpModal: needHelpModalReducer,
  // createBoardModal: createBoardModalReducer,
  // createCardModal: createCardModalReducer,
  // createColumnModal: createColumnModalReducer,
  theme: themeReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
