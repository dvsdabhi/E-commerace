import { createSlice } from "@reduxjs/toolkit";
// Function to check if a token is present in local storage
const isTokenPresent = () => !!localStorage.getItem("authToken");
console.log("isTokenPresent==>>>>", isTokenPresent());
const initialState = {
  isAuth: isTokenPresent(),
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    checkAuth: (state) => {
      state.isAuth = isTokenPresent();
    },
    // setIsAuthBasedOnToken: (state, action) => {
    //   state.isAuth = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { checkAuth } = authSlice.actions;

export default authSlice.reducer;
