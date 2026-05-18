import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
  isAuth: false,
  userRoll: 'customer',
  onbording:false,
  language: 'en',
  SetUpProfileDone: false,
  setOnboardingCafeDiscovery:false,

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    dispatchToken: (state, action) => {
      state.token = action.payload;
    },
        dispatchCafeDiscovery: (state, action) => {
      state.setOnboardingCafeDiscovery = action.payload;
    },
    dispatchUser: (state, action) => {
      state.user = action.payload;
    },
    dispatchisAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    dispatchUserRoll: (state, action) => {
      state.userRoll = action.payload;
    },
    dispatchOnbording: (state, action) => {
      state.onbording = action.payload;
    },
    dispatchLanguage: (state, action) => {
      state.language = action.payload;
    },
    dispatchSetupProfile: (state, action) => {
      state.SetUpProfileDone = action.payload;
    },
    dispatchLogout: () => {
      return initialState;
    },
  },
});

export const {
  dispatchToken,
  dispatchUserRoll,
  dispatchisAuth,
  dispatchUser,
  dispatchLogout,
  dispatchOnbording,
  dispatchLanguage,
  dispatchSetupProfile,
  dispatchCafeDiscovery
} = userSlice.actions;

export default userSlice.reducer;
