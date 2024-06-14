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
// import userProfileReducer from "./features/userProfile/userProfileSlice.js";

const authPersistConfig = {
  key: "authSlice",
  storage,
  whitelist: ["token", "theme"],
};

const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: ["theme"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  boards: boardsReducer,
  needHelpModal: needHelpModalReducer,
  // createBoardModal: createBoardModalReducer,
  // createCardModal: createCardModalReducer,
  // createColumnModal: createColumnModalReducer,
  theme: persistedThemeReducer,
  // userProfile: userProfileReducer,
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

export const selectTheme = (state) => state.auth.theme;