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
// import needHelpModalReducer from "./features/modals/needHelpModalSlice.js";
// import createColumnModalReducer from "./features/modals/createColumnModalSlice.js";
// import themeReducer from "./features/theme/themeSlice.js";
// import userProfileReducer from "./features/userProfile/userProfileSlice.js";

const authPersistConfig = {
  key: "authSlice",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  // theme: themeReducer,
  // userProfile: userProfileReducer,
  boards: boardsReducer,
  // createBoardModal: createBoardModalReducer,
  // needHelpModal: needHelpModalReducer,
  // createColumnModal: createColumnModalReducer,
  // createCardModal: createCardModalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
