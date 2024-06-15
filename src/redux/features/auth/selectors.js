export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectTheme = state => state.theme.theme;