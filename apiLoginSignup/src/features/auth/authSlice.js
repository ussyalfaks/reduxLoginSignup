import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile as firebaseUpdateProfile } from 'firebase/auth'; // Rename the Firebase import

// Async actions
export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await firebaseUpdateProfile(user, { displayName: name });
      return { email: user.email, name: user.displayName };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return { email: user.email, name: user.displayName };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Rename the Redux action to avoid conflict
export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile', // Updated action name
  async ({ name }, { getState, rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await firebaseUpdateProfile(user, { displayName: name }); // Use the renamed Firebase function
        return { name: user.displayName };
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => { // Use the updated action name
        state.user = { ...state.user, ...action.payload };
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
